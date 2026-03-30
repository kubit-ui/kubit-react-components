/**
 * Gets the day of the week for the first day of a given month.
 *
 * @param year - The year
 * @param month - The month (0-11)
 * @returns Day of week (0 = Sunday, 6 = Saturday)
 */
export const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};
