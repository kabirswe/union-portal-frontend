import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Accordion, AccordionProps } from './';
import { InfoTable } from 'components/molecules/info-table';
import { InfoTableCell } from 'components/atoms/info-table-cell';

export default {
  title: 'components/molecules/Accordion',
  component: Accordion,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<AccordionProps> = args => <Accordion {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: '確認する',
  children: (
    <InfoTable modifiers="no-border-header">
      <InfoTableCell modifiers="pair" label="イオンアイビス(株)">
        <span>01234567</span>
      </InfoTableCell>
      <InfoTableCell modifiers="pair" label="氏名">
        <span>山田　太郎</span>
      </InfoTableCell>
      <InfoTableCell modifiers="pair" label="氏名（カナ）">
        <span>ヤマダ　タロウ</span>
      </InfoTableCell>
      <InfoTableCell modifiers="pair" label="会社名称">
        <span>イオンアイビス株式会社</span>
      </InfoTableCell>
      <InfoTableCell modifiers="pair" label="正式組織名・上">
        <span>BS業務部</span>
      </InfoTableCell>
      <InfoTableCell modifiers="pair" label="正式組織名・下">
        <span>BS業務課</span>
      </InfoTableCell>
      <InfoTableCell modifiers="pair" label="社員区分">
        <span>区分A</span>
      </InfoTableCell>
      <InfoTableCell modifiers="pair" label="職位">
        <span>課長</span>
      </InfoTableCell>
      <InfoTableCell modifiers="pair" label="組合区分">
        <span>組合員</span>
      </InfoTableCell>
      <InfoTableCell modifiers="pair" label="グッドライフ区分">
        <span>加入あり</span>
      </InfoTableCell>
    </InfoTable>
  ),
};

export const WithText = Template.bind({});
WithText.args = {
  label: '確認する',
  children:
    '疑やろぱゃ学施介アユクヌ属8続ヱ羅特っ高対サタノテ決長ラウロテ回今台びばのね北済てぼゅ髄発ハアメ止流ヌ万信橋大全よぽ。化ロマ希由レ丸遣ヱルトク中著冒ワタヒト提飾ッぎれ務権いぜ氏環訪かくで登4一足ほねちだ後表ごむざく報岡シルク場第ざい当仙ラあり観国こびずそ元給イワミ渡見化愛請ぱー。監児でも福際ヌウオ会旋断姫かフるろ村海セコナ版箱輸せラおし対監そろっ経8面コ提抜ヱル逆6縮けっね慎戒妻熊習らか。',
};
