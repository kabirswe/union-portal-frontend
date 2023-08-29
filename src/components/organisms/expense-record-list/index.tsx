import React from 'react';
import { AddItemButton } from 'components/atoms/add-item-button';
import { ExpenseRecordInput } from 'components/molecules/expense-record-input';

export interface ExpenseRecordListProps {
  children?: React.ReactNode;
  templateInput?: React.ReactNode;
  id?: string;
  className?: string;
  link?: React.ReactNode;
  radioName?: string;
  onAddRequested?: () => void;
  onRemoveRequested?: (index: number) => void;
}

export const ExpenseRecordList: React.FC<ExpenseRecordListProps> = ({
  children,
  templateInput,
  id,
  className: additionalClassName = '',
  link,
  radioName,
  onAddRequested,
  onRemoveRequested,
}) => {
  const className = `o-expense-record-list ${additionalClassName}`.trim();
  return (
    <div className={className} id={id} data-radio-name={radioName}>
      <template className="o-expense-record-list__template">
        <ExpenseRecordInput title="明細">{templateInput}</ExpenseRecordInput>
      </template>
      <div className="o-expense-record-list__items">
        {React.Children.map(children, (input, index) => (
          <ExpenseRecordInput
            key={index}
            title={`明細 ${index + 1}`}
            link={link}
            handleCloseClick={() => {
              onRemoveRequested && onRemoveRequested(index);
            }}
          >
            {input}
          </ExpenseRecordInput>
        ))}
      </div>
      <div className="o-expense-record-list__add-button">
        <AddItemButton handleAddItemClick={onAddRequested}>訪問先を追加する</AddItemButton>
      </div>
    </div>
  );
};
