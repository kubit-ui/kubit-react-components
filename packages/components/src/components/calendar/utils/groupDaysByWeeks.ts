/**
 * Groups an array of days into weeks (arrays of 7 days each).
 *
 * @param dayList - Array of dates or undefined values
 * @returns Array of week arrays, each containing up to 7 days
 */
export const groupDaysByWeeks = (
  dayList: (Date | undefined)[],
): (Date | undefined)[][] => {
  const groupDays: (Date | undefined)[][] = [];
  for (let i = 0; i < dayList.length; i += 7) {
    groupDays.push(dayList.slice(i, i + 7));
  }
  return groupDays;
};
