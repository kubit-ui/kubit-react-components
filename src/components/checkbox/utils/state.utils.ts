import { CheckboxStateType } from '../types';

// eslint-disable-next-line complexity
const getCheckBoxState = (
  checked = false,
  disabled = false,
  isError = false
): CheckboxStateType => {
  if (isError) {
    return CheckboxStateType.ERROR;
  }
  if (disabled && !checked) {
    return CheckboxStateType.DISABLED_UNSELECTED;
  }
  if (disabled && checked) {
    return CheckboxStateType.DISABLED_SELECTED;
  }
  if (checked) {
    return CheckboxStateType.DEFAULT_SELECTED;
  }
  return CheckboxStateType.DEFAULT_UNSELECTED;
};

/**
 * Get the state of the checkbox
 * @param state
 * @returns {{isChecked: boolean, isDisabled: boolean, hasError: boolean}}
 * @constructor
 * @internal
 */
export const checkboxState = (
  state: CheckboxStateType
): {
  isChecked: boolean;
  isDisabled: boolean;
  hasError: boolean;
} => {
  const isChecked =
    state === CheckboxStateType.DEFAULT_SELECTED || state === CheckboxStateType.DISABLED_SELECTED;
  const isDisabled =
    state === CheckboxStateType.DISABLED_UNSELECTED ||
    state === CheckboxStateType.DISABLED_SELECTED;
  const hasError = state === CheckboxStateType.ERROR;
  return { isChecked, isDisabled, hasError };
};

/**
 * Get the state of the checkbox
 * @param checked
 * @param disabled
 * @param isError
 * @returns {CheckboxStateType}
 * @constructor
 * @internal
 */
export { getCheckBoxState };
