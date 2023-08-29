import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Radio, RadioProps } from './';

export default {
  title: 'components/atoms/Radio',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = args => <Radio {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: '一般参列を辞退する',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: '一般参列を辞退する',
  disabled: true,
};

export const WithChecked = Template.bind({});
WithChecked.args = {
  children: (
    <>
      一般交通機関 <small>(電車・バス・飛行機・船)</small>
    </>
  ),
  checked: true,
};

export const WithCheckedDisabled = Template.bind({});
WithCheckedDisabled.args = {
  children: (
    <>
      一般交通機関 <small>(電車・バス・飛行機・船)</small>
    </>
  ),
  checked: true,
  disabled: true,
};

export const Grey = Template.bind({});
Grey.args = {
  modifiers: 'grey',
  children: '辞退する',
};

export const Invalid = Template.bind({});
Invalid.args = {
  modifiers: 'invalid',
  children: '辞退する',
};
