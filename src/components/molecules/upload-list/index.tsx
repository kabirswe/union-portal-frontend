import React from 'react';
import { Icon } from 'components/atoms/icon';
import { mapModifiers, ModifierProp } from 'libs/component';

export interface UploadListItemProps {
  children: string;
  fileSize?: string;
  modifiers?: ModifierProp<'fill'>;
  handleOnClick?: () => void;
}

export const UploadListItem: React.FC<UploadListItemProps> = ({ handleOnClick, children, fileSize, modifiers }) => {
  return (
    <li className={mapModifiers('m-upload-list__item', modifiers)}>
      <div className="m-upload-list__file">
        <span className="m-upload-list__file-name">{children}</span>
        <span className="m-upload-list__file-size">{fileSize}</span>
      </div>
      <button type="button" className="m-upload-list__button-remove" onClick={handleOnClick}>
        <Icon name="close-fill" />
      </button>
    </li>
  );
};

export interface UploadListProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  label?: string;
  modifiers?: ModifierProp<'column'>;
}

export const UploadList: React.FC<UploadListProps> = ({
  children,
  label,
  className: additionalClassName,
  id,
  modifiers,
}) => {
  const componentClassName = mapModifiers('m-upload-list', modifiers);
  const className = `${componentClassName} ${additionalClassName}`.trim();

  return (
    <div className={className} id={id}>
      {label && <label className="m-upload-list__label">{label}</label>}
      <ul className="m-upload-list__items">{children}</ul>
      <template className="m-upload-list__template">
        <UploadListItem fileSize="40KB">_</UploadListItem>
      </template>
    </div>
  );
};
