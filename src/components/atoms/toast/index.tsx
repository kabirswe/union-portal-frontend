import React, { useEffect, useState } from 'react';
import { mapModifiers } from 'libs/component';

export interface ToastProps {
  opened?: boolean;
  duration?: number;
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  duration = 5000, // Set -1 to not automatically close the toast
  children,
  opened = false,
  id,
  className: additionalClassName = '',
}) => {
  const [isOpened, setIsOpened] = useState(opened);

  useEffect(() => {
    if (isOpened && duration !== -1) {
      setTimeout(() => {
        setIsOpened(!isOpened);
      }, duration);
    }
  }, [isOpened, duration]);
  const componentClassName = mapModifiers('a-toast', isOpened && 'opened');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <div className="a-toast__message">{children}</div>
    </div>
  );
};
