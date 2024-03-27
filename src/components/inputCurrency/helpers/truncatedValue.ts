import { getDecimalSeparator } from '@/components/input/utils';

export const truncatedValue = (value: string, maxDecimals: number, locale?: string): string => {
  const decimalSeparator = getDecimalSeparator(locale);

  const numberOfDecimals = (value.split(decimalSeparator)[1] || '').length;

  const decimalIndex =
    maxDecimals > 0 ? value.indexOf(decimalSeparator) : value.indexOf(decimalSeparator) - 1;

  const truncatedValue = value.slice(0, decimalIndex + 1 + maxDecimals);

  return numberOfDecimals > maxDecimals ? truncatedValue : value;
};
