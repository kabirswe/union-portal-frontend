import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { Icon } from 'components/atoms/icon';

export interface ApprovalStepProps {
  requester?: boolean;
  isDone?: boolean;
  name: React.ReactNode;
  modifiers?: ModifierProp<'auto'>;
  step?: number;
}

export const ApprovalStep: React.FC<ApprovalStepProps> = ({ modifiers, step, name, requester, isDone = false }) => {
  return (
    <div className={mapModifiers('a-approval-step', modifiers, requester && 'has-requester', isDone && 'done')}>
      {!modifiers && <span className="a-approval-step__step-number">{step}</span>}
      {modifiers && (
        <span className="a-approval-step__icon">
          <Icon name={isDone ? 'status-a' : 'status-b'} />
        </span>
      )}
      <span className="a-approval-step__name">{name}</span>
    </div>
  );
};
