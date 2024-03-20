export const getMaxLabelSize = (proceed: boolean, inputId: string): string | undefined => {
  if (!proceed) {
    return undefined;
  }

  const input = document.getElementById(inputId);
  if (!input) {
    return undefined;
  }
  const { width, paddingRight, paddingLeft } = window.getComputedStyle(input);

  const wdt = width ?? '100%';
  const pddLft = paddingLeft ?? '0';
  const pddRght = paddingRight ?? '0';

  return `calc(${wdt} - ${pddRght} - ${pddLft})`;
};
