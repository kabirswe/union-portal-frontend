import React, { AnchorHTMLAttributes, useRef } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { useLinkSpy } from 'components/utils/link-spy';

type InheritedProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'onClick' | 'download'>;

export interface Props extends InheritedProps {
  id?: string;
  className?: string;
  useNativeHashLink?: boolean;
}
export interface PropsLink extends RouterLinkProps {
  to: string;
  useNative?: boolean;
}

/**
 * An anchor tag that can decide to use native <a /> or react-router <Link /> automatically.
 * You also can give a boolean to `useNative` prop to force which should be used.
 */
export const Link: React.FC<Props & PropsLink> = ({
  to,
  target,
  id,
  className,
  onClick,
  useNative,
  useNativeHashLink,
  ...otherProps
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { dataProps } = useLinkSpy({ ref: linkRef });
  const nativeLink = (
    <a
      href={to}
      id={id}
      className={className}
      target={target}
      onClick={onClick}
      ref={!useNativeHashLink ? linkRef : undefined}
      {...(!useNativeHashLink ? dataProps : {})}
      {...otherProps}
    />
  );
  const routerLink = (
    <RouterLink
      to={to}
      id={id}
      className={className}
      target={target}
      onClick={onClick}
      ref={!useNativeHashLink ? linkRef : undefined}
      {...(!useNativeHashLink ? dataProps : {})}
      {...otherProps}
    />
  );

  if (useNative) return nativeLink;
  if (to.startsWith('http')) return nativeLink;

  return routerLink;
};
