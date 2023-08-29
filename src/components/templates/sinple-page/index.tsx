import { Whole } from 'components/organisms/whole';
import { mapModifiers } from 'libs/component';
import React from 'react';

export interface SimplePageProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  verticalCenter?: boolean;
}

export const SimplePage: React.FC<SimplePageProps> = ({
  children,
  id,
  className: additionalClassName = '',
  verticalCenter,
  ...props
}) => {
  const componentClassName = mapModifiers('t-simplepage', verticalCenter && 'v-center');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div id={id} className={className} {...props}>
      <Whole modifiers="with-bg">{children}</Whole>
    </div>
  );
};
