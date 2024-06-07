import { InputSignatureState } from '../types/inputSignatureState';

type GetInputSignatureState = {
  active: boolean;
  filled: boolean;
  error?: boolean;
  disabled?: boolean;
};

export const getInputSignatureState = ({
  active,
  filled,
  error,
  disabled,
}: GetInputSignatureState): InputSignatureState => {
  if (disabled) {
    return InputSignatureState.DISABLED;
  } else if (error) {
    return InputSignatureState.ERROR;
  } else if (active) {
    return InputSignatureState.ACTIVE;
  } else if (filled) {
    return InputSignatureState.FILLED;
  }

  return InputSignatureState.DEFAULT;
};
