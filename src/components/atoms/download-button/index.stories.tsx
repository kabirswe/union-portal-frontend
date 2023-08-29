import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DownloadButton, DownloadButtonProps } from './';

export default {
  title: 'components/atoms/DownloadButton',
  component: DownloadButton,
} as Meta;

const Template: Story<DownloadButtonProps> = args => <DownloadButton {...args} />;

export const Normal = Template.bind({});
Normal.args = { children: 'テンプレートをダウンロード', target: '_blank', href: '#' };

export const Disabled = Template.bind({});
Disabled.args = { children: 'テンプレートをダウンロード', target: '_blank', href: '#', disabled: true };
