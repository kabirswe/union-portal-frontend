import React from 'react';

export interface ToolItemListProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const ToolItemList: React.FC<ToolItemListProps> = ({ children, id, className: additionalClassName = '' }) => {
  const className = `m-tool-item-list ${additionalClassName}`.trim();

  return (
    <div className={className} id={id}>
      {React.Children.map(children, (item, index) => (
        <div key={index} className="m-tool-item-list__content">
          {item}
        </div>
      ))}
    </div>
  );
};
