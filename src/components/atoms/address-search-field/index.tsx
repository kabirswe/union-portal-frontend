import React, { MouseEventHandler } from 'react';
import { mapModifiers } from 'libs/component';
import { Button, ButtonProps } from 'components/atoms/button';
import { TextField, TextFieldProps } from 'components/atoms/text-field';

export interface AddressSearchFieldProps {
  id?: string;
  className?: string;
  inputProps?: TextFieldProps;
  onSearchClick?: MouseEventHandler;
  buttonProps?: Omit<ButtonProps, 'modifiers'>;
}

export const AddressSearchField: React.FC<AddressSearchFieldProps> = ({
  id,
  className: additionalClassName = '',
  inputProps,
  buttonProps,
  onSearchClick,
}) => {
  const componentClassName = mapModifiers('a-address-search-field');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div id={id} className={className}>
      <TextField {...inputProps} />
      <Button {...buttonProps} modifiers="third" onClick={onSearchClick}>
        住所検索
      </Button>
    </div>
  );
};
