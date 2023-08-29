import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SpFooterMenu, SpFooterMenuProps } from './';

export default {
  title: 'components/molecules/SpFooterMenu',
  component: SpFooterMenu,
  parameters: {
    backgrounds: {
      default: 'gray',
    },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
} as Meta;

const Template: Story<SpFooterMenuProps> = args => <SpFooterMenu {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
