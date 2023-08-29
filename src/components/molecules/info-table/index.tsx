import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface InfoTableProps {
  children?: React.ReactNode;
  header?: string;
  modifiers?: ModifierProp<'full-border' | 'no-border-header' | 'no-border-header-single'>;
}

export const InfoTable: React.FC<InfoTableProps> = ({ children, header, modifiers }) => {
  const componentClassName = mapModifiers('m-info-table', modifiers);

  const renderTableCell = () => {
    return React.Children.map(children, (item, idx) => (
      <div key={idx} className="m-info-table__item">
        {item}
      </div>
    ));
  };

  return (
    <div className={componentClassName}>
      {header && <div className="m-info-table__header">{header}</div>}
      <div className="m-info-table__container">{renderTableCell()}</div>
    </div>
  );
};
