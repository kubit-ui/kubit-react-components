export const keyRightMove =
  (
    lengthOptions: number,
    position: number,
    numTabsInView: number
  ): ((prevFocus: number) => number) =>
  prevFocus => {
    if (prevFocus + 1 >= lengthOptions || prevFocus + 1 === position + numTabsInView) {
      return position;
    }
    return prevFocus + 1;
  };

export const keyLeftMove =
  (position: number, numTabsInView: number): ((prevFocus: number) => number) =>
  prevFocus => {
    if (prevFocus - 1 < 0 || prevFocus - 1 < position) {
      return position - 1 + numTabsInView;
    }
    return prevFocus - 1;
  };
