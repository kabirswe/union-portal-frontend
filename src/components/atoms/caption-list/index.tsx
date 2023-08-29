import React from 'react';

export interface CaptionListProps {
  children?: React.ReactNode;
}

export const CaptionList: React.FC<CaptionListProps> = ({ children }) => (
  <ul className={'a-caption-list'}>{children}</ul>
);
