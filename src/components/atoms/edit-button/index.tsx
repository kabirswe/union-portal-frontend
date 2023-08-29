import React from 'react';
import { mapModifiers } from 'libs/component';
import { Icon } from 'components/atoms/icon';
import { Link } from 'components/utils/link';

export interface EditButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'title'> {
  children: string;
  href: string;
  useNative?: boolean;
  className?: string;
  isActive?: boolean;
}

export const EditButton: React.FC<EditButtonProps> = ({
  children,
  href,
  useNative,
  className: additionalClassName = '',
  isActive,
  ...anchorProps
}) => {
  const componentClassName = mapModifiers('a-edit-button', isActive && 'active');
  const className = ` ${componentClassName} ${additionalClassName}`.trim();
  return (
    <Link useNative={useNative} to={href} className={className} {...anchorProps}>
      {children}
      <Icon name="apps" />
    </Link>
  );
};
