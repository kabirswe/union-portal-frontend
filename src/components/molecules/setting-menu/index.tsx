import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';
import { mapModifiers } from 'libs/component';

export interface MenuItemProps {
  children?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  onMouseOver?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, isActive, onClick, onMouseOver }) => (
  <li
    className={mapModifiers('m-setting-menu__item', isActive && 'active')}
    onClick={onClick}
    onMouseOver={onMouseOver}
  >
    {children}
  </li>
);

export interface SubMenuItemProps {
  children?: React.ReactNodeArray;
  id?: string;
  className?: string;
}

export const SubMenuItem: React.FC<SubMenuItemProps> = ({ children, id, className }) => (
  <div className={`m-setting-menu__subnav ${className}`.trim()} id={id}>
    {children}
  </div>
);

export interface SettingMenuProps {
  children: React.ReactNodeArray;
  subnav?: React.ReactNodeArray;
  navActiveIndex?: number;
  id?: string;
  className?: string;
}

export const SettingMenu: React.FC<SettingMenuProps> = ({
  children,
  subnav,
  navActiveIndex = 0,
  id,
  className: additionalClassName = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(navActiveIndex);
  const menusRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const widthItem = document.querySelector('.m-setting-menu__item--active') as HTMLLIElement;
    menusRef.current?.style.setProperty('--width', `${widthItem.offsetWidth}px`);
  }, [activeIndex]);

  const handleScroll = useCallback((e: React.UIEvent<HTMLElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const list: any = e.target;
    const { scrollLeft } = list as HTMLElement;
    menusRef.current?.querySelectorAll('.m-setting-menu__subnav').forEach(el => {
      (el as HTMLElement).style.transform = `translateX(-${scrollLeft}px)`;
    });
  }, []);

  const componentClassName = mapModifiers('m-setting-menu');
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <div className={className} id={id} ref={menusRef} data-active-index={navActiveIndex}>
      <ul className="m-setting-menu__list" onScroll={handleScroll}>
        {children.map((child, idx) => (
          <MenuItem key={idx} isActive={idx === activeIndex} onClick={() => setActiveIndex(idx)}>
            {child}
          </MenuItem>
        ))}
      </ul>
      {subnav}
    </div>
  );
};
