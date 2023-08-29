import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CreateButton, CreateButtonProps } from './';

export default {
  title: 'components/atoms/CreateButton',
  component: CreateButton,
} as Meta;

const Template: Story<CreateButtonProps> = args => <CreateButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '新規作成',
};
