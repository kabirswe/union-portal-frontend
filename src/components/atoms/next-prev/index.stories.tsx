import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NextPrev, NextPrevProps } from './';

export default {
  title: 'components/atoms/NextPrev',
  component: NextPrev,
} as Meta;

const Template: Story<NextPrevProps> = args => <NextPrev {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  length: 20,
  currentIndex: 5,
};

export const DeactivatePrev = Template.bind({});
DeactivatePrev.args = {
  length: 20,
  currentIndex: 1,
};

export const DeactivateNext = Template.bind({});
DeactivateNext.args = {
  length: 10,
  currentIndex: 10,
};
