import * as React from 'react';

import { POSITIONS } from '@/types';

import { ToggleControlled } from './toggleControlled';
import { IToggleUnControlled } from './types';

const ToggleUnControlledComponent = <V extends string | undefined>(
  {
    variant,
    hasThreePositions = false,
    defaultTogglePosition = hasThreePositions ? POSITIONS.CENTER : POSITIONS.LEFT,
    togglePosition,
    onChange,
    ...props
  }: IToggleUnControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const [_togglePosition, setTogglePosition] = React.useState(defaultTogglePosition);

  const handleChange = (newPosition: POSITIONS) => {
    setTogglePosition(newPosition);
    onChange?.(newPosition);
  };

  return (
    <ToggleControlled
      {...props}
      ref={ref}
      hasThreePositions={hasThreePositions}
      togglePosition={togglePosition ?? _togglePosition}
      variant={variant}
      onChange={handleChange}
    />
  );
};

const ToggleUnControlled = React.forwardRef(ToggleUnControlledComponent) as <V extends string>(
  props: React.PropsWithChildren<IToggleUnControlled<V>> & {
    ref?: React.ForwardedRef<HTMLInputElement> | undefined | null;
  }
) => ReturnType<typeof ToggleUnControlledComponent>;

/**
 * @description
 * Toggle component is a component that can be used to switch between two states.
 * It can be used to create a switch or a checkbox.
 * @param {React.PropsWithChildren<IToggleUnControlled<V>>} props
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <ToggleUnControlled variant="yes_no" />
 */
export { ToggleUnControlled };
