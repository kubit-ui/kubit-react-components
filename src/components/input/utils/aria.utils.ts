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
  helpMessage?: React.ReactNode;
  helpMessageId?: string;
  errorMessage?: string;
  errorMessageId?: string;
  state?: InputState;
}): string => {
  let res = labelId;
  if (extraAriaLabelledBy) {
    res += ` ${extraAriaLabelledBy}`;
  }
  if (errorMessageId && errorMessage && hasError(state)) {
    res += ` ${errorMessageId}`;
  }
  if (helpMessageId && helpMessage) {
    res += ` ${helpMessageId}`;
  }
  return res;
};

export const buildAriaDescribedBy = ({
  ariaDescribedBy,
  errorMessage,
  errorMessageId,
  state,
}: {
  ariaDescribedBy?: string;
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
  return res;
};
