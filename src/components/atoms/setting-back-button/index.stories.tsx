import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SettingBackButton, SettingBackButtonProps } from './';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/atoms/SettingBackButton',
  component: SettingBackButton,
} as Meta;

const Template: Story<SettingBackButtonProps> = args => <SettingBackButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'ホームへ',
  onClick: action('back clicked'),
};
