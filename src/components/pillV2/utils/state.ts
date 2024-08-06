import { PillStateType } from '../types';

export const getPillState = ({
  selected,
  disabled,
}: {
  selected: boolean;
  disabled: boolean;
}): PillStateType => {
  if (disabled && selected) {
    return PillStateType.DISABLED_SELECTED;
  }
  if (disabled) {
    return PillStateType.DISABLED;
  }
  if (selected) {
    return PillStateType.SELECTED;
  }
  return PillStateType.DEFAULT;
};
