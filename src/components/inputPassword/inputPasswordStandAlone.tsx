import React, { ForwardedRef, forwardRef } from 'react';

// styles
import { InputControlled as Input } from '@/components/input';

import { IInputPasswordStandAlone } from './types';

export const InputPasswordStandAloneComponent = (
  props: IInputPasswordStandAlone,
  ref: ForwardedRef<HTMLInputElement | undefined>
): JSX.Element => (
  <Input
    {...props}
    ref={ref}
    overrideStyles={props.styles}
    variant={props.inputVariant ?? props.styles?.[props.state]?.inputVariant}
  />
);

export const InputPasswordStandAlone = forwardRef(InputPasswordStandAloneComponent);
