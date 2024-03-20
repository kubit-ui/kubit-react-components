import { BACKSPACE, DELETE } from '@/constants';
import { CursorType } from '@/types/type';

export const getPosition = (
  key: string,
  value: string | number,
  cursor: CursorType,
  position?: number
): number => {
  let valuePosition;
  if (key === BACKSPACE.key) {
    valuePosition = -1;
  } else if (key === DELETE.key) {
    valuePosition = 0;
  } else if (key !== value.toString().charAt(cursor.start)) {
    valuePosition = position || 2;
  } else {
    valuePosition = 1;
  }
  return valuePosition;
};
