import type { ReactElement } from 'react';

import type { FormatDateType } from '@/lib/utils/date/types/format.types';

export interface UtilsContextType {
  assets?: {
    baseHost: string;
    iconsBaseHost?: string;
    illutrationsBaseHost?: string;
    imagesBaseHost?: string;
    animationsBaseHost?: string;
  };
  formatDate: (
    date: Date,
    format: DateFormatOptions | FormatDateType | string,
    locale?: string,
  ) => string;
  transformDate: (date: string | number, format?: string) => Date;
  dateHelpers: {
    getSubDays: (date: Date, amount: number) => Date;
    getSubMonths: (date: Date, amount: number) => Date;
    getSubYears: (date: Date, amount: number) => Date;
    getAddMonths: (date: Date, amount: number) => Date;
    getAddDays: (date: Date, amount: number) => Date;
    getAddYears: (date: Date, years: number) => Date;
    getAllMonthName: (
      monthFormat: Intl.DateTimeFormatOptions['month'], locale?: string,
    ) => Array<string>;
    getAllWeekdayName: (
      weekdayFormat: Intl.DateTimeFormatOptions['weekday'],
      isSundayFirst: boolean,
      locale?: string,
    ) => Array<string>;
    isBefore: (date1: Date, date2: Date) => boolean;
    isAfter: (date1: Date, date2: Date) => boolean;
    isDatesEqual: (
      firstDate: Date | number | string,
      secondDate: Date | number | string,
      shouldCompareTime: boolean,
    ) => boolean;
  };
}

export type UtilsProviderProps = UtilsContextType & {
  children: ReactElement;
};

export interface DateFormatOptions {
  weekday?: Intl.DateTimeFormatOptions['weekday'];
  year?: Intl.DateTimeFormatOptions['year'];
  month?: Intl.DateTimeFormatOptions['month'];
  day?: Intl.DateTimeFormatOptions['day'];
  hour?: Intl.DateTimeFormatOptions['hour'];
  minute?: Intl.DateTimeFormatOptions['minute'];
  second?: Intl.DateTimeFormatOptions['second'];
  timeZoneName?: Intl.DateTimeFormatOptions['timeZoneName'];
  hour12?: Intl.DateTimeFormatOptions['hour12'];
  hourCycle?: Intl.DateTimeFormatOptions['hourCycle'];
}

export const FORMAT_DATE = {
  d: 'd',
  dd: 'dd',
  ddd: 'ddd',
  dddd: 'dddd',
  f: 'f',
  F: 'F',
  ff: 'ff',
  FF: 'FF',
  fff: 'fff',
  FFF: 'FFF',
  ffff: 'ffff',
  FFFF: 'FFFF',
  t: 't',
  T: 'T',
  tt: 'tt',
  TT: 'TT',
  ttt: 'ttt',
  TTT: 'TTT',
  tttt: 'tttt',
  TTTT: 'TTTT',
} as const;

export interface DateDefaultConfig {
  [FORMAT_DATE.d]: DateFormatOptions;
  [FORMAT_DATE.dd]: DateFormatOptions;
  [FORMAT_DATE.ddd]: DateFormatOptions;
  [FORMAT_DATE.dddd]: DateFormatOptions;
  [FORMAT_DATE.t]: DateFormatOptions;
  [FORMAT_DATE.tt]: DateFormatOptions;
  [FORMAT_DATE.ttt]: DateFormatOptions;
  [FORMAT_DATE.tttt]: DateFormatOptions;
  [FORMAT_DATE.T]: DateFormatOptions;
  [FORMAT_DATE.TT]: DateFormatOptions;
  [FORMAT_DATE.TTT]: DateFormatOptions;
  [FORMAT_DATE.TTTT]: DateFormatOptions;
  [FORMAT_DATE.f]: DateFormatOptions;
  [FORMAT_DATE.ff]: DateFormatOptions;
  [FORMAT_DATE.fff]: DateFormatOptions;
  [FORMAT_DATE.ffff]: DateFormatOptions;
  [FORMAT_DATE.F]: DateFormatOptions;
  [FORMAT_DATE.FF]: DateFormatOptions;
  [FORMAT_DATE.FFF]: DateFormatOptions;
  [FORMAT_DATE.FFFF]: DateFormatOptions;
  [key: string]: DateFormatOptions;
}
