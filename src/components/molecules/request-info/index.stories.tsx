import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RequestInfo, RequestInfoProps } from '.';
import { RequestInfoItem } from 'components/atoms/request-info-item';
import { Button } from 'components/atoms/button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/molecules/RequestInfo',
  component: RequestInfo,
  parameters: {
    paddings: {
      default: 'small',
    },
    backgrounds: {
      default: 'gray',
    },
  },
} as Meta;

const Template: Story<RequestInfoProps> = args => <RequestInfo {...args} />;

export const WaitingWithBadge = Template.bind({});
WaitingWithBadge.args = {
  status: 'waiting',
  badge: true,
  title: '外出・出張の報告',
  children: (
    <>
      <RequestInfoItem label="申請日" value="2021/01/29" />
      <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11 " />
      <RequestInfoItem label="訪問先" value="福岡" />
      <RequestInfoItem label="承認者" value="上野 透" />
    </>
  ),
  handleCardClick: action('handleCardClick'),
};

export const RemandWithBadge = Template.bind({});
RemandWithBadge.args = {
  status: 'remand',
  badge: true,
  title: '外出・出張の報告',
  children: (
    <>
      <RequestInfoItem label="申請日" value="2021/01/29" />
      <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11 " />
      <RequestInfoItem label="訪問先" value="福岡" />
      <RequestInfoItem label="承認者" value="上野 透" />
    </>
  ),
  handleCardClick: action('handleCardClick'),
};

export const InProgressWithBadge = Template.bind({});
InProgressWithBadge.args = {
  status: 'in-progress',
  badge: true,
  title: '外出・出張の報告',
  children: (
    <>
      <RequestInfoItem label="申請日" value="2021/01/29" />
      <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11 " />
      <RequestInfoItem label="訪問先" value="福岡" />
      <RequestInfoItem label="承認者" value="上野 透" />
    </>
  ),
  handleCardClick: action('handleCardClick'),
};

export const Approval = Template.bind({});
Approval.args = {
  status: 'approval',
  title: '弔事の連絡（代理）',
  children: (
    <>
      <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
      <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
      <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
    </>
  ),
  handleCardClick: action('handleCardClick'),
};

export const WaitingWithButtons = Template.bind({});
WaitingWithButtons.args = {
  status: 'waiting',
  badge: true,
  title: '外出・出張の報告',
  children: (
    <>
      <RequestInfoItem label="申請日" value="2021/01/29" />
      <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11 " />
      <RequestInfoItem label="訪問先" value="福岡" />
      <RequestInfoItem label="承認者" value="上野 透" />
    </>
  ),
  buttons: (
    <>
      <Button modifiers="third" onClick={action('denial')}>
        否認
      </Button>
      <Button modifiers="secondary" onClick={action('remand')}>
        差戻し
      </Button>
      <Button modifiers="primary" onClick={action('approval')}>
        承認
      </Button>
    </>
  ),
  handleCardClick: action('handleCardClick'),
};

export const WithDuplicateButtonText = Template.bind({});
WithDuplicateButtonText.args = {
  modifiers: 'with-duplicate',
  status: 'approval',
  badge: false,
  title: '外出・出張の報告',
  children: (
    <>
      <RequestInfoItem label="申請日" value="2021/01/29" />
      <RequestInfoItem label="期間" value="2021/02/10 - 2021/02/11 " />
      <RequestInfoItem label="訪問先" value="福岡" />
      <RequestInfoItem label="承認者" value="上野 透" />
    </>
  ),
  buttons: (
    <>
      <Button modifiers="text" onClick={action('copy')}>
        コピーして作成する
      </Button>
    </>
  ),
  handleCardClick: action('handleCardClick'),
};
