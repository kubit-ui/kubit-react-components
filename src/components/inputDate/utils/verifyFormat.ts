import { isValidDate } from '@/utils/date/validateDate';

import { verifyYear } from './verifyYear';

type ReturnType = { valueFormatted: string | string[] | null; hasError: boolean };

export const formatValueDate = (
  value: string,
  today: string,
  format: string,
  dateSeparator = ''
): string => {
  let formattedValue = value.replace(dateSeparator, '').replace(today, '');

  if (value.length > format?.length) {
    formattedValue = formattedValue.replace(/\s/g, '');
  }
  return formattedValue;
};

const matchFormatValueDate = (
  value: string,
  today: string,
  format: string,
  dateSeparator = ''
): string[] | null => {
  return formatValueDate(value, today, format, dateSeparator).match(
    new RegExp('.{1,' + format.length + '}', 'g')
  );
};

const verifyFormatDate = (
  value: string,
  minDate: Date,
  maxDate: Date,
  today: string,
  dateSeparator: string,
  format: string
): ReturnType => {
  const valueFormatted = formatValueDate(value, today, format, dateSeparator);
  const date = new Date(valueFormatted);

  const hasError =
    !isValidDate(date) ||
    valueFormatted.length !== format.length ||
    !verifyYear(valueFormatted, minDate, maxDate);

  return { valueFormatted, hasError };
};

// eslint-disable-next-line complexity
const verifyFormatRangeDate = (
  value: string,
  minDate: Date,
  maxDate: Date,
  today: string,
  dateSeparator: string,
  format: string
): ReturnType => {
  const valueFormatted = matchFormatValueDate(value, today, format, dateSeparator);

  if (
    (valueFormatted?.[0] && !isValidDate(new Date(valueFormatted[0]))) ||
    (valueFormatted?.[1] && !isValidDate(new Date(valueFormatted[1])))
  ) {
    return { valueFormatted, hasError: true };
  }

  const condition1 =
    valueFormatted?.[0]?.length === format.length && valueFormatted?.[1]?.length === format.length;
  const condition2 =
    valueFormatted &&
    verifyYear(valueFormatted[0], minDate, maxDate) &&
    verifyYear(valueFormatted[1], minDate, maxDate);

  const hasError = !condition1 || !condition2;

  return { valueFormatted, hasError };
};

export const verifyFormat = (
  format: string,
  value: string,
  minDate: Date,
  maxDate: Date,
  today = '',
  dateSeparator = '',
  isRange?: boolean
): ReturnType => {
  if (isRange) {
    return verifyFormatRangeDate(value, minDate, maxDate, today, dateSeparator, format);
  }
  return verifyFormatDate(value, minDate, maxDate, today, dateSeparator, format);
};
