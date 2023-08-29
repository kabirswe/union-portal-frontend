import React, { useCallback, useEffect, useState } from 'react';
import { CalendarField } from 'components/atoms/calendar-field/index';
import { mapModifiers } from 'libs/component';
import * as dateFns from 'date-fns';

export interface DateRangeFieldProps {
  id?: string;
  className?: string;
  disabled?: boolean;
  startDate?: Date;
  endDate?: Date;
  onDateRangeChange?: (dates: (Date | undefined)[]) => void;
}

export const DateRangeField: React.FC<DateRangeFieldProps> = ({
  id,
  className: additionalClassName,
  disabled = false,
  startDate: initialStartDate,
  endDate: initialEndDate,
  onDateRangeChange,
}) => {
  const [startDate, setStartDate] = useState<Date | undefined>(initialStartDate);
  const [endDate, setEndDate] = useState<Date | undefined>(initialEndDate);

  const componentClassName = mapModifiers('a-date-range-field');
  const className = `${componentClassName} ${additionalClassName}`.trim();

  const onStartDateChange = useCallback(
    date => {
      setStartDate(date);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let currentEndDate: Date = undefined as any;
      if (typeof endDate !== 'undefined') {
        currentEndDate = endDate;
      } else {
        currentEndDate = date;
      }
      if (dateFns.differenceInDays(date, currentEndDate) <= 0) {
        setEndDate(currentEndDate);
      }
    },
    [endDate]
  );

  const onEndDateChange = useCallback(
    date => {
      setEndDate(date);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let currentStartDate: Date = undefined as any;
      if (typeof startDate !== 'undefined') {
        currentStartDate = startDate;
      } else {
        currentStartDate = date;
      }
      if (dateFns.differenceInDays(date, currentStartDate) <= 0) {
        setStartDate(currentStartDate);
      }
    },
    [startDate]
  );

  useEffect(() => {
    if (onDateRangeChange) {
      onDateRangeChange([startDate, endDate]);
    }
  }, [onDateRangeChange, startDate, endDate]);
  return (
    <div id={id} className={className}>
      <CalendarField
        className="a-date-range-field__start-date"
        defaultValue={startDate}
        onDateChange={onStartDateChange}
        maxDate={endDate}
        disabled={disabled}
      />
      <span className="a-date-range-field__line">~</span>
      <CalendarField
        className="a-date-range-field__end-date"
        defaultValue={endDate}
        onDateChange={onEndDateChange}
        minDate={startDate}
        disabled={disabled}
      />
    </div>
  );
};
