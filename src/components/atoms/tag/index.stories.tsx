import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tag, TagProps } from './';

export default {
  title: 'components/atoms/Tag',
  component: Tag,
} as Meta;

const Template: Story<TagProps> = args => <Tag {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '必須',
  color: 'red',
};

export const Filled = Template.bind({});
Filled.args = {
  modifiers: 'filled',
  children: '北海道',
  color: 'blue',
};

export const Medium = Template.bind({});
Medium.args = {
  modifiers: 'filled',
  children: '重要',
  color: 'yellow',
  size: 'medium',
};

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  children: 'IT',
  color: 'blue',
  isFullWidth: true,
};

export const MediumFullwidth = Template.bind({});
MediumFullwidth.args = {
  modifiers: 'filled',
  children: 'IT',
  color: 'blue',
  size: 'medium',
  isFullWidth: true,
};
