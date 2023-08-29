import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PageNumber, PageNumberProps } from './';

export default {
  title: 'components/atoms/PageNumber',
  component: PageNumber,
} as Meta;

const Template: Story<PageNumberProps> = args => <PageNumber {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  currentPage: 1,
  totalPage: 20,
  numberOfArticles: 223,
};
