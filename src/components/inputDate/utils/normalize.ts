export const normalizeDate = (date: Date | number): Date => {
  if (typeof date === 'number') {
    return new Date(date);
  }
  return date;
};
