import React, { MouseEventHandler } from 'react';
import { Icon } from 'components/atoms/icon';

export interface VisitRecordInputProps {
  children?: React.ReactNode;
  title?: string;
  id?: string;
  className?: string;
  handleCloseClick?: MouseEventHandler;
}

export const VisitRecordInput: React.FC<VisitRecordInputProps> = ({
  children,
  title,
  id,
  handleCloseClick,
  className: additionalClassName = '',
}) => {
  const className = `m-visit-record-input ${additionalClassName}`.trim();
  return (
    <div id={id} className={className}>
      <header className="m-visit-record-input__header">
        <span className="m-visit-record-input__header-title">{title}</span>
        <button className="m-visit-record-input__button-close" onClick={handleCloseClick}>
          <Icon name="close" />
        </button>
      </header>
      <div className="m-visit-record-input__body">{children}</div>
    </div>
  );
};
