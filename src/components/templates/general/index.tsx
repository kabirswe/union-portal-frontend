import { useGetGlobalmenuLinks } from 'api/api';
import { EditButton } from 'components/atoms/edit-button';
import { Loading } from 'components/atoms/loading';
import { NavItem } from 'components/atoms/nav-item';
import { GlobalNavigation } from 'components/organisms/global-navigation';
import { Whole } from 'components/organisms/whole';
import { ROUTES } from 'consts/routes';
import React from 'react';
import { useLocation } from 'react-router-dom';

const navItem = [
  {
    icon: 'home',
    label: 'ホーム',
    href: ROUTES.HOM_01_01,
  },
  {
    icon: 'attendance',
    label: '勤怠メニュー',
    href: '#',
  },
  {
    icon: 'application',
    label: '電子申請メニュー',
    href: '#',
  },
  {
    icon: 'communication',
    label: 'コミュニケーションツール',
    href: '#',
  },
  {
    icon: 'help-menu',
    label: 'お助けチャットボット',
    href: '#',
  },
  {
    icon: 'safty-confirmation',
    label: '安否確認',
    href: '#',
  },
];

export interface GeneralProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  withFixedControl?: boolean;
}

export const General: React.FC<GeneralProps> = ({
  children,
  id,
  className: additionalClassName = '',
  withFixedControl,
  ...props
}) => {
  const location = useLocation();

  const query = { 'employee-code': '9999' };
  const {
    isLoading,
    // data
  } = useGetGlobalmenuLinks(query);

  const className = `t-general ${additionalClassName}`.trim();
  return (
    <div id={id} className={className} {...props}>
      <Whole
        modifiers="with-bg"
        id={id}
        navigation={
          <GlobalNavigation id={id}>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {/* {// TODO: APi mock data now like this but this is not metch to XD desing object. Need to modifiction when real API will be ready.
                    data?.data.BusinessData.Bodies.map((nav, index) =>
                      <NavItem
                        key={index}
                        icon={nav.IconUrl}
                        label={nav.LinkType}
                        href={nav.LinkUrl}
                        //label={nav.LinkName} TODO: data come from real api. Need to be open when API update
                        //target={nav.LinkTarget} TODO: data come from real api. Need to be open when API update
                        selected={index === 0} // TODO: Particular item select logic not clear to me that way i implement this one
                      />
                    )
                  } */}
                {navItem.map((item, index) => {
                  const isSelected = location.pathname.split('/')[1] === item.href.split('/')[1];
                  return (
                    <NavItem key={index} icon={item.icon} label={item.label} href={item.href} selected={isSelected} />
                  );
                })}
              </>
            )}
          </GlobalNavigation>
        }
        menu={<EditButton href={ROUTES.WDT_01_01}>ホーム画面の編集</EditButton>}
        withFixedControl={withFixedControl}
      >
        {children}
      </Whole>
    </div>
  );
};
