import React from 'react';
import { mapModifiers } from 'libs/component';

export interface MasonryContainerProps {
  children?: React.ReactNode;
  className?: string;
  col?: '2' | '3' | '4';
}

export const MasonryContainer: React.FC<MasonryContainerProps> = ({
  children,
  className: additionalClassName = '',
  col = '3',
}) => {
  const componentClassName = mapModifiers('o-masonry-container', col && `col-${col}`);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return <div className={className}>{children}</div>;
};
