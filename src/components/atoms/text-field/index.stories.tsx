import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextField, TextFieldProps } from './';

export default {
  title: 'components/atoms/TextField',
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = args => <TextField {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  type: 'tel',
  name: 'tel',
  defaultValue: '090-1234-5678',
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'tel',
  name: 'tel',
  defaultValue: '090-1234-5678',
  disabled: true,
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  name: 'name',
  defaultValue: '山田',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  name: 'email',
  defaultValue: 'dummy@aeon.co.jp',
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
  name: 'search',
  defaultValue: '北海道 吉田',
};

export const WithError = Template.bind({});
WithError.args = {
  modifiers: 'invalid',
  type: 'tel',
  name: 'tel',
  defaultValue: '090-1234-5678',
};

export const Textarea = Template.bind({});
Textarea.args = {
  tag: 'textarea',
  name: 'content',
  placeholder: '否認理由などをご記入ください。',
};

export const TextareaDisabled = Template.bind({});
TextareaDisabled.args = {
  tag: 'textarea',
  name: 'content',
  placeholder: '否認理由などをご記入ください。',
  disabled: true,
};
