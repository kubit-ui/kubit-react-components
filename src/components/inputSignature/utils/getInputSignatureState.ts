import { STATES } from '@/lib/types/states/states';

import type { InputSignatureState } from '../types/inputSignatureState';

interface GetInputSignatureState {
  active: boolean;
  filled: boolean;
  error?: boolean;
  disabled?: boolean;
}

export const getInputSignatureState = ({
  active,
  disabled,
  error,
  filled,
}: GetInputSignatureState): InputSignatureState => {
  if (disabled) {
    return STATES.DISABLED;
  }
  if (error) {
    return STATES.ERROR;
  }
  if (active) {
    return STATES.ACTIVE;
  }
  if (filled) {
    return STATES.FILLED;
  }

  return STATES.DEFAULT;
};
