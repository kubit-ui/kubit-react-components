import { STATES } from '@/lib/types/states/states';

import type { TextAreaStateType } from '../types/state';

export const getState = (
  disabled: boolean,
  error: boolean,
  value: string | undefined,
  active: boolean,
): TextAreaStateType => {
  let state: TextAreaStateType;
  if (disabled && value) {
    state = STATES.DISABLED_FILLED;
  } else if (disabled) {
    state = STATES.DISABLED_EMPTY;
  } else if (error) {
    state = STATES.ERROR;
  } else if (value) {
    state = STATES.FILLED;
  } else if (active) {
    state = STATES.ACTIVE;
  } else {
    state = STATES.EMPTY;
  }
  return state;
};
