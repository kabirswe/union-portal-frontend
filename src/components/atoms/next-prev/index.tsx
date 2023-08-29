import React from 'react';
import { mapModifiers } from 'libs/component';
import { Icon } from 'components/atoms/icon';

export interface NextPrevProps {
  length: number;
  currentIndex: number;
  onChange?: (index: number) => void;
  id?: string;
  className?: string;
}

export const NextPrev: React.FC<NextPrevProps> = ({
  length,
  currentIndex,
  onChange,
  id,
  className: additionalClassName = '',
}) => {
  const className = `a-next-prev ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      {/* Previous */}
      {length > 1 && (
        <button
          className={mapModifiers('a-next-prev__action', 'prev', currentIndex === 1 && 'disabled')}
          onClick={() => onChange && onChange(currentIndex - 1)}
        >
          <Icon name="arrow-left-gray-active" />
          <Icon name="arrow-left-gray-inactive" />
        </button>
      )}
      {/* Next */}
      {length > 1 && (
        <button
          className={mapModifiers('a-next-prev__action', 'next', currentIndex === length && 'disabled')}
          onClick={() => onChange && onChange(currentIndex + 1)}
        >
          <Icon name="arrow-right-gray-active" />
          <Icon name="arrow-right-gray-inactive" />
        </button>
      )}
    </div>
  );
};
