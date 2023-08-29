import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Toast, ToastProps } from './';

export default {
  title: 'components/atoms/Toast',
  component: Toast,
} as Meta;

const Template: Story<ToastProps> = args => <Toast {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  opened: true,
  children: '弔事連絡の申請が完了しました。',
};

export const Show3Seconds = Template.bind({});
Show3Seconds.args = {
  opened: true,
  duration: 3000,
  children: '弔事連絡の申請が完了しました。',
};

export const ShowForever = Template.bind({});
ShowForever.args = {
  opened: true,
  duration: -1,
  children: '弔事連絡の申請が完了しました。',
};
