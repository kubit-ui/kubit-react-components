import { ListOptionsOptionType } from '../types/listOptions';

export const isSelected = (
  option: ListOptionsOptionType,
  selectedValue?: string | number | (string | number)[] | null,
  isMultiSelect?: boolean,
  caseSensitive?: boolean
): boolean => {
  if (selectedValue !== null && selectedValue !== undefined && option.value !== undefined) {
    if (isMultiSelect) {
      return Boolean(Array.isArray(selectedValue) && selectedValue.includes(option.value));
    }
    if (caseSensitive) {
      return Boolean(selectedValue === option.value);
    }
    return Boolean(
      selectedValue.toLocaleString().toLocaleLowerCase() ===
        option.value.toLocaleString().toLocaleLowerCase()
    );
  }
  return false;
};

export const getOptionVariant = (
  highlighted: boolean | undefined,
  hightlightedOptionVariant: string | undefined,
  optionVariant: string
): string => {
  return highlighted && hightlightedOptionVariant ? hightlightedOptionVariant : optionVariant;
};

export const keyUpMove = (prevFocus: number): number => {
  let newFocus = Math.max(prevFocus, 0);
  if (prevFocus > 0) {
    newFocus -= 1;
  }
  return newFocus;
};

export const keyDownMove =
  (options: ListOptionsOptionType[]) =>
  (prevFocus: number): number => {
    let newFocus = Math.max(prevFocus, 0);
    if (prevFocus + 1 <= options.length - 1) {
      newFocus += 1;
    }
    return newFocus;
  };
