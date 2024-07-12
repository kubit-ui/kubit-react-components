import { EXPRESSIONS, FORMATTING_TOKENS } from './constants';
import { formatDateToUTC } from './formatDate';
import { DateType, formatPartsType } from './types';

const getFormatParts = (format: string) => {
  const formatParts = format.match(FORMATTING_TOKENS) || [];

  return formatParts.map((token: string) => {
    const parseTo = EXPRESSIONS[token];
    const regex = parseTo && parseTo[0];
    const key = parseTo && parseTo[1];
    const execute = parseTo && parseTo[2];
    return key ? { regex, key, execute } : token;
  });
};

const getDataObject = (date: string, formatParts: formatPartsType) => {
  const dateObject: DateType = {};
  let dateString: string = date;
  formatParts.forEach(token => {
    if (typeof token === 'string') {
      dateString = dateString.replace(token, '');
    } else {
      const { regex, key, execute } = token;
      const match = regex.exec(dateString);
      const value = match ? match[0] : '';
      dateObject[key] = execute ? execute(value) : +value;
      dateString = dateString.replace(value, '');
    }
  });
  return dateObject;
};

export const transformDate = (date: string | number, format?: string): Date => {
  if (typeof date === 'number' || !format) {
    return formatDateToUTC(date);
  }

  const formatParts = getFormatParts(format);
  const dateObject = getDataObject(date, formatParts);

  const { year, month, day, hours, minutes, seconds } = dateObject;
  const today = new Date();
  const auxYear = year || today.getFullYear();
  const auxMonth = month ? month - 1 : today.getMonth();
  const auxDay = day || today.getDate();
  const auxHours = hours || 0;
  const auxMinutes = minutes || 0;
  const auxSeconds = seconds || 0;

  return new Date(auxYear, auxMonth, auxDay, auxHours, auxMinutes, auxSeconds);
};
