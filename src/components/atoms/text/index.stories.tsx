import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, TextProps } from './';

export default {
  title: 'components/atoms/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = args => <Text {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: `この度はお悔やみを申し上げます。
  下記内容で弔事連絡を受け付けました。
  申請内容について確認をさせていただく場合は、ご入力いただいた電話番号にご連絡を差し上げます。
  供花・弔電を受け取られる方に対しては、ご手配の状況についてご連絡を差し上げますのでしばらくお待ちください。`,
};

export const Small = Template.bind({});
Small.args = {
  modifiers: 'small',
  children: `この度はお悔やみを申し上げます。
  下記内容で弔事連絡を受け付けました。
  申請内容について確認をさせていただく場合は、ご入力いただいた電話番号にご連絡を差し上げます。
  供花・弔電を受け取られる方に対しては、ご手配の状況についてご連絡を差し上げますのでしばらくお待ちください。`,
};
