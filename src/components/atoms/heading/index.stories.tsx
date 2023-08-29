import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from '.';

export default {
  title: 'components/atoms/Heading',
  component: Heading,
  parameters: {
    backgrounds: {
      default: 'gray',
    },
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<HeadingProps> = args => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = { tag: 'h1', children: '自分の申請を見る', useDiv: false };

export const Heading2 = Template.bind({});
Heading2.args = { tag: 'h2', children: '手配状況', useDiv: false, className: 'a-heading--btag' };

export const Heading3 = Template.bind({});
Heading3.args = { tag: 'h3', children: '社員情報', useDiv: true, className: 'a-heading--btag' };

export const Heading4 = Template.bind({});
Heading4.args = { tag: 'h4', children: '後飾りのお届け先情報', useDiv: false, className: 'a-heading--btag' };

export const Heading5 = Template.bind({});
Heading5.args = { tag: 'h5', children: '自動承認', useDiv: false };

export const HeadingWithIcon = Template.bind({});
HeadingWithIcon.args = {
  tag: 'h4',
  children: '自分の申請を見る',
  icon: 'safty-confirmation-selected',
  useDiv: false,
};
