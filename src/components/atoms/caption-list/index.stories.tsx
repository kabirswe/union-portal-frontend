import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CaptionList, CaptionListProps } from './';

export default {
  title: 'components/atoms/CaptionList',
  component: CaptionList,
} as Meta;

const Template: Story<CaptionListProps> = args => <CaptionList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      <li>手配依頼期限：2022年2月10日</li>
      <li>
        供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
      </li>
    </>
  ),
};
