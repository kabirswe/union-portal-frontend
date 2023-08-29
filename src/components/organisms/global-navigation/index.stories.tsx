import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GlobalNavigation, GlobalNavigationProps } from './';
import { NavItem } from 'components/atoms/nav-item';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/organisms/GlobalNavigation',
  component: GlobalNavigation,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as Meta;

const Template: Story<GlobalNavigationProps> = args => (
  <MemoryRouter>
    <GlobalNavigation {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  brandHref: '#',
  hasNotification: true,
  children: (
    <>
      <NavItem icon="home" label="ホーム" href="#" selected />
      <NavItem icon="bell" label="重要なお知らせ" href="#" />
      <NavItem icon="attendance" label="勤怠メニュー" href="#" />
      <NavItem icon="application" label="電子申請メニュー" href="#" />
      <NavItem icon="communication" label="コミュニケーションツール" href="#" />
      <NavItem icon="help-menu" label="お助けチャットボット" href="#" />
      <NavItem icon="safty-confirmation" label="安否確認" href="#" />
    </>
  ),
};

export const NoFloat = Template.bind({});
NoFloat.args = {
  brandHref: '#',
  hasNotification: true,
  children: (
    <>
      <NavItem icon="home" label="ホーム" href="#" selected />
      <NavItem icon="bell" label="重要なお知らせ" href="#" />
      <NavItem icon="attendance" label="勤怠メニュー" href="#" />
      <NavItem icon="application" label="電子申請メニュー" href="#" />
      <NavItem icon="communication" label="コミュニケーションツール" href="#" />
      <NavItem icon="help-menu" label="お助けチャットボット" href="#" />
      <NavItem icon="safty-confirmation" label="安否確認" href="#" />
    </>
  ),
  showFloatButtons: false,
};

export const NoChildrenAndSimple = Template.bind({});
NoChildrenAndSimple.args = {
  isSimple: false,
};
export const Simple = Template.bind({});
Simple.args = {
  isSimple: true,
};
