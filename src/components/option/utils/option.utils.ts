import { OptionStateType } from '../types';

const getState = (
  disabled: boolean | undefined,
  focused: boolean | undefined,
  selected: boolean | undefined,
  multiSelected: boolean | undefined,
  hover: boolean,
  filling: boolean
): OptionStateType => {
  if (disabled) {
    return OptionStateType.DISABLED;
  }
  if (focused) {
    return OptionStateType.FOCUS;
  }
  if (selected) {
    if (multiSelected) {
      return hover ? OptionStateType.MULTIPLE_SELECTED_HOVER : OptionStateType.MULTIPLE_SELECTED;
    }
    return hover ? OptionStateType.SELECTED_HOVER : OptionStateType.SELECTED;
  }
  if (hover) {
    return OptionStateType.HOVER;
  }
  if (filling) {
    return OptionStateType.FILLING;
  }
  return OptionStateType.DEFAULT;
};

/**
 * @description
 * function to get the indexes of the highlighted chars
 */
export const getHighlightedIndexes = (
  label: string,
  labelCharsHighlighted: string | undefined
): { firstHighlightedIndex: number; lastHighlightedIndex: number } => {
  let firstHighlightedIndex = 0;
  let lastHighlightedIndex = 0;
  if (labelCharsHighlighted) {
    const labelLowerCase = label.toLocaleLowerCase();
    const charsHightlightedLowerCase = labelCharsHighlighted.toLocaleLowerCase();
    if (labelLowerCase.includes(charsHightlightedLowerCase)) {
      firstHighlightedIndex = labelLowerCase.indexOf(charsHightlightedLowerCase);
      lastHighlightedIndex = firstHighlightedIndex + labelCharsHighlighted.length;
    }
  }
  return { firstHighlightedIndex, lastHighlightedIndex };
};

/**
 * @description
 * function to get the state of the option
 * @param {boolean | undefined} disabled
 * @param {boolean | undefined} selected
 * @param {boolean | undefined} multiSelected
 * @param {boolean} hover
 * @param {boolean} filling
 * @returns {OptionStateType}
 * @export
 * @function
 * @name getState
 */
export { getState };
