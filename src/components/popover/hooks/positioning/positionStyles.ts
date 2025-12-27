/**
 * Utility functions to manage popover position styles
 */
import type { Middleware, Strategy } from '@floating-ui/dom';

import type { BodyDirection } from '../../utils/placement.utils';

import { DEFAULT_PLACEMENT } from '../../types/animation';

/**
 * Generates CSS position styles based on positioning parameters
 *
 * POSITIONING STRATEGY:
 * - For real anchor elements: floating-ui handles everything (defaultStyle)
 * - For body anchor: manual positioning because floating-ui is designed
 *   for element-to-element relationships, not for absolute viewport positioning
 *
 * Why not use floating-ui for all positions?
 * - floating-ui excels when there's a real reference element
 * - For viewport positioning (center, edges), manual CSS is more direct and reliable
 * - Avoids the complexity of forcing floating-ui for use cases it wasn't designed for
 */
export const getPositionStyles = ({
  edgePadding = 0,
  isBodyAnchor = true,
  placement = DEFAULT_PLACEMENT,
  strategy,
  useFloatingUICoordinates = false,
  x = 0,
  y = 0,
}: {
  strategy: Strategy;
  placement?: BodyDirection;
  x?: number;
  y?: number;
  edgePadding?: number;
  isBodyAnchor?: boolean;
  useFloatingUICoordinates?: boolean;
}): React.CSSProperties => {
  // If not using body anchor, return floating-ui default styles
  if (!isBodyAnchor) {
    return {
      bottom: 'auto',
      boxSizing: 'border-box',
      left: `${x}px`,
      position: strategy,
      right: 'auto',
      top: `${y}px`,
      // Clean transform for non-body anchors
      transform: '',
      transformOrigin: '',
    } as React.CSSProperties;
  }

  // If explicitly told to use floating-ui coordinates for body anchor
  if (useFloatingUICoordinates) {
    return {
      bottom: 'auto',
      boxSizing: 'border-box',
      left: `${x}px`,
      position: 'fixed',
      right: 'auto',
      top: `${y}px`,
      transformOrigin: 'center bottom', // Keep appropriate transform origin
    } as React.CSSProperties;
  }

  // Map of styles for each body position type
  const bodyPositionStyles = {
    // Bottom positions (centered, left-aligned, right-aligned)
    bottom: {
      // Bottom edge positioning with horizontal centering
      bottom: `${edgePadding}px`, // Distance from bottom edge of viewport
      boxSizing: 'border-box',
      left: '50%', // Center horizontally
      position: 'fixed',
      right: 'auto',
      top: 'auto',
      transform: 'translateX(-50%)', // Only horizontal centering (no vertical like 'center')
      transformOrigin: 'center bottom', // Animation origin for bottom-positioned popovers
    } as React.CSSProperties,

    'bottom-end': {
      // Bottom-right aligned positioning
      bottom: `${edgePadding}px`,
      boxSizing: 'border-box',
      left: 'auto',
      position: 'fixed',
      right: `${edgePadding}px`, // Aligned to right edge with padding
      top: 'auto',
      transform: 'none',
      transformOrigin: 'right bottom',
    } as React.CSSProperties,

    'bottom-start': {
      // Bottom-left aligned positioning
      bottom: `${edgePadding}px`,
      boxSizing: 'border-box',
      left: `${edgePadding}px`, // Aligned to left edge with padding
      position: 'fixed',
      right: 'auto',
      top: 'auto',
      transform: 'none',
      transformOrigin: 'left bottom',
    } as React.CSSProperties,

    center: {
      bottom: 'auto',
      boxSizing: 'border-box',
      // Manual centering is required because floating-ui with body anchor doesn't handle
      // absolute viewport centering like a traditional modal/dialog would
      left: '50%', // Position at 50% of viewport width
      position: 'fixed', // Use fixed positioning relative to viewport
      right: 'auto',
      top: '50%', // Position at 50% of viewport height
      transform: 'translate(-50%, -50%)', // Offset by half of element's own dimensions to true center
      // CRITICAL: transformOrigin is essential for CSS animations in popover.styled.ts
      // Without this, scale/fade animations won't originate from the correct point
      transformOrigin: 'center center',
    } as React.CSSProperties,

    defaultStyle: {
      bottom: 'auto',
      boxSizing: 'border-box',
      // This is where floating-ui CAN be used effectively!
      // When anchor is a real DOM element (not body), floating-ui calculates optimal positioning
      left: `${x}px`, // x coordinate calculated by floating-ui
      position: strategy, // 'absolute' or 'fixed' strategy from floating-ui
      right: 'auto',
      top: `${y}px`, // y coordinate calculated by floating-ui
    } as React.CSSProperties,

    // Left positions (centered, top-aligned, bottom-aligned)
    left: {
      bottom: 'auto',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      // Left edge positioning with vertical centering
      left: `${edgePadding}px`, // Distance from left edge of viewport
      position: 'fixed',
      right: 'auto',
      top: '50%', // Center vertically
      transform: 'translateY(-50%)', // Only vertical centering
      transformOrigin: 'left center', // Animation origin for left-positioned popovers
    } as React.CSSProperties,

    'left-end': {
      bottom: `${edgePadding}px`, // Aligned to bottom edge with padding
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      // Left-bottom aligned positioning
      left: `${edgePadding}px`,
      position: 'fixed',
      right: 'auto',
      top: 'auto',
      transform: 'none',
      transformOrigin: 'left bottom',
    } as React.CSSProperties,

    'left-start': {
      bottom: 'auto',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      // Left-top aligned positioning
      left: `${edgePadding}px`,
      position: 'fixed',
      right: 'auto',
      top: `${edgePadding}px`, // Aligned to top edge with padding
      transform: 'none',
      transformOrigin: 'left top',
    } as React.CSSProperties,

    // Right positions (centered, top-aligned, bottom-aligned)
    right: {
      bottom: 'auto',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      left: 'auto',
      position: 'fixed', // Fixed to viewport, not relative to any element
      // Right edge positioning with vertical centering
      right: `${edgePadding}px`, // Distance from right edge of viewport
      top: '50%', // Center vertically
      transform: 'translateY(-50%)', // Only vertical centering
      transformOrigin: 'right center', // Animation origin for right-positioned popovers
    } as React.CSSProperties,

    'right-end': {
      bottom: `${edgePadding}px`, // Aligned to bottom edge with padding
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      left: 'auto',
      position: 'fixed',
      // Right-bottom aligned positioning
      right: `${edgePadding}px`,
      top: 'auto',
      transform: 'none',
      transformOrigin: 'right bottom',
    } as React.CSSProperties,

    'right-start': {
      bottom: 'auto',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      left: 'auto',
      position: 'fixed',
      // Right-top aligned positioning
      right: `${edgePadding}px`,
      top: `${edgePadding}px`, // Aligned to top edge with padding
      transform: 'none',
      transformOrigin: 'right top',
    } as React.CSSProperties,

    // Top positions (centered, left-aligned, right-aligned)
    top: {
      bottom: 'auto',
      boxSizing: 'border-box',
      left: '50%', // Center horizontally
      position: 'fixed',
      right: 'auto',
      // Top edge positioning with horizontal centering
      top: `${edgePadding}px`, // Distance from top edge of viewport
      transform: 'translateX(-50%)', // Only horizontal centering (no vertical like 'center')
      transformOrigin: 'center top', // Animation origin for top-positioned popovers
    } as React.CSSProperties,

    'top-end': {
      bottom: 'auto',
      boxSizing: 'border-box',
      left: 'auto',
      position: 'fixed',
      right: `${edgePadding}px`, // Aligned to right edge with padding
      // Top-right aligned positioning
      top: `${edgePadding}px`,
      transform: 'none',
      transformOrigin: 'right top',
    } as React.CSSProperties,

    'top-start': {
      bottom: 'auto',
      boxSizing: 'border-box',
      left: `${edgePadding}px`, // Aligned to left edge with padding
      position: 'fixed',
      right: 'auto',
      // Top-left aligned positioning
      top: `${edgePadding}px`,
      transform: 'none',
      transformOrigin: 'left top',
    } as React.CSSProperties,
  };

  return (
    bodyPositionStyles[placement as keyof typeof bodyPositionStyles] ||
    bodyPositionStyles.defaultStyle
  );
};

/*
 * NOTE ABOUT FLOATING-UI vs MANUAL POSITIONING:
 *
 * floating-ui IS PERFECT when:
 * ✅ You have a real anchor element (button, input, etc.)
 * ✅ You want relative positioning (tooltips, dropdowns, menus)
 * ✅ You need automatic collision detection
 * ✅ You want auto-placement based on available space
 *
 * MANUAL POSITIONING IS BETTER when:
 * ✅ Anchor is body (viewport positioning)
 * ✅ You need absolute positioning (modals, notifications)
 * ✅ Positioning is edge-based (right: 0, bottom: 0)
 * ✅ You want full control over transform-origin for animations
 *
 * In this component:
 * - defaultStyle → uses floating-ui (real anchor elements)
 * - center/left/right/bottom → manual positioning (body anchor)
 */

/**
 * Applies position styles to the popover element
 */
export const applyPositionStyles = ({
  edgePadding = 0,
  hasCustomMiddlewares = false,
  isBodyAnchor,
  middlewareStack = [],
  placement,
  ref,
  strategy,
  x = 0,
  y = 0,
}: {
  isBodyAnchor: boolean;
  x: number;
  y: number;
  strategy: Strategy;
  edgePadding: number;
  hasCustomMiddlewares?: boolean;
  middlewareStack?: Middleware[];
  ref?: React.RefObject<HTMLElement | null>;
  placement?: BodyDirection;
}): void => {
  if (!ref?.current) {
    return;
  }

  // First set data-placement for animation styles
  if (isBodyAnchor) {
    // For body anchor, preserve the exact placement (including -start, -end variants)
    // This is important for proper CSS positioning and animation transform origins
    ref.current.setAttribute(
      'data-kbt-placement',
      placement || DEFAULT_PLACEMENT,
    );
  } else {
    // For element anchor, preserve existing or use placement
    ref.current.setAttribute(
      'data-kbt-placement',
      ref.current.getAttribute('data-kbt-placement') || placement || 'bottom',
    );
  }

  if (isBodyAnchor) {
    // Check if we're using the auto-centering middleware
    const hasAutoCenteringMiddleware = middlewareStack.some(
      (middleware) => middleware.name === 'body-auto-centering',
    );

    // For body anchors with custom middlewares or auto-centering, use floating-ui coordinates
    const useFloatingUICoordinates =
      hasCustomMiddlewares || hasAutoCenteringMiddleware;
    const styles = getPositionStyles({
      edgePadding,
      placement,
      strategy,
      useFloatingUICoordinates,
      x,
      y,
    });
    Object.assign(ref.current.style, styles);
  } else {
    // For anchor elements that are not body
    const styles = getPositionStyles({
      edgePadding,
      isBodyAnchor: false,
      placement,
      strategy,
      x,
      y,
    });
    Object.assign(ref.current.style, styles);
  }
};
