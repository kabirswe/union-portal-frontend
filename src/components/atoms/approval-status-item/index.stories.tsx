import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ApprovalStatusItem, ApprovalStatusItemProps } from '.';

export default {
  title: 'components/atoms/ApprovalItem',
  component: ApprovalStatusItem,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<ApprovalStatusItemProps> = args => <ApprovalStatusItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '上野 透',
  time: '2021/01/25 13:00',
  title: '未完了',
};

export const WithDoneStatus = Template.bind({});
WithDoneStatus.args = {
  children: '山田太郎',
  done: true,
  requester: true,
  time: '2021/01/25 13:00',
  title: '申請完了',
};
