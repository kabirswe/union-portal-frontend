import React from 'react';
import { AddItemButton } from 'components/atoms/add-item-button';
import { VisitRecordInput } from 'components/molecules/visit-record-input';

export interface VisitRecordListProps {
  children?: React.ReactNode;
  templateInput?: React.ReactNode;
  id?: string;
  onAddRequested?: () => void;
  onRemoveRequested?: (index: number) => void;
  className?: string;
}

export const VisitRecordList: React.FC<VisitRecordListProps> = ({
  children,
  templateInput,
  id,
  onAddRequested,
  onRemoveRequested,
  className: additionalClassName = '',
}) => {
  const className = `o-visit-record-list ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <template className="o-visit-record-list__template">
        <VisitRecordInput title="訪問先">{templateInput}</VisitRecordInput>
      </template>
      <div className="o-visit-record-list__items">
        {React.Children.map(children, (input, index) => (
          <VisitRecordInput
            key={index}
            title={`訪問先 ${index + 1}`}
            handleCloseClick={() => {
              onRemoveRequested && onRemoveRequested(index);
            }}
          >
            {input}
          </VisitRecordInput>
        ))}
      </div>
      <div className="o-visit-record-list__add-button">
        <AddItemButton handleAddItemClick={onAddRequested}>訪問先を追加する</AddItemButton>
      </div>
    </div>
  );
};
