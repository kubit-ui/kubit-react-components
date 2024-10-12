import { OliveMenuListOptions } from '../types';

export const getAriaControls = (
  sections: OliveMenuListOptions[] | undefined,
  ariaControls: string
): string[] | undefined => {
  const ariaControlsIds = sections?.map(({ title, ...section }, index) => {
    return `${ariaControls}${index}${section.id ? `${section.id}` : ''}`;
  });

  return ariaControlsIds;
};
