import type { RefObject } from 'react';

/**
 * Parameters for the useScrollDetectionWithAutoFocus hook
 *
 * @property disabled - A flag to disable the scroll detection and auto-focus behavior
 * @property parentElementRef - A reference to the parent element, used to determine focus behavior
 */
export interface UseScrollDetectionWithAutoFocusParamsType {
  /**
   * Flag to disable the scroll detection and auto-focus behavior
   * @default false
   */
  disabled?: boolean;

  /**
   * Reference to the parent element, used to determine focus behavior
   */
  parentElementRef?: RefObject<HTMLElement>;
}

/**
 * Return type for the useScrollDetectionWithAutoFocus hook
 *
 * @property handleScrollDetection - Callback function to handle scroll detection on an element
 * @property hasScroll - Boolean indicating whether the element has scrollable content
 */
export interface UseScrollDetectionWithAutoFocusReturnType {
  /**
   * Callback function to be attached to an element to detect scroll and manage auto-focus
   */
  handleScrollDetection: (element: HTMLElement | null | undefined) => void;

  /**
   * Boolean state indicating whether the observed element has scrollable content
   */
  hasScroll: boolean;
}
