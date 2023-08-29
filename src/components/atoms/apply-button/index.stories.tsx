import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ApplyButton, ApplyButtonProps } from './';

export default {
  title: 'components/atoms/ApplyButton',
  component: ApplyButton,
} as Meta;

const Template: Story<ApplyButtonProps> = args => <ApplyButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '申請する',
};
