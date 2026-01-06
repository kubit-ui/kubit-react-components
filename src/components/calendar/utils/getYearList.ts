/**
 * Generates an array of years between a minimum and maximum date.
 *
 * @param minDate - The minimum date
 * @param maxYear - The maximum date
 * @returns Array of years in descending order
 */
export const getYearList = (minDate: Date, maxYear: Date): number[] => {
  const max = maxYear.getFullYear();
  const min = minDate.getFullYear();
  const years = [] as number[];

  for (let i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
};
