import { VanillaComponent, VanillaComponentConstructor } from 'libs/vanilla-component';
import { CalendarField } from 'components/atoms/calendar-field/vanilla';
import * as dateFns from 'date-fns';

export class DateRangeField extends VanillaComponent<HTMLDivElement> {
  private _onDateRangeChange: (dates: (Date | undefined)[]) => void = () => undefined;
  private _startDateField: CalendarField;
  private _endDateField: CalendarField;

  constructor({ element }: VanillaComponentConstructor<HTMLDivElement>) {
    super({ element });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const startEl: any = element.querySelector('.a-date-range-field__start-date');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const endEl: any = element.querySelector('.a-date-range-field__end-date');
    this._startDateField = startEl?.__component as CalendarField;
    this._endDateField = endEl?.__component as CalendarField;

    if (this._startDateField) {
      this._startDateField.onDateChange = (date: Date | undefined) => {
        // set min date for end
        if (this._endDateField) {
          this._endDateField.minDate = date;
          const endDate: Date = this._endDateField.currentDate;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let currentEndDate: Date = undefined as any;
          if (typeof endDate !== 'undefined') {
            currentEndDate = endDate;
          } else {
            currentEndDate = date as Date;
          }
          if (dateFns.differenceInDays(date as Date, currentEndDate) <= 0) {
            this._endDateField.currentDate = currentEndDate;
          }
          this._onDateRangeChange([this._startDateField.currentDate, this._endDateField.currentDate]);
        }
      };
    }

    if (this._endDateField) {
      this._endDateField.onDateChange = (date: Date | undefined) => {
        // set max date for start
        if (this._startDateField) {
          this._startDateField.maxDate = date;
          const startDate = this._startDateField.currentDate;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let currentStartDate: Date = undefined as any;
          if (typeof startDate !== 'undefined') {
            currentStartDate = startDate;
          } else {
            currentStartDate = date as Date;
          }
          if (dateFns.differenceInDays(date as Date, currentStartDate) <= 0) {
            this._startDateField.currentDate = currentStartDate;
          }
          this._onDateRangeChange([this._startDateField.currentDate, this._endDateField.currentDate]);
        }
      };
    }
  }

  public set onDateRangeChange(callback: (dates: (Date | undefined)[]) => void) {
    this._onDateRangeChange = callback;
  }
}

export function autoInitDateRangeField() {
  document.querySelectorAll<HTMLDivElement>('.a-date-range-field').forEach(element => new DateRangeField({ element }));
}
