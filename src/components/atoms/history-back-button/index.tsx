import React from 'react';
import { mapModifiers } from 'libs/component';
import { Icon } from 'components/atoms/icon';
import { Link } from 'components/utils/link';
import { useHistory } from 'react-router-dom';

export interface HistoryBackButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  children?: React.ReactNode;
  href?: string;
  id?: string;
  className?: string;
  isHistoryBack?: boolean;
}

export const HistoryBackButton: React.FC<HistoryBackButtonProps> = ({
  children,
  href = '',
  id,
  className: additionalClassName = '',
  isHistoryBack,
  onClick,
  ...anchorProps
}) => {
  const history = useHistory();
  const componentClassName = mapModifiers('a-history-back-button');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <Link
      useNative
      to={href}
      id={id}
      className={className}
      onClick={e => {
        if (isHistoryBack) {
          e.preventDefault();
          history.goBack();
        }
        onClick && onClick(e);
      }}
      {...anchorProps}
    >
      <Icon name="back" />
      {children}
    </Link>
  );
};
