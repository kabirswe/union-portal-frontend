import React, { ButtonHTMLAttributes } from 'react';
import { mapModifiers } from 'libs/component';
import { Icon } from 'components/atoms/icon';

type InheritedProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>;

export interface SettingBackButtonProps extends InheritedProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

export const SettingBackButton: React.FC<SettingBackButtonProps> = ({
  children,
  id,
  onClick,
  disabled,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('a-setting-back-button', disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <button type="button" className={className} id={id} onClick={onClick}>
      <Icon name="back-white" />
      <span className="a-setting-back-button__label">{children}</span>
    </button>
  );
};
