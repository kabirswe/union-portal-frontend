import React, { MouseEventHandler } from 'react';
import { VisitRecordInput } from 'components/molecules/visit-record-input';

export interface ExpenseRecordInputProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  handleCloseClick?: MouseEventHandler;
  link?: React.ReactNode;
}

export const ExpenseRecordInput: React.FC<ExpenseRecordInputProps> = ({
  children,
  id,
  title,
  className: additionalClassName = '',
  handleCloseClick,
  link,
}) => {
  const className = `m-expense-record-input ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <VisitRecordInput title={title} handleCloseClick={handleCloseClick}>
        {children}
        <div className="m-expense-record-input__link">{link}</div>
      </VisitRecordInput>
    </div>
  );
};
