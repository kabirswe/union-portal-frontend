import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SettingMenu, SettingMenuProps, SubMenuItem } from './';
import { NavItem } from 'components/atoms/nav-item';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/molecules/SettingMenu',
  component: SettingMenu,
} as Meta;

const Template: Story<SettingMenuProps> = args => (
  <MemoryRouter>
    <SettingMenu {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  navActiveIndex: 1,
  children: [
    <NavItem
      id="nav-1"
      key={1}
      modifiers="menu-item"
      label="申請メニュー設定"
      remoteSubNav="#subnav-1"
      hoverToOpen={true}
    />,
    <NavItem id="nav-2" key={2} modifiers="menu-item" label="自動送信メール設定" />,
    <NavItem id="nav-3" key={3} modifiers="menu-item" label="慶弔設定" remoteSubNav="#subnav-2" hoverToOpen={true} />,
  ],
  subnav: [
    <SubMenuItem id="subnav-1" key={1} className="a-nav-item__remote-subnav">
      <NavItem href="#" label="慶弔基準設定" subnav />
      <NavItem href="#" label="名義マスタ設定" subnav />
    </SubMenuItem>,
    <SubMenuItem id="subnav-2" key={2} className="a-nav-item__remote-subnav">
      <NavItem href="#" label="慶弔基準設定" subnav />
      <NavItem href="#" label="名義マスタ設定" subnav />
    </SubMenuItem>,
  ],
};
