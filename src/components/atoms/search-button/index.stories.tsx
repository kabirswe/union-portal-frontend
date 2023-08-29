import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SearchButton, SearchButtonProps } from './';

export default {
  title: 'components/atoms/SearchButton',
  component: SearchButton,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<SearchButtonProps> = args => <SearchButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '絞り込み検索',
};

export const Light = Template.bind({});
Light.args = {
  children: 'キーワード検索',
  modifiers: 'light',
};

export const Inline = Template.bind({});
Inline.args = {
  children: '絞り込み',
  inline: true,
};
