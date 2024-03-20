import { ForwardedRef, MutableRefObject } from 'react';

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
