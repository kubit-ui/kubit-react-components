import { InputState } from '../types/inputTheme';

export const getState = (
  value: string | number | undefined,
  focus: boolean,
  disabled = false,
  error = false,
  informationAssociated?: string
): InputState => {
  const valueCheck = (stateFilled, stateEmpty) => {
    return value ? stateFilled : stateEmpty;
  };
  if (disabled) {
    if (value && informationAssociated) {
      return InputState.DISABLED_FILLED_WITH_INFO;
    }
    return valueCheck(InputState.DISABLED_FILLED, InputState.DISABLED_EMPTY);
  }
  if (error) {
    if (value && informationAssociated) {
      return InputState.ERROR_FILLED_WITH_INFO;
    }
    if (focus) {
      return InputState.ERROR_ACTIVE;
    }
    return valueCheck(InputState.ERROR_FILLED, InputState.ERROR_EMPTY);
  }
  if (focus) {
    return InputState.ACTIVE;
  }
  return valueCheck(InputState.FILLED, InputState.EMPTY);
};

export const hasError = (state?: InputState): boolean => {
  return (
    state === InputState.ERROR_EMPTY ||
    state === InputState.ERROR_FILLED ||
    state === InputState.ERROR_ACTIVE
  );
};

export const isDisabled = (state: InputState): boolean => {
  return (
    state === InputState.DISABLED_EMPTY ||
    state === InputState.DISABLED_FILLED ||
    state === InputState.DISABLED_FILLED_WITH_INFO
  );
};
