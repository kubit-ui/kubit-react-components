import type { Middleware, Strategy } from '@floating-ui/dom';

import type { ArrowStyles } from '../../types/popover';
import type { BodyDirection } from '../../utils/placement.utils';

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
 * @property {boolean} [enableFlip] - Whether to enable automatic repositioning (flip) when there isn't enough space. Default: true
 */
export interface PositioningMiddlewareOptions {
  offsetDistance?: [number, number];
  edgePadding?: number;
  hideWhenDetached?: boolean;
  enableFlip?: boolean;
}

/**
 * Internal values used by the positioning system
 */
export interface PositioningValues {
  anchorElement?: HTMLElement | null;
  placement?: BodyDirection;
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
