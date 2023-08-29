import React from 'react';

export interface TextPlaceholderProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dataId: number;
  code: string;
}

export const TextPlaceholder: React.FC<TextPlaceholderProps> = ({
  children,
  id,
  className: additionalClassName = '',
  dataId,
  code,
}) => {
  const className = `a-text-placeholder ${additionalClassName}`.trim();
  return (
    <span id={id} className={className} data-id={dataId} data-code={code} data-value={children}>
      {children}
    </span>
  );
};
