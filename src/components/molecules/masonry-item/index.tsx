import React, { useLayoutEffect, useRef } from 'react';
import { mapModifiers } from 'libs/component';
import { useMediaQuery } from 'react-responsive';
import { SP_MAX_WIDTH } from 'consts/common';

const rowHeight = 0;
const rowGap = 16;

const adjustGridItemsHeight = (h: number) => {
  const rowSpan = Math.ceil((h + rowGap) / (rowHeight + rowGap));
  return 'span ' + rowSpan;
};

export interface MasonryItemProps {
  children?: React.ReactNode;
  className?: string;
  col?: '1' | 'auto';
}

export const MasonryItem: React.FC<MasonryItemProps> = ({
  children,
  className: additionalClassName = '',
  col = 'auto',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: `(max-width: ${SP_MAX_WIDTH}px)` });

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const height = (entries[0].target.firstChild as Element).getBoundingClientRect().height;
      if (containerRef.current) {
        const rowSpan = adjustGridItemsHeight(height);
        containerRef.current.style.gridRowEnd = rowSpan;
      }
    });

    if (!isMobile) {
      containerRef.current && resizeObserver.observe(containerRef.current);
    } else {
      resizeObserver.disconnect();
      if (containerRef.current) {
        containerRef.current.style.gridRowEnd = '';
      }
    }
    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const componentClassName = mapModifiers('m-masonry-item');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const itemStyle = isMobile ? {} : { gridColumn: col === 'auto' ? 'auto' : `${col} / -1` };
  return (
    <div className={className} ref={containerRef} style={itemStyle}>
      {children}
    </div>
  );
};
