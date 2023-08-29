import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UserAccount, UserAccountProps } from './';

export default {
  title: 'components/atoms/UserAccount',
  component: UserAccount,
} as Meta;

const Template: Story<UserAccountProps> = args => <UserAccount {...args} />;

export const userAccount = Template.bind({});
userAccount.args = {
  userName: 'イオン 太郎',
  companyName: 'マックスバリュ',
  position: '店舗営業',
  companyId: '111111',
};

export const userAccountCard = Template.bind({});
userAccountCard.args = {
  userName: 'イオン 太郎',
  companyName: 'マックスバリュ',
  position: '店舗営業',
  companyId: '111111',
  modifiers: 'card',
};
