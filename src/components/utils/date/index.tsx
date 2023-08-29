import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

export interface DateProps {
  date: string;
  noDay?: true;
}

const normalFormat = 'YYYY.MM.DD HH:mm(ddd)';
const noDayFormat = 'YYYY.MM.DD HH:mm';

export const Date: React.FC<DateProps> = ({ date, noDay }) => {
  return <>{date !== '-' ? dayjs(date).format(noDay ? noDayFormat : normalFormat) : '-'}</>;
};
