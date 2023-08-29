import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ApprovalStatusList, ApprovalStatusListProps } from './';
import { ApprovalStatusItem } from 'components/atoms/approval-status-item';

export default {
  title: 'components/molecules/ApprovalStatusList',
  component: ApprovalStatusList,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<ApprovalStatusListProps> = args => <ApprovalStatusList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <ApprovalStatusItem key={1} title="申請完了" time="2021/01/25 13:00" requester done>
      山田太郎
    </ApprovalStatusItem>,
    <ApprovalStatusItem key={2} title="未完了" time="2021/01/25 13:00">
      上野 透
    </ApprovalStatusItem>,
  ],
};

export const Multiple = Template.bind({});
Multiple.args = {
  children: [
    <ApprovalStatusItem key={1} title="申請完了" time="2021/01/25 13:00" requester done>
      山田太郎
    </ApprovalStatusItem>,
    <ApprovalStatusItem key={2} title="未完了" time="2021/01/25 13:00" done>
      上野 透
    </ApprovalStatusItem>,
    <ApprovalStatusItem key={3} title="未完了" time="2021/01/25 13:00">
      上野 透
    </ApprovalStatusItem>,
    <ApprovalStatusItem key={4} title="未完了" time="2021/01/25 13:00">
      上野 透
    </ApprovalStatusItem>,
    <ApprovalStatusItem key={4} title="未完了" time="2021/01/25 13:00">
      上野 透
    </ApprovalStatusItem>,
  ],
};
