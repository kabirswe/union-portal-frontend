import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ModalOpener, ModalOpenerProps } from './';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/atoms/ModalOpener',
  component: ModalOpener,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<ModalOpenerProps> = args => (
  <MemoryRouter>
    <ModalOpener {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  children: '慶弔に関する規定',
  handleOpenClick: action('click'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '慶弔に関する規定',
  disabled: true,
  handleOpenClick: action('click'),
};
