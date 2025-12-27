import {
  type Middleware,
  type Placement,
  arrow,
  flip,
  hide,
  offset,
  shift,
} from '@floating-ui/dom';

import { getPlacementDirection } from '../../utils/placement.utils';

/**
    },
  };
};

/**
 * Creates middlewares for body anchor positioning
 */
const createBodyAnchorMiddlewares = (
  placement: Placement | undefined,
  edgePadding: number,
): Middleware[] => {
  const bodyDirection = getPlacementDirection(placement);
  const middlewares: Middleware[] = [];

  if (bodyDirection === 'center') {
    // For center positioning, use minimal middlewares to avoid conflicts with manual centering
    // Only use shift to ensure it stays within viewport bounds
    middlewares.push(
      shift({
        crossAxis: true,
        mainAxis: true,
        padding: edgePadding,
      }),
    );
  } else if (
    bodyDirection.startsWith('right') ||
    bodyDirection.startsWith('left')
  ) {
    // Horizontal positioning (left, left-start, left-end, right, right-start, right-end)
    middlewares.push(offset({ alignmentAxis: 0, mainAxis: 0 }));
  } else if (
    bodyDirection.startsWith('bottom') ||
    bodyDirection.startsWith('top')
  ) {
    // Vertical positioning (top, top-start, top-end, bottom, bottom-start, bottom-end)
    middlewares.push(offset({ mainAxis: 0 }));
  }

  return middlewares;
};

/**
 * Creates middlewares for element anchor positioning
 */
const createElementAnchorMiddlewares = (
  mainAxisOffset: number,
  offsetDistance: [number, number] | undefined,
  edgePadding: number,
): Middleware[] => {
  const middlewares: Middleware[] = [];

  // Standard element as anchor - use offset + flip
  middlewares.push(
    offset({
      crossAxis: offsetDistance?.[1] || 0,
      mainAxis: mainAxisOffset,
    }),
  );

  // Add flip middleware to automatically change position when necessary
  middlewares.push(
    flip({
      // Provide fallback positions for better positioning
      fallbackAxisSideDirection: 'start',
      padding: edgePadding,
    }),
  );

  // Add shift to keep element in viewport
  middlewares.push(
    shift({
      padding: edgePadding,
    }),
  );

  return middlewares;
};

/**
 * Adds conditional middlewares (hide and arrow) to the stack
 */
const addConditionalMiddlewares = ({
  arrowElement,
  edgePadding,
  hideWhenDetached,
  isBodyAnchor,
  middlewareStack,
}: {
  middlewareStack: Middleware[];
  isBodyAnchor: boolean;
  hideWhenDetached?: boolean;
  arrowElement: HTMLElement | null | undefined;
  edgePadding: number;
}): void => {
  // Add hide middleware to detect when anchor is not visible (only for non-body anchors)
  if (!isBodyAnchor && hideWhenDetached) {
    middlewareStack.push(hide());
  }

  // Add arrow middleware if needed
  if (arrowElement) {
    middlewareStack.push(
      arrow({
        element: arrowElement,
        padding: edgePadding,
      }),
    );
  }
};

/**
 * Creates a middleware stack based on positioning requirements
 * This centralizes all middleware configuration logic
 *
 * @param isBodyAnchor If the body is being used as the anchor element
 * @param placement The floating-ui placement (converted to body direction when body is anchor)
 * @param edgePadding Padding to maintain from viewport edges
 * @param mainAxisOffset Offset on the main axis
 * @param offsetDistance Optional specific offset distances (only applied for non-body anchors)
 * @param customMiddlewares Additional middlewares to include
 * @param arrowElement Optional reference to the arrow element
 * @param hideWhenDetached Whether to hide when anchor is not visible
 * @returns Array of middlewares configured for the specific positioning scenario
 */
export const getMiddlewareStack = ({
  arrowElement,
  customMiddlewares,
  edgePadding,
  hideWhenDetached,
  isBodyAnchor,
  mainAxisOffset,
  offsetDistance,
  placement,
}: {
  isBodyAnchor: boolean;
  edgePadding: number;
  mainAxisOffset: number;
  placement?: Placement;
  offsetDistance?: [number, number];
  customMiddlewares?: Array<Middleware>;
  arrowElement?: HTMLElement | null;
  hideWhenDetached?: boolean;
}): Middleware[] => {
  let middlewareStack: Middleware[] = [];

  // If custom middlewares are provided, use them instead of defaults
  if (customMiddlewares?.length) {
    middlewareStack = [...customMiddlewares];
  } else {
    // Add positioning middleware based on anchor type
    if (isBodyAnchor) {
      middlewareStack = createBodyAnchorMiddlewares(placement, edgePadding);
    } else {
      middlewareStack = createElementAnchorMiddlewares(
        mainAxisOffset,
        offsetDistance,
        edgePadding,
      );
    }
  }

  // Add conditional middlewares
  addConditionalMiddlewares({
    arrowElement,
    edgePadding,
    hideWhenDetached,
    isBodyAnchor,
    middlewareStack,
  });

  return middlewareStack;
};

/**
 * Calculates the main axis offset based on preferences and arrow size
 */
export const calculateMainAxisOffset = ({
  arrowSize,
  hasArrow,
  offsetDistance,
}: {
  offsetDistance: [number, number] | undefined;
  hasArrow: boolean;
  arrowSize: number;
}): number => {
  return typeof offsetDistance?.[0] === 'number'
    ? offsetDistance[0]
    : hasArrow
      ? arrowSize
      : 0;
};
