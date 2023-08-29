import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DateRangeField } from './';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/atoms/DateRangeField',
  component: DateRangeField,
} as Meta;

const Template: Story = args => <DateRangeField {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  onDateRangeChange: action('onDateRangeChange'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  onDateRangeChange: action('onDateRangeChange'),
};
