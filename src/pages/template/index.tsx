import {
  getBusinessmenuLinks,
  getBusinessmenuMymenuLinks,
  getGetBusinessmenuCategoriesQueryKey,
  getGetBusinessmenuLinksQueryKey,
  getGetBusinessmenuMymenuLinksQueryKey,
  getGetWidgetMyWidgetsQueryKey,
  getGetWidgetWidgetsQueryKey,
  getWidgetMyWidgets,
  getWidgetWidgets,
  useGetTemplates,
  useGetWidgetMyWidgets,
  usePutBusinessmenuMymenuLinks,
  usePutWidgetMyWidgets,
} from 'api/api';
import {
  MenuListResponse,
  MyWidgetsListResponse,
  PutBusinessmenuMymenuLinksBodyAllOfBusinessDataBodies,
  PutWidgetMyWidgetsBodyAllOfBusinessDataBodies,
  TemplatesMinimal,
} from 'api/model';
import { AxiosResponse } from 'axios';
import { Button } from 'components/atoms/button';
import { Loading } from 'components/atoms/loading';
import { HistoryBackButton } from 'components/atoms/history-back-button';
import { NumberedButton } from 'components/atoms/numbered-button';
import { Text } from 'components/atoms/text';
import { ButtonContainer } from 'components/molecules/button-container';
import { PageHeading } from 'components/molecules/page-heading';
import { Section } from 'components/molecules/section';
import { Grid, GridCell } from 'components/organisms/grid';
import { Modal } from 'components/organisms/modal';
import { General } from 'components/templates/general';
import { SimplePage } from 'components/templates/sinple-page';
import { ROUTES } from 'consts/routes';
import { generateRequestBodyWithCommonRequest, isInitialTemplateSettingFinished } from 'libs/utils';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authSelector } from 'redux/auth/authSelector';

/**
 * 1.以下を並列で実行
 *   1-1. templates一覧を取得する
 *   1-2. mywidget一覧を取得する
 * 2. 1-2の取得結果が0件だった場合、初期設定とみなして、isNavigation={false}で画面を表示。1件以上の場合trueで表示
 * 3. 1-1の結果をベースにテンプレート一覧を描画する
 * 4. 3のうち1つをクリックすると、確認ダイアログ表示
 * 5. 確認ダイアログでOKをおす。以下の処理を並列で実行する
 *   5-1. mywidget一覧を、4で選んだtemplateIdを指定してリクエスト。
 *   5-2. mymenu-links一覧を、4で選んだtemplateIdを指定してリクエスト。
 * 6. 5が終わったら、以下の処理を並列で実行する
 *   6-1. 5-1の取得結果を、mywidgetとしてPUTする
 *   6-2. 5-2の取得結果を、mymenu-linksとしてPUTする
 * 　6-3. (要調査)PUTした際に、GET側のqueryのcache削除が必要かもしれない
 * 7. 6が終わったら、ホーム画面に遷移する
 */
interface TemplateWithIndex extends TemplatesMinimal {
  index?: number;
}

const Template: React.FC = () => {
  const history = useHistory();
  const {
    userInfo: { employeeCode },
  } = useSelector(authSelector);
  const queryClient = useQueryClient();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedTemplateInfo, setSelectedTemplate] = useState<TemplateWithIndex>();

  const myDataParams = {
    'employee-code': employeeCode,
  };
  const getWidgetsQueryKey = getGetWidgetWidgetsQueryKey(myDataParams);
  const getMytWidgetsQueryKey = getGetWidgetMyWidgetsQueryKey(myDataParams);
  const getCategoriesQueryKey = getGetBusinessmenuCategoriesQueryKey(myDataParams);
  const getMenuLinksQueryKey = getGetBusinessmenuLinksQueryKey(myDataParams);
  const getMyMenuLinksQueryKey = getGetBusinessmenuMymenuLinksQueryKey(myDataParams);
  const getMyWidgetCurrentSetting = useGetWidgetMyWidgets(myDataParams);
  const getTemplatesData = useGetTemplates(myDataParams);

  const putWidget = usePutWidgetMyWidgets({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getWidgetsQueryKey });
        queryClient.invalidateQueries({ queryKey: getMytWidgetsQueryKey });
      },
      onError: () => {
        // TODO: error action
      },
    },
  });
  const putBusinessMenu = usePutBusinessmenuMymenuLinks({
    mutation: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: getCategoriesQueryKey });
        queryClient.invalidateQueries({ queryKey: getMenuLinksQueryKey });
        queryClient.invalidateQueries({ queryKey: getMyMenuLinksQueryKey });
      },
      onError: () => {
        // TODO: error action
      },
    },
  });

  // テンプレートをもとにmywidget, mymenulinks登録
  const handleSubmitOnModal = async () => {
    const promisesToGetWidgetsAndMyMenusToSet: [
      Promise<AxiosResponse<MyWidgetsListResponse>>,
      Promise<AxiosResponse<MenuListResponse>>
    ] =
      selectedTemplateInfo && selectedTemplateInfo.TemplateId
        ? [
            getWidgetMyWidgets({
              ...myDataParams,
              'template-id': selectedTemplateInfo?.TemplateId,
            }),
            getBusinessmenuMymenuLinks({
              ...myDataParams,
              'template-id': selectedTemplateInfo?.TemplateId,
            }),
          ]
        : [
            getWidgetWidgets({
              ...myDataParams,
            }),
            getBusinessmenuLinks({
              ...myDataParams,
            }),
          ];
    await Promise.all(promisesToGetWidgetsAndMyMenusToSet)
      .then(responses => {
        // eslint-disable-next-line no-console
        console.log(responses);

        const paramsOfMyWidgets = generateRequestBodyWithCommonRequest<PutWidgetMyWidgetsBodyAllOfBusinessDataBodies>({
          EmployeeCode: employeeCode,
          WidgetIds: responses[0].data.BusinessData.Bodies.map(bod => bod.WidgetId),
        });
        const paramsOfMyMenu =
          generateRequestBodyWithCommonRequest<PutBusinessmenuMymenuLinksBodyAllOfBusinessDataBodies>({
            EmployeeCode: employeeCode,
            LinkCodes: responses[1].data.BusinessData.Bodies.map(bod => bod.LinkCode),
          });

        return Promise.all([
          putWidget.mutateAsync({ data: paramsOfMyWidgets }),
          putBusinessMenu.mutateAsync({ data: paramsOfMyMenu }),
        ]);
      })
      .catch(() => {
        // TODO: add error handling
      });
    setIsModalOpened(false);
    history.push(ROUTES.HOM_01_01);
  };

  const handleDialogCloseButtonClick = () => {
    setIsModalOpened(false);
  };

  const handleTemplateButtonClick = (selectedTemplate?: TemplatesMinimal, index?: number) => {
    let newTemplate: typeof selectedTemplateInfo;
    if (selectedTemplate && typeof index === 'number') {
      newTemplate = {
        ...selectedTemplate,
        index,
      };
    }
    setSelectedTemplate(newTemplate);
    setIsModalOpened(true);
  };

  // check selectedTemplateInfo and it's object length
  const isSetTemplate = selectedTemplateInfo && Object.keys(selectedTemplateInfo).length;

  const element = (
    <>
      <Section noPadding>
        <PageHeading title="テンプレートの選択" />
        <Text modifiers="small" colors="gray">
          業務内容に合わせてホーム画面のテンプレートをお選びください。
          <br />
          ホーム画面の編集はいつでも可能です。
        </Text>
      </Section>
      <Section modifiers="v-padding">
        {getTemplatesData.isLoading ? (
          <Loading />
        ) : (
          <Grid>
            {getTemplatesData.data?.data.BusinessData.Bodies.map((template, index) => {
              const number = index + 1;
              return (
                <GridCell key={template.TemplateId} colPC="4" colSP="12">
                  <NumberedButton
                    onClick={() => handleTemplateButtonClick(template, number)}
                    number={String(number)}
                    title={template.TemplateName}
                  >
                    {template.TemplateExplanatoryNote}
                  </NumberedButton>
                </GridCell>
              );
            })}
          </Grid>
        )}
      </Section>
      <Section className="p-footer-action">
        <ButtonContainer>
          <Button onClick={() => handleTemplateButtonClick()} shape="square" modifiers="transparent">
            テンプレートを設定しない
          </Button>
        </ButtonContainer>
      </Section>
    </>
  );

  return (
    <>
      {getMyWidgetCurrentSetting.isFetching ? (
        <Loading overlay />
      ) : isInitialTemplateSettingFinished(getMyWidgetCurrentSetting.data) ? (
        <General id="template" className="p-template">
          <HistoryBackButton isHistoryBack>戻る</HistoryBackButton>
          {element}
        </General>
      ) : (
        <SimplePage id="template" className="p-template">
          {element}
        </SimplePage>
      )}

      <Modal
        modifiers="dialog"
        onCloseRequested={handleDialogCloseButtonClick}
        opened={isModalOpened}
        title={
          isSetTemplate ? (
            'テンプレートを確定しますか？'
          ) : (
            <>
              テンプレートを設定せずに
              <br />
              利用開始しますか？
            </>
          )
        }
        footer={
          <>
            <Button onClick={handleDialogCloseButtonClick} size="large" modifiers="third">
              キャンセル
            </Button>
            <Button onClick={handleSubmitOnModal} size="large" modifiers="primary">
              確定する
            </Button>
          </>
        }
      >
        {isSetTemplate ? (
          <>
            <Text modifiers="small" align="center">
              テンプレートの設定はいつでも可能です。
            </Text>
            <NumberedButton
              modifiers="selected"
              number={String(selectedTemplateInfo?.index)}
              title={selectedTemplateInfo?.TemplateName}
            />
          </>
        ) : (
          <Text modifiers="small" align="center">
            ホーム画面の編集からホーム画面をカスタマイズすることができます。 テンプレートの設定はいつでも可能です。
          </Text>
        )}
      </Modal>
    </>
  );
};

export default Template;
