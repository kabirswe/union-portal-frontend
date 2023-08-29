import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { QuotaInfo, QuotaInfoProps, QuoteText } from './';

export default {
  title: 'components/atoms/QuotaInfo',
  component: QuotaInfo,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<QuotaInfoProps> = args => <QuotaInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [<QuoteText label="供花" value="1" unit="基" />, <QuoteText label="弔電" value="1" unit="通" />],
};

export const Medium = Template.bind({});
Medium.args = {
  children: [
    <QuoteText label="供花" value="1" unit="基" />,
    <QuoteText label="弔電" value="1" unit="通" />,
    <QuoteText label="弔電" value="1" unit="通" />,
  ],
};
