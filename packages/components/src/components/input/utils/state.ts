import { InputState, type InputStateType } from '../types/state';

interface IInputState {
  error?: boolean;
  disabled?: boolean;
  filled?: boolean;
  focused?: boolean;
}

/**
 * Determines the visual state of an input based on its current conditions.
 *
 * @param params - Input state flags
 * @returns The calculated input state
 */
export const getState = ({
  disabled,
  error,
  filled,
  focused,
}: IInputState): InputStateType => {
  if (disabled && filled) {
    return InputState.DISABLED_FILLED;
  }
  if (disabled) {
    return InputState.DISABLED_EMPTY;
  }
  if (error && filled) {
    return InputState.ERROR_FILLED;
  }
  if (error) {
    return InputState.ERROR_EMPTY;
  }
  if (focused) {
    return InputState.FOCUS;
  }
  if (filled) {
    return InputState.FILLED;
  }
  return InputState.EMPTY;
};
