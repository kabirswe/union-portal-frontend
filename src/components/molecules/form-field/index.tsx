import React from 'react';
import { mapModifiers } from 'libs/component';
import { Text } from 'components/atoms/text';

type ColumnSize = '1' | '2' | '3' | '4' | '6' | '12';

export interface FormFieldRowProps {
  children?: React.ReactNode;
  columnSize?: ColumnSize;
  columnSizePC?: ColumnSize;
}

export const FormFieldRow: React.FC<FormFieldRowProps> = ({ children, columnSize, columnSizePC }) => (
  <div
    className={mapModifiers(
      'm-form-field__row',
      columnSize && `column-size-${columnSize}`,
      columnSizePC && `column-size-pc-${columnSizePC}`
    )}
  >
    {children}
  </div>
);

export interface FormFieldProps {
  children: React.ReactNode;
  label?: React.ReactNode;
  labelAddons?: React.ReactNode;
  instruction?: React.ReactNode;
  className?: string;
  invalidMessage?: React.ReactNode;
  require?: boolean;
  normalLabel?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  children,
  label,
  labelAddons,
  instruction,
  className: additionalClassName = '',
  invalidMessage,
  require,
  normalLabel = false,
}) => {
  const componentClassName = mapModifiers(
    'm-form-field',
    invalidMessage ? 'invalid' : undefined,
    require && 'required'
  );
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <div className={className}>
      <label className={mapModifiers('m-form-field__label', normalLabel && 'normal')}>
        {label}
        {labelAddons && <span className="m-form-field__label-addons">{labelAddons}</span>}
      </label>
      {instruction && (
        <Text modifiers="small" className="m-form-field__instruction">
          {instruction}
        </Text>
      )}
      <div className="m-form-field__content">
        {children}
        {invalidMessage && <div className="m-form-field__invalid-message">{invalidMessage}</div>}
      </div>
    </div>
  );
};
