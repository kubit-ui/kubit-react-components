import type {
  Middleware as FloatingMiddleware,
  Placement,
  Strategy,
} from '@floating-ui/dom';
import type { AriaAttributes } from 'react';

import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type PopoverCssClasses = ComponentSelected<
  ComponentsTypesComponents['POPOVER']
>;

/**
 * Options for middleware configuration in the popover
 */
export interface MiddlewareOptions {
  offsetDistance?: [number, number];
  edgePadding?: number;
  hideWhenDetached?: boolean;
}

export type PopoverComponent = 'div' | 'dialog' | 'span';

/**
 * Control styling of the arrow in the popover (measures in pixels)
 */
export interface ArrowStyles {
  size: number;
  backgroundColor: string;
  border?: string;
}

export type PopoverAriaAttributes = Pick<
  AriaAttributes,
  'aria-label' | 'aria-modal' | 'aria-description' | 'aria-labelledby'
>;

/**
 * Stand-alone popover interface for internal use
 *
 * Base interface that includes all essential properties for popover rendering and styling.
 * Used internally by the popover components for consistent prop handling.
 *
 * The popover container automatically adapts to its content size. Width and height constraints
 * should be applied directly to the children components rather than through popover props.
 *
 * @property component - HTML element type for the popover container ('div' | 'dialog' | 'span')
 * @property placement - Position of the popover relative to its anchor element
 * @property role - ARIA role attribute for accessibility
 * @property children - React content to render inside the popover (controls its own sizing and focus behavior)
 * @property zIndex - CSS z-index for layering control
 * @property id - Unique identifier for the popover element
 * @property overlay - Additional overlay content to render
 * @property disableAnimations - Disables default entrance/exit animations. Custom animations via additionalClasses still work.
 * @property isClosing - Internal state flag indicating the popover is closing
 * @property isVisible - Internal state flag indicating the popover visibility
 * @property arrowStyles - Styling configuration for the directional arrow
 * @property middlewareOptions - Configuration for floating-ui middleware (offset, padding)
 * @property popoverContainerRef - Ref object to access the popover container element
 */
export interface IPopoverStandAlone
  extends DataAttributes, PopoverAriaAttributes {
  cssClasses?: PopoverCssClasses;
  component?: PopoverComponent;
  placement?: Placement;
  role?: string;
  children: React.ReactNode;
  zIndex?: string | number;
  id?: string;
  overlay?: React.ReactNode;
  disableAnimations?: boolean;
  animationExitDuration?: number | string;
  isClosing?: boolean;
  isVisible?: boolean;
  arrowStyles?: ArrowStyles;
  anchorElement?: boolean;
  strategy?: Strategy;
  middlewareOptions?: MiddlewareOptions;
  popoverContainerRef?: React.ForwardedRef<HTMLElement>;
}

/**
 * Controlled popover interface for external state management
 *
 * Main interface for Popover component that extends IPopoverStandAlone with additional
 * control properties for external state management, positioning, focus handling, and user interactions.
 *
 * SIZE CONTROL: The popover container automatically adapts to its content size. Apply width, height,
 * maxWidth, minWidth, and other sizing constraints directly to your children components for proper
 * size control. The popover will expand to accommodate the content up to available viewport space.
 *
 * @property middlewares - Array of custom floating-ui middleware functions
 * @property strategy - Positioning strategy ('absolute' | 'fixed')
 * @property preventScrollOnCloseFocus - Prevents scrolling when focus returns after close
 * @property preventCloseOnClickElements - Array of elements that should not trigger popover close when clicked
 * @property disableRestoreFocusAfterClose - Disables automatic focus restoration after popover closes
 * @property disableAutoFocusFirstDescendant - Disables automatic focus on first focusable element when opening
 * @property disableAutoFocusFirstDescendantAfterClose - Disables automatic focus on first descendant after close
 * @property disableClickOverlayClose - Disables closing popover when clicking on overlay/backdrop
 * @property disablePressEscapeClose - Disables closing popover with Escape key
 * @property disableScrollBackground - Disables background scrolling when popover is open
 * @property disableTrapFocus - Disables focus trapping within the popover
 * @property anchorElement - HTML element to anchor the popover to (null for body-anchored)
 * @property onClose - Callback function called when popover should close
 * @property animationConfig - Custom animation configuration for entrance/exit effects
 * @property open - Controls the visibility state of the popover
 */
export interface IPopover extends Omit<
  IPopoverStandAlone,
  'isClosing' | 'isVisible' | 'anchorElement'
> {
  additionalClasses?: PopoverCssClasses;
  middlewares?: Array<FloatingMiddleware>;
  preventScrollOnCloseFocus?: boolean;
  preventCloseOnClickElements?: (HTMLElement | null | undefined)[];
  disableRestoreFocusAfterClose?: boolean;
  disableAutoFocusFirstDescendant?: boolean;
  disableAutoFocusFirstDescendantAfterClose?: boolean;
  disableClickOverlayClose?: boolean;
  disableEscapeClose?: boolean;
  disableScrollBackground?: boolean;
  disableTrapFocus?: boolean;
  anchorElement?: HTMLElement | null;
  open?: boolean;
  onClose?: () => void;
}
