import { PillStateType } from '../types';

// eslint-disable-next-line complexity
export const getPillState = (isSelected = false, disabled = false): PillStateType => {
  if (isSelected && !disabled) {
    return PillStateType.SELECTED;
  }
  if (!isSelected && disabled) {
    return PillStateType.DISABLED;
  }
  if (isSelected && disabled) {
    return PillStateType.DISABLED_SELECTED;
  }
  return PillStateType.DEFAULT;
};
