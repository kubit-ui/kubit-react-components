import { MASK_TYPE } from '@/components/input/types/input';

export const cleanInputValueAlphanumeric = (value: string): string => value.replace(/[\W_]+/g, '');
export const cleanInputValueAlphanumericWithSpaces = (value: string): string =>
  value.replace(/[^\w\s]+/g, '');
export const cleanInputValueNumber = (value: string): string => value.replace(/[^\d]/g, '');
export const cleanInputValueNumberWithSpaces = (value: string): string =>
  value.replace(/[^\d\s]/g, '');
export const cleanInputValueLetters = (value: string): string => value.replace(/[^a-zñA-ZÑ]/g, '');
export const cleanInputValueLettersHyphenSpace = (value: string): string =>
  value.replace(/[^a-zñA-ZÑ\s-]/g, '');

export const cleanInputValueObject = {
  [MASK_TYPE.ALPHANUMERIC]: (value: string): string => cleanInputValueAlphanumeric(value),
  [MASK_TYPE.ALPHANUMERIC_WITH_SPACES]: (value: string): string =>
    cleanInputValueAlphanumericWithSpaces(value),
  [MASK_TYPE.NUMBERS]: (value: string): string => cleanInputValueNumber(value),
  [MASK_TYPE.NUMBERS_WITH_SPACES]: (value: string): string =>
    cleanInputValueNumberWithSpaces(value),
  [MASK_TYPE.LETTERS]: (value: string): string => cleanInputValueLetters(value),
  [MASK_TYPE.LETTERS_HYPHEN_SPACE]: (value: string): string =>
    cleanInputValueLettersHyphenSpace(value),
};

export const cleanInputValue = (value: string, maskType?: MASK_TYPE): string =>
  cleanInputValueObject[maskType || MASK_TYPE.ALPHANUMERIC](value);

export const matchInputValue = (
  oldValue: string,
  value: string,
  regex: string | RegExp
): string => {
  const newRegex = typeof regex === 'string' ? new RegExp(regex) : regex;
  if (newRegex.test(value) || value === '') {
    return value;
  }
  return oldValue;
};

export const formatMask = (unformattedValue: string, mask: string): string => {
  let i = 0;
  let lastIndex = -1;
  const getValueIndex = (_, prevIndex: number) => {
    if (i >= unformattedValue?.length) {
      return '#';
    }
    lastIndex = prevIndex;
    return unformattedValue[i++];
  };

  const replaceCodeForValue = mask.replace(/#/g, getValueIndex);

  return replaceCodeForValue.substring(0, lastIndex + 1);
};
