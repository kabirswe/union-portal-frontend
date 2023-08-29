import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InternalLink, InternalLinkProps } from '.';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/atoms/InternalLink',
  component: InternalLink,
} as Meta;

const Template: Story<InternalLinkProps> = args => (
  <MemoryRouter>
    <InternalLink {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  children: '「駅すぱあと」で交通費を調べる',
  icon: 'link',
  href: '#',
};
