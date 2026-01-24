import {
  InputDecorationState,
  type InputDecorationStateType,
} from '../types/state';

interface IInputDecorationState {
  error?: boolean;
  disabled?: boolean;
  filled?: boolean;
  focused?: boolean;
}

export const getState = ({
  disabled,
  error,
  filled,
  focused,
}: IInputDecorationState): `${InputDecorationStateType}` => {
  if (disabled && filled) {
    return InputDecorationState.DISABLED_FILLED;
  }
  if (disabled) {
    return InputDecorationState.DISABLED_EMPTY;
  }
  if (error && filled) {
    return InputDecorationState.ERROR_FILLED;
  }
  if (error) {
    return InputDecorationState.ERROR_EMPTY;
  }
  if (focused) {
    return InputDecorationState.FOCUS;
  }
  if (filled) {
    return InputDecorationState.FILLED;
  }
  return InputDecorationState.EMPTY;
};
