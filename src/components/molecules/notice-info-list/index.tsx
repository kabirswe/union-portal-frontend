import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface NoticeInfoListProps {
  children?: React.ReactNode;
  modifiers?: ModifierProp<'side-by-side'>;
  noScroll?: boolean;
}

export const NoticeInfoList: React.FC<NoticeInfoListProps> = ({ children, modifiers, noScroll }) => {
  const componentClassName = mapModifiers('m-notice-info-list', modifiers, noScroll && 'no-scroll');
  const className = `${componentClassName}`.trim();

  return (
    <ul className={className}>
      {React.Children.map(children, (item, index) => (
        <li key={index} className="m-notice-info-list__item">
          {item}
        </li>
      ))}
    </ul>
  );
};
