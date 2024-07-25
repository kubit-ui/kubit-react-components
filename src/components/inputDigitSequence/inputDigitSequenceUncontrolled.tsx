import * as React from 'react';

import { InputDigitSequenceControlled } from './inputDigitSequenceControlled';
import { IInputDigitSequenceUncontrolled } from './types';

export const InputDigitSequenceUncontrolled = ({
  ...props
}: IInputDigitSequenceUncontrolled): JSX.Element => {
  return <InputDigitSequenceControlled {...props} />;
};
