import { FormatNumber } from '../types/input';

const DEFAULT_LOCALE = 'en-US';

export const formatNumber = (amount: number, formatNumber: FormatNumber): string => {
  const { locale, ...options } = formatNumber;
  const newLocale = locale || DEFAULT_LOCALE;
  const formattedNumber = new Intl.NumberFormat(newLocale, {
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

// remove existing thousand separator
export const removeThousandSeparator = (value: string, locale: string = DEFAULT_LOCALE): string => {
  // get thousand and decimal separator
  const thousandSeparator = getThousandSeparator(locale);
  const decimalSeparator = getDecimalSeparator(locale);
  // remove existing thousand separator and replace decimal separator by .
  const regexThousandSeparator = new RegExp('\\' + thousandSeparator, 'g');
  return value.replace(regexThousandSeparator, '').replace(decimalSeparator, '.');
};
