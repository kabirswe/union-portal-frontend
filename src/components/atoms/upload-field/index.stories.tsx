import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UploadField, UploadFieldProps } from './';

export default {
  title: 'components/atoms/UploadField',
  component: UploadField,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<UploadFieldProps> = args => <UploadField {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      ここにファイルをドラッグ
      <br />
      または
    </>
  ),
  description: '形式：jpg / png | サイズ：30MBまで',
};

export const WithError = Template.bind({});
WithError.args = {
  children: (
    <>
      ここにファイルをドラッグ
      <br />
      または
    </>
  ),
  description: '形式：jpg / png | サイズ：30MBまで',
  modifiers: 'with-error',
};

export const CSVList = Template.bind({});
CSVList.args = {
  accept: 'text/csv',
  children: (
    <>
      CSVファイルをドラッグ＆ドロップするか
      <br />
      パソコンから画像を貼り付けしてください。
    </>
  ),
};

export const NotDraggable = Template.bind({});
NotDraggable.args = {
  label: '添付ファイルを追加（10MBまで）',
  accept: 'application/pdf',
  isNotDraggable: true,
};
