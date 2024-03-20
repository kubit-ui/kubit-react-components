import { createContext } from 'react';

import { FormatMonthOptionType, FormatWeekdayOptionType } from '@/types';

import { DateFormatOptions, FORMAT_DATE } from './types';

export type UtilsContextType = {
  assets?: {
    baseHost: string;
    iconsBaseHost?: string;
    illutrationsBaseHost?: string;
    imagesBaseHost?: string;
  };
  formatDate: (date: Date, format: DateFormatOptions | FORMAT_DATE | string) => string;
  transformDate: (date: string | number, format?: string) => Date;
  dateHelpers: {
    getSubDays: (date: Date, amount: number) => Date;
    getSubMonths: (date: Date, amount: number) => Date;
    getSubYears: (date: Date, amount: number) => Date;
    getAddMonths: (date: Date, amount: number) => Date;
    getAddDays: (date: Date, amount: number) => Date;
    getAddYears: (date: Date, years: number) => Date;
    getAllMonthName: (monthFormat: FormatMonthOptionType) => Array<string>;
    getAllWeekdayName: (
      weekdayFormat: FormatWeekdayOptionType,
      isSundayFirst: boolean
    ) => Array<string>;
    isBefore: (date1: Date, date2: Date) => boolean;
    isAfter: (date1: Date, date2: Date) => boolean;
    isDatesEqual: (
      firstDate: Date | number | string,
      secondDate: Date | number | string,
      shouldCompareTime: boolean
    ) => boolean;
  };
};

export const UtilsContext = createContext<UtilsContextType | null>(null);
