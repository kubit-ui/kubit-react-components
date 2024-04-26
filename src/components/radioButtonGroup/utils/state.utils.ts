/* eslint-disable complexity */
import { RadioButtonStateType } from '../types';

/**
 * Get the state of the radioButton
 * @param checked
 * @param disabled
 * @param error
 * @param state
 * @returns {RadioButtonStateType}
 * @constructor
 * @internal
 */
// deprecated - Remove `state` param when `state` prop is removed from `RadioButton`
export const getState = (
  checked = false,
  disabled = false,
  error = false,
  state?: RadioButtonStateType
): RadioButtonStateType => {
  const hasError =
    error || state === RadioButtonStateType.ERROR || state === RadioButtonStateType.ERROR_SELECTED;
  const isDisabled =
    disabled ||
    state === RadioButtonStateType.DISABLED ||
    state === RadioButtonStateType.DISABLED_SELECTED;
  const selected =
    checked ||
    state === RadioButtonStateType.SELECTED ||
    state === RadioButtonStateType.DISABLED_SELECTED ||
    state === RadioButtonStateType.ERROR_SELECTED;

  if (hasError && !selected) {
    return RadioButtonStateType.ERROR;
  }
  if (hasError && selected) {
    return RadioButtonStateType.ERROR_SELECTED;
  }
  if (isDisabled && !selected) {
    return RadioButtonStateType.DISABLED;
  }
  if (isDisabled && selected) {
    return RadioButtonStateType.DISABLED_SELECTED;
  }
  if (selected) {
    return RadioButtonStateType.SELECTED;
  }
  return RadioButtonStateType.DEFAULT;
};

/**
 * Get the state of the radioButton
 * @param state
 * @returns {{isChecked: boolean, isDisabled: boolean, hasError: boolean}}
 * @constructor
 * @internal
 */
// deprecated - Remove the method when `state` prop is removed from `RadioButton`
export const radioButtonState = (
  state: RadioButtonStateType
): {
  isChecked: boolean;
  isDisabled: boolean;
  hasError: boolean;
} => {
  const isChecked =
    state === RadioButtonStateType.SELECTED ||
    state === RadioButtonStateType.DISABLED_SELECTED ||
    state === RadioButtonStateType.ERROR_SELECTED;
  const isDisabled =
    state === RadioButtonStateType.DISABLED || state === RadioButtonStateType.DISABLED_SELECTED;
  const hasError =
    state === RadioButtonStateType.ERROR || state === RadioButtonStateType.ERROR_SELECTED;
  return { isChecked, isDisabled, hasError };
};
