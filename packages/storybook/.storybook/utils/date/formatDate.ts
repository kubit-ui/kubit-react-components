import { FORMATTING_TOKENS } from './constants/common.constant';
import { MACRO_TOKEN_TO_FORMAT_OPTS } from './constants/format.constant';
import { locale as defaultLocale } from './locale';
import type { DateFormatOptions, FormatDateType } from './types/format.types';
import { isValidDate } from './validateDate';

const addZero = (value: number) => `${value < 10 ? '0' : ''}${value}`;

/**
 * Formats a date according to the specified format and locale.
 *
 * @param date - The date to format
 * @param format - The format to apply: can be a string pattern (e.g., 'dd/MM/yyyy'), a DateFormatOptions object, or a FormatDateType
 * @param locale - The locale to use for formatting (default: current locale)
 * @returns The formatted date string
 *
 * @remarks
 * Supports various tokens: d, dd (day), M, MM, MMM, MMMM (month), yy, yyyy (year), H, HH (hour), m, mm (minute), s, ss (second), W, WW (weekday)
 *
 * @example
 * ```typescript
 * const date = new Date('2024-01-15');
 * formatDate(date, 'dd/MM/yyyy'); // '15/01/2024'
 * formatDate(date, 'MMMM dd, yyyy', 'en-US'); // 'January 15, 2024'
 * ```
 */
export const formatDate = (
  date: Date,
  format: DateFormatOptions | FormatDateType | string,
  locale?: string,
): string => {
  defaultLocale.setLocale(locale || defaultLocale.getLocale());
  const myLocale = defaultLocale.getLocale();
  const formatAux =
    typeof format === 'string' ? MACRO_TOKEN_TO_FORMAT_OPTS[format] : format;

  if (typeof format === 'string' && !formatAux) {
    const formatParts = format.match(FORMATTING_TOKENS) || [];
    const matches: { [key: string]: [string, (value: Date) => string] } = {
      d: ['day', (value: Date) => `${new Date(value).getDate()}`],
      dd: ['day', (value: Date) => `${addZero(new Date(value).getDate())}`],
      H: ['hour', (value: Date) => `${new Date(value).getHours()}`],
      HH: ['hour', (value: Date) => `${addZero(new Date(value).getHours())}`],
      M: ['month', (value: Date) => `${new Date(value).getMonth() + 1}`],
      m: ['minute', (value: Date) => `${new Date(value).getMinutes()}`],
      MM: [
        'month',
        (value: Date) => `${addZero(new Date(value).getMonth() + 1)}`,
      ],
      mm: [
        'minute',
        (value: Date) => `${addZero(new Date(value).getMinutes())}`,
      ],
      MMM: [
        'month',
        (value: Date) =>
          new Date(value).toLocaleString(myLocale, {
            month: 'short',
          }),
      ],
      MMMM: [
        'month',
        (value: Date) =>
          new Date(value).toLocaleString(myLocale, { month: 'long' }),
      ],
      s: ['second', (value: Date) => `${new Date(value).getSeconds()}`],
      ss: [
        'second',
        (value: Date) => `${addZero(new Date(value).getSeconds())}`,
      ],
      W: [
        'weekday',
        (value: Date) =>
          new Date(value).toLocaleString(myLocale, {
            weekday: 'short',
          }),
      ],
      WW: [
        'weekday',
        (value: Date) =>
          new Date(value).toLocaleString(myLocale, {
            weekday: 'long',
          }),
      ],
      yy: [
        'year',
        (value: Date) => `${new Date(value).getFullYear()}`.slice(-2),
      ],
      yyyy: ['year', (value: Date) => `${new Date(value).getFullYear()}`],
    };
    const values = formatParts.map((token: string) => {
      const parseTo = matches[token];
      const key = parseTo && parseTo[0];
      const value = parseTo && parseTo[1](date);
      return key ? value : token;
    });

    return values.join('').replace(/[\\[\]]/g, '');
  }

  return date.toLocaleString(myLocale, {
    ...formatAux,
  });
};

/**
 * Converts a date to UTC format, adjusting for timezone differences.
 *
 * @param date - The date to convert (Date object, string, or timestamp)
 * @returns A Date object in UTC timezone
 * @throws Error if the date is invalid
 *
 * @example
 * ```typescript
 * const localDate = new Date('2024-01-15T10:30:00');
 * const utcDate = formatDateToUTC(localDate);
 * ```
 */
export const formatDateToUTC = (date: Date | string | number): Date => {
  const dateObj = new Date(date);

  if (!isValidDate(dateObj)) {
    throw Error('Date is invalid');
  }
  // If the date object has a time of 00:00:00, return the date object because it is already in UTC
  if (
    dateObj.getHours() === 0 &&
    dateObj.getMinutes() === 0 &&
    dateObj.getSeconds() === 0
  ) {
    return dateObj;
  }
  return new Date(
    new Intl.DateTimeFormat('en-US', { timeZone: 'UTC' }).format(
      new Date(date),
    ),
  );
};
