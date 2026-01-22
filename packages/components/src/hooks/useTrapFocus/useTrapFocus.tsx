import { type MutableRefObject, useEffect } from 'react';

import { getFocusableDescendants } from '@/lib/utils/focusHandlers/focusHandlers';

/**
 * A custom React hook to trap focus within a specified container element.
 * This hook ensures that keyboard navigation (via the `Tab` key) is restricted to the focusable elements
 * within the container, preventing focus from escaping to elements outside the container.
 * It is particularly useful for managing focus in modals, dialogs, or other interactive components.
 *
 * @param {Object} params - The parameters for configuring the hook.
 * @param {MutableRefObject<HTMLElement | null>} params.ref - A React ref pointing to the container element where focus should be trapped.
 * @param {boolean} [params.trapFocus=false] - A flag to enable or disable the focus-trapping behavior. Defaults to `false`.
 *
 * @returns {void | null} This hook does not return any value.
 *
 * @example
 * const modalRef = useRef(null);
 * useTrapFocus({ ref: modalRef, trapFocus: true });
 *
 * return (
 *   <div ref={modalRef} role="dialog" aria-modal="true">
 *     <button>Button 1</button>
 *     <button>Button 2</button>
 *   </div>
 * );
 */
export const useTrapFocus = ({
  ref,
  // Default false in order to only active the window listener when needed
  trapFocus = false,
}: {
  ref: MutableRefObject<HTMLElement | null>;
  trapFocus?: boolean;
}): void | null => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      // Do nothing is ref is not defined
      // Do nothing if tab is not pressed
      if (!ref.current || e.key !== 'Tab') {
        return;
      }
      const focusableElements = getFocusableDescendants({
        element: ref.current,
      });

      // When the ref does not contain focusable elements
      if (!focusableElements.length) {
        // Do not change the current focus if the current focus is inside the ref
        // This happens in some element like in actionBottomSheet dropdown
        // When the focus is trap, but the options are not focusabled
        if (ref.current.contains(document.activeElement)) {
          e.preventDefault();
        }
        return;
      }

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];

      // If we are at the last focusable element and we press tab (without shift), change the focus to the first focusable element
      if (!e.shiftKey && document.activeElement === lastFocusableElement) {
        firstFocusableElement?.focus();
        e.preventDefault();
        return;
      }

      // If we are at the first focusable element and we press shift + tab, change the focus to the last focusable element
      if (e.shiftKey && document.activeElement === firstFocusableElement) {
        lastFocusableElement?.focus();
        e.preventDefault();
        return;
      }

      // If we have preceded or passed the focusable elements, then:
      // When tab -> focus first element
      // When shift + tab -> focus last element
      // preceded or passed how ? -> Imagine no focusable elements inside the element container with tabIndex="-1", but they are focused manually with focus()
      if (
        firstFocusableElement?.compareDocumentPosition(e.target as Node) &
          Node.DOCUMENT_POSITION_PRECEDING ||
        lastFocusableElement?.compareDocumentPosition(e.target as Node) &
          Node.DOCUMENT_POSITION_FOLLOWING
      ) {
        if (e.shiftKey) {
          lastFocusableElement?.focus();
          e.preventDefault();
          return;
        }
        firstFocusableElement?.focus();
        e.preventDefault();
      }
    };

    // It is being used window event listener instead of ref.eventListener because the focus is redirected to the body when a focused element disappears or is marked as disabled
    // In these cases, the handleKeyDown would not be triggered if the event listener is attached to the ref
    if (trapFocus) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [trapFocus]);
};
