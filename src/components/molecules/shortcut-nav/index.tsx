import React from 'react';
import { mapModifiers } from 'libs/component';

export interface ShortcutNavProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

export const ShortcutNav: React.FC<ShortcutNavProps> = ({ children, id, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('m-shortcut-nav');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
};
