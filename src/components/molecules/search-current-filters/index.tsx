import { Button } from 'components/atoms/button';
import React from 'react';

export interface SearchCurrentFiltersProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  dateFilterStart: string;
  dateFilterEnd: string;
  onClearClick?: () => void;
}

export const SearchCurrentFilters: React.FC<SearchCurrentFiltersProps> = ({
  children,
  id,
  className: additionalClassName = '',
  dateFilterStart,
  dateFilterEnd,
  onClearClick,
}) => {
  const className = `m-search-current-filters ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <div className="m-search-current-filters__tags">{children}</div>
      <div className="m-search-current-filters__wrap">
        <span className="m-search-current-filters__date">
          {dateFilterStart} ~ {dateFilterEnd}
        </span>
        <Button
          type="button"
          className="m-search-current-filters__clear-button"
          modifiers="text"
          onClick={onClearClick}
        >
          条件クリア
        </Button>
      </div>
    </div>
  );
};
