import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TextLink, TextLinkProps } from './';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/atoms/TextLink',
  component: TextLink,
} as Meta;

const Template: Story<TextLinkProps> = args => (
  <MemoryRouter>
    <TextLink {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  children: 'すべて確認済にする',
  href: '#',
  target: '_blank',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'すべて確認済にする',
  href: '#',
  target: '_blank',
  disabled: true,
};
