import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { mapModifiers } from 'libs/component';
import { TabNavItem } from 'components/atoms/tab-nav-item';

export interface TabProps {
  children?: React.ReactNode;
  isActive?: boolean;
  hasBadge?: boolean;
  onClick?: () => void;
}

export const Tab: React.FC<TabProps> = ({ children, isActive, hasBadge, onClick }) => (
  <li className={mapModifiers('m-tabs__tab', isActive && 'active')} onClick={onClick}>
    <TabNavItem active={isActive} badge={hasBadge}>
      {children}
    </TabNavItem>
  </li>
);

export interface TabsProps {
  children?: React.ReactNode;
  tabs: React.ReactNodeArray;
  id?: string;
  className?: string;
  badges?: number[];
  onChange?: (index: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  children,
  tabs,
  badges,
  onChange,
  id,
  className: additionalClassName = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const adjustTabIndicator = useCallback(() => {
    const widthItem = document.querySelector('.m-tabs__tab--active') as HTMLLIElement;
    tabsRef.current?.style?.setProperty('--active-index', activeIndex.toString());
    tabsRef.current?.style?.setProperty('--width', `${widthItem.offsetWidth}px`);
  }, [activeIndex]);

  useLayoutEffect(() => {
    adjustTabIndicator();
  }, [adjustTabIndicator]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', adjustTabIndicator);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', adjustTabIndicator);
      }
    };
  }, [adjustTabIndicator]);

  const componentClassName = mapModifiers('m-tabs');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id} ref={tabsRef}>
      <ul className="m-tabs__tab-list">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            isActive={index === activeIndex}
            hasBadge={badges && badges.indexOf(index) !== -1}
            onClick={() => {
              setActiveIndex(index);
              onChange && onChange(index);
            }}
          >
            {tab}
          </Tab>
        ))}
      </ul>
      <div className="m-tabs__indicator" />
      <div className="m-tabs__contents">
        {React.Children.map(children, (child, idx) => (
          <div className={mapModifiers('m-tabs__content', activeIndex === idx && 'active')}>{child}</div>
        ))}
      </div>
    </div>
  );
};
