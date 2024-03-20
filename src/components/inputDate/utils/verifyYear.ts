const checkYear = (minYear: Date, maxYear: Date, currentDate: Date) => {
  return currentDate >= minYear && currentDate <= maxYear;
};

export const verifyYear = (valueDate: Date, minDate: Date, maxDate: Date): boolean => {
  const minYear = minDate;
  const maxYear = maxDate;
  return checkYear(minYear, maxYear, valueDate);
};
