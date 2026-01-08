import type { DateType, formatPartsType } from './types/parser.types';

import { FORMATTING_TOKENS } from './constants/common.constant';
import { EXPRESSIONS } from './constants/parser.constant';
import { formatDateToUTC } from './formatDate';

const getFormatParts = (format: string) => {
  const formatParts = format.match(FORMATTING_TOKENS) || [];

  return formatParts.map((token: string) => {
    const parseTo = EXPRESSIONS[token];
    const regex = parseTo && parseTo[0];
    const key = parseTo && parseTo[1];
    const execute = parseTo && parseTo[2];
    return key ? { execute, key, regex } : token;
  });
};

const getDataObject = (date: string, formatParts: formatPartsType) => {
  const dateObject: DateType = {};
  let dateString: string = date;
  formatParts.forEach((token) => {
    if (typeof token === 'string') {
      dateString = dateString.replace(token, '');
    } else {
      const { execute, key, regex } = token;
      const match = regex.exec(dateString);
      const value = match ? match[0] : '';
      dateObject[key] = execute ? execute(value) : +value;
      dateString = dateString.replace(value, '');
    }
  });
  return dateObject;
};

/**
 * Transforms a date string or timestamp into a Date object using a specified format.
 *
 * @param date - The date as a string or timestamp number
 * @param format - The format pattern of the input date string (e.g., 'dd/MM/yyyy')
 * @returns A Date object parsed from the input
 *
 * @remarks
 * If no format is provided or date is a number, it will be converted directly to a Date.
 * Supports tokens like dd, MM, yyyy, HH, mm, ss for parsing.
 *
 * @example
 * ```typescript
 * transformDate('15/01/2024', 'dd/MM/yyyy'); // Date object for Jan 15, 2024
 * transformDate(1705334400000); // Date from timestamp
 * ```
 */
export const transformDate = (date: string | number, format?: string): Date => {
  if (typeof date === 'number' || !format) {
    return formatDateToUTC(date);
  }

  const formatParts = getFormatParts(format);
  const dateObject = getDataObject(date, formatParts);

  const { day, hours, minutes, month, seconds, year } = dateObject;
  const today = new Date();
  const auxYear = year || today.getFullYear();
  const auxMonth = month ? month - 1 : today.getMonth();
  const auxDay = day || today.getDate();
  const auxHours = hours || 0;
  const auxMinutes = minutes || 0;
  const auxSeconds = seconds || 0;

  return new Date(auxYear, auxMonth, auxDay, auxHours, auxMinutes, auxSeconds);
};
