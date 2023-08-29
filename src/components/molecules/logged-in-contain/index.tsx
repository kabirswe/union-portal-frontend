import React from 'react';
import { mapModifiers } from 'libs/component';
import { UserAccount } from 'components/atoms/userAccount';
import { Text } from 'components/atoms/text';
import { Button } from 'components/atoms/button';
import { InternalLink } from 'components/atoms/internal-link';
import { URLS } from 'consts/urls';
import { Employee } from 'api/model';
import { ROUTES } from 'consts/routes';

export interface LoggedInContainProps {
  id?: string;
  className?: string;
  isSignedIn?: boolean;
  employeesData?: Employee;
}

export const LoggedInContain: React.FC<LoggedInContainProps> = ({
  id,
  className: additionalClassName = '',
  isSignedIn,
  employeesData,
}) => {
  const componentClassName = mapModifiers('m-logged-in-contain', isSignedIn && 'signedin');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      {isSignedIn ? (
        <>
          <Text align="center" modifiers="small">
            以下のアカウントでサインイン済みです
          </Text>
          <UserAccount
            modifiers="card"
            userName={`${employeesData?.LastNameKanji || '-'} ${employeesData?.FirstNameKanji || '-'}`}
            companyName={employeesData?.FinancialCompanyNameKanji || '-'}
            position={employeesData?.PositionNameKanji || '-'}
            companyId={employeesData?.EmployeeCode || '-'}
          />
          <Button modifiers="primary" size="large" href={ROUTES.HOM_01_01}>
            このアカウントで利用開始
          </Button>
          {/* TODO: href */}
          <InternalLink isActive href="#">
            別のアカウントでサインイン
          </InternalLink>
        </>
      ) : (
        <>
          {/* TODO: href */}
          <Button modifiers="primary" size="large" href={ROUTES.ADFS}>
            サインインへ進む
          </Button>
          <InternalLink href={URLS.AEON_INFO} target="_blank" icon="link-new-window">
            コーポレートサイト
          </InternalLink>
        </>
      )}
    </div>
  );
};
