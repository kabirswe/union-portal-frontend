import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface PriceProps {
  modifiers?: ModifierProp<'total'>;
  children: string;
  unit: string;
}

export const Price: React.FC<PriceProps> = ({ modifiers, children, unit }) => {
  return (
    <span className={mapModifiers('a-price', modifiers)}>
      {children}
      <small className="a-price__unit">{unit}</small>
    </span>
  );
};
