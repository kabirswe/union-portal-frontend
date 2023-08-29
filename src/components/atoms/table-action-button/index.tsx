import React, { useState, useRef, useCallback, useEffect } from 'react';
import { mapModifiers } from 'libs/component';
import { Icon } from 'components/atoms/icon';
import _ from 'lodash';

export interface TableActionButtonProps {
  children?: React.ReactNodeArray;
  id?: string;
  className?: string;
}

export const TableActionButton: React.FC<TableActionButtonProps> = ({
  children,
  id,
  className: additionalClassName = '',
}) => {
  const [activeAction, setActiveAction] = useState(false);
  const componentClassName = mapModifiers('a-table-action-button', activeAction && 'active');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  const wrapperRef = useRef(null);
  const button = useRef(null);
  const action = useRef(null);

  const setActionsPosition = _.throttle(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const btnAction: any = button?.current;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const navAction: any = action?.current;
    if (btnAction && navAction) {
      const btnRect = (btnAction as HTMLElement).getBoundingClientRect();
      const navRect = (navAction as HTMLElement).getBoundingClientRect();
      if (typeof window !== 'undefined') {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        // check if button position + btn width + nav action width > viewport width or not
        if (btnRect.right + btnRect.width + navRect.width > vw) {
          // flip to left
          (navAction as HTMLElement).style.left = `${btnRect.left + btnRect.width - navRect.width - 4}px`;
        } else {
          // flip to right
          (navAction as HTMLElement).style.left = `${btnRect.left}px`;
        }
        if (btnRect.bottom + btnRect.height + navRect.height > vh) {
          // flip to top
          (navAction as HTMLElement).style.top = `${btnRect.top - navRect.height - 4}px`;
          (navAction as HTMLElement).style.bottom = 'auto';
        } else {
          // flip to bottom
          (navAction as HTMLElement).style.top = `${btnRect.top + btnRect.height + 4}px`;
          (navAction as HTMLElement).style.bottom = 'auto';
        }
      }
    }
  }, 100);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', e => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const wrapper: HTMLElement = wrapperRef?.current as any;
        if (!wrapper?.contains(e.target as HTMLElement)) {
          // hide
          setActiveAction(false);
        }
      });
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        if (activeAction) {
          setActionsPosition();
        }
      });
    }
  }, [activeAction, setActionsPosition]);

  const handleButtonActionClick = useCallback(() => {
    setTimeout(() => {
      setActiveAction(!activeAction);
      setActionsPosition();
    });
  }, [activeAction, setActionsPosition]);

  return (
    <div className={className} id={id} ref={wrapperRef}>
      <button ref={button} className="a-table-action-button__button" onClick={handleButtonActionClick}>
        <Icon name="dot-action" />
      </button>
      <div ref={action} className="a-table-action-button__action">
        {children}
      </div>
    </div>
  );
};
