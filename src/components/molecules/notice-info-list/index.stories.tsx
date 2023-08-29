import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NoticeInfoList } from './';
import { NoticeInfo } from 'components/atoms/notice-info';
import { Tag } from 'components/atoms/tag';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/molecules/NoticeInfoList',
  component: NoticeInfoList,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story = args => (
  <MemoryRouter>
    <NoticeInfoList {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <NoticeInfo
      key={1}
      href="#"
      title="役員ショートメッセージ"
      date="2021.06.20 14:00"
      modifiers="unread"
      tags={
        <Tag color="red" modifiers="filled">
          重要
        </Tag>
      }
    />,
    <NoticeInfo
      key={2}
      href="#"
      title="役員ショートメッセージ"
      date="2021.06.20 14:00"
      tags={
        <>
          <Tag color="red" modifiers="filled">
            重要
          </Tag>
          <Tag color="blue" modifiers="filled">
            パート
          </Tag>
        </>
      }
    />,
    <NoticeInfo href="#" key={3} title="役員ショートメッセージ" date="2021.06.20 14:00" />,
    <NoticeInfo
      key={3}
      href="#"
      title="役員ショートメッセージ"
      date="2021.06.20 14:00"
      tags={
        <>
          <Tag color="red" modifiers="filled">
            重要
          </Tag>
          <Tag color="blue" modifiers="filled">
            パート
          </Tag>
        </>
      }
    />,
    <NoticeInfo key={5} href="#" title="役員ショートメッセージ" date="2021.06.20 14:00" />,
  ],
};

export const SideBySide = Template.bind({});
SideBySide.args = {
  children: [
    <NoticeInfo
      key={1}
      href="#"
      title="役員ショートメッセージ"
      date="2021.06.20 14:00"
      modifiers={['unread', 'side-by-side']}
      tags={
        <Tag color="red" modifiers="filled">
          重要
        </Tag>
      }
    />,
    <NoticeInfo
      key={2}
      href="#"
      title="役員ショートメッセージ"
      date="2021.06.20 14:00"
      modifiers="side-by-side"
      tags={
        <>
          <Tag color="red" modifiers="filled">
            重要
          </Tag>
          <Tag color="blue" modifiers="filled">
            パート
          </Tag>
        </>
      }
    />,
    <NoticeInfo key={3} href="#" title="役員ショートメッセージ" date="2021.06.20 14:00" modifiers="side-by-side" />,
    <NoticeInfo
      key={3}
      href="#"
      title="役員ショートメッセージ"
      date="2021.06.20 14:00"
      modifiers="side-by-side"
      tags={
        <>
          <Tag color="red" modifiers="filled">
            重要
          </Tag>
          <Tag color="blue" modifiers="filled">
            パート
          </Tag>
        </>
      }
    />,
    <NoticeInfo key={5} href="#" title="役員ショートメッセージ" date="2021.06.20 14:00" modifiers="side-by-side" />,
  ],
};
