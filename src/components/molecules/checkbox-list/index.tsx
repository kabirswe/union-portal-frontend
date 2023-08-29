import React from 'react';
import { mapModifiers } from 'libs/component';

export interface CheckboxListProps {
  children?: React.ReactNode;
  className?: string;
}

export const CheckboxList: React.FC<CheckboxListProps> = ({ children, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('m-checkbox-list');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return <div className={className}>{children}</div>;
};
