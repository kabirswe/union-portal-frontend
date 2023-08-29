import React, { useEffect, useState } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { GlobalNavigation } from 'components/organisms/global-navigation';
import { SettingHeader } from 'components/molecules/setting-header';
import { ScrollSpy, ScrollStatus } from 'libs/scroll-spy';
import { SpFooterMenu } from 'components/molecules/sp-footer-menu';

export interface WholeProps {
  // navigation?: typeof SettingHeader | typeof GlobalNavigation;
  // navigation?: React.FC<SettingHeaderProps> | React.FC<GlobalNavigationProps>;
  navigation?: React.ReactNode;
  menu?: React.ReactNode;
  children?: React.ReactNode;
  modifiers?: ModifierProp<'with-bg'>;
  id?: string;
  className?: string;
  withFixedControl?: boolean;
}

export const Whole: React.FC<WholeProps> = ({
  navigation,
  menu,
  children,
  modifiers,
  id,
  className: additionalClassName = '',
  withFixedControl,
}) => {
  const [hideNav, setHideNav] = useState(false);
  const onScrollStatusUpdated = (params: ScrollStatus) => {
    const direction = params.direction;
    if (direction === 'down') {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  };
  // eslint-enable @typescript-eslint/no-explicit-any
  useEffect(() => {
    ScrollSpy.addListener(onScrollStatusUpdated);
    return () => {
      ScrollSpy.removeListener(onScrollStatusUpdated);
    };
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navType = (navigation as any)?.type;
  const isGlobalNav = navType === GlobalNavigation;
  const isSettingHeader = navType === SettingHeader;
  const withMenu = id === 'home';
  const componentClassName = mapModifiers(
    'o-whole',
    modifiers,
    isGlobalNav && 'navigation',
    isSettingHeader && 'settings',
    hideNav && 'hide-nav',
    withFixedControl && 'with-fixed-control',
    withMenu && 'with-menu'
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();
  // ScrollSpy.addListener(onScrollStatusUpdated);
  return (
    <div className={className}>
      <div className="o-whole__body-container">
        {withMenu && (
          <>
            <div className="o-whole__menu">{menu}</div>
            <SpFooterMenu />
          </>
        )}
        {isGlobalNav ? (
          <div className="o-whole__navigation" data-simplebar>
            {navigation}
          </div>
        ) : (
          <div className="o-whole__navigation">{navigation}</div>
        )}
        <div className="o-whole__body">{children}</div>
      </div>
    </div>
  );
};
