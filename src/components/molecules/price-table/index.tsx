import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';

export const PriceTable: React.FC = ({ children }) => {
  return <dl className="m-price-table">{children}</dl>;
};

export interface PriceTableItemProps {
  children: React.ReactNode;
  label: string;
  modifiers?: ModifierProp<'total'>;
}

export const PriceTableItem: React.FC<PriceTableItemProps> = ({ children, label, modifiers }) => {
  return (
    <div className={mapModifiers('m-price-table__item', modifiers)}>
      <dt className="m-price-table__item-label">{label}</dt>
      <dd className="m-price-table__item-value">{children}</dd>
    </div>
  );
};

export interface PriceTableItemDetailProps {
  children: React.ReactNode;
  label: string;
}

export const PriceTableItemDetail: React.FC<PriceTableItemDetailProps> = ({ children, label }) => {
  return (
    <dl className="m-price-table__item-detail">
      <dt className="m-price-table__item-detail-label">{label}：</dt>
      <dd className="m-price-table__item-detail-value">{children}</dd>
    </dl>
  );
};
