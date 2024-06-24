import { SliderStateType } from '../types';

/**
 * @description
 * Get the state of the slider
 */
export const getState = ({
  hover,
  pressed,
  disabled,
}: {
  hover: boolean;
  pressed: boolean;
  disabled: boolean;
}): SliderStateType => {
  if (disabled) {
    return SliderStateType.DISABLED;
  }
  if (pressed) {
    return SliderStateType.PRESSED;
  }
  if (hover) {
    return SliderStateType.HOVER;
  }
  return SliderStateType.DEFAULT;
};
