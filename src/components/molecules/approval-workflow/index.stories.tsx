import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ApprovalWorkflow, ApprovalWorkflowProps } from './';
import { ApprovalStep } from 'components/atoms/approval-step';

export default {
  title: 'components/molecules/ApprovalWorkflow',
  component: ApprovalWorkflow,
} as Meta;

const Template: Story<ApprovalWorkflowProps> = args => <ApprovalWorkflow {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <ApprovalStep key={1} step={1} name="山田太郎" />,
    <ApprovalStep key={2} step={2} name="佐藤二郎" />,
    <ApprovalStep key={3} step={3} name="佐藤二郎" />,
  ],
};

export const Auto = Template.bind({});
Auto.args = {
  children: [
    <ApprovalStep key={1} name="山田太郎" modifiers="auto" requester isDone />,
    <ApprovalStep key={1} name="山田太郎" modifiers="auto" requester isDone />,
    <ApprovalStep key={2} name="上野 透" modifiers="auto" />,
  ],
  modifiers: 'auto',
};
