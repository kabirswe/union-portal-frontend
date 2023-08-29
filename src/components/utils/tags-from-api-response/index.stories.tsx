import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TagsFromApiResponse, TagsFromApiResponseProps } from './';

export default {
  title: 'components/utils/TagsFromApiResponse',
  component: TagsFromApiResponse,
} as Meta;

const Template: Story<TagsFromApiResponseProps> = args => <TagsFromApiResponse {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
