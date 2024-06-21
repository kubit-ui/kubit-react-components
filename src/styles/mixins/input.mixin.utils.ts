import { CommonStyleType } from '@/types';

export const getPaddingLeft = (padding?: string): string | undefined => {
  if (!padding) {
    return undefined;
  }
  const values = padding.split(' ');
  switch (values.length) {
    case 1: // All four sides are the same
      return values[0];
    case 2: // Vertical | Horizontal
      return values[1];
    case 3: // Top | Horizontal | Bottom
      return values[1];
    case 4: // Top | Right | Bottom | Left
      return values[3];
    default:
      return undefined;
  }
};

export const getPaddingRight = (padding?: string): string | undefined => {
  if (!padding) {
    return undefined;
  }
  const values = padding.split(' ');
  switch (values.length) {
    case 1: // All four sides are the same
      return values[0];
    case 2: // Vertical | Horizontal
      return values[1];
    case 3: // Top | Horizontal | Bottom
      return values[1];
    case 4: // Top | Right | Bottom | Left
      return values[1];
    default:
      return undefined;
  }
};

export const getPaddingLeftFromContainer = (container?: CommonStyleType): string | undefined => {
  return container?.padding_left ?? getPaddingLeft(container?.padding) ?? '0rem';
};

export const getPaddingRightFromContainer = (container?: CommonStyleType): string | undefined => {
  return container?.padding_right ?? getPaddingRight(container?.padding) ?? '0rem';
};
