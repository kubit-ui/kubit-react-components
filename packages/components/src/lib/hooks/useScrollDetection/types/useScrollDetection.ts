/**
 * Configuration options for scroll detection.
 */
export interface UseScrollDetectionParamsType {
  /**
   * If true, automatically focuses the container when scroll is detected.
   * Focus is applied only once on the first scroll event.
   * @default false
   */
  autoFocus?: boolean;
}

/**
 * Return value from the useScrollDetection hook.
 */
export interface UseScrollDetectionReturnType {
  /**
   * Handler function to attach to an element ref for scroll detection.
   * Call this function with the element reference to enable scroll monitoring.
   */
  handleScrollDetection: (element: HTMLElement | null | undefined) => void;
  /**
   * Indicates whether the monitored element has scrollable content.
   */
  hasScroll: boolean;
}
