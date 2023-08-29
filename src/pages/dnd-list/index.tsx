import React, { useEffect } from 'react';

import { General } from 'components/templates/general';
import { DndListContainer, DndItemsValue } from 'components/organisms/dnd-list-container';
import { FixedControl } from 'components/organisms/fixed-control';
import { ButtonContainer } from 'components/molecules/button-container';
import { Button } from 'components/atoms/button';
import { DndListItem } from 'components/molecules/dnd-list-item';
import { InferType, object } from 'yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DevTool } from '@hookform/devtools';
import update from 'immutability-helper';

const data = [
  {
    WidgetId: 1,
    WidgetName: 'aaa',
  },
  {
    WidgetId: 2,
    WidgetName: 'bbb',
  },
  {
    WidgetId: 3,
    WidgetName: 'ccc',
  },
];

interface FormValues {
  widget?: number[];
}

const validationSchema = object().shape({});

type formType = InferType<typeof validationSchema> & FormValues;

let initialValues: number[] | undefined = [];

const DndList: React.FC = () => {
  const methods = useForm<FormValues>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });
  const { watch, handleSubmit, setValue, getValues, control } = methods;

  watch();

  useEffect(() => {
    initialValues = data.map(v => v.WidgetId);
    setValue('widget', initialValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnd = (value: DndItemsValue[]) => {
    // eslint-disable-next-line no-console
    console.log('end', value);
    setValue(
      'widget',
      value.map(v => parseInt(v.id))
    );
  };
  const handleUpdate = () => {
    // eslint-disable-next-line no-console
    console.log('update');
  };
  const handleRemove = (index: number) => {
    const values = getValues('widget');
    setValue('widget', update(values, { $splice: [[index, 1]] }));
  };

  const onSubmit: SubmitHandler<formType> = data => {
    // eslint-disable-next-line no-console
    console.log('submit', data);
  };

  const handleCancel = () => {
    // eslint-disable-next-line no-console
    console.log('cancel');
    setValue('widget', initialValues);
  };

  const widgetValues = getValues('widget');
  const widgetLists = widgetValues?.reduce((acc: { WidgetId: number; WidgetName: string }[], cur) => {
    const wdg = data?.find(d => d.WidgetId === cur);
    if (wdg) {
      acc.push(wdg);
    }
    return acc;
  }, []);

  return (
    <General id="dnd-list" className="p-dnd-list">
      <FormProvider {...methods}>
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
      </FormProvider>

      <FixedControl modifiers="btn-container" isVisible={true}>
        <ButtonContainer>
          <Button type="button" size="huge" modifiers="third" onClick={handleCancel}>
            キャンセル
          </Button>
          <Button type="button" size="huge" modifiers="primary" onClick={handleSubmit(onSubmit)}>
            保存
          </Button>
        </ButtonContainer>
      </FixedControl>
      {/* 
        set up the react-hook-form dev tool. see https://github.com/react-hook-form/devtools
        Unlike react-query's devtool, condition "process.env.NODE_ENV === 'development'" is not included in component itself. We have to add it by hand. 
       */}
      {process.env.NODE_ENV === 'development' && <DevTool control={control} placement="top-right" />}
    </General>
  );
};

export default DndList;
