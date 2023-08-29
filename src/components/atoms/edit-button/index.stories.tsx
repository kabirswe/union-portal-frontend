import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { EditButton, EditButtonProps } from '.';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/atoms/EditButton',
  component: EditButton,
} as Meta;

const Template: Story<EditButtonProps> = args => (
  <MemoryRouter>
    <EditButton {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  children: '「駅すぱあと」で交通費を調べる',
  href: '#',
};
