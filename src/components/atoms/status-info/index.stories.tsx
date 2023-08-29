import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StatusInfo, StatusInfoProps } from './';

export default {
  title: 'components/atoms/StatusInfo',
  component: StatusInfo,
} as Meta;

const Template: Story<StatusInfoProps> = args => <StatusInfo {...args} />;

export const Draft = Template.bind({});
Draft.args = { status: 'draft' };
export const Waiting = Template.bind({});
Waiting.args = { status: 'waiting' };
export const Remand = Template.bind({});
Remand.args = { status: 'remand' };
export const InProgress = Template.bind({});
InProgress.args = { status: 'in-progress' };
export const Approval = Template.bind({});
Approval.args = { status: 'approval' };
export const Denial = Template.bind({});
Denial.args = { status: 'denial' };
export const WaitingWithBadge = Template.bind({});
WaitingWithBadge.args = { status: 'waiting', badge: true };
export const RemandWithBadge = Template.bind({});
RemandWithBadge.args = { status: 'remand', badge: true };
export const InProgressWithBadge = Template.bind({});
InProgressWithBadge.args = { status: 'in-progress', badge: true };
