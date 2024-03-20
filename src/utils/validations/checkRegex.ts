export const checkRegex = (regex: string, value: string, parsedRepeat?: number): boolean => {
  if (parsedRepeat && parsedRepeat > 1) {
    return new RegExp(regex + '{' + parsedRepeat + ',}').test(value);
  }
  return new RegExp(regex).test(value);
};
