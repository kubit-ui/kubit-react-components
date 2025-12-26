import { InputBaseState, type InputBaseStateType } from '../types/state';

interface IInputBaseState {
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
}: IInputBaseState): InputBaseStateType => {
  if (disabled && filled) {
    return InputBaseState.DISABLED_FILLED;
  }
  if (disabled) {
    return InputBaseState.DISABLED_EMPTY;
  }
  if (error && filled) {
    return InputBaseState.ERROR_FILLED;
  }
  if (error) {
    return InputBaseState.ERROR_EMPTY;
  }
  if (focused) {
    return InputBaseState.FOCUS;
  }
  if (filled) {
    return InputBaseState.FILLED;
  }
  return InputBaseState.EMPTY;
};
