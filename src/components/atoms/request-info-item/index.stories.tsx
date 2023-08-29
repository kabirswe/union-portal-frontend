import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RequestInfoItem, RequestInfoItemProps } from './';

export default {
  title: 'components/atoms/RequestInfoItem',
  component: RequestInfoItem,
} as Meta;

const Template: Story<RequestInfoItemProps> = args => <RequestInfoItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: '申請日',
  value: '2021/01/29',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: '代理申請者',
  value: '上野 透',
  modifiers: 'long',
};

export const SuperLongLabel = Template.bind({});
SuperLongLabel.args = {
  label: '代理申請者代理申請者代理申請者',
  value:
    '上野 透上野 透上野 透上野 透上野 透上野 透上野 透上野 透上野 透上野 透上野 透上野 透上野 透上野 透上野 透上野 透',
  modifiers: 'long',
};
