import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RequestInfoList, RequestInfoListProps } from './';
import { RequestInfo } from 'components/molecules/request-info';
import { RequestInfoItem } from 'components/atoms/request-info-item';
import { Button } from 'components/atoms/button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/molecules/RequestInfoList',
  component: RequestInfoList,
  parameters: {
    backgrounds: {
      default: 'gray',
    },
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<RequestInfoListProps> = args => <RequestInfoList {...args} />;

const handleCardClick = () => {
  action('handleCardClick');
};

export const NormalList = Template.bind({});
NormalList.args = {
  children: (
    <>
      <RequestInfo status={'approval'} title={'弔事の連絡（代理）'} handleCardClick={handleCardClick}>
        <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
        <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
        <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
      </RequestInfo>
      <RequestInfo status={'in-progress'} title={'外出・出張の報告'} handleCardClick={handleCardClick}>
        <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
        <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
        <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
      </RequestInfo>
      <RequestInfo status={'remand'} badge={true} title={'弔事の連絡（代理）'} handleCardClick={handleCardClick}>
        <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
        <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
        <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
      </RequestInfo>
      <RequestInfo status={'waiting'} badge={true} title={'外出・出張の報告'} handleCardClick={handleCardClick}>
        <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
        <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
        <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
      </RequestInfo>
    </>
  ),
};

export const ApproveList = Template.bind({});
ApproveList.args = {
  children: (
    <>
      <RequestInfo
        status={'approval'}
        title={'弔事の連絡（代理）'}
        buttons={
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
        }
        handleCardClick={handleCardClick}
      >
        <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
        <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
        <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
      </RequestInfo>
      <RequestInfo
        status={'in-progress'}
        title={'外出・出張の報告'}
        buttons={
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
        }
        handleCardClick={handleCardClick}
      >
        <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
        <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
        <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
      </RequestInfo>
      <RequestInfo
        status={'remand'}
        badge={true}
        title={'弔事の連絡（代理）'}
        buttons={
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
        }
        handleCardClick={handleCardClick}
      >
        <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
        <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
        <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
      </RequestInfo>
      <RequestInfo
        status={'waiting'}
        badge={true}
        title={'外出・出張の報告'}
        buttons={
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
        }
        handleCardClick={handleCardClick}
      >
        <RequestInfoItem label="申請日" value="2021/01/29" modifiers="long" />
        <RequestInfoItem label="従業員名" value="山田 太郎（あなた）" modifiers="long" />
        <RequestInfoItem label="代理申請者" value="-" modifiers="long" />
      </RequestInfo>
    </>
  ),
};
