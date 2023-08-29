import React from 'react';

export interface EmailTemplateViewerProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}

export const EmailTemplateViewer: React.FC<EmailTemplateViewerProps> = ({
  children,
  id,
  className: additionalClassName = '',
}) => {
  const className = `a-email-template-viewer ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
};
