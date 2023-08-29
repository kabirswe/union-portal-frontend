import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { HistoryBackButton, HistoryBackButtonProps } from '.';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/atoms/HistoryBackButton',
  component: HistoryBackButton,
} as Meta;

const Template: Story<HistoryBackButtonProps> = args => (
  <MemoryRouter>
    <HistoryBackButton {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  children: '戻る',
};
