import { STATES } from '@/lib/types/states/states';

import type { SliderStateType } from '../types/state';

/**
 * @description
 * Get the state of the slider
 */
export const getState = ({
  disabled,
  hover,
  pressed,
}: {
  hover: boolean;
  pressed: boolean;
  disabled: boolean;
}): SliderStateType => {
  if (disabled) {
    return STATES.DISABLED;
  }
  if (pressed) {
    return STATES.PRESSED;
  }
  if (hover) {
    return STATES.HOVER;
  }
  return STATES.DEFAULT;
};
