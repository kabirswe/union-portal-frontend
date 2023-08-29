import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  getGetWidgetMyWidgetsQueryKey,
  getGetWidgetWidgetsQueryKey,
  useGetWidgetMyWidgets,
  useGetWidgetWidgets,
  usePutWidgetMyWidgets,
} from 'api/api';
import {
  GetWidgetMyWidgetsParams,
  GetWidgetWidgetsParams,
  PutWidgetMyWidgetsBodyAllOfBusinessDataBodies,
} from 'api/model';
import { Button } from 'components/atoms/button';
import { Checkbox } from 'components/atoms/checkbox';
import { Loading } from 'components/atoms/loading';
import { HistoryBackButton } from 'components/atoms/history-back-button';
import { NotifyToast, SaveToast } from 'components/atoms/save-toast';
import { Text } from 'components/atoms/text';
import { ButtonContainer } from 'components/molecules/button-container';
import { CheckboxList } from 'components/molecules/checkbox-list';
import { PageHeading } from 'components/molecules/page-heading';
import { SearchBar } from 'components/molecules/search-bar';
import { Section } from 'components/molecules/section';
import { FixedControl } from 'components/organisms/fixed-control';
import { General } from 'components/templates/general';
import { generateRequestBodyWithCommonRequest } from 'libs/utils';
import _ from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useIsFetching, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelector';
import { InferType, object } from 'yup';
import escapeStringRegexp from 'escape-string-regexp';

interface FormValues {
  widget?: number[];
}

const validationSchema = object().shape({});

type formType = InferType<typeof validationSchema> & FormValues;

let initialValues: number[] | undefined = [];

const Add: React.FC = () => {
  const {
    userInfo: { employeeCode },
  } = useSelector(authSelector);
  const checkBoxRefs = useRef<HTMLInputElement[]>([]);
  const [searchKeywords, updateSearchKeywords] = React.useState('');
  const [isFixedControlVisible, setFixedControlVisible] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const widgetsParams: GetWidgetWidgetsParams = {
    'employee-code': employeeCode,
  };
  const myWidgetsParams: GetWidgetMyWidgetsParams = {
    'employee-code': employeeCode,
  };
  const getWidgets = useGetWidgetWidgets(widgetsParams);
  const getMyWidgets = useGetWidgetMyWidgets(myWidgetsParams);
  const getWidgetsQueryKey = getGetWidgetWidgetsQueryKey(widgetsParams);
  const getMytWidgetsQueryKey = getGetWidgetMyWidgetsQueryKey(myWidgetsParams);
  const isFetchingGetWidgets = useIsFetching(getWidgetsQueryKey);
  const isFetchingGetMyWidgets = useIsFetching(getMytWidgetsQueryKey);
  const myWidgetsData = getMyWidgets.data?.data.BusinessData.Bodies;

  const methods = useForm<FormValues>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const { register, unregister, setValue, getValues, watch, handleSubmit, control } = methods;
  const watchWidget = watch('widget');

  useEffect(() => {
    if (!getMyWidgets.isLoading || !isFetchingGetMyWidgets) {
      initialValues = myWidgetsData?.map(data => data.WidgetId) || [];
      unregister('widget');
      register('widget');
      setValue('widget', initialValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMyWidgets.isLoading, isFetchingGetMyWidgets]);

  useEffect(() => {
    const isChanged = !_.isEqual(_.sortBy(initialValues), _.sortBy(watchWidget?.map(Number)));
    if (isChanged) {
      NotifyToast(null, () => {
        setFixedControlVisible(true);
      });
    } else {
      setFixedControlVisible(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues, watchWidget]);

  const handleChangeKeywords = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    updateSearchKeywords(e.target.value);
  };

  const handleChangeWidget = (e: React.MouseEvent<HTMLInputElement>) => {
    const checked = (e.target as HTMLInputElement).checked;
    const value = Number((e.target as HTMLInputElement).value);
    const widgetValues = getValues('widget');
    if (checked) {
      setValue('widget', widgetValues ? [...widgetValues, value] : [value]);
    } else {
      setValue('widget', widgetValues && [...widgetValues].filter(v => v !== value));
    }
  };

  const handleCancel = useCallback(() => {
    checkBoxRefs.current?.map(elm => {
      elm.checked = Boolean(initialValues?.some(v => v === Number(elm.value)));
    });
    setValue('widget', initialValues);
    setFixedControlVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const putWidget = usePutWidgetMyWidgets({
    mutation: {
      onSuccess: () => {
        NotifyToast('保存しました', () => {
          setFixedControlVisible(false);
        });

        document.querySelector<HTMLButtonElement>('.m-search-bar__button-close')?.click();

        queryClient.invalidateQueries({ queryKey: getWidgetsQueryKey });
        queryClient.invalidateQueries({ queryKey: getMytWidgetsQueryKey });
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
    putWidget.mutateAsync({ data: params });
  };

  const isLoading = getWidgets.isLoading || getMyWidgets.isLoading;
  const isFetching = isFetchingGetWidgets || isFetchingGetMyWidgets;

  const escapedText = escapeStringRegexp(searchKeywords.toLowerCase());
  const widgetLists = getWidgets.data?.data.BusinessData.Bodies.filter(widget =>
    new RegExp(escapedText).test(widget.WidgetName.toLowerCase())
  );

  return (
    <General id="customize-add" className="p-customize-add" withFixedControl>
      <HistoryBackButton isHistoryBack>戻る</HistoryBackButton>
      <Section noPadding>
        <SearchBar
          handleCloseClick={() => updateSearchKeywords('')}
          textFieldProps={{
            onChange: handleChangeKeywords,
            onBlur: handleChangeKeywords,
          }}
        />
        <PageHeading title="ウィジェットを追加" />
        <Text modifiers="small" colors="gray">
          ウィジェットの表示・非表示の設定を行うことができます。
        </Text>
      </Section>
      <Section modifiers="v-padding">
        <FormProvider {...methods}>
          {isLoading || isFetching ? (
            <Loading />
          ) : (
            <CheckboxList>
              {widgetLists?.map((widget, index) => (
                <Checkbox
                  key={widget.WidgetId}
                  name="widget"
                  value={widget.WidgetId}
                  defaultChecked={getValues('widget')?.some(v => v === widget.WidgetId)}
                  onClick={handleChangeWidget}
                  ref={elm => {
                    if (elm) checkBoxRefs.current[index] = elm;
                  }}
                >
                  {widget.WidgetName}
                </Checkbox>
              ))}
            </CheckboxList>
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

export default Add;
