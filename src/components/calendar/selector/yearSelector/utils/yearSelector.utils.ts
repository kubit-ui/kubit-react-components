export const keyLeftMove =
  (yearList: number[]) =>
  (prevFocus: number): number => {
    let newFocus = Math.max(prevFocus, 0);

    if (prevFocus > 0) {
      newFocus -= 1;
    } else if (prevFocus === 0) {
      newFocus = yearList.length - 1;
    }
    return newFocus;
  };

export const keyRightMove =
  (yearList: number[]) =>
  (prevFocus: number): number => {
    let newFocus = Math.max(prevFocus, 0);

    if (prevFocus + 1 < yearList.length) {
      newFocus += 1;
    } else if (prevFocus + 1 === yearList.length) {
      newFocus = 0;
    }
    return newFocus;
  };

export const keyTabMove = (previous: number): number => previous;
