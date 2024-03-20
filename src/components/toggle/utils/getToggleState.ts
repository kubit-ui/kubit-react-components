import { POSITIONS } from '@/types/positions';

import { ToggleStateType } from '../types';

// States for 3 position toggle
const getStateOfThreePositionToggle = (togglePosition: POSITIONS): ToggleStateType => {
  if (togglePosition === POSITIONS.RIGHT) {
    return ToggleStateType.DEFAULT_SELECTED;
  } else if (togglePosition === POSITIONS.CENTER) {
    return ToggleStateType.DEFAULT;
  }
  return ToggleStateType.DEFAULT_UNSELECTED;
};

// States for 2 position toggle
const getStateOfTwoPositionToggle = (
  togglePosition: POSITIONS,
  isDisabled: boolean
): ToggleStateType => {
  if (isDisabled && togglePosition === POSITIONS.RIGHT) {
    return ToggleStateType.DISABLED_SELECTED;
  } else if (isDisabled && togglePosition !== POSITIONS.RIGHT) {
    return ToggleStateType.DISABLED_UNSELECTED;
  } else if (togglePosition === POSITIONS.RIGHT) {
    return ToggleStateType.DEFAULT_SELECTED;
  }
  return ToggleStateType.DEFAULT_UNSELECTED;
};

/**
 * @name getToggleState
 * @description
 * Get the toggle state
 */
export const getToggleState = (
  hasThreePositions: boolean,
  togglePosition: POSITIONS,
  isDisabled: boolean
): ToggleStateType => {
  if (hasThreePositions) {
    return getStateOfThreePositionToggle(togglePosition);
  }
  return getStateOfTwoPositionToggle(togglePosition, isDisabled);
};
