import { POSITIONS } from '@/types/positions/positions';

import { IInputValue } from '../types/toggle';

export const getValueOfRadioButton = (
  position: POSITIONS,
  inputValues?: IInputValue
): string | undefined => {
  if (position === POSITIONS.RIGHT) {
    return inputValues?.rightInputValue;
  } else if (position === POSITIONS.LEFT) {
    return inputValues?.leftInputValue;
  }
  return inputValues?.centerInputValue;
};
