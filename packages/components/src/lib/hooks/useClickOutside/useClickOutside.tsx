import { useEffect, useRef } from 'react';

/**
 * Custom React hook to detect clicks outside a specified element.
 *
 * Attaches event listeners to detect when a user clicks outside the referenced element
 * and triggers a callback. Properly cleans up listeners on unmount or when dependencies change.
 * Uses the capture phase for better reliability with portals and nested elements.
 *
 * @param ref - A React ref object pointing to the target element
 * @param onClickOutside - A callback function that is triggered when a click outside is detected
 * @param preventOnClickElements - An optional array of elements where clicks should not trigger the callback
 *
 * @returns void
 *
 * @remarks
 * - This hook is useful for implementing behaviors like closing dropdowns, modals, or tooltips when clicking outside of them
 * - The `preventOnClickElements` parameter allows you to specify additional elements that should not trigger the callback
 * - Uses `composedPath()` to properly handle Shadow DOM elements
 * - Uses `mouseup` instead of `click` to avoid conflicts with other click handlers
 * - Implements callback ref pattern to prevent unnecessary re-renders
 *
 * @example
 * **Basic usage:**
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null);
 *
 * useClickOutside(ref, () => {
 *   setIsOpen(false);
 * });
 *
 * <div ref={ref}>
 *   <Popover />
 * </div>
 * ```
 *
 * @example
 * **With prevent elements:**
 * ```tsx
 * const popoverRef = useRef<HTMLDivElement>(null);
 * const triggerRef = useRef<HTMLButtonElement>(null);
 *
 * useClickOutside(popoverRef, () => {
 *   setIsOpen(false);
 * }, [triggerRef.current]);
 *
 * <button ref={triggerRef}>Open</button>
 * <div ref={popoverRef}>
 *   <Popover />
 * </div>
 * ```
 */
export const useClickOutside = (
  ref: React.MutableRefObject<HTMLElement | null>,
  onClickOutside: (event: MouseEvent) => void,
  preventOnClickElements: (HTMLElement | null | undefined)[] | undefined = [],
): void | null => {
  // Use callback ref to keep the latest callback without triggering effect
  const callbackRef = useRef(onClickOutside);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = onClickOutside;
  }, [onClickOutside]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // We use composedPath because it is needed for elements using a shadowRoot
      const path = event.composedPath();
      const isInsideRef = ref.current && path.includes(ref.current);
      const isInsidePrevent = preventOnClickElements.some(
        (element) => element && path.includes(element),
      );

      if (ref.current && !isInsideRef && !isInsidePrevent) {
        callbackRef.current(event);
      }
    }

    // Use capture phase for better reliability with portals and nested elements
    document.addEventListener('mouseup', handleClickOutside, true);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside, true);
    };
  }, [ref, preventOnClickElements]);
};
