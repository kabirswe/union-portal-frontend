import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UploadList, UploadListItem, UploadListProps } from './';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/molecules/UploadList',
  component: UploadList,
} as Meta;

const Template: Story<UploadListProps> = args => <UploadList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'アップロード済みファイル',
  children: [
    // eslint-disable-next-line no-console
    <UploadListItem key={0} fileSize="32.4KB" handleOnClick={action('remove')}>
      meibo.csv
    </UploadListItem>,
  ],
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'アップロード済みファイル',
  children: [
    // eslint-disable-next-line no-console
    <UploadListItem key={0} fileSize="30KB" handleOnClick={action('remove')}>
      weibo1.csv
    </UploadListItem>,
    // eslint-disable-next-line no-console
    <UploadListItem key={1} fileSize="40KB" handleOnClick={action('remove')}>
      weibo2.csv
    </UploadListItem>,
  ],
};

export const Column = Template.bind({});
Column.args = {
  label: 'アップロード済みファイル',
  modifiers: 'column',
  children: [
    // eslint-disable-next-line no-console
    <UploadListItem key={0} fileSize="30KB" handleOnClick={action('remove')}>
      weibo1.csv
    </UploadListItem>,
    // eslint-disable-next-line no-console
    <UploadListItem key={1} fileSize="40KB" handleOnClick={action('remove')}>
      weibo2.csv
    </UploadListItem>,
    // eslint-disable-next-line no-console
    <UploadListItem key={2} fileSize="50KB" handleOnClick={action('remove')}>
      weibo3.csv
    </UploadListItem>,
  ],
};

export const Fill = Template.bind({});
Fill.args = {
  label: 'アップロード済みファイル',
  children: [
    // eslint-disable-next-line no-console
    <UploadListItem key={0} fileSize="30KB" modifiers="fill" handleOnClick={action('remove')}>
      weibo1.csv
    </UploadListItem>,
    // eslint-disable-next-line no-console
    <UploadListItem key={1} fileSize="40KB" modifiers="fill" handleOnClick={action('remove')}>
      weibo2.csv
    </UploadListItem>,
    // eslint-disable-next-line no-console
    <UploadListItem key={2} fileSize="50KB" modifiers="fill" handleOnClick={action('remove')}>
      weibo3.csv
    </UploadListItem>,
  ],
};

export const ColumnFill = Template.bind({});
ColumnFill.args = {
  label: 'アップロード済みファイル',
  modifiers: 'column',
  children: [
    // eslint-disable-next-line no-console
    <UploadListItem key={0} fileSize="30KB" modifiers="fill" handleOnClick={action('remove')}>
      weibo1.csv
    </UploadListItem>,
    // eslint-disable-next-line no-console
    <UploadListItem key={1} fileSize="40KB" modifiers="fill" handleOnClick={action('remove')}>
      weibo2.csv
    </UploadListItem>,
    // eslint-disable-next-line no-console
    <UploadListItem key={2} fileSize="50KB" modifiers="fill" handleOnClick={action('remove')}>
      weibo3.csv
    </UploadListItem>,
  ],
};
