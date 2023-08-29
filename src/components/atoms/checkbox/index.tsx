import React, { forwardRef } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { Icon } from 'components/atoms/icon';
import { Link } from 'components/utils/link';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  children?: React.ReactNode;
  modifiers?: ModifierProp<'button' | 'invalid' | 'invalid-button' | 'link'>;
  linkProps?: {
    href: string;
    target?: string;
    useNative?: boolean;
    useNativeHashLink?: boolean;
  };
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}

// NOTE: react-hook-form requires to wrap component with forwardRef https://react-hook-form.com/get-started#Integratinganexistingform
export const Checkbox: React.FC<CheckboxProps> = forwardRef(
  (
    { children, modifiers, linkProps, className: additionalClassName = '', readOnly, disabled, ...inputProps },
    ref: React.Ref<HTMLInputElement>
  ) => {
    const componentClassName = mapModifiers('a-checkbox', modifiers, readOnly && 'readonly', disabled && 'disabled');
    const className = `${componentClassName} ${additionalClassName}`.trim();

    return (
      <div className={className}>
        <label>
          <input type="checkbox" className="a-checkbox__input" ref={ref} {...inputProps} />
          <div className="a-checkbox__body">
            <span className="a-checkbox__indicator">
              <Icon name="check-grey" />
            </span>
            {modifiers && modifiers == 'link' && linkProps ? (
              <Link
                to={linkProps.href}
                target={linkProps.target}
                className="a-checkbox__link"
                useNative={linkProps.useNative}
                useNativeHashLink={linkProps.useNativeHashLink}
              >
                <div className="a-checkbox__label">{children}</div>
                <span className="a-checkbox__icon">
                  <Icon name="link-new-window" />
                </span>
              </Link>
            ) : (
              <div className="a-checkbox__label">{children}</div>
            )}
          </div>
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
