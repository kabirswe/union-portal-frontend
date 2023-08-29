import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NavItem, NavItemProps } from './';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/atoms/NavItem',
  component: NavItem,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<NavItemProps> = args => (
  <MemoryRouter>
    <NavItem {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  icon: 'approval-list',
  label: '承認依頼を見る',
  href: '#',
};

export const Badge = Template.bind({});
Badge.args = {
  icon: 'approval-list',
  label: '承認依頼を見る',
  href: '#',
  badge: true,
};

export const BadgeSelected = Template.bind({});
BadgeSelected.args = {
  icon: 'news',
  label: '自分の申請を見る',
  badge: true,
  href: '#',
  selected: true,
};

export const Subnav = Template.bind({});
Subnav.args = {
  label: '人事業務',
  href: '#',
  subnav: true,
};

export const SubnavSelected = Template.bind({});
SubnavSelected.args = {
  label: '人事業務',
  href: '#',
  subnav: true,
  selected: true,
};

export const RequestList = Template.bind({});
RequestList.args = {
  icon: 'request-list',
  label: '自分の申請を見る',
  href: '#',
};

export const ApprovalList = Template.bind({});
ApprovalList.args = {
  icon: 'approval-list',
  label: '承認依頼を見る',
  href: '#',
};

export const LaborMenu = Template.bind({});
LaborMenu.args = {
  icon: 'labor-menu',
  label: '労務メニュー',
  href: '#',
  children: [<NavItem label="人事業務" href="#" subnav={true} />, <NavItem label="BS業務" href="#" subnav={true} />],
};

export const Settings = Template.bind({});
Settings.args = {
  icon: 'settings',
  label: 'メンテナンス',
  href: '#',
};

export const News = Template.bind({});
News.args = {
  icon: 'news',
  label: 'お知らせ',
  href: '#',
};

export const UserAccount = Template.bind({});
UserAccount.args = {
  icon: 'avatar',
  userName: '山田太郎',
  userPrefix: 'さん',
  href: '#',
};

export const MenuItem = Template.bind({});
MenuItem.args = {
  modifiers: 'menu-item',
  label: '外出・出張の申請',
  href: '#',
};

export const MenuItemDiabled = Template.bind({});
MenuItemDiabled.args = {
  modifiers: 'menu-item',
  label: '外出・出張の申請',
  href: '#',
  disabled: true,
};

export const MenuItemSubnav = Template.bind({});
MenuItemSubnav.args = {
  modifiers: 'menu-item',
  label: '外出・出張の申請',
  href: '#',
  subnav: true,
};

export const MenuItemSubnavDisabled = Template.bind({});
MenuItemSubnavDisabled.args = {
  modifiers: 'menu-item',
  label: '外出・出張の申請',
  href: '#',
  subnav: true,
  disabled: true,
};

export const MenuItemWithSubnav = Template.bind({});
MenuItemWithSubnav.args = {
  modifiers: 'menu-item',
  label: '外出・出張の申請',
  href: '#',
  children: [
    <NavItem modifiers="menu-item" subnav={true} label="弔事の連絡" href="#" />,
    <NavItem modifiers="menu-item" subnav={true} label="弔事の連絡（代理）" href="#" disabled={true} />,
    <NavItem modifiers="menu-item" subnav={true} label="慶事の連絡" href="#" />,
  ],
};

export const SideBySideWithSubnav = Template.bind({});
SideBySideWithSubnav.args = {
  modifiers: 'side-by-side',
  label: '外出・出張の申請',
  href: '#',
  children: [
    <NavItem modifiers="side-by-side" subnav={true} label="弔事の連絡" href="#" />,
    <NavItem modifiers="side-by-side" subnav={true} label="弔事の連絡（代理）" href="#" disabled={true} />,
    <NavItem modifiers="side-by-side" subnav={true} label="慶事の連絡" href="#" />,
    <NavItem modifiers="side-by-side" subnav={true} label="慶事の連絡" href="#" />,
    <NavItem modifiers="side-by-side" subnav={true} label="慶事の連絡" href="#" />,
  ],
};
