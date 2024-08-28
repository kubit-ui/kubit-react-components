type HandleKeyMoveType = {
  currentDate: Date;
  maxDate: Date;
  minDate: Date;
};
const FIRST_MONTH = 0;
const LAST_MONTH = 11;
const NUM_DAYS_IN_ROW = 3;
const DAYS_UNTIL_LAST_ROW = 8;

const isSameYear = (date1: Date, date2: Date): boolean => {
  return date1.getFullYear() === date2.getFullYear();
};

export const keyLeftMove = ({
  currentDate,
  maxDate,
  minDate,
}: HandleKeyMoveType): ((previous: number) => number) => {
  return previous => {
    if (isSameYear(maxDate, currentDate)) {
      return previous === FIRST_MONTH ? maxDate.getMonth() : previous - 1;
    }
    if (isSameYear(minDate, currentDate)) {
      return previous === minDate.getMonth() ? LAST_MONTH : previous - 1;
    }
    return previous === FIRST_MONTH ? LAST_MONTH : previous - 1;
  };
};

export const keyRightMove = ({
  currentDate,
  maxDate,
  minDate,
}: HandleKeyMoveType): ((previous: number) => number) => {
  return previous => {
    if (isSameYear(maxDate, currentDate)) {
      return previous === maxDate.getMonth() ? FIRST_MONTH : previous + 1;
    }
    if (isSameYear(minDate, currentDate)) {
      return previous === LAST_MONTH ? minDate.getMonth() : previous + 1;
    }
    return previous === LAST_MONTH ? FIRST_MONTH : previous + 1;
  };
};

export const keyUpMove = ({
  currentDate,
  maxDate,
  minDate,
}: HandleKeyMoveType): ((previous: number) => number) => {
  return previous => {
    if (isSameYear(minDate, currentDate)) {
      if (previous === minDate.getMonth()) {
        return LAST_MONTH;
      }
      return previous >= minDate.getMonth() + NUM_DAYS_IN_ROW
        ? previous - NUM_DAYS_IN_ROW
        : minDate.getMonth();
    }
    if (isSameYear(maxDate, currentDate)) {
      if (previous === FIRST_MONTH) {
        return maxDate.getMonth();
      }
      return previous <= NUM_DAYS_IN_ROW ? FIRST_MONTH : previous - NUM_DAYS_IN_ROW;
    }
    if (previous === FIRST_MONTH) {
      return LAST_MONTH;
    }
    return previous >= NUM_DAYS_IN_ROW ? previous - NUM_DAYS_IN_ROW : FIRST_MONTH;
  };
};

export const keyDownMove = ({
  currentDate,
  maxDate,
  minDate,
}: HandleKeyMoveType): ((previous: number) => number) => {
  return previous => {
    if (isSameYear(minDate, currentDate)) {
      if (previous === LAST_MONTH) {
        return minDate.getMonth();
      }
      return previous >= minDate.getMonth() + NUM_DAYS_IN_ROW
        ? LAST_MONTH
        : previous + NUM_DAYS_IN_ROW;
    }
    if (isSameYear(maxDate, currentDate)) {
      if (previous === maxDate.getMonth()) {
        return FIRST_MONTH;
      }
      return previous <= maxDate.getMonth() - NUM_DAYS_IN_ROW
        ? previous + NUM_DAYS_IN_ROW
        : maxDate.getMonth();
    }
    if (previous === LAST_MONTH) {
      return FIRST_MONTH;
    }
    return previous >= DAYS_UNTIL_LAST_ROW ? LAST_MONTH : previous + NUM_DAYS_IN_ROW;
  };
};

export const keyTabMove = (previous: number): number => previous;
