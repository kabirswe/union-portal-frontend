import React from 'react';
import { Grid, GridCell, Props } from './';
import { NumberedButton } from 'components/atoms/numbered-button';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'components/organisms/Grid',
  component: Grid,
} as Meta;

const Template: Story<Props> = args => <Grid {...args} />;
export const Normal = Template.bind({});

Normal.args = {
  children: [
    <>
      <GridCell colPC="12" colSP="12">
        <NumberedButton number="1" title="店長・事業部長向け">
          担当店舗の売上や月中コントロールをすぐ確認できます。
        </NumberedButton>
      </GridCell>
      <GridCell colPC="4" colSP="12">
        <NumberedButton number="2" title="店長・事業部長向け">
          担当店舗の売上や月中コントロールをすぐ確認できます。
        </NumberedButton>
      </GridCell>
      <GridCell colPC="4" colSP="12">
        <NumberedButton number="3" title="店長・事業部長向け">
          担当店舗の売上や月中コントロールをすぐ確認できます。
        </NumberedButton>
      </GridCell>
      <GridCell colPC="4" colSP="12">
        <NumberedButton number="4" title="店長・事業部長向け">
          担当店舗の売上や月中コントロールをすぐ確認できます。
        </NumberedButton>
      </GridCell>
      <GridCell colPC="12" colSP="12">
        <NumberedButton number="5" title="店長・事業部長向け">
          担当店舗の売上や月中コントロールをすぐ確認できます。
        </NumberedButton>
      </GridCell>
      <GridCell colPC="4" colSP="12">
        <NumberedButton number="6" title="店長・事業部長向け">
          担当店舗の売上や月中コントロールをすぐ確認できます。
        </NumberedButton>
      </GridCell>
      <GridCell colPC="4" colSP="12">
        <NumberedButton number="7" title="店長・事業部長向け">
          担当店舗の売上や月中コントロールをすぐ確認できます。
        </NumberedButton>
      </GridCell>
      <GridCell colPC="4" colSP="12">
        <NumberedButton number="8" title="店長・事業部長向け">
          担当店舗の売上や月中コントロールをすぐ確認できます。
        </NumberedButton>
      </GridCell>
    </>,
  ],
};
