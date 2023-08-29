import React, { useEffect, useRef } from 'react';
import { canUseDOM } from 'exenv';
import { mapModifiers, ModifierProp } from 'libs/component';
import { Icon } from 'components/atoms/icon';

export interface PulldownProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  id?: string;
  children: React.ReactNode;
  modifiers?: ModifierProp<'invalid'>;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

export const Pulldown: React.FC<PulldownProps> = ({
  id,
  children,
  modifiers,
  placeholder,
  className: additionalClassName = '',
  disabled = false,
  ...selectProps
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (selectRef.current && canUseDOM) {
      import('choices.js').then(lib => {
        const Choices = lib.default;
        const choices = new Choices(selectRef.current as HTMLSelectElement, {
          searchEnabled: false,
          placeholder: true,
          shouldSort: false,
          itemSelectText: '',
          silent: true,
        });
        if (disabled) {
          choices.disable();
        }
      });
    }
  }, [disabled]);

  const componentClassName = mapModifiers('a-pulldown', modifiers, disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <div id={id} className={className}>
      <select ref={selectRef} {...selectProps} className="a-pulldown__select">
        {placeholder && <option>{placeholder}</option>}
        {children}
      </select>
      <div className="a-pulldown__icon-container">
        <Icon name="arrow-down" />
      </div>
    </div>
  );
};
