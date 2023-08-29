import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { PriceTable, PriceTableItem, PriceTableItemDetail } from './';
import { Price } from 'components/atoms/price';

export default {
  title: 'components/molecules/PriceTable',
  component: PriceTable,
} as Meta;

const Template: Story = args => <PriceTable {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <PriceTableItem key={1} label="合計" modifiers="total">
      <Price modifiers="total" unit="円">
        79,310
      </Price>
    </PriceTableItem>,
    <PriceTableItem key={2} label="内訳">
      <PriceTableItemDetail label="交通費">
        <Price unit="円">65,310</Price>
      </PriceTableItemDetail>
      <PriceTableItemDetail label="宿泊費">
        <Price unit="円">10,000</Price>
      </PriceTableItemDetail>
      <PriceTableItemDetail label="日　当">
        <Price unit="円">4,000</Price>
      </PriceTableItemDetail>
    </PriceTableItem>,
  ],
};
