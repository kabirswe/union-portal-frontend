import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { WysiwygEditor, WysiwygEditorProps } from './';

export default {
  title: 'components/molecules/WysiwygEditor',
  component: WysiwygEditor,
} as Meta;

const Template: Story<WysiwygEditorProps> = args => <WysiwygEditor {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
