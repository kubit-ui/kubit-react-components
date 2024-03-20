export const getYearList = (minDate: Date, maxYear: Date): number[] => {
  const max = maxYear.getFullYear();
  const min = minDate.getFullYear();
  const years = [] as number[];

  for (let i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};
