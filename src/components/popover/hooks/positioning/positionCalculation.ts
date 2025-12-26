/**
 * Logic to calculate popover positions
 */
import type { Strategy } from '@floating-ui/dom';

import type { BodyDirection } from '../../utils/placement.utils';

/**
 * Determines the correct positioning configuration based on the anchor element
 */
export const determinePositioningConfig = (
  isBodyAnchor: boolean,
  strategy: Strategy,
  placement?: BodyDirection,
): { actualPlacement: BodyDirection; autoStrategy: Strategy } => {
  const autoPlacement: BodyDirection = 'top';

  if (isBodyAnchor) {
    const autoStrategy: Strategy = 'fixed';

    // For body anchor, preserve the exact placement (including -start, -end variants)
    // This is important for proper CSS positioning and animation transform origins
    // When placement is undefined, it represents 'center' positioning
    if (!placement) {
      const actualPlacement: BodyDirection = 'center';
      return { actualPlacement, autoStrategy };
    }

    if (placement === 'center') {
      const actualPlacement = placement;
      return { actualPlacement, autoStrategy };
    }

    const actualPlacement = placement;
    return { actualPlacement, autoStrategy };
  }

  return {
    actualPlacement: placement || autoPlacement,
    autoStrategy: strategy,
  };
};
