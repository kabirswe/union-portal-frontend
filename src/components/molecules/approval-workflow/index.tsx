import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface ApprovalWorkflowProps {
  children: React.ReactNodeArray;
  modifiers?: ModifierProp<'auto'>;
  id?: string;
  className?: string;
}

export const ApprovalWorkflow: React.FC<ApprovalWorkflowProps> = ({
  children,
  modifiers,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('m-approval-workflow', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <ul className={className} id={id}>
      {children.map((item, idx) => (
        <li key={idx} className="m-approval-workflow__item">
          {item}
        </li>
      ))}
    </ul>
  );
};
