import { Whole } from 'components/organisms/whole';
import React from 'react';

export interface SettingProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  header?: React.ReactNode;
  withFixedControl?: boolean;
}

export const Setting: React.FC<SettingProps> = ({
  children,
  id,
  className: additionalClassName = '',
  header,
  withFixedControl,
  ...props
}) => {
  const className = `t-setting ${additionalClassName}`.trim();
  return (
    <div id={id} className={className} {...props}>
      <Whole id={id} navigation={header} withFixedControl={withFixedControl}>
        {children}
      </Whole>
    </div>
  );
};
