import { formatDateToUTC } from '@/utils';

const checkYear = (minYear: Date, maxYear: Date, currentDate: string) => {
  return formatDateToUTC(currentDate) >= minYear && formatDateToUTC(currentDate) <= maxYear;
};

export const verifyYear = (valueDate: string, minDate: Date, maxDate: Date): boolean => {
  const minYear = minDate;
  const maxYear = maxDate;
  return checkYear(minYear, maxYear, valueDate);
};
