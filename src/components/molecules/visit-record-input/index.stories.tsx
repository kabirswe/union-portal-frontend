import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { VisitRecordInput, VisitRecordInputProps } from './';
import { FormField } from 'components/molecules/form-field';
import { TextField } from 'components/atoms/text-field/index';

export default {
  title: 'components/molecules/VisitRecordInput',
  component: VisitRecordInput,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<VisitRecordInputProps> = args => <VisitRecordInput {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: '訪問先 1',
  handleCloseClick: action('handleCloseClick'),
  children: [
    <FormField key="1" label="訪問先">
      <TextField type="text" name="companyName" placeholder="会社名、事務所名、店舗名など" />
    </FormField>,
    <FormField key="2" label="用件">
      <TextField type="text" name="companyName" placeholder="業務、社外教育、社内教育など" />
    </FormField>,
  ],
};
