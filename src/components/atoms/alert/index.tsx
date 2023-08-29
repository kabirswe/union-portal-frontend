import React from 'react';
import { mapModifiers } from 'libs/component';
import { TextLink } from 'components/atoms/text-link';

export interface AlertProps {
  requestCount: number;
  id?: string;
  className?: string;
  handleClearClick?: React.MouseEventHandler;
}

export const Alert: React.FC<AlertProps> = ({
  requestCount,
  handleClearClick,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('a-alert');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <div className="a-alert__info">
        新着が{' '}
        <span className="a-alert__text">
          <span className="a-alert__number">{requestCount}</span>件
        </span>{' '}
        あります。
      </div>
      <TextLink href="#" className="a-alert__button" onClick={handleClearClick}>
        すべて確認済にする
      </TextLink>
    </div>
  );
};
