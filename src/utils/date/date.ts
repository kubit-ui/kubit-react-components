import { transformDate } from './transformDate';

export const isAfter = (date1: Date, date2: Date): boolean => {
  return date1.getTime() > date2.getTime();
};

export const isBefore = (date1: Date, date2: Date): boolean => {
  return date1.getTime() < date2.getTime();
};

export const isDatesEqual = (
  firstDate: Date | string | number,
  secondDate: Date | string | number,
  shouldCompareTime = false
): boolean => {
  const firstDateModified =
    typeof firstDate === 'string' || typeof firstDate === 'number'
      ? transformDate(firstDate)
      : (firstDate as Date);

  const secondDateModified =
    typeof secondDate === 'string' || typeof secondDate === 'number'
      ? transformDate(secondDate)
      : (secondDate as Date);

  if (shouldCompareTime) {
    return firstDateModified.getTime() === secondDateModified.getTime();
  }

  return (
    firstDateModified.getDate() === secondDateModified.getDate() &&
    firstDateModified.getMonth() === secondDateModified.getMonth() &&
    firstDateModified.getFullYear() === secondDateModified.getFullYear()
  );
};

export const getAddDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export const getAddMonths = (date: Date, months: number): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
};

export const getAddYears = (date: Date, years: number): Date => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
};

export const getSubDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - days);
  return newDate;
};

export const getSubMonths = (date: Date, months: number): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() - months);
  return newDate;
};

export const getSubYears = (date: Date, years: number): Date => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() - years);
  return newDate;
};

export const getAllMonthNames = (type: 'long' | 'short' | 'narrow' = 'long'): string[] => {
  const monthNames: string[] = [];
  for (let i = 0; i < 12; i++) {
    const date = new Date();
    date.setDate(1); // stablish the first day of the month
    date.setMonth(i);
    const monthName = date.toLocaleString('en-US', {
      month: type,
    });
    monthNames.push(monthName);
  }

  return monthNames;
};

export const getAllWeekdayNames = (
  type: 'long' | 'short' | 'narrow' = 'long',
  isSundayFirst: boolean
): string[] => {
  const weekdayNames: string[] = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(0, 0, isSundayFirst ? i : i + 1);
    const weekdayName = date.toLocaleString('en-US', {
      weekday: type,
    });
    weekdayNames.push(weekdayName);
  }

  return weekdayNames;
};
