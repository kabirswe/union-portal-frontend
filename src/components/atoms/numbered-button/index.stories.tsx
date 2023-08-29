import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NumberedButton, NumberedButtonProps } from '.';

export default {
  title: 'components/atoms/NumberedButton',
  component: NumberedButton,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<NumberedButtonProps> = args => <NumberedButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  number: '1',
  title: '店長・事業部長向け',
  children: '担当店舗の売上や月中コントロールをすぐ確認できます。',
};
