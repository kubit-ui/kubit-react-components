/**
 * Sets the year of a date object.
 *
 * @param date - The date to modify
 * @param newYear - The new year value
 * @returns The timestamp after setting the year
 */
export const setYear = (date: Date, newYear: number): number =>
  date.setFullYear(newYear);
