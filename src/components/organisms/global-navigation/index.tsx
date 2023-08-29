import React, { useCallback, useState } from 'react';
import { mapModifiers } from 'libs/component';
import { Icon } from 'components/atoms/icon';
import { NavIcon } from 'components/atoms/nav-icon';
import { UserAccount } from 'components/atoms/userAccount';
import { NavList } from 'components/molecules/nav-list';
import { ShortcutNav } from 'components/molecules/shortcut-nav';
import { ScrollFreezer } from 'libs/scroll-freezer';
import logo from 'images/common/AeonLogo.svg';
import { Button } from 'components/atoms/button';
import { useIsFetching, useQueryClient } from 'react-query';
import { getGetEmployeesEmployeeCodeQueryKey } from 'api/api';
import { AxiosResponse } from 'axios';
import { EmployeeResponse } from 'api/model';
import { Loading } from 'components/atoms/loading';
import { Link } from 'components/utils/link';
import { ROUTES } from 'consts/routes';

export interface GlobalNavigationProps {
  brandHref?: string;
  children?: React.ReactNode;
  shortcuts?: React.ReactNode;
  hasNotification?: boolean;
  showFloatButtons?: boolean;
  id?: string;
  className?: string;
  isSimple?: boolean;
}

export const GlobalNavigation: React.FC<GlobalNavigationProps> = ({
  brandHref = ROUTES.HOM_01_01,
  children,
  shortcuts,
  hasNotification = false,
  showFloatButtons = true,
  id,
  className: additionalClassName = '',
  isSimple,
}) => {
  const [isOpened, setOpened] = useState(false);
  const handleMenuClick = useCallback(() => {
    setTimeout(() => {
      !isOpened ? ScrollFreezer.freeze() : ScrollFreezer.unfreeze();
      setOpened(!isOpened);
    });
  }, [isOpened]);

  const componentClassName = mapModifiers(
    'o-global-navigation',
    isOpened && 'opened',
    hasNotification && 'notified',
    !showFloatButtons && 'no-float'
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();

  const queryClient = useQueryClient();

  // TODO: Get EmployeeId
  const EmployeeId = '9999';
  const queryKey = getGetEmployeesEmployeeCodeQueryKey(EmployeeId);
  const isFetchingGetUser = useIsFetching(queryKey);
  const getUser = queryClient.getQueryData<AxiosResponse<EmployeeResponse>>(queryKey);
  const userData = getUser?.data.BusinessData.Bodies;

  return (
    <div className={className}>
      {isSimple ? (
        <header className="o-global-navigation__header">
          <div className="o-global-navigation__logo">
            <Link to={brandHref}>
              <img src={logo} alt="AEON" />
            </Link>
          </div>
        </header>
      ) : (
        <>
          <header className="o-global-navigation__header">
            <button type="button" className="o-global-navigation__toggle-button" onClick={handleMenuClick}>
              <Icon name="menu" />
            </button>
            <div className="o-global-navigation__logo">
              <Link to={brandHref}>
                <img src={logo} alt="AEON" />
              </Link>
            </div>
            <div className="o-global-navigation__noti-button">
              {id === 'home' && (
                <Link to={ROUTES.WDT_01_01}>
                  <NavIcon icon="apps" className="a-nav-icon__apps-icon-align" />
                </Link>
              )}
            </div>
          </header>
          <button type="button" className="o-global-navigation__close-button" onClick={handleMenuClick}>
            <Icon name="close" />
          </button>

          <nav className="o-global-navigation__nav">
            <div className="o-global-navigation__user-account">
              {isFetchingGetUser ? (
                <Loading />
              ) : (
                <UserAccount
                  userName={`${userData?.LastNameKanji || '-'} ${userData?.FirstNameKanji || '-'}`}
                  companyName={userData?.FinancialCompanyNameKanji || '-'}
                  position={userData?.PositionNameKanji || '-'}
                  companyId={userData?.EmployeeCode || '-'}
                />
              )}
            </div>
            <NavList className="o-global-navigation__nav-items">{children}</NavList>
            <div className="o-global-navigation__static">
              {/* TODO: href: not difined */}
              <Button modifiers="text" href="#">
                パスワード変更
              </Button>
              {/* TODO: spec is under confirmation */}
              <Button modifiers="text" href="#">
                サインアウト
              </Button>
            </div>
          </nav>
          <ShortcutNav>{shortcuts}</ShortcutNav>
        </>
      )}
    </div>
  );
};
