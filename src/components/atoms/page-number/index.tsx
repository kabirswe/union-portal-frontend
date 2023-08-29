import React from 'react';

export interface PageNumberProps {
  currentPage?: number;
  totalPage?: number;
  numberOfArticles?: number;
  id?: string;
  className?: string;
}

export const PageNumber: React.FC<PageNumberProps> = ({
  currentPage,
  totalPage,
  numberOfArticles,
  id,
  className: additionalClassName = '',
}) => {
  const className = `a-page-number ${additionalClassName}`.trim();
  return (
    <span className={className} id={id}>
      {currentPage}-{totalPage} / {numberOfArticles}
    </span>
  );
};
