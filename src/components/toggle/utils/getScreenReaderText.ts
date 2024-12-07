import { IElementOrIcon } from '@/components/elementOrIcon/types/elementOrIcon';
import { POSITIONS } from '@/types/positions/positions';

import { IInputValue } from '../types/toggle';

export const getScreenReaderText = (
  position: POSITIONS,
  inputValues: IInputValue,
  onIcon?: IElementOrIcon,
  offIcon?: IElementOrIcon
): string | undefined =>
  position === POSITIONS.CENTER
    ? inputValues.centerInputValue
    : position === POSITIONS.RIGHT
      ? (inputValues.rightInputValue ?? onIcon?.altText)
      : (inputValues.leftInputValue ?? offIcon?.altText);
