import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  modifiers?: ModifierProp<'grey' | 'invalid'>;
  disabled?: boolean;
}

export const Radio: React.FC<RadioProps> = ({
  id,
  className: additionalClassName,
  modifiers,
  children,
  disabled = false,
  ...inputProps
}) => {
  const componentClassName = mapModifiers('a-radio', modifiers, disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <label id={id} className={className}>
      <input {...inputProps} disabled={disabled} className="a-radio__input" type="radio" />
      <div className="a-radio__body">
        <span className="a-radio__indicator" />
        <div className="a-radio__label">{children}</div>
      </div>
    </label>
  );
};
