import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ToolItem, ToolItemProps } from '.';
import { MemoryRouter } from 'react-router-dom';
export default {
  title: 'components/atoms/ToolItem',
  component: ToolItem,
} as Meta;

const Template: Story<ToolItemProps> = args => (
  <MemoryRouter>
    <ToolItem {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  href: '#',
  icon: 'outlook',
};

export const IconOutlook = Template.bind({});
IconOutlook.args = {
  href: '#',
  icon: 'outlook',
  label: 'Outlook Webside',
};
export const IconMicrosoftTeams = Template.bind({});
IconMicrosoftTeams.args = {
  href: '#',
  icon: 'microsoft-teams',
  label: 'Microsoft Teams',
};
