/* eslint-disable import/no-relative-parent-imports */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InfoTable, InfoTableProps } from '.';

import { QuotaInfo, QuoteText } from '../../atoms/quota-info/index';
import { InfoTableCell } from '../../atoms/info-table-cell/index';

import { PriceTable, PriceTableItem, PriceTableItemDetail } from '../price-table/index';
import { Price } from 'components/atoms/price';
import { TextLink } from 'components/atoms/text-link';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/molecules/InfoTable',
  component: InfoTable,
} as Meta;

const Template: Story<InfoTableProps> = args => (
  <MemoryRouter>
    <InfoTable {...args} />
  </MemoryRouter>
);

export const WithHeader = Template.bind({});
WithHeader.args = {
  children: [
    <InfoTableCell>
      <p style={{ marginBottom: '13px' }}>
        イオンアイビス(株) <br />
        社長　佐藤一郎
      </p>
      <QuotaInfo>
        <QuoteText label="供花" value="1" unit="基" />
        <QuoteText label="弔電" value="1" unit="通" />
      </QuotaInfo>
    </InfoTableCell>,
    <InfoTableCell>
      <p style={{ marginBottom: '13px' }}>
        イオンアイビス(株) <br />
        社長　佐藤一郎
      </p>
      <QuotaInfo>
        <QuoteText label="供花" value="1" unit="基" />
        <QuoteText label="弔電" value="1" unit="通" />
      </QuotaInfo>
    </InfoTableCell>,
  ],
  header: '差出人情報',
};

export const WithHeaderCellFullBorder = Template.bind({});
WithHeaderCellFullBorder.args = {
  children: [
    <InfoTableCell header="人出情">
      <PriceTable>
        <PriceTableItem label="合計" modifiers="total">
          <Price modifiers="total" unit="円">
            79,310
          </Price>
        </PriceTableItem>
        <PriceTableItem label="内訳">
          <PriceTableItemDetail label="交通費">
            <Price unit="円">65,310</Price>
          </PriceTableItemDetail>
          <PriceTableItemDetail label="宿泊費">
            <Price unit="円">10,000</Price>
          </PriceTableItemDetail>
          <PriceTableItemDetail label="日　当">
            <Price unit="円">4,000</Price>
          </PriceTableItemDetail>
        </PriceTableItem>
      </PriceTable>
    </InfoTableCell>,
    <InfoTableCell header="人出情">
      <PriceTable>
        <PriceTableItem label="合計" modifiers="total">
          <Price modifiers="total" unit="円">
            79,310
          </Price>
        </PriceTableItem>
        <PriceTableItem label="内訳">
          <PriceTableItemDetail label="交通費">
            <Price unit="円">65,310</Price>
          </PriceTableItemDetail>
          <PriceTableItemDetail label="宿泊費">
            <Price unit="円">10,000</Price>
          </PriceTableItemDetail>
          <PriceTableItemDetail label="日　当">
            <Price unit="円">4,000</Price>
          </PriceTableItemDetail>
        </PriceTableItem>
      </PriceTable>
    </InfoTableCell>,
  ],
  modifiers: 'full-border',
};

export const NoBorderHeader = Template.bind({});
NoBorderHeader.args = {
  modifiers: 'no-border-header',
  children: [
    <InfoTableCell modifiers="pair" label="イオンアイビス(株)">
      <span>01234567</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="氏名">
      <span>山田　太郎</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="氏名（カナ）">
      <span>ヤマダ　タロウ</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="会社名称">
      <span>イオンアイビス株式会社</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="正式組織名・上">
      <span>BS業務部</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="正式組織名・下">
      <span>BS業務課</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="社員区分">
      <span>区分A</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="職位">
      <span>課長</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="組合区分">
      <span>組合員</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="グッドライフ区分">
      <span>加入あり</span>
    </InfoTableCell>,
  ],
};

export const NoBorderHeaderWithLongLines = Template.bind({});
NoBorderHeaderWithLongLines.args = {
  modifiers: 'no-border-header',
  children: [
    <InfoTableCell modifiers="pair" label="イオンアイビス(株)">
      <span>01234567</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="氏名">
      <span>山田　太郎</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="氏名（カナ）">
      <span>ヤマダ　タロウ</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="会社名称">
      <span>
        イオンアイビス株式会社
        <br />
        ああああああ
      </span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="正式組織名・上">
      <span>ああああああああああああああああああああああああああ</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="正式組織名・下">
      <span>BS業務課</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="社員区分">
      <span>区分A</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="職位">
      <span>課長</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="組合区分">
      <span>組合員</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="グッドライフ区分">
      <span>加入あり</span>
    </InfoTableCell>,
  ],
};

export const NoBorderHeaderSingle = Template.bind({});
NoBorderHeaderSingle.args = {
  modifiers: 'no-border-header-single',
  children: [
    <InfoTableCell modifiers="pair" label="香料">
      <span>手配済</span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="供花">
      <span>
        辞退（
        <TextLink href="#" modifiers="underline">
          手配できます
        </TextLink>
        ）
      </span>
    </InfoTableCell>,
    <InfoTableCell modifiers="pair" label="弔電">
      <span>
        辞退（
        <TextLink href="#" modifiers="underline">
          手配できます
        </TextLink>
        ）
      </span>
    </InfoTableCell>,
  ],
};
