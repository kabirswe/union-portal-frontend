---
to: src/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.stories.tsx
sh: prettier --write src/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.stories.tsx
---
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { <%= h.changeCase.pascal(name) %>, <%= h.changeCase.pascal(name) %>Props } from './';

export default {
  title: 'components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
} as Meta;

const Template: Story<<%= h.changeCase.pascal(name) %>Props> = args => <<%= h.changeCase.pascal(name) %> {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Red = Template.bind({});
Red.args = { modifiers: 'red', children: 'Red' };

export const Blue = Template.bind({});
Blue.args = { modifiers: 'blue', children: 'Blue' };
