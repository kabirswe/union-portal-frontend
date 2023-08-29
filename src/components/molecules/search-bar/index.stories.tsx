import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { SearchBar, SearchBarProps } from './';

export default {
  title: 'components/molecules/SearchBar',
  component: SearchBar,
  parameters: {
    backgrounds: {
      default: 'gray',
    },
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<SearchBarProps> = args => <SearchBar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  defaultValue: '結婚',
  handleCloseClick: action('handleCloseClick'),
};
