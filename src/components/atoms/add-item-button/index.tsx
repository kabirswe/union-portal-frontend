import { Icon } from 'components/atoms/icon';
import { mapModifiers } from 'libs/component';
import React from 'react';

export interface AddItemButtonProps {
  children: string;
  disabled?: boolean;
  id?: string;
  className?: string;
  handleAddItemClick?: () => void;
}

export const AddItemButton: React.FC<AddItemButtonProps> = ({
  children,
  disabled,
  id,
  className: additionalClassName = '',
  handleAddItemClick,
}) => {
  const componentClassName = mapModifiers('a-add-item-button', disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <button type="button" id={id} className={className} onClick={disabled ? undefined : handleAddItemClick}>
      <Icon name="add-item" />
      {children}
    </button>
  );
};
