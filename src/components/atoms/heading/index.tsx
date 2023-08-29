import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { Icon } from 'components/atoms/icon';
import { ICON_SHAPES } from 'components/atoms/icon';

export type HeadingTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface HeadingProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  icon?: typeof ICON_SHAPES[number];
  useDiv?: boolean;
  tag?: ModifierProp<HeadingTagType>;
}

export const Heading: React.FC<HeadingProps> = ({
  className: additionalClassName = '',
  children,
  icon,
  useDiv,
  tag = 'h1',
}) => {
  const componentClassName = mapModifiers('a-heading', `tag-${tag}`);
  const className = `${componentClassName} ${additionalClassName}`.trim();

  const renderHeadingText = () => {
    switch (tag) {
      case 'h1':
        return <h1 className="a-heading__text">{children}</h1>;
      case 'h2':
        return <h2 className="a-heading__text">{children}</h2>;
      case 'h3':
        return <h3 className="a-heading__text">{children}</h3>;
      case 'h4':
        return <h4 className="a-heading__text">{children}</h4>;
      case 'h5':
        return <h5 className="a-heading__text">{children}</h5>;
      default:
        return null;
    }
  };

  return (
    <div className={className}>
      <div className="a-heading__label">
        {icon && <Icon name={icon} />}
        {useDiv ? <div className="a-heading__text">{children}</div> : renderHeadingText()}
      </div>
    </div>
  );
};
