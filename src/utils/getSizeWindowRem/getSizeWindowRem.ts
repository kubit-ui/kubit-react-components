export const getSizeWindowRem = (): number => {
  if (typeof window === 'undefined') return 0;
  if (typeof document === 'undefined') return 0;

  const elem = document?.querySelector('body');
  return elem ? window.innerWidth / parseFloat(getComputedStyle(elem)['font-size']) : 0;
};
