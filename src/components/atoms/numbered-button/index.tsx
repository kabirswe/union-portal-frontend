import React, { ButtonHTMLAttributes } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface NumberedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  number?: string;
  title?: string;
  modifiers?: ModifierProp<'selected'>;
  className?: string;
}

export const NumberedButton: React.FC<NumberedButtonProps> = ({
  children,
  number,
  title,
  onClick,
  modifiers,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('a-numbered-button', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <button type="button" className={className} onClick={onClick}>
      <div className="a-numbered-button__header">
        <span className="a-numbered-button__number">{number}</span>
        <p className="a-numbered-button__title">{title}</p>
      </div>
      {children && <p className="a-numbered-button__description">{children}</p>}
    </button>
  );
};
