import type { ReactElement } from 'react';

import type { FormatDateType } from '@/lib/utils/date/types/format.types';

/**
 * Context type for utility functions and configurations.
 * Provides date manipulation, formatting, and asset management utilities.
 */
export interface UtilsContextType {
  /**
   * Base URLs for different types of assets.
   * Used to construct full paths for icons, illustrations, images, and animations.
   */
  assets?: {
    /** Base URL for all assets */
    baseHost: string;
    /** Specific base URL for icon assets */
    iconsBaseHost?: string;
    /** Specific base URL for illustration assets */
    illutrationsBaseHost?: string;
    /** Specific base URL for image assets */
    imagesBaseHost?: string;
    /** Specific base URL for animation assets */
    animationsBaseHost?: string;
  };

  /**
   * Formats a Date object into a string representation.
   * @param date - The date to format
   * @param format - Format string or options object (e.g., 'dd/MM/yyyy', 'd', etc.)
   * @param locale - Optional locale string (e.g., 'en-US', 'es-ES')
   * @returns Formatted date string
   */
  formatDate: (
    date: Date,
    format: DateFormatOptions | FormatDateType | string,
    locale?: string,
  ) => string;

  /**
   * Transforms a string or number into a Date object.
   * @param date - The date value to transform (timestamp or date string)
   * @param format - Optional format string to parse the date
   * @returns Parsed Date object
   */
  transformDate: (date: string | number, format?: string) => Date;

  /**
   * Collection of date manipulation and comparison utilities.
   */
  dateHelpers: {
    /** Subtracts a specified number of days from a date */
    getSubDays: (date: Date, amount: number) => Date;
    /** Subtracts a specified number of months from a date */
    getSubMonths: (date: Date, amount: number) => Date;
    /** Subtracts a specified number of years from a date */
    getSubYears: (date: Date, amount: number) => Date;
    /** Adds a specified number of months to a date */
    getAddMonths: (date: Date, amount: number) => Date;
    /** Adds a specified number of days to a date */
    getAddDays: (date: Date, amount: number) => Date;
    /** Adds a specified number of years to a date */
    getAddYears: (date: Date, years: number) => Date;
    /**
     * Gets all month names in the specified format and locale.
     * @param monthFormat - Format for month names ('long', 'short', 'narrow')
     * @param locale - Optional locale string
     * @returns Array of month names
     */
    getAllMonthName: (
      monthFormat: Intl.DateTimeFormatOptions['month'],
      locale?: string,
    ) => Array<string>;
    /**
     * Gets all weekday names in the specified format and locale.
     * @param weekdayFormat - Format for weekday names ('long', 'short', 'narrow')
     * @param isSundayFirst - Whether Sunday should be the first day of the week
     * @param locale - Optional locale string
     * @returns Array of weekday names
     */
    getAllWeekdayName: (
      weekdayFormat: Intl.DateTimeFormatOptions['weekday'],
      isSundayFirst: boolean,
      locale?: string,
    ) => Array<string>;
    /** Checks if the first date is before the second date */
    isBefore: (date1: Date, date2: Date) => boolean;
    /** Checks if the first date is after the second date */
    isAfter: (date1: Date, date2: Date) => boolean;
    /**
     * Checks if two dates are equal.
     * @param firstDate - First date to compare
     * @param secondDate - Second date to compare
     * @param shouldCompareTime - Whether to include time in comparison
     * @returns True if dates are equal
     */
    isDatesEqual: (
      firstDate: Date | number | string,
      secondDate: Date | number | string,
      shouldCompareTime: boolean,
    ) => boolean;
  };
}

/**
 * Props for the UtilsProvider component.
 * Extends UtilsContextType with required children prop.
 */
export type UtilsProviderProps = UtilsContextType & {
  /** The React children to be wrapped by the provider */
  children: ReactElement;
};

/**
 * Options for formatting dates using Intl.DateTimeFormat.
 * Provides granular control over date/time display format.
 */
export interface DateFormatOptions {
  /** Representation of the weekday ('long', 'short', 'narrow') */
  weekday?: Intl.DateTimeFormatOptions['weekday'];
  /** Representation of the year ('numeric', '2-digit') */
  year?: Intl.DateTimeFormatOptions['year'];
  /** Representation of the month ('numeric', '2-digit', 'long', 'short', 'narrow') */
  month?: Intl.DateTimeFormatOptions['month'];
  /** Representation of the day ('numeric', '2-digit') */
  day?: Intl.DateTimeFormatOptions['day'];
  /** Representation of the hour ('numeric', '2-digit') */
  hour?: Intl.DateTimeFormatOptions['hour'];
  /** Representation of the minute ('numeric', '2-digit') */
  minute?: Intl.DateTimeFormatOptions['minute'];
  /** Representation of the second ('numeric', '2-digit') */
  second?: Intl.DateTimeFormatOptions['second'];
  /** Representation of the time zone name ('long', 'short', etc.) */
  timeZoneName?: Intl.DateTimeFormatOptions['timeZoneName'];
  /** Whether to use 12-hour time format (true) or 24-hour format (false) */
  hour12?: Intl.DateTimeFormatOptions['hour12'];
  /** Hour cycle to use ('h11', 'h12', 'h23', 'h24') */
  hourCycle?: Intl.DateTimeFormatOptions['hourCycle'];
}

/**
 * Predefined date format constants.
 * Used as shortcuts for common date formatting patterns.
 */
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

/**
 * Configuration mapping for default date formats.
 * Maps FORMAT_DATE constants to their corresponding DateFormatOptions.
 */
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
