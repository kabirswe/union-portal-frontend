import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CalendarField, CalendarFieldProps } from './';

export default {
  title: 'components/atoms/CalendarField',
  component: CalendarField,
} as Meta;

const Template: Story<CalendarFieldProps> = args => <CalendarField {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  defaultValue: new Date('Mon Mar 27 2022 03:44:23 GMT+0700'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: new Date('Mon Mar 27 2022 03:44:23 GMT+0700'),
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  modifiers: 'invalid',
};
