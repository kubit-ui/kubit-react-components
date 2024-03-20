import { IOptionGroup } from '../types';

export const getLength = (options: IOptionGroup[]): number => {
  let numOptions = 0;
  options.forEach(section => (numOptions += section.options.length));
  return numOptions;
};

export const getAriaControls = (options: IOptionGroup[], ariaControls: string): string => {
  let newAriaControls = '';
  options[0]?.options?.forEach(
    (_section, index) => (newAriaControls += ` ${ariaControls}${index}`)
  );
  return newAriaControls.trimStart();
};
