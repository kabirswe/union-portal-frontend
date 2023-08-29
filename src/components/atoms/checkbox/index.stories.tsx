import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from './';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/atoms/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = args => (
  <MemoryRouter>
    <Checkbox {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = { children: '一般参列を辞退する' };

export const WithChecked = Template.bind({});
WithChecked.args = { children: '一般参列を辞退する', checked: true };

export const Disabled = Template.bind({});
Disabled.args = {
  children: '一般参列を辞退する',
  disabled: true,
};

export const Invalid = Template.bind({});
Invalid.args = { children: '一般参列を辞退する', modifiers: 'invalid' };

export const WithCheckedDisabled = Template.bind({});
WithCheckedDisabled.args = { children: '一般参列を辞退する', checked: true, disabled: true };

export const WithButton = Template.bind({});
WithButton.args = {
  children: '同居',
  modifiers: 'button',
};

export const WithButtonChecked = Template.bind({});
WithButtonChecked.args = {
  children: '同居',
  modifiers: 'button',
  checked: true,
};

export const WithButtonDisabled = Template.bind({});
WithButtonDisabled.args = {
  children: '同居',
  modifiers: 'button',
  disabled: true,
};

export const WithButtonCheckedDisabled = Template.bind({});
WithButtonCheckedDisabled.args = {
  children: '同居',
  modifiers: 'button',
  checked: true,
  disabled: true,
};

export const WithInvalidButton = Template.bind({});
WithInvalidButton.args = {
  children: '同居',
  modifiers: 'invalid-button',
};
export const WithLink = Template.bind({});
WithLink.args = {
  children: '同居',
  linkProps: {
    href: '#',
    target: '_blank',
  },
  modifiers: 'link',
};
