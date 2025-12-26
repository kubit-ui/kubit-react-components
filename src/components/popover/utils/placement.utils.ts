import type { Placement } from '@floating-ui/dom';

import { DEFAULT_PLACEMENT, VALID_PLACEMENTS } from '../types/animation';
import type { AnimationDirection } from './animation.utils';

/**
 * Valid directions when body is used as anchor element.
 * These values match floating-ui Placement values plus 'center' for viewport centering.
 */
export type BodyDirection = Placement | 'center';

/**
 * Helper function to determine placement direction from placement string
 * Maps placement strings to animation generator keys
 *
 * @param placement - The placement string (e.g., 'top', 'bottom-start', etc.)
 * @returns The corresponding animation direction key
 */
export const getPlacementDirection = (
  placement?: string,
): 'top' | 'bottom' | 'left' | 'right' | 'center' => {
  if (!placement) {
    return DEFAULT_PLACEMENT;
  }
  if (placement.startsWith('top')) {
    return 'top';
  }
  if (placement.startsWith('bottom')) {
    return 'bottom';
  }
  if (placement.startsWith('left')) {
    return 'left';
  }
  if (placement.startsWith('right')) {
    return 'right';
  }
  return DEFAULT_PLACEMENT;
};

/**
 * Get available animation directions for a given placement
 *
 * @param placement - The placement string (e.g., 'top', 'bottom-start', etc.)
 * @returns Array of available animation directions for the placement
 */
export const getAvailableDirections = (
  placement: string,
): AnimationDirection[] => {
  const baseDirections: AnimationDirection[] = ['fade'];

  if (placement.startsWith('top') || placement.startsWith('bottom')) {
    return [...baseDirections, 'up', 'down'];
  }

  if (placement.startsWith('left') || placement.startsWith('right')) {
    return [...baseDirections, 'left', 'right'];
  }

  return [...baseDirections, 'up', 'down', 'left', 'right'];
};

/**
 * Normalize a placement to a valid placement value for body positioning
 *
 * @param placement - The placement to normalize
 * @returns A valid placement or 'center' as fallback
 */
export const normalizeToValidPlacement = (
  placement?: Placement | string,
): BodyDirection => {
  if (!placement) {
    return DEFAULT_PLACEMENT;
  }

  // If it's a valid placement, return it as-is
  if (
    VALID_PLACEMENTS.includes(placement as (typeof VALID_PLACEMENTS)[number])
  ) {
    return placement as BodyDirection;
  }

  return getPlacementDirection(placement);
};
