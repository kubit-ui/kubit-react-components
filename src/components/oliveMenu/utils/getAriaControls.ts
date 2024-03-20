import { OliveMenuListOptions } from '../types';

export const getAriaControls = (
  sections: OliveMenuListOptions[] | undefined,
  ariaControls: string
): string => {
  let newAriaControls = '';
  sections?.forEach((_section, index) => (newAriaControls += ` ${ariaControls}${index}`));
  return newAriaControls.trimStart();
};
