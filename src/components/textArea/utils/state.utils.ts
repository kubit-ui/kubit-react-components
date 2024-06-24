import { TextAreaStateType } from '../types';

export const getState = (
  disabled: boolean,
  error: boolean,
  value: string | undefined,
  active: boolean
): TextAreaStateType => {
  let state: TextAreaStateType;
  if (disabled && value) {
    state = TextAreaStateType.DISABLED_FILLED;
  } else if (disabled) {
    state = TextAreaStateType.DISABLED_EMPTY;
  } else if (error) {
    state = TextAreaStateType.ERROR;
  } else if (value) {
    state = TextAreaStateType.FILLED;
  } else if (active) {
    state = TextAreaStateType.ACTIVE;
  } else {
    state = TextAreaStateType.EMPTY;
  }
  return state;
};
