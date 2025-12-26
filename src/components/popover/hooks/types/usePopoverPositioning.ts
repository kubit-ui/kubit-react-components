import type { Middleware, Placement, Strategy } from '@floating-ui/dom';

import type { ArrowStyles } from '../../types/popover';
import type { PositioningMiddlewareOptions } from '../positioning/types';

/**
 * Props for the popover positioning hook
 *
 * Configuration interface for usePopoverPositioning hook that handles all positioning logic,
 * middleware configuration, and DOM element management for popover components.
 *
 * @property ref - Reference to the popover element
 * @property placement - Position relative to anchor element, defaults to 'center' for body anchor or 'top' for element anchor
 * @property anchorElement - Reference to the anchor element (body if none provided)
 * @property open - Whether the popover is open or not
 * @property middlewareOptions - Options for built-in middlewares (offset, flip, shift)
 * @property middlewares - Optional additional middleware to extend positioning behavior
 * @property strategy - Positioning strategy ('fixed' | 'absolute'), main positioning property
 * @property observeResize - Optional flag to enable content resize detection
 * @property onPositioned - Optional callback when positioning is completed
 * @property dimensions - Control popover dimensions (width and height)
 * @property arrowStyles - Styles for the arrow element
 * @property isPopoverReady - Boolean indicating when popover element is ready in DOM, allows position updates even when ref.current is initially null
 */
interface IUsePopoverPositioningParams {
  ref: React.RefObject<HTMLElement | null>;
  placement?: Placement;
  anchorElement?: HTMLElement | null;
  isVisible: boolean;
  middlewareOptions?: PositioningMiddlewareOptions;
  middlewares?: Array<Middleware>;
  strategy: Strategy;
  arrowStyles?: ArrowStyles;
}

export type IUsePopoverPositioning = (
  params: IUsePopoverPositioningParams,
) => void;
