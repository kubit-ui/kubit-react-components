import React from 'react';

import { UtilsProvider } from '@/provider/utils/provider';
import { DateFormatOptions } from '@/provider/utils/types';
import { FormatWeekdayOptionType } from '@/types/date/date';
import { formatDate } from '@/utils/date/formatDate';

import {
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
} from '../../../utils/date/date';
import { transformDate } from '../../../utils/date/transformDate';

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
      assets={{
        baseHost: `https://assets.dev.openbank.com/web/${folder[theme]}/icons/`,
        iconsBaseHost: `https://assets.dev.openbank.com/web/${folder[theme]}/icons/`,
        illutrationsBaseHost: `https://assets.dev.openbank.com/web/${folder[theme]}/illustrations/`,
      }}
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
