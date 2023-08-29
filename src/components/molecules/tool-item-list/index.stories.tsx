import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ToolItemList, ToolItemListProps } from '.';
import { ToolItem } from 'components/atoms/tool-item';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/molecules/ToolItemList',
  component: ToolItemList,
} as Meta;

const Template: Story<ToolItemListProps> = args => (
  <MemoryRouter>
    <ToolItemList {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <ToolItem href="#" icon="outlook" />,
    <ToolItem href="#" icon="microsoft-teams" />,
    <ToolItem href="#" icon="zoom" />,
    <ToolItem href="#" icon="chatwork" />,
    <ToolItem href="#" icon="slack" />,
  ],
};

export const IconWithText = Template.bind({});
IconWithText.args = {
  children: [
    <ToolItem href="#" icon="outlook" label="Outlook Webside" />,
    <ToolItem href="#" icon="microsoft-teams" label="Microsoft Teams" />,
    <ToolItem href="#" icon="zoom" label="Zoom" />,
    <ToolItem href="#" icon="chatwork" label="Chatwork" />,
    <ToolItem href="#" icon="slack" label="Slack" />,
  ],
};
