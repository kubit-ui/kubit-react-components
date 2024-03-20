import { PillType } from '../types/pillSelector';

export const keyRightMove =
  (pills: PillType[]) =>
  (prevFocus: number): number => {
    let newFocus = Math.max(prevFocus, 0);
    if (prevFocus >= 0) {
      newFocus += 1;
    }
    if (prevFocus >= pills.length - 1) {
      newFocus = 0;
    }
    return newFocus;
  };

export const keyLeftMove =
  (pills: PillType[]) =>
  (prevFocus: number): number => {
    let newFocus = Math.max(prevFocus, 0);
    if (prevFocus <= pills.length - 1) {
      newFocus -= 1;
    }
    if (prevFocus === 0) {
      newFocus = pills.length - 1;
    }
    return newFocus;
  };
