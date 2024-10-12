import { ForwardedRef, MutableRefObject } from 'react';

import {
  INPUT_COUNTER_BUILD_SCREEN_READER_CURRENT_CHARACTERS_KEY,
  INPUT_COUNTER_BUILD_SCREEN_READER_MAX_LENGTH_KEY,
} from '../types/inputCounter';

export const getCharactersLength = (
  value: string | number | undefined,
  ref: ForwardedRef<HTMLInputElement | undefined>
): number => {
  if (value) {
    return value?.toString().length;
  }
  return (
    (ref as MutableRefObject<HTMLInputElement | null | undefined>)?.current?.value?.length || 0
  );
};

export const buildScreenReaderText = (
  value: string | number | undefined,
  ref: MutableRefObject<HTMLInputElement>,
  maxLength: number,
  screenReaderText?: string
): string | undefined => {
  if (!screenReaderText) {
    return screenReaderText;
  }

  const currentCharacters = getCharactersLength(
    value,
    ref as React.MutableRefObject<HTMLInputElement>
  );
  const currentCharactersRegExp = new RegExp(
    INPUT_COUNTER_BUILD_SCREEN_READER_CURRENT_CHARACTERS_KEY,
    'g'
  );
  const maxlengthRegExp = new RegExp(INPUT_COUNTER_BUILD_SCREEN_READER_MAX_LENGTH_KEY, 'g');

  return screenReaderText
    .replace(currentCharactersRegExp, String(currentCharacters))
    .replace(maxlengthRegExp, String(maxLength));
};
