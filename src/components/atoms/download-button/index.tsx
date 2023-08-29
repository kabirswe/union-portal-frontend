import { Icon } from 'components/atoms/icon';
import React from 'react';
import { mapModifiers } from 'libs/component';
import { ICON_SHAPES } from 'components/atoms/icon';

export interface DownloadButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  children?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  className?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  children,
  disabled,
  id,
  className: additionalClassName = '',
  ...anchorProps
}) => {
  const componentClassName = mapModifiers('a-download-button', disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const iconName = `download${disabled ? '-disabled' : ''}` as typeof ICON_SHAPES[number];
  return (
    <a id={id} className={className} download={anchorProps.href} {...anchorProps}>
      <Icon name={iconName} /> <span className="a-download-button__content">{children}</span>
    </a>
  );
};
