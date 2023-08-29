import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number, InferType } from 'yup';

import { General } from 'components/templates/general';
import { Section } from 'components/molecules/section';
import { FormField, FormFieldRow } from 'components/molecules/form-field';
import { TextField } from 'components/atoms/text-field';
import { Tag } from 'components/atoms/tag';
import { ButtonContainer } from 'components/molecules/button-container';
import { Button } from 'components/atoms/button';
import { Checkbox } from 'components/atoms/checkbox';
import { DevTool } from '@hookform/devtools';

interface FormValues {
  name: string;
  tel: number;
  email: string;
  other?: string[];
}

const validationSchema = object().shape({
  name: string().required(),
  tel: number().required(),
  email: string().required(),
});

type formType = InferType<typeof validationSchema> & FormValues;

const Form: React.FC = () => {
  const methods = useForm<FormValues>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      other: ['aaa'],
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = methods;

  const onSubmit: SubmitHandler<formType> = data => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <General id="form" className="p-form">
      <FormProvider {...methods}>
        <Section modifiers="fill-white">
          {/* NOTE: suppress HTML5 default validator such as type="email" by "noValidate" */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Section>
              <FormField label="お名前" labelAddons={<Tag>必須</Tag>} require invalidMessage={errors.name?.message}>
                <FormFieldRow>
                  <TextField type="text" {...register('name')} />
                </FormFieldRow>
              </FormField>
            </Section>
            <Section>
              <FormField label="電話番号" labelAddons={<Tag>必須</Tag>} require invalidMessage={errors.tel?.message}>
                <FormFieldRow>
                  <TextField type="tel" {...register('tel')} />
                </FormFieldRow>
              </FormField>
            </Section>
            <Section>
              <FormField
                label="メールアドレス"
                labelAddons={<Tag>必須</Tag>}
                require
                invalidMessage={errors.email?.message}
              >
                <FormFieldRow>
                  <TextField type="email" {...register('email')} />
                </FormFieldRow>
              </FormField>
            </Section>
            <Section>
              <FormField label="その他">
                <FormFieldRow>
                  <Checkbox modifiers="button" value="aaa" {...register('other')}>
                    AAA
                  </Checkbox>
                  <Checkbox modifiers="button" value="bbb" {...register('other')}>
                    BBB
                  </Checkbox>
                  <Checkbox modifiers="button" value="ccc" {...register('other')}>
                    CCC
                  </Checkbox>
                </FormFieldRow>
              </FormField>
            </Section>
            <Section className="p-footer-action">
              <ButtonContainer modifiers="veritcal">
                <Button size="huge" modifiers="third">
                  キャンセル
                </Button>
                <Button type="submit" size="huge" modifiers="primary">
                  保存
                </Button>
              </ButtonContainer>
            </Section>
          </form>
        </Section>
      </FormProvider>
      {/* 
        set up the react-hook-form dev tool. see https://github.com/react-hook-form/devtools
        Unlike react-query's devtool, condition "process.env.NODE_ENV === 'development'" is not included in component itself. We have to add it by hand. 
       */}
      {process.env.NODE_ENV === 'development' && <DevTool control={control} placement="top-right" />}
    </General>
  );
};

export default Form;
