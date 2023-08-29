import React, { AnchorHTMLAttributes } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { Link } from 'components/utils/link';

type InheritedProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'onClick'>;

export interface TextLinkProps extends InheritedProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  modifiers?: ModifierProp<'underline'>;
  href: string;
  disabled?: boolean;
  useNative?: boolean;
}

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  id,
  className: additionalClassName = '',
  modifiers,
  href,
  target,
  disabled = false,
  useNative,
  onClick,
}) => {
  const className = `${mapModifiers('a-text-link', modifiers, disabled && 'disabled')} ${additionalClassName}`.trim();
  return (
    <Link to={href} id={id} className={className} target={target} onClick={onClick} useNative={useNative}>
      {children}
    </Link>
  );
};
