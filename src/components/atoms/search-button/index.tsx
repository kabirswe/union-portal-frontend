import React, { ButtonHTMLAttributes } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { Icon } from 'components/atoms/icon';

type InheritedProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>;

export interface SearchButtonProps extends InheritedProps {
  children?: React.ReactNode;
  modifiers?: ModifierProp<'dark' | 'light'>;
  id?: string;
  className?: string;
  inline?: boolean;
}

export const SearchButton: React.FC<SearchButtonProps> = ({
  children,
  modifiers = 'dark',
  id,
  className: additionalClassName = '',
  inline,
  ...buttonProps
}) => {
  const componentClassName = mapModifiers('a-search-button', modifiers, inline && 'inline');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const iconName = modifiers === 'light' ? 'search' : 'search-white';
  return (
    <button type="button" className={className} id={id} {...buttonProps}>
      <Icon name={iconName} />
      <span className="a-search-button__label">{children}</span>
    </button>
  );
};
