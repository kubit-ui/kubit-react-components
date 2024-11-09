import React from 'react';

import { InputDigitSequenceControlled } from './inputDigitSequenceControlled';
import { IInputDigitSequenceUncontrolled } from './types/inputDigitSequence';

export const InputDigitSequenceUncontrolled = ({
  ...props
}: IInputDigitSequenceUncontrolled): JSX.Element => {
  return <InputDigitSequenceControlled {...props} />;
};

export { InputDigitSequenceUncontrolled as InputDigitSequence };
