import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Price, PriceProps } from './';

export default {
  title: 'components/atoms/Price',
  component: Price,
} as Meta;

const Template: Story<PriceProps> = args => <Price {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  unit: '円',
  children: '65,310',
};

export const Total = Template.bind({});
Total.args = {
  modifiers: 'total',
  unit: '円',
  children: '79,310',
};
