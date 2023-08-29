import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AddressSearchField, AddressSearchFieldProps } from './';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/atoms/AddressSearchField',
  component: AddressSearchField,
} as Meta;

const Template: Story<AddressSearchFieldProps> = args => <AddressSearchField {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  inputProps: {
    defaultValue: '107-0052',
  },
  buttonProps: {
    type: 'button',
  },
  onSearchClick: action('search'),
};

export const WithError = Template.bind({});
WithError.args = {
  inputProps: {
    modifiers: 'invalid',
  },
  buttonProps: {
    type: 'button',
  },
  onSearchClick: action('search'),
};
