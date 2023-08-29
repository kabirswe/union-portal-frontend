import React, { InputHTMLAttributes, MouseEventHandler, useRef, useState } from 'react';
import { Icon } from 'components/atoms/icon';
import { SearchButton } from 'components/atoms/search-button';
import { mapModifiers } from 'libs/component';
import { TextField, TextFieldProps } from 'components/atoms/text-field';

type InheritedProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'>;

export interface SearchBarProps extends InheritedProps {
  id?: string;
  className?: string;
  handleCloseClick?: MouseEventHandler;
  textFieldProps?: TextFieldProps;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  id,
  className: additionalClassName = '',
  handleCloseClick,
  textFieldProps,
}) => {
  const input = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  const className = `${mapModifiers('m-search-bar', isOpened && 'opened')} ${additionalClassName}`.trim();
  const openSearchBar = () => {
    setIsOpened(true);
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const inputWrapperEl: any = input?.current || undefined;
      if (inputWrapperEl) {
        const inputEl: HTMLInputElement = inputWrapperEl.querySelector('.a-text-field__input');
        if (inputEl) {
          inputEl.focus();
        }
      }
    }, 750);
  };
  const onCloseClick = (e: React.MouseEvent) => {
    // clear value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inputWrapperEl: any = input?.current || undefined;
    if (inputWrapperEl) {
      const inputEl: HTMLInputElement = inputWrapperEl.querySelector('.a-text-field__input');
      if (inputEl) {
        inputEl.value = '';
      }
    }
    if (handleCloseClick) {
      handleCloseClick(e);
    }
    setIsOpened(false);
  };
  return (
    <div className={className} id={id}>
      <div className="m-search-bar__field">
        <div className="m-search-bar__search-input" ref={input}>
          <TextField {...textFieldProps} className="m-search-bar__input" type="search" />
        </div>
        <button className="m-search-bar__button-close" onClick={onCloseClick}>
          <Icon name="close" />
        </button>
      </div>
      <div className="m-search-bar__button">
        <SearchButton modifiers="light" onClick={openSearchBar}>
          キーワード検索
        </SearchButton>
      </div>
    </div>
  );
};
