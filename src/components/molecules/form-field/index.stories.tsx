import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FormField, FormFieldRow, FormFieldProps } from './';
import { TextField } from 'components/atoms/text-field';
import { Tag } from 'components/atoms/tag';
import { HelpButton } from 'components/atoms/help-button';
import { Radio } from 'components/atoms/radio';

export default {
  title: 'components/molecules/FormField',
  component: FormField,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<FormFieldProps> = args => <FormField {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: '電話番号',
  children: <TextField type="tel" name="tel" defaultValue="090-1234-5678" />,
};

export const WithTagRequire = Template.bind({});
WithTagRequire.args = {
  label: <>電話番号</>,
  labelAddons: <Tag>必須</Tag>,
  children: <TextField type="tel" name="tel" defaultValue="090-1234-5678" />,
};

export const WithHelpButton = Template.bind({});
WithHelpButton.args = {
  label: <>扶養の状況</>,
  labelAddons: <HelpButton />,
  children: <TextField type="tel" name="tel" defaultValue="090-1234-5678" />,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'メールアドレス',
  invalidMessage: '半角数字のみで入力してください。',
  children: <TextField modifiers="invalid" type="emal" name="emal" defaultValue="090-1234-5678" />,
};

export const WithTwoColumn = Template.bind({});
WithTwoColumn.args = {
  label: '同居/別居',
  children: (
    <FormFieldRow columnSize="6" columnSizePC="6">
      <Radio modifiers="grey" defaultChecked={true} name="living" value="together">
        通夜と告別式
      </Radio>
      <Radio modifiers="grey" name="living" value="separated">
        別居
      </Radio>
    </FormFieldRow>
  ),
};

export const WithInstruction = Template.bind({});
WithInstruction.args = {
  label: '通夜/告別式の有無について',
  instruction: '終了している場合は、なしを選択してください。',
  children: (
    <FormFieldRow columnSize="6" columnSizePC="6">
      <Radio modifiers="grey" defaultChecked={true} name="ceremony" value="1">
        通夜と告別式
      </Radio>
      <Radio modifiers="grey" name="ceremony" value="2">
        告別式のみ
      </Radio>
      <Radio modifiers="grey" name="ceremony" value="3">
        なし
      </Radio>
    </FormFieldRow>
  ),
};
