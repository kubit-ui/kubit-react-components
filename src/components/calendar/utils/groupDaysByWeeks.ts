export const groupDaysByWeeks = (dayList: (Date | undefined)[]): (Date | undefined)[][] => {
  const groupDays: (Date | undefined)[][] = [];
  for (let i = 0; i < dayList.length; i += 7) {
    groupDays.push(dayList.slice(i, i + 7));
  }
  return groupDays;
};
