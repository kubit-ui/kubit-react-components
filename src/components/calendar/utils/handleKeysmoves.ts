type HandleKeyMoveType = {
  dayList: (Date | undefined)[];
  maxDate: Date;
  currentDate: Date;
  minDate: Date;
  firstEmptyAndDisabledDays: number;
  daysAndEmptyDaysUntilMaxDate: number;
};
const ONE_DAY = 1;
const DAYS_PER_WEEK = 7;

const isSameMonthAndYear = (date1: Date, date2: Date): boolean => {
  return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
};

export const getFirstEmptyAndDisabledDays = (
  emptyDaysList: (Date | undefined)[],
  minDate: Date,
  currentDate: Date
): number =>
  isSameMonthAndYear(minDate, currentDate)
    ? emptyDaysList.length + minDate.getDate() - 1
    : emptyDaysList.length;

export const getDaysAndEmptyDaysUntilMaxDate = (
  emptyDaysList: (Date | undefined)[],
  maxDate: Date,
  currentDate: Date
): number =>
  isSameMonthAndYear(maxDate, currentDate)
    ? emptyDaysList.length + maxDate.getDate() - 1
    : emptyDaysList.length;

export const handleKeyUpMove = ({
  dayList,
  maxDate,
  minDate,
  firstEmptyAndDisabledDays,
  daysAndEmptyDaysUntilMaxDate,
  currentDate,
}: HandleKeyMoveType): ((previous: number) => number) => {
  return previous => {
    if (isSameMonthAndYear(minDate, currentDate)) {
      if (previous === firstEmptyAndDisabledDays) {
        return dayList.length - 1;
      }
    }
    if (previous === firstEmptyAndDisabledDays) {
      return isSameMonthAndYear(maxDate, currentDate)
        ? daysAndEmptyDaysUntilMaxDate
        : dayList.length - 1;
    }
    if (previous <= firstEmptyAndDisabledDays + 7) {
      return firstEmptyAndDisabledDays;
    }
    return previous - DAYS_PER_WEEK;
  };
};

export const handleKeyDownMove = ({
  dayList,
  maxDate,
  minDate,
  firstEmptyAndDisabledDays,
  daysAndEmptyDaysUntilMaxDate,
  currentDate,
}: HandleKeyMoveType): ((previous: number) => number) => {
  return previous => {
    if (isSameMonthAndYear(minDate, currentDate) && previous === dayList.length - 1) {
      return firstEmptyAndDisabledDays;
    }
    if (isSameMonthAndYear(maxDate, currentDate)) {
      if (previous === daysAndEmptyDaysUntilMaxDate) {
        return firstEmptyAndDisabledDays;
      }
      // to go to max date if next day below is disabled unless it is the max date
      if (
        previous + firstEmptyAndDisabledDays + 1 >= maxDate.getDate() - 7 &&
        previous !== daysAndEmptyDaysUntilMaxDate
      ) {
        return maxDate.getDate() + firstEmptyAndDisabledDays - 1;
      }
    }
    if (previous === dayList.length - 1) {
      return firstEmptyAndDisabledDays;
    }

    if (previous >= dayList.length - 7) {
      return dayList.length - 1;
    }
    return previous + DAYS_PER_WEEK;
  };
};

export const handleKeyLeftMove = ({
  dayList,
  maxDate,
  minDate,
  firstEmptyAndDisabledDays,
  daysAndEmptyDaysUntilMaxDate,
  currentDate,
}: HandleKeyMoveType): ((previous: number) => number) => {
  return previous => {
    if (previous === firstEmptyAndDisabledDays) {
      if (isSameMonthAndYear(minDate, currentDate)) {
        return dayList.length - 1;
      } else if (isSameMonthAndYear(maxDate, currentDate)) {
        return daysAndEmptyDaysUntilMaxDate;
      }
      return dayList.length - 1;
    }
    return previous - ONE_DAY;
  };
};

export const handleKeyRightMove = ({
  dayList,
  maxDate,
  minDate,
  firstEmptyAndDisabledDays,
  daysAndEmptyDaysUntilMaxDate,
  currentDate,
}: HandleKeyMoveType): ((previous: number) => number) => {
  return previous => {
    if (isSameMonthAndYear(minDate, currentDate) && previous === dayList.length - 1) {
      return firstEmptyAndDisabledDays;
    }
    if (isSameMonthAndYear(maxDate, currentDate)) {
      if (previous === daysAndEmptyDaysUntilMaxDate) {
        return firstEmptyAndDisabledDays;
      }
    }
    if (previous === dayList.length - 1) {
      return firstEmptyAndDisabledDays;
    }
    return previous + ONE_DAY;
  };
};

export const handleKeyTabMove = (previous: number): number => previous;

export const handleKeyPageUpMove = ({
  firstEmptyAndDisabledDays,
}: HandleKeyMoveType): ((previous: number) => number) => {
  return () => {
    return firstEmptyAndDisabledDays;
  };
};

export const handleKeyPageDownMove = ({
  dayList,
  maxDate,
  currentDate,
  daysAndEmptyDaysUntilMaxDate,
}: HandleKeyMoveType): ((previous: number) => number) => {
  return () => {
    return isSameMonthAndYear(maxDate, currentDate)
      ? daysAndEmptyDaysUntilMaxDate
      : dayList.length - 1;
  };
};
