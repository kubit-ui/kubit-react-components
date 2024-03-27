import React from 'react';

import { UtilsProvider } from '@/provider';
import { DateFormatOptions } from '@/provider/utils/types';
import { FormatWeekdayOptionType } from '@/types';
import {
  formatDate,
  getAddDays,
  getAddMonths,
  getAddYears,
  getAllMonthNames,
  getAllWeekdayNames,
  getSubDays,
  getSubMonths,
  getSubYears,
  isAfter,
  isBefore,
  isDatesEqual,
  transformDate,
} from '@/utils/date';

//delete on kubit
const folder = {
  santander: 'santander',
  modelbank: 'mb',
  santander_black: 'santander',
  modelbank_cc: 'mb',
  santander_cc: 'santander',
};
//delete on kubit

export const UtilsProviderDocStorybook = ({
  children,
  theme,
}: {
  children: JSX.Element;
  theme: string;
}): JSX.Element => {
  return (
    <UtilsProvider
      dateHelpers={{
        isAfter: (date1: Date, date2: Date) => {
          return isAfter(date1, date2);
        },
        isBefore: (date1: Date, date2: Date) => {
          return isBefore(date1, date2);
        },
        isDatesEqual: (firsDate: string | number | Date, secondDate: string | number | Date) => {
          return isDatesEqual(firsDate, secondDate);
        },
        getAddDays: (date: Date, days: number) => {
          return getAddDays(date, days);
        },
        getAddMonths: (date: Date, months: number) => {
          return getAddMonths(date, months);
        },
        getAddYears: (date: Date, years: number) => {
          return getAddYears(date, years);
        },
        getSubDays: (date: Date, days: number) => {
          return getSubDays(date, days);
        },
        getSubMonths: (date: Date, months: number) => {
          return getSubMonths(date, months);
        },
        getSubYears: (date: Date, years: number) => {
          return getSubYears(date, years);
        },
        getAllMonthName: () => {
          return getAllMonthNames();
        },
        getAllWeekdayName: (weekdayFormat: FormatWeekdayOptionType, isSundayFirst: boolean) => {
          return getAllWeekdayNames(weekdayFormat, isSundayFirst);
        },
      }}
      formatDate={(date: Date, format: string | DateFormatOptions) => {
        return formatDate(date, format);
      }}
      transformDate={(date: string | number, format: string | undefined) => {
        return transformDate(date, format);
      }}
    >
      {children}
    </UtilsProvider>
  );
};
