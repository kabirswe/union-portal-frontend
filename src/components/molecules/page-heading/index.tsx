import React from 'react';
import { mapModifiers } from 'libs/component';
import { Heading, HeadingTagType } from 'components/atoms/heading';
import { ICON_SHAPES } from 'components/atoms/icon';

export interface PageHeadingProps {
  title: string;
  actions?: React.ReactNode;
  id?: string;
  className?: string;
  icon?: typeof ICON_SHAPES[number];
  useDiv?: boolean;
  tag?: HeadingTagType;
}

export const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  actions,
  id,
  className: additionalClassName = '',
  icon,
  useDiv,
  tag,
}) => {
  const componentClassName = mapModifiers('m-page-heading', actions ? 'with-actions' : '');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <Heading icon={icon} useDiv={useDiv} tag={tag}>
        {title}
      </Heading>
      {actions && <div className="m-page-heading__actions">{actions}</div>}
    </div>
  );
};
