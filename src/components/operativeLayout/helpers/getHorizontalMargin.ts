import { IOperativeLayoutHorizontalMargin } from '../types';

export const getHorizontalMargin = (
  padding: string | IOperativeLayoutHorizontalMargin | undefined
): string | undefined => {
  let cssMargin;
  if (typeof padding === 'string') {
    cssMargin = `0 ${padding}`;
  } else if (typeof padding === 'object') {
    cssMargin = `0 ${padding.rightMargin} 0 ${padding.leftMargin}`;
  }
  return cssMargin;
};
