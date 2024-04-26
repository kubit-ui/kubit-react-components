import { CheckboxPropsStateStylesType, CheckboxStateType } from '../types';

// eslint-disable-next-line complexity
const getCheckBoxState = (
  checked = false,
  disabled = false,
  error = false,
  // deprecated - Remove style from de method when the deprecated ERROR state is removed
  styles?: CheckboxPropsStateStylesType
): CheckboxStateType => {
  if (error && !checked && styles?.[CheckboxStateType.ERROR_UNSELECTED]) {
    return CheckboxStateType.ERROR_UNSELECTED;
  }
  if (error && checked && styles?.[CheckboxStateType.ERROR_SELECTED]) {
    return CheckboxStateType.ERROR_SELECTED;
  }
  // deprecated - This `error` state will be deprecated in the future
  if (error) {
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
    state === CheckboxStateType.DEFAULT_SELECTED ||
    state === CheckboxStateType.DISABLED_SELECTED ||
    state === CheckboxStateType.ERROR_SELECTED;
  const isDisabled =
    state === CheckboxStateType.DISABLED_UNSELECTED ||
    state === CheckboxStateType.DISABLED_SELECTED;
  const hasError =
    state === CheckboxStateType.ERROR_SELECTED ||
    state === CheckboxStateType.ERROR_UNSELECTED ||
    // deprecated - This `error` state will be deprecated in the future
    state === CheckboxStateType.ERROR;
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
