import type { ArrowStyles } from '../types/popover';

import { getPlacementDirection } from './placement.utils';

/**
 * Arrow border configuration map for each placement direction
 */
const ARROW_BORDER_CONFIG = {
  bottom: (border: string) => ({
    borderLeft: border,
    borderTop: border,
  }),
  left: (border: string) => ({
    borderRight: border,
    borderTop: border,
  }),
  right: (border: string) => ({
    borderBottom: border,
    borderLeft: border,
  }),
  top: (border: string) => ({
    borderBottom: border,
    borderRight: border,
  }),
} as const;

/**
 * Helper function to get arrow styles
 */
export const getArrowBorderStyles = (
  placement: string,
  arrowStyles?: ArrowStyles,
): React.CSSProperties => {
  if (!arrowStyles) {
    return {};
  }

  const baseStyles: React.CSSProperties = {
    '--arrow-size': `${arrowStyles.size}px`,
    backgroundColor: arrowStyles.backgroundColor,
    height: `${arrowStyles.size}px`,
    width: `${arrowStyles.size}px`,
  } as React.CSSProperties;

  // Add border styles if provided
  if (arrowStyles.border) {
    const direction = getPlacementDirection(placement);
    const borderFunction =
      ARROW_BORDER_CONFIG[direction as keyof typeof ARROW_BORDER_CONFIG];

    if (borderFunction) {
      Object.assign(baseStyles, borderFunction(arrowStyles.border));
    }
  }

  return baseStyles;
};
