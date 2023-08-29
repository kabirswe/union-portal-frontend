import React from 'react';
import { Icon, ICON_SHAPES } from 'components/atoms/icon';
import { Link } from 'components/utils/link';
import { Omitpipe } from 'components/utils/omitpipe';

export interface ToolItemProps {
  label?: string;
  icon: typeof ICON_SHAPES[number];
  href: string;
  target?: string;
  useNative?: boolean;
  useNativeHashLink?: boolean;
  id?: string;
  className?: string;
}

export const ToolItem: React.FC<ToolItemProps> = ({
  label,
  icon,
  href,
  target,
  useNative,
  useNativeHashLink,
  id,
  className: additionalClassName = '',
}) => {
  const className = `a-tool-item ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <Link
        className="a-tool-item__link"
        to={href}
        target={target}
        useNative={useNative}
        useNativeHashLink={useNativeHashLink}
      >
        <Icon name={icon} />
        {label && (
          <div className="a-tool-item__label">
            <Omitpipe linesPC={2} linesSP={2}>
              {label}
            </Omitpipe>
          </div>
        )}
      </Link>
    </div>
  );
};
