import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TableActionButton } from './';
import { NavItem } from 'components/atoms/nav-item';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/atoms/TableActionButton',
  component: TableActionButton,
  parameters: {
    paddings: {
      default: 'small',
    },
  },
} as Meta;

/* const Template: Story<TableActionButtonProps> = args => <TableActionButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <NavItem key={1} href="#" label="編集する" subnav />,
    <NavItem key={2} href="#" label="稼働を再開する" subnav />,
    <NavItem key={3} href="#" label="コピーする" subnav />,
    <NavItem key={4} href="#" label="削除する" subnav />,
  ],
}; */

const Wrapper: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TableActionButton>
        <NavItem key={1} href="#" label="編集する" subnav />
        <NavItem key={2} href="#" label="稼働を再開する" subnav />
        <NavItem key={3} href="#" label="コピーする" subnav />
        <NavItem key={4} href="#" label="削除する" subnav />
      </TableActionButton>
    </div>
  );
};
export const Normal: Story = () => (
  <MemoryRouter>
    <Wrapper />
  </MemoryRouter>
);

const Wrapper2: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <TableActionButton>
        <NavItem key={1} href="#" label="編集する" subnav />
        <NavItem key={2} href="#" label="稼働を再開する" subnav />
        <NavItem key={3} href="#" label="コピーする" subnav />
        <NavItem key={4} href="#" label="削除する" subnav />
      </TableActionButton>
    </div>
  );
};
export const AlignLeft: Story = () => (
  <MemoryRouter>
    <Wrapper2 />
  </MemoryRouter>
);

const Wrapper3: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}
    >
      <TableActionButton>
        <NavItem key={1} href="#" label="編集する" subnav />
        <NavItem key={2} href="#" label="稼働を再開する" subnav />
        <NavItem key={3} href="#" label="コピーする" subnav />
        <NavItem key={4} href="#" label="削除する" subnav />
      </TableActionButton>
    </div>
  );
};
export const AlignBottom: Story = () => (
  <MemoryRouter>
    <Wrapper3 />
  </MemoryRouter>
);
