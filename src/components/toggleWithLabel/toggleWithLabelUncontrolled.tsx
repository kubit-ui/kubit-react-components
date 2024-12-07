import React from 'react';

import { POSITIONS } from '@/types/positions/positions';

import { ToggleWithLabelControlled } from './toggleWithLabelControlled';
import { IToggleWithLabel, LABEL_POSITION } from './types/toggleWithLabel';

const THREE_POSITION_TOGGLE = 'YES_NO';

const ToggleWithLabelUncontrolledComponent = (
  {
    toggleVariant,
    defaultTogglePosition = toggleVariant !== THREE_POSITION_TOGGLE
      ? POSITIONS.LEFT
      : POSITIONS.CENTER,
    togglePosition,
    displayRow,
    /* deprecated - deleted condition when the 'displayRow' prop is removed */
    labelPosition = displayRow === undefined ? LABEL_POSITION.LEFT : undefined,
    onChange,
    ...props
  }: IToggleWithLabel,
  ref: React.ForwardedRef<HTMLFieldSetElement> | undefined | null
): JSX.Element => {
  const [_togglePosition, setTogglePosition] = React.useState(defaultTogglePosition);

  const handleChange = (newPosition: POSITIONS) => {
    setTogglePosition(newPosition);
    onChange?.(newPosition);
  };

  return (
    <ToggleWithLabelControlled
      ref={ref}
      labelPosition={labelPosition}
      togglePosition={togglePosition ?? _togglePosition}
      toggleVariant={toggleVariant}
      onChange={handleChange}
      {...props}
    />
  );
};

/**
 * @deprecated This component has been deprecated and will be removed in the next MAJOR release. Will include all this on the Toggle component
 */
export const ToggleWithLabelUncontrolled = React.forwardRef(ToggleWithLabelUncontrolledComponent);

export { ToggleWithLabelUncontrolled as ToggleWithLabel };
