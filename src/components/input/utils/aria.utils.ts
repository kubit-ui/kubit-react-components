import { InputState } from '../types';
import { hasError } from './state.utils';

export const buildAriaDescribedBy = ({
  ariaDescribedBy,
  helpMessage,
  helpMessageId,
  errorMessage,
  errorMessageId,
  state,
}: {
  ariaDescribedBy?: string;
  helpMessage?: React.ReactNode;
  helpMessageId?: string;
  errorMessage?: string;
  errorMessageId?: string;
  state?: InputState;
}): string | undefined => {
  if (!ariaDescribedBy && !errorMessage) return;

  let res: string = '';
  if (ariaDescribedBy) {
    res += ` ${ariaDescribedBy}`;
  }
  if (errorMessageId && errorMessage && hasError(state)) {
    res += ` ${errorMessageId}`;
  }
  if (helpMessageId && helpMessage) {
    res += ` ${helpMessageId}`;
  }
  return res;
};
