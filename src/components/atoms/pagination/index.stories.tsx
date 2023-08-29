import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Pagination, PaginationProps } from './';

export default {
  title: 'components/atoms/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = args => <Pagination {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  length: 10,
  currentIndex: 1,
  onChange: index => console.log(`page ${index} has been selected`), // eslint-disable-line no-console
};

export const CenterPage = Template.bind({});
CenterPage.args = {
  length: 20,
  currentIndex: 5,
  onChange: index => console.log(`page ${index} has been selected`), // eslint-disable-line no-console
};

export const SinglePage = Template.bind({});
SinglePage.args = {
  length: 1,
  currentIndex: 1,
  onChange: index => console.log(`page ${index} has been selected`), // eslint-disable-line no-console
};

export const FewPages = Template.bind({});
FewPages.args = {
  length: 3,
  currentIndex: 1,
  onChange: index => console.log(`page ${index} has been selected`), // eslint-disable-line no-console
};

export const LastPage = Template.bind({});
LastPage.args = {
  length: 99,
  currentIndex: 98,
  onChange: index => console.log(`page ${index} has been selected`), // eslint-disable-line no-console
};
