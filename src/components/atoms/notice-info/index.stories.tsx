import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NoticeInfo, NoticeInfoProps } from './';
import { Tag } from 'components/atoms/tag';
import { Omitpipe } from 'components/utils/omitpipe';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/atoms/NoticeInfo',
  component: NoticeInfo,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<NoticeInfoProps> = args => (
  <MemoryRouter>
    <NoticeInfo {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  title: 'POSレジシステム障害についてお知らせ',
  tags: (
    <>
      <Tag modifiers="filled" color="red">
        重要
      </Tag>
      <Tag modifiers="filled" color="blue">
        商品関連
      </Tag>
    </>
  ),
  date: '2021.06.20 14:00',
  href: '#',
};

export const SideBySide = Template.bind({});
SideBySide.args = {
  title: '役員ショートメッセージ',
  tags: (
    <>
      <Tag modifiers="filled" color="red">
        システム障害
      </Tag>
    </>
  ),
  date: '2021.06.20 14:00',
  modifiers: ['unread', 'side-by-side'],
  href: '#',
};

export const OverflowText = Template.bind({});
OverflowText.args = {
  title: '役員ショートメッセージ',
  children: (
    <Omitpipe linesPC={1} linesSP={1}>
      エスカレーターでの危険行為におけるお詫びと対応についてエスカレーターでの危険行為におけるお詫びと対応についてエスカレーターでの危険行為におけるお詫びと対応についてエスカレーターでの危険行為におけるお詫びと対応についてエスカレーターでの危険行為におけるお詫びと対応についてエスカレーターでの危険行為におけるお詫びと対応について
    </Omitpipe>
  ),
  date: '2021.06.20 14:00',
  href: '#',
};

export const UnreadMessage = Template.bind({});
UnreadMessage.args = {
  title: '役員ショートメッセージ',
  children: '福島県沖で発生した地震による店舗の営業状況について',
  date: '2021.06.20 14:00',
  modifiers: 'unread',
  href: '#',
};
