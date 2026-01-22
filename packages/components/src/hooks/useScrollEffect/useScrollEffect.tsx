import { useCallback, useEffect, useRef } from 'react';

import type {
  CustomHookProps,
  CustomHookReturnValue,
} from './types/useScrollEffect';

import { scrollPercentage } from './utils/scrollPercentage';

const MAX_PERCENTAGE = 100;
const proportionLimit = 1.25;

/**
 * A custom React hook that applies dynamic scroll-based effects to elements.
 *
 * Provides optimized scroll handling with requestAnimationFrame for smooth animations.
 * Supports dynamic resizing based on scroll percentage and shadow effects with configurable visibility thresholds.
 * Automatically handles cleanup of event listeners and animation frames to prevent memory leaks.
 *
 * @param props - Configuration options for scroll effects
 * @param props.conditional - Enable or disable scroll effects (defaults to true)
 * @param props.scrollCallback - Optional callback triggered on scroll events
 * @param props.shadowStyles - CSS class names to apply when shadow should be visible (space-separated)
 * @param props.shadowVisible - Scroll percentage threshold (0-100) at which shadow becomes visible (defaults to 1)
 *
 * @returns Object containing ref callbacks for the affected elements
 * @returns return.scrollableRef - Ref callback for the scrollable container element
 * @returns return.resizeRef - Ref callback for the element to dynamically resize based on scroll
 * @returns return.shadowRef - Ref callback for the element where shadow styles are applied
 *
 * @remarks
 * **Performance Optimization:**
 * - Uses `requestAnimationFrame` to throttle scroll event handling
 * - Prevents layout thrashing by batching style updates
 * - Only one animation frame is queued at a time
 * - Automatically cancels pending frames on cleanup
 *
 * **Resize Effect:**
 * - Captures initial dimensions on mount
 * - Calculates resize proportionally to scroll percentage
 * - Applies both width and height transformations
 * - Uses CSS calc() for smooth transitions
 * - Proportion limit of 1.25 for maximum resize factor
 *
 * **Shadow Effect:**
 * - Toggles CSS classes based on scroll threshold
 * - Supports multiple class names (space-separated)
 * - Only applied when scroll percentage exceeds `shadowVisible`
 * - Automatically removes classes when scrolling up
 *
 * **Memory Management:**
 * - Proper cleanup of all event listeners
 * - Cancels pending animation frames
 * - Nullifies all refs on unmount
 * - No memory leaks from retained closures
 *
 * @example
 * **Basic header that shrinks on scroll:**
 * ```tsx
 * const { resizeRef, scrollableRef, shadowRef } = useScrollEffect({
 *   conditional: true,
 *   shadowStyles: 'shadow-visible',
 *   shadowVisible: 10,
 * });
 *
 * <div ref={scrollableRef} className="content">
 *   <header ref={resizeRef} className="header">
 *     Dynamic Header
 *   </header>
 *   <main>Content...</main>
 *   <div ref={shadowRef} className="shadow" />
 * </div>
 * ```
 *
 * @example
 * **With scroll callback:**
 * ```tsx
 * const { scrollableRef } = useScrollEffect({
 *   scrollCallback: (e) => {
 *     console.log('Scrolled to:', e.target.scrollTop);
 *   },
 *   shadowStyles: 'elevation-2',
 *   shadowVisible: 5,
 * });
 * ```
 *
 * @example
 * **Conditional effects:**
 * ```tsx
 * const { scrollableRef } = useScrollEffect({
 *   conditional: !isMobile, // Disable on mobile
 *   shadowStyles: 'has-shadow',
 * });
 * ```
 *
 * @see {@link scrollPercentage} - Utility function for calculating scroll percentage
 */
export const useScrollEffect = ({
  conditional = true,
  scrollCallback,
  shadowStyles,
  shadowVisible = 1,
}: CustomHookProps): CustomHookReturnValue => {
  const innerScrollableRef = useRef<HTMLElement | null>(null);
  const innerResizeRef = useRef<HTMLElement | null>(null);
  const innerShadowRef = useRef<HTMLElement | null>(null);
  const resizeHeight = useRef<number>(0);
  const resizeWidth = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);
  const scrollHandlerRef = useRef<((e: Event) => void) | null>(null);
  const loadHandlerRef = useRef<(() => void) | null>(null);

  /**
   * Applies scroll-based effects using requestAnimationFrame for optimal performance.
   * Calculates and applies resize transformations and shadow visibility.
   */
  const applyEffect = useCallback(() => {
    if (!conditional || !innerScrollableRef.current) {
      return;
    }

    const percentage = scrollPercentage(
      innerScrollableRef.current,
      proportionLimit,
    );

    // Apply resize effect to the resize element
    if (innerResizeRef.current && resizeHeight.current > 0) {
      const subHeight = (percentage * resizeHeight.current) / MAX_PERCENTAGE;
      const subWidth = (percentage * resizeWidth.current) / MAX_PERCENTAGE;

      const cssProperties = [
        {
          cssPropertyName: 'min-height',
          cssPropertyValue: `calc(${resizeHeight.current}px - ${subHeight}px)`,
        },
        {
          cssPropertyName: 'height',
          cssPropertyValue: `calc(${resizeHeight.current}px - ${subHeight}px)`,
        },
        {
          cssPropertyName: 'min-width',
          cssPropertyValue: `calc(${resizeWidth.current}px - ${subWidth}px)`,
        },
        {
          cssPropertyName: 'width',
          cssPropertyValue: `calc(${resizeWidth.current}px - ${subWidth}px)`,
        },
      ];

      cssProperties.forEach(({ cssPropertyName, cssPropertyValue }) => {
        innerResizeRef.current?.style.setProperty(
          cssPropertyName,
          cssPropertyValue,
        );
      });
    }

    // Apply shadow effect based on scroll threshold
    if (innerShadowRef.current && shadowStyles) {
      const shadowClasses = shadowStyles.split(' ');
      if (percentage > shadowVisible) {
        innerShadowRef.current.classList.add(...shadowClasses);
      } else {
        innerShadowRef.current.classList.remove(...shadowClasses);
      }
    }
  }, [conditional, shadowStyles, shadowVisible]);

  /**
   * Scroll event handler that uses requestAnimationFrame for smooth updates.
   * Prevents multiple animation frames from queueing up.
   */
  const handleScroll = useCallback(
    (e: Event) => {
      // Cancel previous animation frame if it exists
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }

      // Queue new animation frame
      animationFrameId.current = requestAnimationFrame(() => {
        applyEffect();
        scrollCallback?.(e);
        animationFrameId.current = null;
      });
    },
    [applyEffect, scrollCallback],
  );

  // Update scroll handler ref when dependencies change
  useEffect(() => {
    scrollHandlerRef.current = handleScroll;
  }, [handleScroll]);

  /**
   * Callback ref for the scrollable element.
   * Attaches scroll event listener and applies initial effect.
   */
  const scrollableRef = useCallback(
    (node: HTMLElement | null) => {
      // Cleanup previous element
      if (innerScrollableRef.current && scrollHandlerRef.current) {
        innerScrollableRef.current.removeEventListener(
          'scroll',
          scrollHandlerRef.current,
        );
      }

      innerScrollableRef.current = node;

      // Setup new element
      if (node && scrollHandlerRef.current) {
        node.addEventListener('scroll', scrollHandlerRef.current);
        applyEffect();
      }
    },
    [applyEffect],
  );

  /**
   * Callback ref for the resize element.
   * Captures initial dimensions on load for resize calculations.
   */
  const resizeRef = useCallback((node: HTMLElement | null) => {
    const handleLoad = () => {
      if (innerResizeRef.current) {
        resizeHeight.current = innerResizeRef.current.clientHeight;
        resizeWidth.current = innerResizeRef.current.clientWidth;
      }
    };

    // Cleanup previous element
    if (innerResizeRef.current && loadHandlerRef.current) {
      innerResizeRef.current.removeEventListener(
        'load',
        loadHandlerRef.current,
      );
    }

    // Store handler ref for cleanup
    loadHandlerRef.current = handleLoad;
    innerResizeRef.current = node;

    // Setup new element
    if (node) {
      node.addEventListener('load', handleLoad);
      // Capture dimensions immediately if already loaded
      handleLoad();
    }
  }, []);

  /**
   * Callback ref for the shadow element.
   * Simply stores the reference for shadow effect application.
   */
  const shadowRef = useCallback((node: HTMLElement | null) => {
    innerShadowRef.current = node;
  }, []);

  // Cleanup effect on unmount
  useEffect(() => {
    return () => {
      // Cancel any pending animation frame
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }

      // Remove scroll listener
      if (innerScrollableRef.current && scrollHandlerRef.current) {
        innerScrollableRef.current.removeEventListener(
          'scroll',
          scrollHandlerRef.current,
        );
      }

      // Remove load listener
      if (innerResizeRef.current && loadHandlerRef.current) {
        innerResizeRef.current.removeEventListener(
          'load',
          loadHandlerRef.current,
        );
      }
    };
  }, []);

  return {
    resizeRef,
    scrollableRef,
    shadowRef,
  };
};
