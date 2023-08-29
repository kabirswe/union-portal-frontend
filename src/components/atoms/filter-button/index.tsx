import React, { ButtonHTMLAttributes, useState } from 'react';
import { Icon, ICON_SHAPES } from 'components/atoms/icon';
import { mapModifiers } from 'libs/component';

export interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  isActive?: boolean;
  disabled?: boolean;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  id,
  className: additionalClassName,
  isActive = false,
  disabled = false,
  onClick,
}) => {
  const [active, setActive] = useState<boolean>(isActive);
  const iconName = `filter${active ? '-active' : ''}` as typeof ICON_SHAPES[number];
  const componentClassName = mapModifiers('a-filter-button', disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <button
      className={className}
      id={id}
      onClick={e => {
        setActive(!active);
        onClick && onClick(e);
      }}
    >
      <Icon name={iconName} />
    </button>
  );
};
