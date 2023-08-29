import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextPlaceholder, TextPlaceholderProps } from './';

export default {
  title: 'components/atoms/TextPlaceholder',
  component: TextPlaceholder,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<TextPlaceholderProps> = args => <TextPlaceholder {...args} />;

export const Normal = Template.bind({});
Normal.args = { children: '申請者 氏名（姓）' };
