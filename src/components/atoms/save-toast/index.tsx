import React from 'react';
import { Slide, ToastContainer, ToastPosition, ToastTransition, ToastContent, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let toastId: React.ReactText | null = null;

export const NotifyToast = (label?: React.ReactNode, onOpen?: () => void) => {
  if (toastId && toast.isActive(toastId)) {
    toast.dismiss(toastId);
  }
  if (label) {
    toastId = toast(label, {
      delay: 200,
      onOpen: () => {
        onOpen && onOpen();
      },
    });
  } else {
    onOpen && onOpen();
  }
};

export interface SaveToastProps {
  transition?: ToastTransition;
  autoClose?: number;
  position?: ToastPosition;
  hideProgressBar?: boolean;
  closeButton?: boolean;
  closeOnClick?: boolean;
  draggable?: boolean;
  pauseOnHover?: boolean;
  pauseOnFocusLoss?: boolean;
  className?: string;
  children?: ToastContent;
  limit?: number;
}

export const SaveToast: React.FC<SaveToastProps> = ({
  transition = Slide,
  autoClose = 5000,
  position = 'bottom-center',
  hideProgressBar = true,
  closeButton = false,
  closeOnClick = true,
  draggable = false,
  pauseOnHover = true,
  pauseOnFocusLoss = true,
  className: additionalClassName = '',
  children,
  limit = 2,
}) => {
  const className = `a-save-toast ${additionalClassName}`.trim();

  return (
    <ToastContainer
      toastClassName={() => 'a-save-toast__toast'}
      bodyClassName={() => 'a-save-toast__toast-body'}
      className={className}
      transition={transition}
      autoClose={autoClose}
      position={position}
      hideProgressBar={hideProgressBar}
      closeOnClick={closeOnClick}
      closeButton={closeButton}
      draggable={draggable}
      pauseOnHover={pauseOnHover}
      pauseOnFocusLoss={pauseOnFocusLoss}
      limit={limit}
    >
      {children}
    </ToastContainer>
  );
};
