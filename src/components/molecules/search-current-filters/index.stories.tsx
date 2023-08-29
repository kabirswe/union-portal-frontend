import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SearchCurrentFilters, SearchCurrentFiltersProps } from './';
import { Tag } from 'components/atoms/tag/index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/molecules/SearchCurrentFilters',
  component: SearchCurrentFilters,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<SearchCurrentFiltersProps> = args => <SearchCurrentFilters {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  dateFilterStart: '2021/02/10',
  dateFilterEnd: '2021/02/11',
  children: [
    <Tag key={1} modifiers="filled">
      北海道
    </Tag>,
    <Tag key={2} modifiers="filled">
      吉田
    </Tag>,
    <Tag key={3} modifiers="filled">
      吉
    </Tag>,
    <Tag key={4} modifiers="filled">
      吉田の吉の吉の吉の
    </Tag>,
    <Tag key={5} modifiers="filled">
      北海道
    </Tag>,
    <Tag key={6} modifiers="filled">
      吉田
    </Tag>,
    <Tag key={7} modifiers="filled">
      吉
    </Tag>,
    <Tag key={8} modifiers="filled">
      吉田の吉の吉の吉の
    </Tag>,
  ],
  onClearClick: action('clear filter'),
};
