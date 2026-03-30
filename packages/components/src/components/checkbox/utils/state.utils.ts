import { CheckboxState, type CheckboxStateType } from '../types/state';

/**
 * Get Checkbox state based on checked, disabled, and error props
 */
export const getCheckboxState = (
  checked = false,
  disabled = false,
  error = false,
): CheckboxStateType => {
  if (error && !checked) {
    return CheckboxState.ERROR_UNSELECTED;
  }
  if (error) {
    return CheckboxState.ERROR_SELECTED;
  }
  if (disabled && !checked) {
    return CheckboxState.DISABLED_UNSELECTED;
  }
  if (disabled) {
    return CheckboxState.DISABLED_SELECTED;
  }
  if (checked) {
    return CheckboxState.SELECTED;
  }
  return CheckboxState.UNSELECTED;
};
