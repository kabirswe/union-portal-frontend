import { Icon } from 'components/atoms/icon';
import { mapModifiers } from 'libs/component';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface AccordionProps {
  children: React.ReactNode;
  label: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, label }) => {
  const [isOpened, setOpened] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleOnClick = useCallback(() => {
    if (detailRef.current) {
      detailRef.current.style.setProperty('--detail-height', `${detailRef.current.scrollHeight}px`);
    }

    setTimeout(() => {
      setOpened(!isOpened);
    }, 0);
  }, [isOpened]);

  useEffect(() => {
    const detailEl = detailRef.current;

    const onTransitionEnd = () => {
      detailEl?.style?.setProperty('--detail-height', 'auto');
    };

    detailEl?.addEventListener('transitionend', onTransitionEnd);

    return () => detailEl?.removeEventListener('transitionend', onTransitionEnd);
  }, []);

  return (
    <div className={mapModifiers('m-accordion', isOpened ? 'opened' : '')}>
      <button type="button" className="m-accordion__label" onClick={handleOnClick}>
        {label}
        <Icon name="arrow-down" />
      </button>
      <div ref={detailRef} className="m-accordion__detail">
        {children}
      </div>
    </div>
  );
};
