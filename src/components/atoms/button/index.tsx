import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { Icon, ICON_SHAPES } from 'components/atoms/icon';
import { Link } from 'components/utils/link';

type InheritedProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'onClick'> &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'disabled'>;

export interface ButtonProps extends InheritedProps {
  children?: React.ReactNode;
  modifiers?: ModifierProp<
    'primary' | 'secondary' | 'third' | 'postal' | 'upload' | 'transparent' | 'text' | 'icon-text' | 'unread-count'
  >;
  shape?: ModifierProp<'square'>;
  size?: ModifierProp<'large' | 'huge'>;
  id?: string;
  className?: string;
  disabled?: boolean;
  useNative?: boolean;
  useNativeHashLink?: boolean;
  icon?: typeof ICON_SHAPES[number];
  unreadCount?: number;
}

export const Button: React.FC<ButtonProps> = ({
  modifiers,
  shape,
  size,
  children,
  href,
  target,
  type,
  onClick,
  disabled = false,
  className: additionalClassName = '',
  id,
  useNative,
  useNativeHashLink,
  icon,
  unreadCount,
}) => {
  if (href) {
    const componentClassName = mapModifiers('a-button', modifiers, shape, size, disabled && 'disabled', icon && 'icon');
    const className = `${componentClassName} ${additionalClassName}`.trim();

    return (
      <Link
        to={href}
        target={target}
        id={id}
        className={className}
        onClick={onClick}
        useNative={useNative}
        useNativeHashLink={useNativeHashLink}
      >
        <div className="a-button__label">{children}</div>
        {icon && <Icon name={icon} />}
        {unreadCount && <span className="a-button__unread">{unreadCount}</span>}
      </Link>
    );
  } else {
    const componentClassName = mapModifiers('a-button', modifiers, shape, size, icon && 'icon');
    const className = `${componentClassName} ${additionalClassName}`.trim();

    return (
      <button type={type} disabled={disabled} onClick={onClick} className={className} id={id}>
        <div className="a-button__label">{children}</div>
        {icon && <Icon name={icon} />}
        {unreadCount && <span className="a-button__unread">{unreadCount}</span>}
      </button>
    );
  }
};
