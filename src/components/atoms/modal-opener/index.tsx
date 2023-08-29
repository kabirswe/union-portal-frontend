import React from 'react';
import { mapModifiers } from 'libs/component';
import { Icon } from 'components/atoms/icon';
import { Link } from 'components/utils/link';

export interface ModalOpenerProps {
  children: string;
  href?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  handleOpenClick?: () => void;
}

export const ModalOpener: React.FC<ModalOpenerProps> = ({
  children,
  href = '',
  id,
  className: additionalClassName,
  disabled = false,
  handleOpenClick,
}) => {
  const componentClassName = mapModifiers('a-modal-opener', disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <Link useNative to={href} id={id} className={className} onClick={disabled ? undefined : handleOpenClick}>
      {children}
      <Icon name="link-new-window" />
    </Link>
  );
};
