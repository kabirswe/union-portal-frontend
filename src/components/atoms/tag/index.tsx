import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface TagProps {
  children?: React.ReactNode;
  color?: 'red' | 'blue' | 'yellow' | 'gray';
  modifiers?: ModifierProp<'filled'>;
  size?: ModifierProp<'medium'>;
  isFullWidth?: boolean;
}

export const Tag: React.FC<TagProps> = ({ children, color = 'blue', modifiers, size, isFullWidth }) => {
  return <span className={mapModifiers('a-tag', modifiers, color, size, isFullWidth && 'full-width')}>{children}</span>;
};
