import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ShortcutNav, ShortcutNavProps } from './';
import { NavItem } from 'components/atoms/nav-item';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/molecules/ShortcutNav',
  component: ShortcutNav,
  parameters: {
    backgrounds: {
      default: 'gray',
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
} as Meta;

const Template: Story<ShortcutNavProps> = args => (
  <MemoryRouter>
    <ShortcutNav {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      <NavItem icon="request-list" label="自分の申請を見る" href="#" selected={true} badge={true} />
      <NavItem icon="approval-list" label="承認依頼を見る" href="#" />
    </>
  ),
};
