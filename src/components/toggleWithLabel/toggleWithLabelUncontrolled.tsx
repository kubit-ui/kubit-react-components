import * as React from 'react';

import { POSITIONS } from '@/types/positions';

import { ToggleWithLabelControlled } from './toggleWithLabelControlled';
import { type IToggleWithLabel, LABEL_POSITION } from './types';

const THREE_POSITION_TOGGLE = 'YES_NO';

const ToggleWithLabelUncontrolledComponent = (
  {
    toggleVariant,
    defaultTogglePosition = toggleVariant !== THREE_POSITION_TOGGLE
      ? POSITIONS.LEFT
      : POSITIONS.CENTER,
    displayRow,
    /* deprecated - deleted condition when the 'displayRow' prop is removed */
    labelPosition = displayRow === undefined ? LABEL_POSITION.LEFT : undefined,
    ...props
  }: IToggleWithLabel,
  ref: React.ForwardedRef<HTMLFieldSetElement> | undefined | null
): JSX.Element => {
  return (
    <ToggleWithLabelControlled
      ref={ref}
      defaultTogglePosition={defaultTogglePosition}
      labelPosition={labelPosition}
      toggleVariant={toggleVariant}
      {...props}
    />
  );
};

export const ToggleWithLabelUncontrolled = React.forwardRef(ToggleWithLabelUncontrolledComponent);
