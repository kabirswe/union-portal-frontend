import React from 'react';
import { Icon } from 'components/atoms/icon/index';
import { AddItemButton } from 'components/atoms/add-item-button/index';
import { mapModifiers } from 'libs/component';

export interface RecipientInputProps {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  addButtonLabel?: string;
  templateInput?: React.ReactNode;
  isDisableButtonClose?: boolean;
  onAddRequested?: () => void;
  onRemoveRequested?: (index: number) => void;
}

export const RecipientInput: React.FC<RecipientInputProps> = ({
  children,
  id,
  className: additionalClassName = '',
  addButtonLabel = '送信アドレスを追加',
  templateInput,
  isDisableButtonClose = false,
  onAddRequested,
  onRemoveRequested,
}) => {
  const className = `m-recipient-input ${additionalClassName}`.trim();
  return (
    <div className={className} id={id}>
      <template className="m-recipient-input__template">{templateInput}</template>
      <ul className="m-recipient-input__list">
        {React.Children.map(children, (input, index) => (
          <li className="m-recipient-input__item" key={index}>
            <div className="m-recipient-input__input">{input}</div>
            <div className={mapModifiers('m-recipient-input__remove-button', isDisableButtonClose && 'hide')}>
              <button
                onClick={() => {
                  onRemoveRequested && onRemoveRequested(index);
                }}
              >
                <Icon name="close" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="m-recipient-input__add-button">
        <AddItemButton handleAddItemClick={onAddRequested}>{addButtonLabel}</AddItemButton>
      </div>
    </div>
  );
};
