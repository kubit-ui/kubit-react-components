import { useEffect, useState } from 'react';

/**
 * Props for calculating thumb transformation in toggle component using Venus patterns
 */
interface TransformCalculationProps {
  /** Track computed styles from window.getComputedStyle */
  trackStyles?: CSSStyleDeclaration;
  /** Thumb computed styles from window.getComputedStyle */
  thumbStyles?: CSSStyleDeclaration;
  /** Track border width (e.g., '2px') */
  borderWidth?: string;
  /** Border multiplier (2 for left and right borders) */
  borderMultiple: number;
}

/**
 * Props for calculating thumb translate position using Venus patterns
 */
interface ThumbTransformProps {
  /** Whether the toggle is checked (ON state) */
  checked?: boolean;
  /** Track computed styles from window.getComputedStyle */
  trackStyles?: CSSStyleDeclaration;
  /** Thumb computed styles from window.getComputedStyle */
  thumbStyles?: CSSStyleDeclaration;
}

/**
 * Props for useToggleTransform hook
 */
interface UseToggleTransformProps {
  /** Current toggle state (true = ON, false = OFF) */
  checked: boolean;
  /** Ref to the track element (component controlled) */
  trackRef: React.RefObject<HTMLButtonElement | null>;
  /** Ref to the thumb element (component controlled) */
  thumbRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Return type for useToggleTransform hook
 */
interface UseToggleTransformReturn {
  /** Computed transform value for the thumb */
  transform: string;
}

/**
 * Calculates the translateX transformation value for positioning the thumb in active state
 *
 * Venus version: Works with CSSStyleDeclaration from window.getComputedStyle
 * and returns a CSS transform string value instead of styled-components CSS template
 *
 * This function determines how much the thumb should move horizontally when the toggle
 * is in "ON" state, considering:
 * - Total track width
 * - Thumb width
 * - Track paddings (left, right, or general)
 * - Track borders
 *
 * @param props - Object with properties needed for calculation
 * @param props.trackStyles - Track computed styles from window.getComputedStyle
 * @param props.thumbStyles - Thumb computed styles from window.getComputedStyle
 * @param props.borderWidth - Track border width (e.g., '2px', '0px')
 * @param props.borderMultiple - Border multiplier (2 = left + right border)
 *
 * @returns CSS transform string value
 *
 * @example
 * ```typescript
 * const transform = calculateThumbTransform({
 *   trackStyles: computedTrackStyles,
 *   thumbStyles: computedThumbStyles,
 *   borderWidth: '1px',
 *   borderMultiple: 2
 * });
 * // Result: "translateX(calc(56px - 20px - 2px - 2px - 1px * 2))"
 * ```
 */
const calculateThumbTransform = ({
  borderMultiple,
  borderWidth,
  thumbStyles,
  trackStyles,
}: TransformCalculationProps): string => {
  // Validate required props
  if (!trackStyles || !thumbStyles) {
    return 'translateX(0px)';
  }

  // Ensure borderWidth has a valid value for CSS calculations
  const safeBorderWidth = borderWidth || '0px';

  // Calculation with specific paddings (left and right) or general padding
  if (
    (trackStyles.paddingRight && trackStyles.paddingLeft) ||
    trackStyles.padding
  ) {
    return `translateX(calc(${trackStyles.width} - ${thumbStyles.width} - ${
      trackStyles.paddingLeft || trackStyles.padding
    } - ${trackStyles.paddingRight || trackStyles.padding} - ${safeBorderWidth} * ${borderMultiple}))`;
  }

  // Calculation without paddings - only track width, thumb and borders
  return `translateX(calc(${trackStyles.width} - ${thumbStyles.width} - ${safeBorderWidth} * ${borderMultiple}))`;
};

/**
 * Determines if the toggle track has a visible border
 *
 * Venus version: Works with CSSStyleDeclaration from window.getComputedStyle
 *
 * A border is considered "real" when:
 * - It has a defined borderWidth greater than 0
 * - The borderStyle is not 'none'
 *
 * @param trackStyles - Track computed styles from window.getComputedStyle
 * @returns true if the track has a visible border, false otherwise
 *
 * @example
 * ```typescript
 * const computedStyles = window.getComputedStyle(trackElement);
 * const hasBorder = hasVisibleBorder(computedStyles); // true/false
 * ```
 */
const hasVisibleBorder = (trackStyles?: CSSStyleDeclaration): boolean => {
  return !!(
    trackStyles?.borderWidth &&
    trackStyles?.borderWidth !== '0' &&
    trackStyles?.borderWidth !== '0rem' &&
    trackStyles?.borderWidth !== '0px' &&
    trackStyles?.borderStyle !== 'none'
  );
};

/**
 * Gets the thumb transform value based on toggle state
 *
 * Venus version: Returns CSS transform string value and works with CSSStyleDeclaration
 *
 * This function determines if the thumb should be in its initial position (OFF state)
 * or translated to the right (ON state), considering track borders.
 *
 * States that activate translation:
 * - ACTIVE_ON: Toggle activated and enabled
 * - DISABLED_ON: Toggle activated but disabled
 *
 * States that maintain initial position:
 * - ACTIVE_OFF: Toggle deactivated and enabled
 * - DISABLED_OFF: Toggle deactivated and disabled
 *
 * @param props - Object with properties for calculation
 * @param props.checked - Current toggle state (true = ON, false = OFF)
 * @param props.trackStyles - Toggle track computed styles from window.getComputedStyle
 * @param props.thumbStyles - Toggle thumb computed styles from window.getComputedStyle
 *
 * @returns CSS transform string value
 *
 * @example
 * ```typescript
 * // For ON state
 * const translateOn = getThumbTransform({
 *   checked: true,
 *   trackStyles: computedTrackStyles,
 *   thumbStyles: computedThumbStyles
 * });
 * // Result: "translateX(calc(56px - 20px - 2px * 2))"
 *
 * // For OFF state
 * const translateOff = getThumbTransform({
 *   checked: false,
 *   trackStyles: computedTrackStyles,
 *   thumbStyles: computedThumbStyles
 * });
 * // Result: "translateX(0px)"
 * ```
 */
const getThumbTransform = ({
  checked,
  thumbStyles,
  trackStyles,
}: ThumbTransformProps): string => {
  // Validate required props
  if (!trackStyles || !thumbStyles) {
    return 'translateX(0px)';
  }

  // Determine if track has visible borders
  const trackHasBorder = hasVisibleBorder(trackStyles);

  // Get actual border width or use 0px as fallback
  const borderWidth = trackHasBorder ? trackStyles?.borderWidth : '0px';

  // Multiplier to consider both track borders (left + right)
  const borderMultiple = trackHasBorder ? 2 : 0;

  // Apply transformation for checked state
  if (checked) {
    return calculateThumbTransform({
      borderMultiple,
      borderWidth,
      thumbStyles,
      trackStyles,
    });
  }

  // For unchecked state, keep thumb in initial position
  return 'translateX(0px)';
};

/**
 * Custom hook for calculating dynamic thumb transform in Toggle component
 *
 * This hook follows the Venus architecture pattern established in other toggle components,
 * using refs and window.getComputedStyle to access actual CSS values and calculate
 * the thumb transform dynamically.
 *
 * ## Unified Ref Management Pattern
 * The component maintains full control over ref lifecycle by passing both track and thumb refs
 * as parameters. This provides consistent ref management and clear separation of concerns:
 * - Component handles ref creation and forwarding
 * - Hook handles only transform calculations
 * - No hidden ref creation or management inside the hook
 *
 * ## Venus Architecture Integration
 * - Works with the CSS + Design System hybrid approach
 * - Allows CSS to handle static styles while JS handles dynamic calculations
 * - Follows the same pattern as existing toggle components in Venus
 * - Supports ref forwarding for accessibility and external control
 *
 * @param props - Object containing hook parameters
 * @param props.checked - Current toggle state (true = ON, false = OFF)
 * @param props.trackRef - Ref to the track element (component controlled)
 * @param props.thumbRef - Ref to the thumb element (component controlled)
 * @returns Object with computed transform value
 *
 * @example
 * ```tsx
 * const ToggleComponent = forwardRef((props, ref) => {
 *   // Component manages its own refs
 *   const trackRef = useRef<HTMLButtonElement>(null);
 *   const thumbRef = useRef<HTMLDivElement>(null);
 *
 *   // Hook only handles transform calculation with object params
 *   const { transform } = useToggleTransform({
 *     checked,
 *     trackRef,
 *     thumbRef
 *   });
 *
 *   // Component handles ref forwarding
 *   useImperativeHandle(ref, () => trackRef.current);
 *
 *   return (
 *     <button ref={trackRef} className={cssClasses?.track}>
 *       <div ref={thumbRef} style={{ transform }}>
 *         {children}
 *       </div>
 *     </button>
 *   );
 * });
 * ```
 */
export const useToggleTransform = ({
  checked,
  thumbRef,
  trackRef,
}: UseToggleTransformProps): UseToggleTransformReturn => {
  const [transform, setTransform] = useState<string>('translateX(0px)');

  useEffect(() => {
    if (trackRef.current && thumbRef.current) {
      // Get computed styles using Venus pattern
      const trackStyles = window.getComputedStyle(trackRef.current);
      const thumbStyles = window.getComputedStyle(thumbRef.current);

      // Debug logging to understand what's happening in Storybook
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('[ToggleTransform Debug]', {
          borderStyle: trackStyles.borderStyle,
          borderWidth: trackStyles.borderWidth,
          checked,
          thumbWidth: thumbStyles.width,
          trackPadding: trackStyles.padding,
          trackPaddingLeft: trackStyles.paddingLeft,
          trackPaddingRight: trackStyles.paddingRight,
          trackWidth: trackStyles.width,
        });
      }

      // Calculate transform using adapted utility functions
      const calculatedTransform = getThumbTransform({
        checked,
        thumbStyles,
        trackStyles,
      });

      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('[ToggleTransform Result]', calculatedTransform);
      }

      setTransform(calculatedTransform);
    }
  }, [checked]);

  return {
    transform,
  };
};
