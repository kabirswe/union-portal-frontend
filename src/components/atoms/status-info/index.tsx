import React from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { Icon, ICON_SHAPES } from 'components/atoms/icon';
import { RequestStatusTypes } from 'constants/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const statusList: any = {
  waiting: {
    label: '未対応',
  },
  remand: {
    label: '差戻し',
  },
  draft: {
    label: '下書き',
  },
  'in-progress': {
    label: '承認待ち',
  },
  approval: {
    label: '承認',
  },
  denial: {
    label: '否認',
  },
};

export interface StatusInfoProps {
  status?: ModifierProp<RequestStatusTypes>;
  id?: string;
  className?: string;
  badge: boolean;
}

export const StatusInfo: React.FC<StatusInfoProps> = ({
  status = 'draft',
  badge = false,
  id,
  className: additionalClassName = '',
}) => {
  const componentClassName = mapModifiers('a-status-info', status);
  const className = `${componentClassName} ${additionalClassName}`.trim();
  let label = '';
  if (statusList[status.toString()]) {
    label = statusList[status.toString()].label;
  }
  const iconName = status.toString() as typeof ICON_SHAPES[number];
  return (
    <div className={className} id={id}>
      <div className="a-status-info__icon">
        <Icon name={iconName} />
        {badge && <i className="a-status-info__badge"></i>}
      </div>
      <span className="a-status-info__label">{label}</span>
    </div>
  );
};
