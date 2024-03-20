export const keyLeftMove = (prevFocus: number): number => {
  let newFocus = Math.max(prevFocus, 0);
  if (prevFocus > 0) {
    newFocus -= 1;
  } else if (prevFocus === 0) {
    newFocus = new Date().getMonth();
  }
  return newFocus;
};

export const keyRightMove =
  (currentMonth: number) =>
  (prevFocus: number): number => {
    let newFocus = Math.max(prevFocus, 0);
    if (prevFocus < currentMonth) {
      newFocus += 1;
    } else if (prevFocus === currentMonth) {
      newFocus = 0;
    }
    return newFocus;
  };

export const keyTabMove = (previous: number): number => previous;
