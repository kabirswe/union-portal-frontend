import React, { useCallback, useEffect, useRef, useState } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { NavIcon, NavIconShape } from 'components/atoms/nav-icon';
import { Icon } from 'components/atoms/icon';
import { Link } from 'components/utils/link';
import { SP_MAX_WIDTH } from 'consts/common';

export interface NavItemProps {
  modifiers?: ModifierProp<'menu-item' | 'side-by-side'>;
  icon?: NavIconShape;
  badge?: boolean;
  selected?: boolean;
  label?: React.ReactNode;
  children?: React.ReactNodeArray;
  userName?: string;
  userPrefix?: string;
  id?: string;
  className?: string;
  href?: string;
  subnav?: boolean;
  disabled?: boolean;
  remoteSubNav?: string;
  hoverToOpen?: boolean;
  target?: string;
  useNative?: boolean;
  defaultOpened?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({
  modifiers,
  icon,
  badge = false,
  selected = false,
  label,
  href = '#',
  subnav = false,
  disabled = false,
  children,
  userName,
  userPrefix,
  id,
  className: additionalClassName = '',
  remoteSubNav,
  hoverToOpen = false,
  target,
  useNative = false,
  defaultOpened = false,
}) => {
  const [isOpened, setOpened] = useState(defaultOpened);
  const self = useRef(null);

  const setNavPosition = useCallback(() => {
    if (remoteSubNav && typeof document !== 'undefined') {
      const target = document.getElementById(remoteSubNav.replace('#', ''));
      if (target) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const nav: any = self?.current;
        if (nav) {
          // get current position
          const rect = (nav as HTMLElement).getBoundingClientRect();
          const top = rect.top + rect.height - 10;
          const left = rect.left;

          target.style.top = `${top}px`;
          target.style.left = `${left}px`;
        }
      }
    }
  }, [remoteSubNav]);

  const toggleRemoteMenu = useCallback(
    (open?: boolean | undefined) => {
      if (remoteSubNav && typeof document !== 'undefined') {
        const target = document.getElementById(remoteSubNav.replace('#', ''));
        if (target) {
          setTimeout(() => {
            setNavPosition();
            setOpened(typeof open !== 'undefined' ? open : !isOpened);
            target.classList.toggle('a-nav-item__remote-subnav--opened', open);
          });
        }
      }
    },
    [isOpened, remoteSubNav, setNavPosition]
  );

  const handleMenuClick = useCallback(
    e => {
      e.preventDefault();
      if (remoteSubNav) {
        toggleRemoteMenu();
      } else {
        setTimeout(() => {
          setOpened(!isOpened);
        });
      }
    },
    [isOpened, remoteSubNav, toggleRemoteMenu]
  );

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (remoteSubNav) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const element: HTMLElement = self?.current as any;
        const target = document.getElementById(remoteSubNav.replace('#', ''));
        if (
          element &&
          !element.contains(e.target as HTMLElement) &&
          target &&
          !target.contains(e.target as HTMLElement)
        ) {
          // hide
          toggleRemoteMenu(false);
        }
      }
    },
    [toggleRemoteMenu, remoteSubNav]
  );

  useEffect(() => {
    if (remoteSubNav) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      if (remoteSubNav) {
        document.removeEventListener('mousedown', handleOutsideClick);
      }
    };
  }, [handleOutsideClick, remoteSubNav]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rootEl: HTMLElement = self?.current as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const itemLinkEl: HTMLAnchorElement = rootEl.querySelector<HTMLAnchorElement>('.a-nav-item__link') as any;
    let _leaveTimer = -1;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const checkRemoteTargetOver = (e: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const target: HTMLElement = e.target as any;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      target.removeEventListener('mouseover', checkRemoteTargetOver);
      if (_leaveTimer > 0) {
        clearTimeout(_leaveTimer);
        _leaveTimer = -1;
      }
    };

    const handleItemLinkMouseOver = (e: MouseEvent) => {
      e.preventDefault();
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if (vw > SP_MAX_WIDTH) {
        toggleRemoteMenu(true);
      }
    };

    const handleItemLinkMouseLeave = (e: MouseEvent) => {
      e.preventDefault();
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if (vw > SP_MAX_WIDTH && remoteSubNav) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const target: HTMLElement = document.getElementById(remoteSubNav.replace('#', '')) as any;
        target.addEventListener('mouseover', checkRemoteTargetOver);
        const handleMouseLeave = () => {
          toggleRemoteMenu(false);
          target.removeEventListener('mouseleave', handleMouseLeave);
        };
        target.addEventListener('mouseleave', handleMouseLeave);
        _leaveTimer = setTimeout(() => {
          target.removeEventListener('mouseover', checkRemoteTargetOver);
          toggleRemoteMenu(false);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, 100) as any;
      }
    };

    if (remoteSubNav) {
      if (hoverToOpen) {
        itemLinkEl.addEventListener('mouseover', handleItemLinkMouseOver);
        itemLinkEl.addEventListener('mouseleave', handleItemLinkMouseLeave);
      }
    }
    return () => {
      itemLinkEl.removeEventListener('mouseover', handleItemLinkMouseOver);
      itemLinkEl.removeEventListener('mouseleave', handleItemLinkMouseLeave);
    };
  }, [hoverToOpen, remoteSubNav, toggleRemoteMenu]);

  useEffect(() => {
    if (remoteSubNav) {
      const target = document.getElementById(remoteSubNav.replace('#', ''));
      if (target) {
        target.classList.add('a-nav-item__remote-subnav');
      }
    }
    return () => {
      if (remoteSubNav) {
        const target = document.getElementById(remoteSubNav.replace('#', ''));
        if (target) {
          target.classList.remove('a-nav-item__remote-subnav');
        }
      }
    };
  }, [remoteSubNav, isOpened]);

  const componentClassName = mapModifiers(
    'a-nav-item',
    modifiers,
    icon,
    selected && 'selected',
    subnav && 'subnav',
    children || remoteSubNav ? 'has-subnav' : '',
    remoteSubNav && 'remote-subnav',
    (userName || userPrefix) && 'user-account',
    isOpened && 'opened',
    disabled && 'disabled',
    hoverToOpen && 'hover-open'
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const itemsClassName = mapModifiers('a-nav-item__items', children ? `n${children.length}` : '');

  return (
    <div className={className} id={id} ref={self} data-remote-subnav={remoteSubNav}>
      <Link
        to={children || remoteSubNav ? '' : href}
        target={target}
        className="a-nav-item__link"
        onClick={children || remoteSubNav ? handleMenuClick : undefined}
        useNative={useNative}
      >
        {icon && !subnav && <NavIcon icon={icon} className="a-nav-item__icon" badge={badge} active={selected} />}
        <span className="a-nav-item__label">
          {!userName && label}
          {userName && (
            <span className="a-nav-item__user-name">
              {userName}
              <span className="a-nav-item__user-prefix">{userPrefix}</span>
            </span>
          )}
        </span>
        {(children || remoteSubNav) && (
          <span className="a-nav-item__arrow">
            <Icon name="arrow-down" />
            <Icon name="arrow-up" />
          </span>
        )}
      </Link>
      {children && <div className={itemsClassName}>{children}</div>}
    </div>
  );
};
