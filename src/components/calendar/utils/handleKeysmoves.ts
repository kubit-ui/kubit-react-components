type handleKeyMoveType = {
  emptyDaysList: (Date | undefined)[];
  dayList: (Date | undefined)[];
  isAfter: (date1: Date, date2: Date) => boolean;
  maxDate: Date;
  currentDate: Date;
  minDate: Date;
  availableDaysBeforeCurrentDate: number;
  availableDaysAfterCurrentDate: number;
};

export const getAvailableDaysBeforeCurrentDate = (
  emptyDaysList: (Date | undefined)[],
  minDate: Date,
  currentDate: Date
): number =>
  emptyDaysList.length + (minDate.getMonth() === currentDate.getMonth() ? minDate.getDate() : 0);

export const getAvailableDaysAfterCurrentDate = (
  emptyDaysList: (Date | undefined)[],
  maxDate: Date,
  currentDate: Date
): number =>
  emptyDaysList.length + (maxDate.getMonth() === currentDate.getMonth() ? maxDate.getDate() : 0);

export const handleKeyUpAndLeftMove = ({
  emptyDaysList,
  dayList,
  isAfter,
  maxDate,
  availableDaysBeforeCurrentDate,
  availableDaysAfterCurrentDate,
  currentDate,
}: handleKeyMoveType): ((previous: number) => number) => {
  return previous => {
    if (isAfter(maxDate, new Date())) {
      return previous === availableDaysBeforeCurrentDate || previous === 0
        ? dayList.length - 1
        : previous - 1;
    }
    if (previous === emptyDaysList.length) {
      if (currentDate.getMonth() === maxDate.getMonth()) {
        return availableDaysAfterCurrentDate - 1;
      }
      return dayList.length - 1;
    }
    return previous - 1;
  };
};

export const handleKeyDownAndRightMove = ({
  emptyDaysList,
  dayList,
  isAfter,
  maxDate,
  availableDaysBeforeCurrentDate,
  availableDaysAfterCurrentDate,
}: handleKeyMoveType): ((previous: number) => number) => {
  return previous => {
    if (isAfter(maxDate, new Date())) {
      if (previous === dayList.length - 1) {
        return availableDaysBeforeCurrentDate;
      }
      if (previous === 0) {
        return previous + 1 + availableDaysAfterCurrentDate;
      }
    }
    if (previous === dayList.length - 1) {
      return emptyDaysList.length;
    }
    return previous === availableDaysAfterCurrentDate - 1 ? emptyDaysList.length : previous + 1;
  };
};

export const handleKeyTabMove = (previous: number): number => previous;
