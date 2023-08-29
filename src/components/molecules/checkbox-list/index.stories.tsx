import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CheckboxList, CheckboxListProps } from './';
import { Checkbox } from 'components/atoms/checkbox';

export default {
  title: 'components/molecules/CheckboxList',
  component: CheckboxList,
} as Meta;

const Template: Story<CheckboxListProps> = args => <CheckboxList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      <Checkbox>店長・事業部長向け</Checkbox>
      <Checkbox>店長・事業部長向け</Checkbox>
      <Checkbox>店長・事業部長向け</Checkbox>
    </>
  ),
};
