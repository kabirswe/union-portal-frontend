import React from 'react';
import { mapModifiers } from 'libs/component';

export interface RequestInfoListProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

export const RequestInfoList: React.FC<RequestInfoListProps> = ({
  children,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('m-request-info-list');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
};
