import type { Middleware, Placement, Strategy } from '@floating-ui/dom';

import type { ArrowStyles } from '../../types/popover';

/**
 * Options for positioning middlewares
 *
 * Configuration interface for positioning middleware options that control
 * how the popover is positioned relative to its anchor element and viewport.
 *
 * @interface PositioningMiddlewareOptions
 * @property {[number, number]} [offsetDistance] - Optional offset distance of the popover from the anchor [main axis, cross axis] in pixels
 * @property {number} [edgePadding] - Optional padding for flip and shift middlewares to ensure popover stays within viewport bounds
 * @property {boolean} [hideWhenDetached] - Whether to hide the popover when the anchor element is not visible due to scrolling or being outside the viewport
 */
export interface PositioningMiddlewareOptions {
  offsetDistance?: [number, number];
  edgePadding?: number;
  hideWhenDetached?: boolean;
}

/**
 * Internal values used by the positioning system
 */
export interface PositioningValues {
  anchorElement?: HTMLElement | null;
  placement?: Placement;
  middlewareOptions: PositioningMiddlewareOptions;
  middlewares: Array<Middleware>;
  strategy: Strategy;
  onPositioned?: () => void;
  isVisible: boolean;
  ref?: React.RefObject<HTMLElement | null>;
  arrowStyles?: ArrowStyles;
}

/**
 * Position mapping for the arrow
 */
export const ArrowPositions = {
  bottom: 'top',
  left: 'right',
  right: 'left',
  top: 'bottom',
} as const;
