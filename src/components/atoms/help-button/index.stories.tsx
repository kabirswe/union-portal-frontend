import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HelpButton, HelpButtonProps } from './';

export default {
  title: 'components/atoms/HelpButton',
  component: HelpButton,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<HelpButtonProps> = args => <HelpButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: 'を押すと項目の詳しい説明が表示されます。',
  type: 'with-children',
};
