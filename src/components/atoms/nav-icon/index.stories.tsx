import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NavIcon, NavIconProps } from './';

export default {
  title: 'components/atoms/NavIcon',
  component: NavIcon,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<NavIconProps> = args => <NavIcon {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  icon: 'news',
};

export const Active = Template.bind({});
Active.args = {
  icon: 'news',
  active: true,
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  icon: 'news',
  badge: true,
};

export const Large = Template.bind({});
Large.args = {
  icon: 'news',
  size: 'large',
};

export const LargeWithBadge = Template.bind({});
LargeWithBadge.args = {
  icon: 'news',
  size: 'large',
  badge: true,
};
