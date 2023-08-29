/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React, { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import { mapModifiers, ModifierProp } from 'libs/component';
import flatpickr from 'flatpickr';
import { Instance } from 'flatpickr/dist/types/instance';
import { Japanese } from 'flatpickr/dist/l10n/ja';
import { TextField } from 'components/atoms/text-field';

import { Icon } from 'components/atoms/icon';

import * as dateFns from 'date-fns';
import { makeSureResizeObserverPolyfilled } from 'libs/polyfills';

export interface CalendarFieldProps {
  id?: string;
  className?: string;
  disabled?: boolean;
  modifiers?: ModifierProp<'invalid'>;
  defaultValue?: Date;
  onDateChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

export const CalendarField: React.FC<CalendarFieldProps> = ({
  id,
  className: additionalClassName,
  disabled = false,
  modifiers,
  defaultValue,
  onDateChange,
  minDate,
  maxDate,
}) => {
  makeSureResizeObserverPolyfilled();

  const componentClassName = mapModifiers('a-calendar-field', modifiers, disabled && 'disabled');
  const className = `${componentClassName} ${additionalClassName}`.trim();

  const dateFormat = 'yyyy/MM/dd';
  const [currentDate, setCurrentDate] = useState(defaultValue || new Date());

  const rootRef = useRef(null);
  const wrapperRef = useRef(null);
  const [datePicker, setDatePicker] = useState<Instance | undefined>(undefined);

  const calendarPosition = useCallback(() => {
    const cal: HTMLDivElement | undefined = datePicker?.calendarContainer;
    const rootEl: HTMLElement = rootRef?.current as any;
    const root =
      document.querySelector<HTMLDivElement>('.o-modal__window') ||
      document.querySelector<HTMLDivElement>('.o-whole__body-container') ||
      document.querySelector<HTMLDivElement>('#root');
    if (!root || !rootEl) {
      return;
    }

    if (cal) {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const calRect = cal.getBoundingClientRect();
      const elementRect = rootEl.getBoundingClientRect();
      // check if this is in a modal or not
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let modal: HTMLElement = undefined as any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      document.querySelectorAll('.o-modal--opened').forEach((el: any) => {
        const mod: HTMLElement = el;
        if (mod.contains(cal)) {
          modal = mod;
        }
      });
      if (modal) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const modalWindow: HTMLElement = modal.querySelector('.o-modal__window') as any;
        const modalRect = modalWindow.getBoundingClientRect();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const modalBody: HTMLElement = modal.querySelector('.o-modal__body') as any;
        // check if calendar is exceed modal or not
        if (elementRect.left + calRect.width > modalRect.left + modalRect.width) {
          // flip to left
          // check if it exceed left border or not
          if (elementRect.left + elementRect.width - modalRect.left - calRect.width > 0) {
            cal.style.left = `${elementRect.left + elementRect.width - modalRect.left - calRect.width}px`;
          } else {
            cal.style.left = `${-modalRect.left}px`;
          }
        } else {
          cal.style.left = `${elementRect.left - modalRect.left}px`;
        }
        if (elementRect.top + calRect.height - modalBody.scrollTop > modalRect.height) {
          // flip to top
          // check if it exceed top border or not
          if (elementRect.top - calRect.height > 0) {
            cal.style.top = `${elementRect.top - calRect.height}px`;
          } else {
            cal.style.top = `${-modalRect.top}px`;
          }
        } else {
          cal.style.top = `${elementRect.top - modalRect.top + elementRect.height}px`;
        }
      } else {
        // check if calendar is exceed view port or not
        if (elementRect.left + calRect.width > vw) {
          // flip to left
          // check if it exceed left border or not
          if (elementRect.left + elementRect.width - calRect.width > 0) {
            cal.style.left = `${elementRect.left + elementRect.width - calRect.width}px`;
          } else {
            cal.style.left = '0px';
          }
        } else {
          cal.style.left = `${elementRect.left}px`;
        }
        if (elementRect.top + calRect.height - root.scrollTop > vh) {
          // flip to top
          // check if it exceed top border or not
          if (elementRect.top - calRect.height > 0) {
            cal.style.top = `${elementRect.top - calRect.height}px`;
          } else {
            cal.style.top = '0px';
          }
        } else {
          cal.style.top = `${elementRect.top + elementRect.height}px`;
        }
      }
    }
  }, [rootRef, datePicker]);

  useLayoutEffect(() => {
    const wrapper: HTMLDivElement = wrapperRef?.current as unknown as HTMLDivElement;
    const input = wrapper.querySelector('.a-calendar-field__input .a-text-field__input') as HTMLInputElement;

    setDatePicker(
      flatpickr(input, {
        disableMobile: true,
        enableTime: false,
        monthSelectorType: 'static',
        locale: Japanese,
        appendTo: wrapper,
        defaultDate: currentDate,
        nextArrow: '',
        prevArrow: '',
        static: true,
        dateFormat: 'Y/m/d',
        animate: false,
        onChange: date => {
          const curDate = date[0] as Date;
          setCurrentDate(curDate);
          if (curDate && onDateChange) {
            onDateChange(curDate);
          }
        },
      })
    );
  }, [currentDate, wrapperRef, onDateChange]);

  useEffect(() => {
    if (datePicker && datePicker.config) {
      let resizeObserver: ResizeObserver;
      datePicker.config.onOpen.splice(0);
      datePicker.config.onOpen.push(() => {
        const modal: HTMLElement = document.querySelector('.o-whole') || (document.querySelector('#root') as any);
        resizeObserver = new ResizeObserver(calendarPosition as any);
        if (modal) {
          resizeObserver.observe(modal);
        }
      });
      datePicker.config.onClose.splice(0);
      datePicker.config.onClose.push(() => {
        if (resizeObserver) {
          resizeObserver.disconnect();
        }
      });
    }
  }, [datePicker, calendarPosition]);

  useEffect(() => {
    if (datePicker && datePicker.config) {
      datePicker.config.minDate = minDate;
      datePicker.config.maxDate = maxDate;
    }
  }, [datePicker, minDate, maxDate]);

  useEffect(() => {
    if (datePicker && datePicker.config && defaultValue) {
      setCurrentDate(defaultValue);
      datePicker.config.defaultDate = defaultValue;
    }
  }, [datePicker, defaultValue]);

  return (
    <div
      id={id}
      className={className}
      data-default-value={defaultValue ? dateFns.format(defaultValue, dateFormat) : undefined}
      ref={rootRef}
    >
      <div className="a-calendar-field__content" ref={wrapperRef}>
        <TextField
          type="text"
          className="a-calendar-field__input"
          value={dateFns.format(currentDate, dateFormat)}
          disabled={disabled}
          readOnly
        />
      </div>
      <div className="a-calendar-field__icon">
        <Icon name="calendar" />
      </div>
    </div>
  );
};
