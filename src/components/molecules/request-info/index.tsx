import React, { MouseEventHandler } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import { RequestStatusTypes } from 'constants/types';
import { StatusInfo } from 'components/atoms/status-info';
import { ButtonContainer } from 'components/molecules/button-container';

export interface RequestInfoProps {
  modifiers?: ModifierProp<'with-duplicate'>;
  title: string;
  status?: ModifierProp<RequestStatusTypes>;
  badge?: boolean;
  children?: React.ReactNode;
  buttons?: React.ReactNode;
  id?: string;
  className?: string;
  handleCardClick?: MouseEventHandler;
}

export const RequestInfo: React.FC<RequestInfoProps> = ({
  modifiers,
  title,
  status = 'draft',
  badge = false,
  children,
  buttons,
  id,
  className: additionalClassName = '',
  handleCardClick,
}) => {
  const onCardClick = (e: React.MouseEvent<HTMLElement>) => {
    if (handleCardClick) {
      if (buttons) {
        e.nativeEvent.preventDefault();
        // check target is not action button
        const target: HTMLElement = e.nativeEvent.target as HTMLElement;
        let isButton = false;
        target.classList.forEach(cls => {
          if (cls.indexOf('a-button') !== -1) {
            isButton = true;
          }
        });
        if (!isButton) {
          e.nativeEvent.stopPropagation();
          handleCardClick(e);
        }
      } else {
        handleCardClick(e);
      }
    }
  };
  const componentClassName = mapModifiers('m-request-info', status, modifiers, buttons ? 'buttons' : '');
  const className = `${componentClassName} ${additionalClassName}`.trim();
  return (
    <div className={className} id={id} onClick={onCardClick}>
      <div className="m-request-info__content">
        <div className="m-request-info__status">
          <StatusInfo status={status} badge={badge} />
        </div>
        <div className="m-request-info__detail">
          <div className="m-request-info__detail-title">{title}</div>
          <div className="m-request-info__detail-list">{children}</div>
        </div>
      </div>
      {buttons && <ButtonContainer className="m-request-info__action">{buttons}</ButtonContainer>}
    </div>
  );
};
