import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Section, SectionProps } from '.';
import { Heading } from 'components/atoms/heading';
import { Text } from 'components/atoms/text';
import { CaptionList } from 'components/atoms/caption-list';

export default {
  title: 'components/molecules/Section',
  component: Section,
} as Meta;

const Template: Story<SectionProps> = args => <Section {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      <Heading useDiv>弔事の連絡</Heading>
      <Text>
        このたびは逝去の報に接し、心からお悔やみ申し上げます。近親者が亡くなられた方には、慶弔休暇（もしくは特別休暇）の調整他のため、以下に連絡の取れる連絡先・葬儀等についての情報をお聞きしております。
      </Text>
    </>
  ),
};

export const Border = Template.bind({});
Border.args = {
  modifiers: 'border',
  children: (
    <>
      <Heading useDiv>弔事の連絡</Heading>
      <Text>
        このたびは逝去の報に接し、心からお悔やみ申し上げます。近親者が亡くなられた方には、慶弔休暇（もしくは特別休暇）の調整他のため、以下に連絡の取れる連絡先・葬儀等についての情報をお聞きしております。
      </Text>
    </>
  ),
};

export const CardBorder = Template.bind({});
CardBorder.args = {
  modifiers: 'card-border',
  children: (
    <>
      <Heading tag="h3">弔事の連絡</Heading>
      <Text>
        このたびは逝去の報に接し、心からお悔やみ申し上げます。近親者が亡くなられた方には、慶弔休暇（もしくは特別休暇）の調整他のため、以下に連絡の取れる連絡先・葬儀等についての情報をお聞きしております。
      </Text>
    </>
  ),
};

export const Card = Template.bind({});
Card.args = {
  modifiers: 'card',
  children: (
    <>
      <Heading tag="h2">弔事の連絡</Heading>
      <Text>
        このたびは逝去の報に接し、心からお悔やみ申し上げます。近親者が亡くなられた方には、慶弔休暇（もしくは特別休暇）の調整他のため、以下に連絡の取れる連絡先・葬儀等についての情報をお聞きしております。
      </Text>
    </>
  ),
};

export const Fill = Template.bind({});
Fill.args = {
  modifiers: 'fill',
  children: (
    <>
      <Text>
        このたびは逝去の報に接し、心からお悔やみ申し上げます。近親者が亡くなられた方には、慶弔休暇（もしくは特別休暇）の調整他のため、以下に連絡の取れる連絡先・葬儀等についての情報をお聞きしております。
      </Text>
      <CaptionList>
        <li>
          供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
        </li>
      </CaptionList>
    </>
  ),
};

export const FillWhite = Template.bind({});
FillWhite.args = {
  modifiers: 'fill-white',
  children: (
    <>
      <Text>
        香料・供花・弔電について、辞退やキャンセル等の理由で未手配の場合、ご逝去日から1年以内に申請いただければご手配いたします。
      </Text>
      <CaptionList>
        <li>
          供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
        </li>
      </CaptionList>
    </>
  ),
};

export const Fullpage = Template.bind({});
Fullpage.args = {
  modifiers: 'fullpage',
  children: (
    <>
      <Heading useDiv>福島県沖で発生した地震による店舗の営業状況について</Heading>
      <Text>
        ２月１３日（土）に福島県沖で発生した地震で被害にあわれた方々に、心よりお見舞い申し上げます。
        福島県、宮城県で営業する総合スーパー２店舗と、イオンモール・イオンタウンの２つのショッピング
        センターにおいて、スプクリンクラー破損や天井落下等の影響により、本日の営業休止を予定しています。
        なお、下記以外の店舗については通常通り営業をしております。
        イオンは、お客さまおよび従業員の安全を最優先で確保した上で、地域の生活を守るための
        インフラ機能として営業を継続してまいります。
      </Text>
    </>
  ),
};
Fullpage.parameters = {
  backgrounds: {
    default: 'gray',
  },
  paddings: {
    default: 'small',
  },
};

export const WithHead = Template.bind({});
WithHead.args = {
  modifiers: 'card',
  children: (
    <>
      <Text>
        香料・供花・弔電について、辞退やキャンセル等の理由で未手配の場合、ご逝去日から1年以内に申請いただければご手配いたします。
      </Text>
      <CaptionList>
        <li>
          供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
        </li>
      </CaptionList>
    </>
  ),
  head: (
    <>
      <Heading tag="h5">重要なお知らせ</Heading>
    </>
  ),
};

export const RoundLarge = Template.bind({});
RoundLarge.args = {
  modifiers: 'card',
  roundedSize: 'large',
  children: (
    <>
      <Text>
        香料・供花・弔電について、辞退やキャンセル等の理由で未手配の場合、ご逝去日から1年以内に申請いただければご手配いたします。
      </Text>
      <CaptionList>
        <li>
          供花・弔電はまとめてのご手配となるため、一方のみを手配された後にもう一方を申請することはできません。予めご了承ください。
        </li>
      </CaptionList>
    </>
  ),
};
