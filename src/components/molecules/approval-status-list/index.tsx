import React from 'react';

export interface ApprovalStatusListProps {
  children: React.ReactNodeArray;
}

export const ApprovalStatusList: React.FC<ApprovalStatusListProps> = ({ children }) => {
  return (
    <ul className="m-approval-status-list">
      {children.map((item, idx) => (
        <li key={idx} className="m-approval-status-list__item">
          {item}
        </li>
      ))}
    </ul>
  );
};
