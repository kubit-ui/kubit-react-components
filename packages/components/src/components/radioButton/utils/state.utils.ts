import { STATES } from '@/lib/types/states/states';

import type { RadioButtonStateType } from '../types/state';

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
export const getState = (
  checked = false,
  disabled = false,
  error = false,
): RadioButtonStateType => {
  const hasError = error;
  const isDisabled = disabled;

  const selected = checked;

  if (hasError && !selected) {
    return STATES.ERROR;
  }
  if (hasError && selected) {
    return STATES.ERROR_SELECTED;
  }
  if (isDisabled && !selected) {
    return STATES.DISABLED;
  }
  if (isDisabled && selected) {
    return STATES.DISABLED_SELECTED;
  }
  if (selected) {
    return STATES.SELECTED;
  }
  return STATES.DEFAULT;
};
