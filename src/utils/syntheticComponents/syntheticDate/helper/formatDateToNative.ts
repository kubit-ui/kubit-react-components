import { splitDate } from '@/components/inputDate/utils/verifyDate';

const DD = 'DD';
const MM = 'MM';
const YYYY = 'YYYY';

const replaceWhiteSpaces = (value: string): string => value.replace(/\s+/g, '-');

export const formatDateToNative = (value: string, format: string, hasRange: boolean): string => {
  const { dateToCheck } = splitDate(value, format, '', hasRange);

  const formattedValue = replaceWhiteSpaces(value);
  const formattedFormat = replaceWhiteSpaces(format);

  // Check if year is the last position in the format to trigger zeros autocomplete
  const isYearLastPosition = formattedFormat.slice(-4) === 'YYYY' && formattedValue.length > 5;

  if (isYearLastPosition || dateToCheck) {
    const regex = /[a-zA-Z0-9\s]/g;
    const symbol = formattedFormat.replace(regex, '').split('')[0];

    const cleanFormat = formattedFormat.split(symbol);
    const cleanDate = formattedValue.split(symbol);

    const ddIdx = cleanFormat.findIndex(date => date === DD);
    const mmIdx = cleanFormat.findIndex(date => date === MM);
    const yyyyIdx = cleanFormat.findIndex(date => date === YYYY);

    const dd = cleanDate[ddIdx];
    const mm = cleanDate[mmIdx];
    let yyyy = cleanDate[yyyyIdx];

    if (yyyy?.length < 4) {
      yyyy = yyyy.padStart(4, '0');
    }
    return `${yyyy}-${mm}-${dd}`;
  }
  return '';
};
