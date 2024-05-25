import * as React from 'react';

import { ToggleThreePosition } from './components/toggleThreePosition';
import { ToggleTwoPosition } from './components/toggleTwoPositions';
import type { IToggleStandAlone } from './types';

const ToggleStandAloneComponent = (
  { ...props }: IToggleStandAlone,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  return !props.hasThreePositions ? (
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
