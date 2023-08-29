import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LoggedInContain, LoggedInContainProps } from './';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'components/molecules/LoggedInContain',
  component: LoggedInContain,
} as Meta;

const Template: Story<LoggedInContainProps> = args => (
  <MemoryRouter>
    <LoggedInContain {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {};

export const SignedIn = Template.bind({});
SignedIn.args = {
  isSignedIn: true,
  employeesData: {
    FirstNameKanji: '実季',
    LastNameKanji: '杉山',
    EmployeeCode: '0759317',
    FinancialCompanyCode: '0063',
    FinancialCompanyNameKanji: 'イオンベーカリー(株)',
    SecondLevelCode: '63',
    SecondLevelName: '＊',
    ThirdLevelCode: '570000',
    ThirdLevelName: 'イオンベーカリー',
    PersonnelAffiliationCode: '38249',
    PositionNameKanji: '中型店長',
    PositionCode: '008',
  },
};
