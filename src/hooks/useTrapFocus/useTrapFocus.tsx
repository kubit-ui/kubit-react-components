/* eslint-disable complexity */
import React from 'react';

import { getFocusableDescendantsV2 } from '@/utils/focusHandlers/focusHandlers';

export const useTrapFocus = ({
  ref,
  // Default false in order to only active the window listener when needed
  trapFocus = false,
}: {
  ref: React.MutableRefObject<HTMLElement | null>;
  trapFocus?: boolean;
}): void | null => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      // Do nothing is ref is not defined
      // Do nothing if tab is not pressed
      if (!ref.current || e.key !== 'Tab') {
        return;
      }
      const focusableElements = getFocusableDescendantsV2({ element: ref.current });
      // Do nothing if the ref does not contain focusable elements
      if (!focusableElements.length) {
        return;
      }
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

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
