import React from 'react';
import { Icon } from 'components/atoms/icon';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface UserAccountProps {
  userName?: string;
  companyName?: string;
  position?: string;
  companyId?: string;
  modifiers?: ModifierProp<'card'>;
  className?: string;
}

export const UserAccount: React.FC<UserAccountProps> = ({
  userName,
  companyName,
  position,
  companyId,
  modifiers,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('a-user-account', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <div className={className}>
      <div className="a-user-account__icon">
        <Icon name="user-avatar" />
      </div>
      <div className="a-user-account__container">
        <div className="a-user-account__name">{userName}</div>
        <div className="a-user-account__companyinfo">
          <span>
            {companyName} {position} <br />
            {companyId}
          </span>
        </div>
      </div>
    </div>
  );
};
