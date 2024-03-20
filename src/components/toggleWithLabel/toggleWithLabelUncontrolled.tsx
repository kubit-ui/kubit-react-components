import * as React from 'react';

import { POSITIONS } from '@/types/positions';

import { ToggleWithLabelControlled } from './toggleWithLabelControlled';
import type { IToggleWithLabel } from './types';

const THREE_POSITION_TOGGLE = 'YES_NO';

const ToggleWithLabelUncontrolledComponent = (
  {
    toggleVariant,
    defaultTogglePosition = toggleVariant !== THREE_POSITION_TOGGLE
      ? POSITIONS.LEFT
      : POSITIONS.CENTER,
    ...props
  }: IToggleWithLabel,
  ref: React.ForwardedRef<HTMLFieldSetElement> | undefined | null
): JSX.Element => {
  return (
    <ToggleWithLabelControlled
      ref={ref}
      defaultTogglePosition={defaultTogglePosition}
      toggleVariant={toggleVariant}
      {...props}
    />
  );
};

export const ToggleWithLabelUncontrolled = React.forwardRef(ToggleWithLabelUncontrolledComponent);
