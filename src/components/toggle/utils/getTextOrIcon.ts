import { POSITIONS } from '@/types/positions/positions';

import { IInputValue, ToggleOnAndOffTextType } from '../types/toggle';

export const getTextOrIcon = (
  position: POSITIONS,
  inputValues?: IInputValue,
  offText?: ToggleOnAndOffTextType,
  onText?: ToggleOnAndOffTextType
): string | undefined =>
  position === POSITIONS.CENTER
    ? inputValues?.centerInputValue
    : position === POSITIONS.RIGHT
      ? onText?.content
      : offText?.content;
