import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ContentCellProps, DataTable, DataTableProps, HeaderCellProps } from './';
import { TableActionButton } from 'components/atoms/table-action-button/index';
import { NavItem } from 'components/atoms/nav-item/index';
import { ButtonContainer } from 'components/molecules/button-container';
import { Button } from 'components/atoms/button';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/molecules/DataTable',
  component: DataTable,
  parameters: {
    backgrounds: {
      default: 'gray',
    },
    paddings: {
      default: 'small',
    },
  },
} as Meta;

const Template: Story<DataTableProps> = args => (
  <MemoryRouter>
    <DataTable {...args} />
  </MemoryRouter>
);

const headers: Array<HeaderCellProps> = [
  {
    type: 'id',
    value: 'ID',
  },
  {
    value: '管理用タイトル',
  },
  {
    value: '送信状況',
  },
  {
    value: '送信タイミング',
    minwidth: '220px',
  },
  {
    value: '送信先',
    minwidth: '200px',
  },
  {
    value: '更新日時',
    minwidth: '200px',
  },
  {
    type: 'action',
    value: '',
  },
];
export const Normal = Template.bind({});
const contents: Array<Array<ContentCellProps>> = [
  [
    {
      value: '1',
    },
    {
      value: '弔事連絡が新規作成された時のメール弔事連絡が新規作成された時のメール弔事連絡が新規作成された時のメール',
    },
    {
      value: '稼働中',
    },
    {
      value: (
        <>
          弔事連絡の
          <br />
          新規作成が完了した時
        </>
      ),
    },
    {
      value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <TableActionButton>
          <NavItem href="#" label="編集する" subnav />
          <NavItem href="#" label="稼働を再開する" subnav />
          <NavItem href="#" label="コピーする" subnav />
          <NavItem href="#" label="削除する" subnav />
        </TableActionButton>
      ),
    },
  ],
  [
    {
      value: '2',
    },
    {
      value: '弔事連絡が新規作成された時のメール',
    },
    {
      value: '稼働中',
    },
    {
      value: (
        <>
          弔事連絡の
          <br />
          新規作成が完了した時
        </>
      ),
    },
    {
      value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <TableActionButton>
          <NavItem href="#" label="編集する" subnav />
          <NavItem href="#" label="稼働を再開する" subnav />
          <NavItem href="#" label="コピーする" subnav />
          <NavItem href="#" label="削除する" subnav />
        </TableActionButton>
      ),
    },
  ],
  [
    {
      value: '3',
    },
    {
      value: '弔事連絡が新規作成された時のメール',
    },
    {
      value: '稼働中',
    },
    {
      value: (
        <>
          弔事連絡の
          <br />
          新規作成が完了した時
        </>
      ),
    },
    {
      value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <TableActionButton>
          <NavItem href="#" label="編集する" subnav />
          <NavItem href="#" label="稼働を再開する" subnav />
          <NavItem href="#" label="コピーする" subnav />
          <NavItem href="#" label="削除する" subnav />
        </TableActionButton>
      ),
    },
  ],
  [
    {
      value: '4',
    },
    {
      value: '弔事連絡が新規作成された時のメール',
    },
    {
      value: '稼働中',
    },
    {
      value: (
        <>
          弔事連絡の
          <br />
          新規作成が完了した時
        </>
      ),
    },
    {
      value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <TableActionButton>
          <NavItem href="#" label="編集する" subnav />
          <NavItem href="#" label="稼働を再開する" subnav />
          <NavItem href="#" label="コピーする" subnav />
          <NavItem href="#" label="削除する" subnav />
        </TableActionButton>
      ),
    },
  ],
  [
    {
      value: '5',
    },
    {
      value: '弔事連絡が新規作成された時のメール',
    },
    {
      value: '稼働中',
    },
    {
      value: (
        <>
          弔事連絡の
          <br />
          新規作成が完了した時
        </>
      ),
    },
    {
      value: '承認者A, 承認者B,申請者,関係者A,関係者B, aaa@aeon.co.jp, 他3名',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <TableActionButton>
          <NavItem href="#" label="編集する" subnav />
          <NavItem href="#" label="稼働を再開する" subnav />
          <NavItem href="#" label="コピーする" subnav />
          <NavItem href="#" label="削除する" subnav />
        </TableActionButton>
      ),
    },
  ],
];
Normal.args = {
  headers,
  contents,
  onRowClick: action('rowClick'),
};

export const WithActonButton = Template.bind({});
const headers2: Array<HeaderCellProps> = [
  {
    type: 'data',
    value: 'ID',
  },
  {
    value: 'グループ名',
  },
  {
    value: '送信先アドレス',
  },
  {
    value: '更新記録',
  },
  {
    type: 'action',
    value: '',
  },
];
const contents2: Array<Array<ContentCellProps>> = [
  [
    {
      value: '1',
    },
    {
      value: '人事部',
    },
    {
      value: 'jinji1@aeon.co.jp, jinji2@aeon.co.jp, jinji2@aeon.co.jp, 他 10件',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <ButtonContainer modifiers="border">
          <Button modifiers="text">編集</Button>
          <Button modifiers="text">削除</Button>
        </ButtonContainer>
      ),
    },
  ],
  [
    {
      value: '2',
    },
    {
      value: '人事部',
    },
    {
      value: 'jinji1@aeon.co.jp, jinji2@aeon.co.jp, jinji2@aeon.co.jp, 他 10件',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <ButtonContainer modifiers="border">
          <Button modifiers="text">編集</Button>
          <Button modifiers="text">削除</Button>
        </ButtonContainer>
      ),
    },
  ],
  [
    {
      value: '3',
    },
    {
      value: '人事部',
    },
    {
      value: 'jinji1@aeon.co.jp, jinji2@aeon.co.jp, jinji2@aeon.co.jp, 他 10件',
    },
    {
      value: (
        <>
          {'2021/02/10 10:00'}
          <br />
          {'更新者：山田 太郎'}
        </>
      ),
    },
    {
      value: (
        <ButtonContainer modifiers="border">
          <Button modifiers="text">編集</Button>
          <Button modifiers="text">削除</Button>
        </ButtonContainer>
      ),
    },
  ],
];
WithActonButton.args = {
  modifiers: 'with-action-buttons',
  headers: headers2,
  contents: contents2,
  onRowClick: action('rowClick'),
};
