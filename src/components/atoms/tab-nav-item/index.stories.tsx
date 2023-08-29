import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TabNavItem, TabNavItemProps } from './';

export default {
  title: 'components/atoms/TabNavItem',
  component: TabNavItem,
} as Meta;

const Template: Story<TabNavItemProps> = args => <TabNavItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '承認待ち',
};

export const Active = Template.bind({});
Active.args = {
  children: '承認待ち',
  active: true,
};

export const Badge = Template.bind({});
Badge.args = {
  children: '未完了',
  badge: true,
};

export const ActiveBadge = Template.bind({});
ActiveBadge.args = {
  children: '未完了',
  badge: true,
  active: true,
};
