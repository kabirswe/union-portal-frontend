import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NavList, NavListProps } from './';
import { NavItem } from 'components/atoms/nav-item';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/molecules/NavList',
  component: NavList,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<NavListProps> = args => (
  <MemoryRouter>
    <NavList {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      <NavItem icon="request-list" label="自分の申請を見る" href="#" selected={true} badge={true} />
      <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
      <NavItem icon="labor-menu" label="労務メニュー">
        <NavItem label="人事業務" href="#" subnav={true} />
        <NavItem label="BS業務" href="#" subnav={true} />
      </NavItem>
      <NavItem icon="settings" label="メンテナンス" href="#" />
    </>
  ),
};

export const MenuItem = Template.bind({});
MenuItem.args = {
  modifiers: 'menu',
  children: (
    <>
      <NavItem modifiers="menu-item" label="外出・出張の申請" href="#" />
      <NavItem modifiers="menu-item" label="家族情報の変更" href="#" />
      <NavItem modifiers="menu-item" label="家族情報の変更">
        <NavItem modifiers="menu-item" subnav={true} label="弔事の連絡" href="#" />
        <NavItem modifiers="menu-item" subnav={true} label="弔事の連絡（代理）" href="#" disabled={true} />
        <NavItem modifiers="menu-item" subnav={true} label="慶事の連絡" href="#" />
      </NavItem>
      <NavItem modifiers="menu-item" label="税金・年金情報の変更" href="#" />
    </>
  ),
};

export const SideBySideLayout = Template.bind({});
SideBySideLayout.args = {
  modifiers: 'side-by-side-layout',
  children: (
    <>
      <NavItem modifiers="side-by-side" label="家族情報の変更">
        <NavItem modifiers="side-by-side" subnav={true} label="弔事の連絡" href="#" />
        <NavItem modifiers="side-by-side" subnav={true} label="弔事の連絡（代理）" />
        <NavItem modifiers="side-by-side" subnav={true} label="慶事の連絡" href="#" />
        <NavItem modifiers="side-by-side" subnav={true} label="弔事の連絡" href="#" />
        <NavItem modifiers="side-by-side" subnav={true} label="弔事の連絡（代理）" />
        <NavItem modifiers="side-by-side" subnav={true} label="慶事の連絡" href="#" />
      </NavItem>
      <NavItem modifiers="side-by-side" label="家族情報の変更">
        <NavItem modifiers="side-by-side" subnav={true} label="弔事の連絡" href="#" />
        <NavItem modifiers="side-by-side" subnav={true} label="弔事の連絡（代理）" />
        <NavItem modifiers="side-by-side" subnav={true} label="慶事の連絡" href="#" />
        <NavItem modifiers="side-by-side" subnav={true} label="弔事の連絡" href="#" />
        <NavItem modifiers="side-by-side" subnav={true} label="弔事の連絡（代理）" />
        <NavItem modifiers="side-by-side" subnav={true} label="慶事の連絡" href="#" />
      </NavItem>
    </>
  ),
};
