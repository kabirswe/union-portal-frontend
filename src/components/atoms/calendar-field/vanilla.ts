import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';
import flatpickr from 'flatpickr';
import { Instance } from 'flatpickr/dist/types/instance';
import { Japanese } from 'flatpickr/dist/l10n/ja';
import * as dateFns from 'date-fns';
import { makeSureResizeObserverPolyfilled } from 'libs/polyfills';

export class CalendarField extends VanillaComponent<HTMLDivElement> {
  private _onDateChange: (date: Date | undefined) => void = () => undefined;
  private _currentDate: Date | undefined;
  private _dateFormat: string;
  private _fp: Instance | undefined;
  private _resizeObserver: ResizeObserver;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });
    makeSureResizeObserverPolyfilled();

    this._dateFormat = 'yyyy/MM/dd';
    this.calendarPosition = this.calendarPosition.bind(this);
    this._resizeObserver = new ResizeObserver(this.calendarPosition);
    const defaultValue = element.dataset.defaultValue || '';
    const inputEl = element.querySelector<HTMLInputElement>('.a-calendar-field__input .a-text-field__input');
    if (!inputEl) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let defaultDate: any = undefined;
    if (defaultValue) {
      defaultDate = dateFns.parse(defaultValue, this._dateFormat, new Date()) || new Date();
      this._currentDate = defaultDate;
      inputEl.value = dateFns.format(defaultDate, this._dateFormat);
    }
    this._fp = flatpickr(inputEl, {
      disableMobile: true,
      enableTime: false,
      monthSelectorType: 'static',
      locale: Japanese,
      appendTo: element,
      nextArrow: '',
      prevArrow: '',
      static: true,
      defaultDate,
      dateFormat: 'Y/m/d',

      onChange: date => {
        if (date.length > 0) {
          const currentDate = date[0];
          this._currentDate = currentDate;
          this._onDateChange(currentDate);
        }
      },

      onOpen: () => {
        this.start();
      },
      onClose: () => {
        this.stop();
      },
    });
  }

  public get currentDate() {
    return this._currentDate as Date;
  }

  public set currentDate(date: Date) {
    this._fp?.setDate(date);
    this._currentDate = date;
  }

  public set onDateChange(callback: (date: Date | undefined) => void) {
    this._onDateChange = callback;
  }

  public set minDate(date: Date | undefined) {
    if (this._fp && this._fp.config) {
      this._fp.config.minDate = date;
    }
  }

  public set maxDate(date: Date | undefined) {
    if (this._fp && this._fp.config) {
      this._fp.config.maxDate = date;
    }
  }

  private start() {
    const modal: HTMLDivElement | null = document.querySelector('.o-whole');
    const resizeObserver = new ResizeObserver(() => {
      this.calendarPosition.bind(this)();
    });
    if (modal) {
      resizeObserver.observe(modal);
    }

    this._resizeObserver = resizeObserver;
  }

  private stop() {
    this._resizeObserver?.disconnect();
  }

  private calendarPosition() {
    const cal: HTMLDivElement | undefined = this._fp?.calendarContainer;
    // const viewportWidth = window.visualViewport.width;
    // const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const modal = document.querySelector<HTMLDivElement>('.o-modal__window');
    if (!modal) {
      return;
    }

    if (cal) {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const calRect = cal.getBoundingClientRect();
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
        const elementRect = this.element.getBoundingClientRect();
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
        // check if calendar is exceed viewport or not
        if (calRect.left + calRect.width > vw) {
          // flip to left
          // check if it exceed left border or not
          if (vw - calRect.width > 0) {
            cal.style.left = `${vw - calRect.width}px`;
          } else {
            cal.style.left = `0px`;
          }
        } else {
          cal.style.left = 'auto';
        }
        if (calRect.top + calRect.height > vh) {
          // flip to top
          // check if it exceed top border or not
          if (vh - calRect.height > 0) {
            cal.style.top = `${vh - calRect.height}px`;
          } else {
            cal.style.top = '0px';
          }
        } else {
          cal.style.top = 'auto';
        }
      }
    }
  }
}

export function autoInitCalendarField() {
  document.querySelectorAll<HTMLDivElement>('.a-calendar-field').forEach(element => new CalendarField({ element }));
}
