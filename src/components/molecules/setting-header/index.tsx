import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { SettingBackButton } from 'components/atoms/setting-back-button';

export interface SettingHeaderProps {
  title: string;
  actions?: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
  modifiers?: ModifierProp<'fixed-width'>;
}

export const SettingHeader: React.FC<SettingHeaderProps> = ({
  title,
  actions,
  id,
  className: additionalClassName = '',
  onClick,
  modifiers,
}) => {
  const componentClassName = mapModifiers('m-setting-header', modifiers, actions ? 'with-actions' : '');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <div className="m-setting-header__body">
        <SettingBackButton onClick={onClick}>戻る</SettingBackButton>
        <div className="m-setting-header__title">{title}</div>
        {actions && <div className="m-setting-header__actions">{actions}</div>}
      </div>
    </div>
  );
};
