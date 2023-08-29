import React from 'react';
import { mapModifiers } from 'libs/component';

export interface TabNavItemProps {
  children?: React.ReactNode;
  badge?: boolean;
  active?: boolean;
  id?: string;
  className?: string;
}

export const TabNavItem: React.FC<TabNavItemProps> = ({
  children,
  badge = false,
  active = false,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('a-tab-nav-item', badge && 'badge', active && 'active');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <button type="button" className={className} id={id}>
      {children}
      {badge && <i className="a-tab-nav-item__badge"></i>}
    </button>
  );
};
