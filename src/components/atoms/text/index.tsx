import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface TextProps {
  children?: React.ReactNode;
  modifiers?: ModifierProp<'small'>;
  colors?: ModifierProp<'gray'>;
  align?: ModifierProp<'left' | 'center' | 'right'>;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  modifiers,
  colors,
  align = 'left',
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('a-text', modifiers, `color-${colors}`, `align-${align}`);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return <p className={className}>{children}</p>;
};
