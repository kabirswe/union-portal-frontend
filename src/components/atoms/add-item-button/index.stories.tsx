import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AddItemButton, AddItemButtonProps } from './';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/atoms/AddItemButton',
  component: AddItemButton,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<AddItemButtonProps> = args => <AddItemButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '訪問先を追加する',
  handleAddItemClick: action('click'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '訪問先を追加する',
  handleAddItemClick: action('click'),
  disabled: true,
};
