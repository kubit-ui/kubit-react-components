import { InputState } from '../types';
import { hasError } from './state.utils';

export const buildAriaLabelledBy = ({
  extraAriaLabelledBy,
  labelId,
  helpMessage,
  helpMessageId,
  errorMessage,
  errorMessageId,
  state,
}: {
  labelId: string;
  extraAriaLabelledBy?: string;
  helpMessage?: string;
  helpMessageId?: string;
  errorMessage?: string;
  errorMessageId: string;
  state?: InputState;
}): string => {
  let res = labelId;
  if (extraAriaLabelledBy) {
    res += ` ${extraAriaLabelledBy}`;
  }
  if (errorMessage && hasError(state)) {
    res += ` ${errorMessageId}`;
  }
  if (helpMessage) {
    res += ` ${helpMessageId}`;
  }
  return res;
};
