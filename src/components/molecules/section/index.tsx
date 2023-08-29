import React, { forwardRef } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface SectionProps {
  children?: React.ReactNode;
  modifiers?: ModifierProp<
    'border' | 'card' | 'card-border' | 'fill' | 'fill-white' | 'fullpage' | 'h-padding' | 'v-padding' | 'small'
  >;
  roundedSize?: ModifierProp<'large'>;
  noPadding?: boolean;
  id?: string;
  className?: string;
  head?: React.ReactNode;
  ref?: React.Ref<HTMLElement>;
}

// NOTE: react-hook-form requires to wrap component with forwardRef https://react-hook-form.com/get-started#Integratinganexistingform
export const Section: React.FC<SectionProps> = forwardRef(
  (
    { children, modifiers, roundedSize, noPadding = false, id, className: additionalClassName = '', head },
    ref: React.Ref<HTMLElement>
  ) => {
    const componentClassName = mapModifiers(
      'm-section',
      modifiers,
      roundedSize && `round-${roundedSize}`,
      noPadding && 'no-padding',
      !!head && 'with-head'
    );
    const className = `${componentClassName} ${additionalClassName}`.trim();
    return (
      <section className={className} id={id} ref={ref}>
        {head && <div className="m-section__header">{head}</div>}
        <div className="m-section__container m-section__scrollable">{children}</div>
      </section>
    );
  }
);

Section.displayName = 'Section';
