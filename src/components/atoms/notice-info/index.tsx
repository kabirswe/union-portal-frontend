import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { Link } from 'components/utils/link';

export interface NoticeInfoProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'title'> {
  children?: React.ReactNode;
  title: string;
  tags?: React.ReactNode;
  date: string | React.ReactNode;
  modifiers?: ModifierProp<'unread' | 'side-by-side'>;
  href: string;
  useNative?: boolean;
}

export const NoticeInfo: React.FC<NoticeInfoProps> = ({
  children,
  title,
  tags,
  date,
  modifiers,
  href,
  useNative,
  ...anchorProps
}) => {
  return (
    <Link to={href} useNative={useNative} className={mapModifiers('a-notice-info', modifiers)} {...anchorProps}>
      <div className="a-notice-info__content">
        <span className="a-notice-info__date">{date}</span>
        {tags && <span className="a-notice-info__tags">{tags}</span>}
        <span className="a-notice-info__title">{title}</span>
      </div>
      {children && <p className="a-notice-info__description">{children}</p>}
    </Link>
  );
};
