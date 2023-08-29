import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { Icon } from 'components/atoms/icon';

export interface CreateButtonProps {
  children?: React.ReactNode;
  modifiers?: ModifierProp<'red' | 'blue'>;
  id?: string;
  className?: string;
}

export const CreateButton: React.FC<CreateButtonProps> = ({
  children,
  modifiers,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('a-create-button', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <Icon name="edit" />
      <span className="a-search-button__label">{children}</span>
    </div>
  );
};
