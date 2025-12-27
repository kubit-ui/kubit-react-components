import {
  type Middleware,
  type MiddlewareData,
  type Placement,
  type Strategy,
  autoUpdate,
  computePosition as computePositionFloating,
} from '@floating-ui/dom';
/**
 * Specialized hook to handle everything related to popover positioning,
 * including middlewares, position styles and arrows.
 */
import { type RefObject, useCallback, useEffect, useRef } from 'react';

import type { BodyDirection } from '../utils/placement.utils';
import type { PositioningValues } from './positioning/types';
import type { IUsePopoverPositioning } from './types/usePopoverPositioning';

import { positionArrow } from './positioning/arrowPositionStyles';
import {
  calculateMainAxisOffset,
  getMiddlewareStack,
} from './positioning/middlewareUtils';
import { determinePositioningConfig } from './positioning/positionCalculation';
import { applyPositionStyles } from './positioning/positionStyles';

/**
 * Hook that handles popover positioning and its related components
 */
export const usePopoverPositioning: IUsePopoverPositioning = ({
  anchorElement,
  arrowStyles,
  isVisible,
  middlewareOptions = {},
  middlewares = [],
  placement,
  ref,
  strategy,
}) => {
  // Default values for middleware options
  const {
    edgePadding = 0,
    hideWhenDetached,
    offsetDistance,
  } = middlewareOptions;

  // Persistent references
  const bodyRef = useRef<HTMLElement>(document.body);
  const arrowRef = useRef<HTMLElement | null>(null);
  const currentValues = useRef<PositioningValues>({
    anchorElement,
    arrowStyles,
    isVisible,
    middlewareOptions: {
      edgePadding,
      hideWhenDetached,
      offsetDistance,
    },
    middlewares,
    placement,
    ref,
    strategy,
  });
  // Update ref with latest props to avoid stale closures
  useEffect(() => {
    currentValues.current = {
      anchorElement,
      arrowStyles,
      isVisible,
      middlewareOptions: {
        edgePadding,
        hideWhenDetached,
        offsetDistance,
      },
      middlewares,
      placement,
      ref,
      strategy,
    };
  }, [
    anchorElement,
    placement,
    offsetDistance,
    edgePadding,
    hideWhenDetached,
    middlewares,
    strategy,
    isVisible,
    ref,
    arrowStyles,
  ]);

  // Find arrow element immediately when needed and also configure the effect
  const findArrowElement = useCallback(() => {
    if (ref?.current && isVisible && arrowStyles) {
      arrowRef.current = ref.current.querySelector(
        '[data-kbt-id="popover-arrow"]',
      );
      return arrowRef.current;
    }
    return null;
  }, [ref, isVisible, arrowStyles]);

  // Configure an effect to update arrowRef.current when component mounts or updates
  useEffect(() => {
    // Try to find the arrow element multiple times to ensure we find it
    // even on first render
    const checkArrow = () => {
      const arrow = findArrowElement();
      if (!arrow && isVisible && arrowStyles && ref?.current) {
        // If we don't find the arrow but it should exist, try again on next frame
        requestAnimationFrame(checkArrow);
      }
    };

    checkArrow();
  }, [findArrowElement, isVisible, arrowStyles]);

  // Helper function to validate positioning elements
  const validatePositioningElements = useCallback(
    (anchorEl: HTMLElement, currentRef: RefObject<HTMLElement | null>) => {
      return (
        anchorEl &&
        currentRef?.current &&
        document.body.contains(currentRef.current)
      );
    },
    [],
  );

  // Helper function to apply position and arrow styles
  const applyPositionAndArrowStyles = useCallback(
    (
      currentRef: RefObject<HTMLElement | null>,
      isBodyAnchor: boolean,
      currentPlacement: BodyDirection | undefined,
      x: number,
      y: number,
      currentStrategy: Strategy,
      currentEdgePadding: number,
      arrowElement: Element | null,
      middlewareData: MiddlewareData,
      computedPlacement: Placement,
      currentOffsetDistance: [number, number] | undefined,
      arrowSize: number,
      currentOnPositioned: (() => void) | undefined,
      customMiddlewares: Middleware[] = [],
      middlewareStack: Middleware[] = [],
    ) => {
      if (!currentRef?.current) {
        return;
      }

      // Apply position styles first (this sets the correct data-kbt-placement for body anchor)
      applyPositionStyles({
        edgePadding: currentEdgePadding,
        hasCustomMiddlewares: customMiddlewares.length > 0,
        isBodyAnchor,
        middlewareStack,
        placement: currentPlacement,
        ref: currentRef,
        strategy: currentStrategy,
        x,
        y,
      });

      // For non-body anchors, update data-placement attribute for animation styles
      // For body anchors, applyPositionStyles already set the correct data-kbt-placement
      if (!isBodyAnchor) {
        currentRef.current.setAttribute(
          'data-kbt-placement',
          computedPlacement,
        );
      }

      // Position arrow if needed
      positionArrow(
        !!arrowStyles,
        arrowElement as HTMLElement | null,
        middlewareData,
        computedPlacement,
        currentOffsetDistance,
        arrowSize,
      );

      // Invoke callback if provided
      currentOnPositioned?.();
    },
    [arrowStyles],
  );

  // Helper to prepare positioning data
  const preparePositioningData = useCallback(
    (
      currentOffsetDistance: [number, number] | undefined,
      arrowSize: number,
      isBodyAnchor: boolean,
      currentEdgePadding: number,
      currentPlacement: Placement | undefined,
      currentMiddlewares: Middleware[],
      currentMiddlewareOptions: { hideWhenDetached?: boolean },
    ) => {
      const mainAxisOffset = calculateMainAxisOffset({
        arrowSize,
        hasArrow: !!arrowStyles,
        offsetDistance: currentOffsetDistance,
      });
      const arrowElement = arrowRef.current;
      const middlewareStack = getMiddlewareStack({
        arrowElement,
        customMiddlewares: currentMiddlewares,
        edgePadding: currentEdgePadding,
        hideWhenDetached: currentMiddlewareOptions?.hideWhenDetached,
        isBodyAnchor,
        mainAxisOffset,
        offsetDistance: currentOffsetDistance,
        placement: currentPlacement,
      });
      return { arrowElement, middlewareStack };
    },
    [arrowStyles],
  );

  // Helper to handle visibility and positioning
  const handleVisibilityAndPositioning = useCallback(
    (
      currentRef: RefObject<HTMLElement | null>,
      middlewareData: MiddlewareData,
      isBodyAnchor: boolean,
      currentPlacement: BodyDirection | undefined,
      x: number,
      y: number,
      currentStrategy: Strategy,
      currentEdgePadding: number,
      arrowElement: Element | null,
      computedPlacement: Placement,
      currentOffsetDistance: [number, number] | undefined,
      arrowSize: number,
      currentOnPositioned: (() => void) | undefined,
      customMiddlewares: Middleware[] = [],
      middlewareStack: Middleware[] = [],
    ) => {
      const shouldHide =
        middlewareData.hide?.referenceHidden || middlewareData.hide?.escaped;

      // Update visibility styles
      if (currentRef.current) {
        currentRef.current.style.opacity = shouldHide ? '0' : '';
        currentRef.current.style.pointerEvents = shouldHide ? 'none' : '';
      }

      // Apply positioning styles only if popover should be visible
      if (!shouldHide) {
        applyPositionAndArrowStyles(
          currentRef,
          isBodyAnchor,
          currentPlacement,
          x,
          y,
          currentStrategy,
          currentEdgePadding,
          arrowElement,
          middlewareData,
          computedPlacement,
          currentOffsetDistance,
          arrowSize,
          currentOnPositioned,
          customMiddlewares,
          middlewareStack,
        );
      }
    },
    [applyPositionAndArrowStyles],
  );

  // This function calculates the position where the popover should be displayed
  const calculatePosition = useCallback(async () => {
    // Get the latest ref values to avoid stale closures
    const {
      anchorElement: currentAnchorElement,
      arrowStyles: currentArrowStyles,
      middlewareOptions: currentMiddlewareOptions,
      middlewares: currentMiddlewares,
      onPositioned: currentOnPositioned,
      placement: currentPlacement,
      ref: currentRef,
      strategy: currentStrategy,
    } = currentValues.current;

    // Extract middleware options
    const currentOffsetDistance = currentMiddlewareOptions?.offsetDistance;
    const currentEdgePadding = currentMiddlewareOptions?.edgePadding ?? 8;
    const arrowSize = currentArrowStyles?.size || 0;
    const anchorEl = currentAnchorElement || bodyRef.current;

    // Early exit for invalid conditions
    if (
      !currentRef?.current ||
      !validatePositioningElements(anchorEl, currentRef)
    ) {
      return;
    }

    const isBodyAnchor = anchorEl === document.body;

    // Prepare positioning data
    const { arrowElement, middlewareStack } = preparePositioningData(
      currentOffsetDistance,
      arrowSize,
      isBodyAnchor,
      currentEdgePadding,
      currentPlacement,
      currentMiddlewares,
      currentMiddlewareOptions || {},
    );

    // Get positioning configuration
    const { actualPlacement, autoStrategy } = determinePositioningConfig(
      isBodyAnchor,
      currentStrategy,
      currentPlacement,
    );

    // Convert 'center' to a valid floating-ui placement for computation
    const floatingUIPlacement: Placement =
      actualPlacement === 'center' ? 'top' : (actualPlacement as Placement);

    // Compute position using floating-ui
    const position = await computePositionFloating(
      anchorEl,
      currentRef.current,
      {
        middleware: middlewareStack,
        placement: floatingUIPlacement,
        strategy: autoStrategy,
      },
    );

    const { middlewareData, placement: computedPlacement, x, y } = position;

    // Handle visibility and positioning
    handleVisibilityAndPositioning(
      currentRef,
      middlewareData,
      isBodyAnchor,
      actualPlacement,
      x,
      y,
      currentStrategy,
      currentEdgePadding,
      arrowElement,
      computedPlacement,
      currentOffsetDistance,
      arrowSize,
      currentOnPositioned,
      currentMiddlewares,
      middlewareStack,
    );
  }, []);

  // Reactive positioning configuration using floating-ui's autoUpdate
  useEffect(() => {
    // If not isVisible or we don't have reference and not marked as ready, exit
    if (!isVisible || !ref?.current) {
      return;
    }

    // Force reflow to ensure any pending styles are applied
    void ref.current.offsetHeight;

    // Apply positioning
    calculatePosition();

    const anchorEl = anchorElement ?? bodyRef.current;

    // Variable to store the cleanup function
    let cleanupFn: () => void = () => {
      /* Empty function as fallback */
    };

    cleanupFn = autoUpdate(anchorEl, ref.current, calculatePosition, {
      ancestorResize: true,
      ancestorScroll: true,
      animationFrame: false,
      elementResize: true,
    });

    // eslint-disable-next-line consistent-return
    return () => {
      cleanupFn();
    };
  }, [isVisible, anchorElement, calculatePosition]);
};
