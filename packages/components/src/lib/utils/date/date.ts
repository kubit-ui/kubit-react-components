import { formatDateToUTC } from './formatDate';
import { transformDate } from './transformDate';

/**
 * Checks if the first date is after the second date.
 *
 * @param date1 - The first date to compare
 * @param date2 - The second date to compare
 * @returns `true` if date1 is after date2, otherwise `false`
 *
 * @example
 * ```typescript
 * const today = new Date();
 * const tomorrow = new Date(today.getTime() + 86400000);
 * isAfter(tomorrow, today); // true
 * ```
 */
export const isAfter = (date1: Date, date2: Date): boolean => {
  return formatDateToUTC(date1) > formatDateToUTC(date2);
};

/**
 * Checks if the first date is before the second date.
 *
 * @param date1 - The first date to compare
 * @param date2 - The second date to compare
 * @returns `true` if date1 is before date2, otherwise `false`
 *
 * @example
 * ```typescript
 * const yesterday = new Date();
 * const today = new Date();
 * isBefore(yesterday, today); // true
 * ```
 */
export const isBefore = (date1: Date, date2: Date): boolean => {
  return formatDateToUTC(date1) < formatDateToUTC(date2);
};

/**
 * Checks if two dates are equal.
 *
 * @param firstDate - The first date to compare (Date, string, or timestamp)
 * @param secondDate - The second date to compare (Date, string, or timestamp)
 * @param shouldCompareTime - If `true`, compares exact time; if `false`, compares only date (default: `false`)
 * @returns `true` if dates are equal, otherwise `false`
 *
 * @example
 * ```typescript
 * const date1 = new Date('2024-01-15');
 * const date2 = new Date('2024-01-15');
 * isDatesEqual(date1, date2); // true
 * ```
 */
export const isDatesEqual = (
  firstDate: Date | string | number,
  secondDate: Date | string | number,
  shouldCompareTime = false,
): boolean => {
  const firstDateModified =
    typeof firstDate === 'string' || typeof firstDate === 'number'
      ? transformDate(firstDate)
      : (firstDate as Date);

  const secondDateModified =
    typeof secondDate === 'string' || typeof secondDate === 'number'
      ? transformDate(secondDate)
      : (secondDate as Date);

  if (shouldCompareTime) {
    return firstDateModified.getTime() === secondDateModified.getTime();
  }

  return (
    firstDateModified.getDate() === secondDateModified.getDate() &&
    firstDateModified.getMonth() === secondDateModified.getMonth() &&
    firstDateModified.getFullYear() === secondDateModified.getFullYear()
  );
};

/**
 * Adds a specified number of days to a date.
 *
 * @param date - The base date
 * @param days - Number of days to add
 * @returns A new Date with the specified days added
 *
 * @example
 * ```typescript
 * const today = new Date();
 * const nextWeek = getAddDays(today, 7);
 * ```
 */
export const getAddDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

/**
 * Adds a specified number of months to a date.
 *
 * @param date - The base date
 * @param months - Number of months to add
 * @returns A new Date with the specified months added
 *
 * @example
 * ```typescript
 * const today = new Date();
 * const nextQuarter = getAddMonths(today, 3);
 * ```
 */
export const getAddMonths = (date: Date, months: number): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};

/**
 * Adds a specified number of years to a date.
 *
 * @param date - The base date
 * @param years - Number of years to add
 * @returns A new Date with the specified years added
 *
 * @example
 * ```typescript
 * const today = new Date();
 * const nextYear = getAddYears(today, 1);
 * ```
 */
export const getAddYears = (date: Date, years: number): Date => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};

/**
 * Subtracts a specified number of days from a date.
 *
 * @param date - The base date
 * @param days - Number of days to subtract
 * @returns A new Date with the specified days subtracted
 *
 * @example
 * ```typescript
 * const today = new Date();
 * const lastWeek = getSubDays(today, 7);
 * ```
 */
export const getSubDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - days);
  return newDate;
};

/**
 * Subtracts a specified number of months from a date.
 *
 * @param date - The base date
 * @param months - Number of months to subtract
 * @returns A new Date with the specified months subtracted
 *
 * @example
 * ```typescript
 * const today = new Date();
 * const lastQuarter = getSubMonths(today, 3);
 * ```
 */
export const getSubMonths = (date: Date, months: number): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() - months);
  return newDate;
};

/**
 * Subtracts a specified number of years from a date.
 *
 * @param date - The base date
 * @param years - Number of years to subtract
 * @returns A new Date with the specified years subtracted
 *
 * @example
 * ```typescript
 * const today = new Date();
 * const lastYear = getSubYears(today, 1);
 * ```
 */
export const getSubYears = (date: Date, years: number): Date => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() - years);
  return newDate;
};

/**
 * Gets an array of all month names in the specified locale and format.
 *
 * @param type - The format type: 'long' (January), 'short' (Jan), or 'narrow' (J)
 * @param locale - The locale to use for month names (default: 'en-US')
 * @returns An array of 12 month names
 *
 * @example
 * ```typescript
 * getAllMonthNames('long', 'en-US'); // ['January', 'February', ...]
 * getAllMonthNames('short', 'es-ES'); // ['ene', 'feb', ...]
 * ```
 */
export const getAllMonthNames = (
  type: 'long' | 'short' | 'narrow' = 'long',
  locale = 'en-US',
): string[] => {
  const monthNames: string[] = [];
  for (let i = 0; i < 12; i++) {
    const date = new Date();
    date.setDate(1); // stablish the first day of the month
    date.setMonth(i);
    const monthName = date.toLocaleString(locale, {
      month: type,
    });
    monthNames.push(monthName);
  }

  return monthNames;
};

/**
 * Gets an array of all weekday names in the specified locale and format.
 *
 * @param type - The format type: 'long' (Monday), 'short' (Mon), or 'narrow' (M)
 * @param isSundayFirst - If `true`, starts week with Sunday; if `false`, starts with Monday
 * @param locale - The locale to use for weekday names (default: 'en-US')
 * @returns An array of 7 weekday names
 *
 * @example
 * ```typescript
 * getAllWeekdayNames('long', false, 'en-US'); // ['Monday', 'Tuesday', ...]
 * getAllWeekdayNames('short', true, 'es-ES'); // ['dom', 'lun', ...]
 * ```
 */
export const getAllWeekdayNames = (
  type = 'long',
  isSundayFirst: boolean,
  locale: string = 'en-US',
): string[] => {
  const weekdayNames: string[] = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(0, 0, isSundayFirst ? i : i + 1);
    const weekdayName = date.toLocaleString(locale, {
      weekday: type as 'long' | 'short' | 'narrow',
    });
    weekdayNames.push(weekdayName);
  }

  return weekdayNames;
};
