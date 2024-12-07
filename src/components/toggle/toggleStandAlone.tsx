import React from 'react';

import { ToggleThreePosition } from './components/threePositions/toggleThreePosition';
import { ToggleTwoPosition } from './components/twoPositions/toggleTwoPositions';
import type { IToggleStandAlone } from './types/toggle';

const ToggleStandAloneComponent = (
  { hasThreePositions, ...props }: IToggleStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return !hasThreePositions ? (
    <ToggleTwoPosition {...props} ref={ref} />
  ) : (
    <ToggleThreePosition {...props} ref={ref} />
  );
};

/**
 * @description
 * Toggle component is a component that can be used to switch between two states.
 * @param {React.PropsWithChildren<IToggleStandAlone>} props
 * @returns {JSX.Element}
 */
export const ToggleStandAlone = React.forwardRef(ToggleStandAloneComponent);
