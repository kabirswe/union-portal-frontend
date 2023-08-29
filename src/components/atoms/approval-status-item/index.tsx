import { Icon } from 'components/atoms/icon';
import { mapModifiers } from 'libs/component';
import React from 'react';

export interface ApprovalStatusItemProps {
  children: React.ReactNode;
  done?: boolean;
  requester?: boolean;
  time: string;
  title: string;
}

export const ApprovalStatusItem: React.FC<ApprovalStatusItemProps> = ({
  children,
  done = false,
  requester,
  time,
  title,
}) => {
  return (
    <div className="a-approval-status-item">
      <span className="a-approval-status-item__icon-status">
        <Icon name={done ? 'status-a' : 'status-b'} />
      </span>
      <div className="a-approval-status-item__content">
        <span className="a-approval-status-item__title">{title}</span>
        <time className="a-approval-status-item__time" dateTime={time}>
          {time}
        </time>
        <span className={mapModifiers('a-approval-status-item__reference', requester && 'requester')}>{children}</span>
      </div>
    </div>
  );
};
