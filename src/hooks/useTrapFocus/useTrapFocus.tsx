import * as React from 'react';

import { getFocusableDescendantsV2 } from '@/utils/focusHandlers/focusHandlers';

export const useTrapFocus = ({
  element,
  hasFocusTrap = true,
  tabPressed,
}: {
  element: React.MutableRefObject<HTMLElement | null>;
  hasFocusTrap?: boolean;
  tabPressed?: boolean;
}): void | null => {
  const tabPressRef = React.useRef(false);

  const POSSIBLE_FOCUSABLE_QUERY_SELECTOR =
    'a[href], area[href], input, select, textarea, button, summary, iframe, embed, [tabindex="0"]';

  const getAllPossibleFocusableElements = (element: HTMLElement): HTMLElement[] => {
    const focusableNodes = Array.from(
      element.querySelectorAll<HTMLElement>(POSSIBLE_FOCUSABLE_QUERY_SELECTOR)
    );

    return focusableNodes;
  };

  const findNextFocusableElement = (
    startIndex: number,
    elements: HTMLElement[]
  ): HTMLElement | null => {
    for (let i = startIndex; i < elements.length; i++) {
      const isFocusable =
        !elements[i].hasAttribute('disabled') &&
        !elements[i].getAttribute('aria-hidden:true') &&
        !elements[i].getAttribute('aria-disabled:true');
      if (isFocusable) {
        return elements[i];
      }
    }
    return null;
  };

  React.useEffect(() => {
    if (!hasFocusTrap) {
      return;
    }
    const allPossibleFocusableElements =
      element.current && getAllPossibleFocusableElements(element.current);

    const handleFocus = (e: KeyboardEvent): void => {
      if (element.current && e.key === 'Tab') {
        tabPressRef.current = true;
        const focusableElements = getFocusableDescendantsV2({ element: element.current });

        if (focusableElements.length) {
          const firstFocusableElement = focusableElements[0];
          const lastFocusableElement = focusableElements[focusableElements.length - 1];
          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement?.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement?.focus();
              e.preventDefault();
            }
          }
        } else {
          e.preventDefault();
        }
      }
    };
    const handleBlur = (e): void => {
      if (!tabPressRef.current && element.current) {
        // Necessary timeout to update properly the new focusable elements
        setTimeout(() => {
          const focusableElements =
            element.current && getFocusableDescendantsV2({ element: element.current });

          if (allPossibleFocusableElements?.length && focusableElements?.length) {
            const activeElementIndex = allPossibleFocusableElements.findIndex(
              focusableElement => focusableElement === e.target
            );

            // If next focusable element exists, focus it
            if (activeElementIndex !== -1) {
              const nextFocusableElement = findNextFocusableElement(
                activeElementIndex + 1,
                allPossibleFocusableElements
              );
              if (nextFocusableElement) {
                nextFocusableElement.focus();
              } else if (activeElementIndex + 1 >= allPossibleFocusableElements.length) {
                // If active element is the last one, focus the first focusable element
                focusableElements[0]?.focus();
              }
            }
          }
        }, 0);
      }
      tabPressRef.current = false;
    };
    document.addEventListener('keydown', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('keydown', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [element, tabPressRef.current, hasFocusTrap, tabPressed]);
};
