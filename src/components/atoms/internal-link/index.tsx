import React from 'react';
import { mapModifiers } from 'libs/component';
import { Icon, ICON_SHAPES } from 'components/atoms/icon';
import { Link } from 'components/utils/link';

export interface InternalLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'title'> {
  children: string;
  href: string;
  useNative?: boolean;
  icon?: typeof ICON_SHAPES[number];
  className?: string;
  isActive?: boolean;
}

export const InternalLink: React.FC<InternalLinkProps> = ({
  children,
  href,
  useNative,
  icon,
  className: additionalClassName = '',
  isActive,
  ...anchorProps
}) => {
  const componentClassName = mapModifiers('a-internal-link', isActive && 'active');
  const className = ` ${componentClassName} ${additionalClassName}`.trim();
  return (
    <Link useNative={useNative} to={href} className={className} {...anchorProps}>
      {children}
      {icon && <Icon name={icon} />}
    </Link>
  );
};
