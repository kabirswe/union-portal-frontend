import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FilterButton, FilterButtonProps } from './';

export default {
  title: 'components/atoms/FilterButton',
  component: FilterButton,
} as Meta;

const Template: Story<FilterButtonProps> = args => <FilterButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Active = Template.bind({});
Active.args = { isActive: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
