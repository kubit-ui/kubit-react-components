export const isValidDate = (date: Date | string | number): boolean => {
  return date instanceof Date && !isNaN(Number(date));
};
