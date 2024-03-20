export const getMask = (format: string): string => {
  return format.replace(/(?!-)[^!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/g, '#');
};
