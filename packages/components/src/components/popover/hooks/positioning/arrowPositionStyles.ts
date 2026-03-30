/**
 * Funciones utilitarias para gestionar los estilos de la flecha del popover
 */
import type { Placement } from '@floating-ui/dom';

import { ArrowPositions } from './types';

/**
 * Updates the arrow styles
 *
 * @param arrowElement Reference to the arrow DOM element
 * @param placement Position calculated from floating-ui
 * @param arrowX X coordinate to position the arrow
 * @param arrowY Y coordinate to position the arrow
 * @param offset The distance of the arrow from the popover edge
 */
export const updateArrowStyles = ({
  arrowElement,
  arrowX,
  arrowY,
  offset = '0px',
  placement,
}: {
  placement: Placement;
  arrowElement?: HTMLElement;
  arrowX?: number;
  arrowY?: number;
  offset?: string;
}): void => {
  if (!arrowElement) {
    return;
  }

  // Set data-kbt-placement attribute for CSS styles
  arrowElement.setAttribute('data-kbt-placement', placement);

  // Clear previous positioning styles
  arrowElement.style.top = '';
  arrowElement.style.right = '';
  arrowElement.style.bottom = '';
  arrowElement.style.left = '';

  // Extract base position (top, right, bottom, left)
  const basePlacement = placement.split('-')[0] as keyof typeof ArrowPositions;

  // Get the side where the arrow should appear (opposite to position)
  const staticSide = ArrowPositions[basePlacement];

  // Set position on the static side
  arrowElement.style[staticSide] = offset;

  // Determine if we're dealing with vertical or horizontal positioning
  const isVertical = basePlacement === 'top' || basePlacement === 'bottom';

  // Position the arrow along the dynamic axis
  if (isVertical) {
    // For top/bottom positions, we need to adjust horizontal position
    const hasX = arrowX !== null && arrowX !== undefined;

    // Apply X position if available
    if (hasX) {
      arrowElement.style.left = `${arrowX}px`;
      arrowElement.style.transform = 'rotate(45deg)';
    } else {
      // If no X coordinate, center the arrow
      arrowElement.style.left = '50%';
      arrowElement.style.transform = 'translateX(-50%) rotate(45deg)';
    }
  } else {
    // For left/right positions, we need to adjust vertical position
    const hasY = arrowY !== null && arrowY !== undefined;

    // Apply Y position if available
    if (hasY) {
      arrowElement.style.top = `${arrowY}px`;
      arrowElement.style.transform = 'rotate(45deg)';
    } else {
      // If no Y coordinate, center the arrow
      arrowElement.style.top = '50%';
      // Ensure translateY is applied before rotate to maintain correct positioning
      arrowElement.style.transform = 'translateY(-50%) rotate(45deg)';
    }
  }
};

/**
 * Calculates and applies arrow position styles
 */
export const positionArrow = (
  hasArrow: boolean,
  arrowElement: HTMLElement | null,
  middlewareData: {
    arrow?: { x?: number; y?: number };
    [key: string]: unknown;
  },
  computedPlacement: Placement,
  offsetDistance: [number, number] | undefined,
  arrowSize: number,
  arrowPadding?: number,
): void => {
  if (!hasArrow || !middlewareData.arrow || !arrowElement) {
    return;
  }

  const { x: arrowX, y: arrowY } = middlewareData.arrow;

  // Calculate arrow offset
  let arrowOffset = `-${Math.floor(arrowSize / 2)}px`;

  if (arrowPadding !== undefined) {
    // arrowPadding controls arrow offset explicitly (e.g., for HoverBridgeContainer padding)
    arrowOffset = `${arrowPadding - Math.floor(arrowSize / 2)}px`;
  } else if (offsetDistance && offsetDistance[0] !== undefined) {
    arrowOffset = `${-Math.abs(offsetDistance[0] / 4)}px`;
  }

  // Update arrow styles
  updateArrowStyles({
    arrowElement,
    arrowX,
    arrowY,
    offset: arrowOffset,
    placement: computedPlacement,
  });
};
