/* eslint-disable import/no-relative-parent-imports */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InfoTableCell, InfoTableCellProps } from '.';

import { QuotaInfo, QuoteText } from '../quota-info/index';

export default {
  title: 'components/atoms/InfoTableCell',
  component: InfoTableCell,
} as Meta;

const Template: Story<InfoTableCellProps> = args => <InfoTableCell {...args} />;

export const WithHeader = Template.bind({});
WithHeader.args = {
  children: (
    <>
      <p>
        イオンアイビス(株) <br />
        社長　佐藤一郎
      </p>
      <QuotaInfo>
        <QuoteText label="供花" value="1" unit="基" />
        <QuoteText label="弔電" value="1" unit="通" />
      </QuotaInfo>
    </>
  ),
  header: '差出人情報',
};

export const Pair = Template.bind({});
Pair.args = {
  modifiers: 'pair',
  label: 'イオンアイビス(株)',
  children: <span>01234567</span>,
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  children: (
    <>
      <p>
        イオンアイビス(株) <br />
        社長　佐藤一郎
      </p>
      <QuotaInfo>
        <QuoteText label="供花" value="1" unit="基" />
        <QuoteText label="弔電" value="1" unit="通" />
      </QuotaInfo>
    </>
  ),
};
