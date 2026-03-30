/**
 * Returns an array of all dates in a given month and year.
 *
 * @param month - Month number (1-12)
 * @param year - Year number
 * @returns Array of Date objects for each day in the month
 */
export const getAllDaysInMonth = (month: number, year: number): Date[] =>
  Array.from(
    { length: new Date(year, month, 0).getDate() }, // get next month, zeroth's (previous) day
    (_, i) => new Date(year, month - 1, i + 1), // get current month (0 based index)
  );
