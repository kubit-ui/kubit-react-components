export const truncatedValue = (value: string, maxDecimals: number): string => {
  const numberOfDecimals = (value.split('.')[1] || '').length;

  const decimalIndex = value.indexOf('.');

  const truncatedValue = value.slice(0, decimalIndex + 1 + maxDecimals);

  return numberOfDecimals > maxDecimals ? truncatedValue : value;
};
