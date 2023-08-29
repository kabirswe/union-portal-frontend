import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ArticleDate } from './';

export default {
  title: 'components/atoms/ArticleDate',
  component: ArticleDate,
} as Meta;

const Template: Story = args => <ArticleDate {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '2021/02/20',
};
