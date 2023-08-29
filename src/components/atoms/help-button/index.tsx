import React from 'react';
import { Icon } from 'components/atoms/icon';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface HelpButtonProps {
  type?: ModifierProp<'with-children'>;
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export const HelpButton: React.FC<HelpButtonProps> = ({ children, type, id, className: additionalClassName = '' }) => {
  const componentClassName = mapModifiers('a-help-button', type);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <Icon name="help" />
      {children && <span className="a-help-button__children">{children}</span>}
    </div>
  );
};
