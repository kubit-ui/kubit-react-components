import { FunctionalitiesModuleSectionType } from '../types/functionalitiesModule';

export const getDefaultTabSeleted = (
  selectedValue?: string | number,
  sections?: FunctionalitiesModuleSectionType[]
): number => {
  const tab = sections?.findIndex(section =>
    section.options?.some(option => option.value === selectedValue)
  );
  return tab && tab >= 0 ? tab : 0;
};
