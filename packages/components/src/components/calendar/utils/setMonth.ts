/**
 * Sets the month of a date object.
 *
 * @param date - The date to modify
 * @param newMonth - The new month value (0-11)
 * @returns The timestamp after setting the month
 */
export const setMonth = (date: Date, newMonth: number): number =>
  date.setMonth(newMonth);
