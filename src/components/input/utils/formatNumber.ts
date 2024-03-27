import { FormatNumber } from '../types/input';

const DEFAULT_LOCALE = 'en-US';

export const formatNumber = (
  amount: number,
  formatNumber: FormatNumber,
  locale: string = DEFAULT_LOCALE
): string => {
  const { ...options } = formatNumber;
  const formattedNumber = new Intl.NumberFormat(locale, {
    ...options,
  }).format(amount);
  return formattedNumber;
};

export const getThousandSeparator = (locale: string = DEFAULT_LOCALE): string => {
  const formattedNumber = new Intl.NumberFormat(locale).format(1000);
  // the second character should be the thousand separator
  const thousandSeparator = formattedNumber[1];
  return thousandSeparator;
};

export const getDecimalSeparator = (locale: string = DEFAULT_LOCALE): string => {
  const formattedNumber = new Intl.NumberFormat(locale).format(0.1);
  // the first character should be the decimal separator
  const decimalSeparator = formattedNumber[1];
  return decimalSeparator;
};

// check if value is valid to transform
export const checkValidFormattedNumber = (
  value: string,
  locale: string = DEFAULT_LOCALE
): boolean => {
  // only numbers, commas and dots
  const regex = /^[0-9,.]*$/;
  const lastChar = value[value.length - 1];
  const decimalSeparator = getDecimalSeparator(locale);
  return regex.test(value) && lastChar !== decimalSeparator;
};

// convert a string with a decimal separator to a string with a dot as decimal separator ready to convert to number
export const convertDecimalSeparator = (value: string, decimalSeparator: string): string => {
  return value.replace(decimalSeparator, '.');
};

// remove existing thousand separator
export const removeThousandSeparator = (
  value: string,
  locale: string = DEFAULT_LOCALE,
  replaceDecimalSeparator = true
): string => {
  // get thousand and decimal separator
  const thousandSeparator = getThousandSeparator(locale);
  const decimalSeparator = getDecimalSeparator(locale);
  // remove existing thousand separator and replace decimal separator by .
  const regexThousandSeparator = new RegExp('\\' + thousandSeparator, 'g');
  if (replaceDecimalSeparator) {
    return convertDecimalSeparator(value.replace(regexThousandSeparator, ''), decimalSeparator);
  }
  return value.replace(regexThousandSeparator, '');
};
