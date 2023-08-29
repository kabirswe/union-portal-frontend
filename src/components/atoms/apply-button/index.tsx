import React, { MouseEventHandler } from 'react';
import { mapModifiers } from 'libs/component';
import { Icon } from 'components/atoms/icon';

export interface ApplyButtonProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: MouseEventHandler;
}

export const ApplyButton: React.FC<ApplyButtonProps> = ({
  children,
  id,
  className: additionalClassName = '',
  onClick,
}) => {
  const componentClassName = mapModifiers('a-apply-button');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <button type="button" className={className} id={id} onClick={onClick}>
      <Icon name="request" />
      {children}
    </button>
  );
};
