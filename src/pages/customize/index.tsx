import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { getGetWidgetMyWidgetsQueryKey, useGetWidgetMyWidgets, usePutWidgetMyWidgets } from 'api/api';
import { GetWidgetMyWidgetsParams, PutWidgetMyWidgetsBodyAllOfBusinessDataBodies, WidgetsMinimal } from 'api/model';
import { Button } from 'components/atoms/button';
import { InternalLink } from 'components/atoms/internal-link';
import { Loading } from 'components/atoms/loading';
import { HistoryBackButton } from 'components/atoms/history-back-button';
import { NotifyToast, SaveToast } from 'components/atoms/save-toast';
import { Text } from 'components/atoms/text';
import { ButtonContainer } from 'components/molecules/button-container';
import { DndListItem } from 'components/molecules/dnd-list-item';
import { PageHeading } from 'components/molecules/page-heading';
import { Section } from 'components/molecules/section';
import { DndItemsValue, DndListContainer } from 'components/organisms/dnd-list-container';
import { FixedControl } from 'components/organisms/fixed-control';
import { General } from 'components/templates/general';
import { ROUTES } from 'consts/routes';
import update from 'immutability-helper';
import { generateRequestBodyWithCommonRequest } from 'libs/utils';
import React, { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useIsFetching, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelector';
import { InferType, object } from 'yup';

interface FormValues {
  widget?: number[];
}

const validationSchema = object().shape({});

type formType = InferType<typeof validationSchema> & FormValues;

let initialValues: number[] | undefined = [];

const Customize: React.FC = () => {
  const {
    userInfo: { employeeCode },
  } = useSelector(authSelector);
  const [isFixedControlVisible, setFixedControlVisible] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const myWidgetsParams: GetWidgetMyWidgetsParams = {
    'employee-code': employeeCode,
  };
  const getMyWidgetsQueryKey = getGetWidgetMyWidgetsQueryKey(myWidgetsParams);
  const isFetchingGetMyWidgets = useIsFetching(getMyWidgetsQueryKey);
  const getMyWidgets = useGetWidgetMyWidgets(myWidgetsParams);
  const myWidgetsData = getMyWidgets.data?.data.BusinessData.Bodies;

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const { watch, handleSubmit, setValue, getValues, control } = methods;
  watch('widget');

  useEffect(() => {
    if (!getMyWidgets.isLoading || !isFetchingGetMyWidgets) {
      initialValues = myWidgetsData?.map(data => data.WidgetId) || [];
      setValue('widget', initialValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMyWidgets.isLoading, isFetchingGetMyWidgets]);

  const handleEnd = (value: DndItemsValue[]) => {
    setValue(
      'widget',
      value.map(v => parseInt(v.id))
    );
  };

  const handleUpdate = () => {
    NotifyToast(null, () => {
      setFixedControlVisible(true);
    });
  };

  const handleRemove = (index: number) => {
    NotifyToast(null, () => {
      setFixedControlVisible(true);
    });

    const values = getValues('widget');
    setValue('widget', update(values, { $splice: [[index, 1]] }));
  };

  const handleCancel = () => {
    setFixedControlVisible(false);
    setValue('widget', initialValues);
  };

  const putMyWidget = usePutWidgetMyWidgets({
    mutation: {
      onSuccess: () => {
        NotifyToast('保存しました', () => {
          setFixedControlVisible(false);
        });

        queryClient.invalidateQueries({ queryKey: getMyWidgetsQueryKey });
      },
      onError: () => {
        // TODO: error action
      },
    },
  });

  const onSubmit: SubmitHandler<formType> = data => {
    const params = generateRequestBodyWithCommonRequest<PutWidgetMyWidgetsBodyAllOfBusinessDataBodies>({
      EmployeeCode: employeeCode,
      WidgetIds: data.widget,
    });
    putMyWidget.mutateAsync({ data: params });
  };

  const widgetValues = getValues('widget');
  const widgetLists = widgetValues?.reduce((acc: WidgetsMinimal[], cur) => {
    const wdg = myWidgetsData?.find(d => d.WidgetId === cur);
    if (wdg) {
      acc.push(wdg);
    }
    return acc;
  }, []);

  return (
    <General id="customize" className="p-customize" withFixedControl>
      <HistoryBackButton isHistoryBack>戻る</HistoryBackButton>
      <Section noPadding>
        <PageHeading
          title="ホーム画面の編集"
          actions={
            <InternalLink icon="link" href={ROUTES.TPL_01_01}>
              テンプレート変更
            </InternalLink>
          }
        />
        <Text modifiers="small" colors="gray">
          ウィジェットの表示・非表示、並び替えを行うことができます。
        </Text>
      </Section>
      <Section modifiers="v-padding">
        <Button type="button" shape="square" icon="arrow-right" href={ROUTES.WDT_02_01}>
          ウィジェットを追加
        </Button>
        <FormProvider {...methods}>
          {getMyWidgets.isLoading || isFetchingGetMyWidgets ? (
            <Loading />
          ) : (
            <DndListContainer onEnd={handleEnd} onUpdate={handleUpdate}>
              {widgetLists?.map((wdt, index) => (
                <DndListItem
                  key={wdt.WidgetId}
                  id={String(wdt.WidgetId)}
                  index={index}
                  onRemove={() => handleRemove(index)}
                >
                  {wdt.WidgetName}
                </DndListItem>
              ))}
            </DndListContainer>
          )}
        </FormProvider>
      </Section>
      <FixedControl modifiers="btn-container" isVisible={isFixedControlVisible}>
        <ButtonContainer>
          <Button type="button" size="huge" modifiers="third" onClick={handleCancel}>
            キャンセル
          </Button>
          <Button type="button" size="huge" modifiers="primary" onClick={handleSubmit(onSubmit)}>
            保存
          </Button>
        </ButtonContainer>
      </FixedControl>
      <SaveToast />
      {/* 
        set up the react-hook-form dev tool. see https://github.com/react-hook-form/devtools
        Unlike react-query's devtool, condition "process.env.NODE_ENV === 'development'" is not included in component itself. We have to add it by hand. 
       */}
      {process.env.NODE_ENV === 'development' && <DevTool control={control} placement="top-right" />}
    </General>
  );
};

export default Customize;
