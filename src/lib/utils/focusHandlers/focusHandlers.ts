const FOCUSABLE_QUERY_SELECTOR =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]):not([tabindex="-1"]), summary, [tabindex]:not([tabindex="-1"])';

/**
 * Retrieves an array of focusable descendants within a given element.
 *
 * @param element - The element to search for focusable descendants.
 * @param elementsToOmit - Optional array of elements to omit from the search.
 * @returns An array of HTMLElements representing the focusable descendants.
 */
export const getFocusableDescendants = ({
  element,
  elementsToOmit,
}: {
  element: HTMLElement;
  elementsToOmit?: HTMLElement[];
}): HTMLElement[] => {
  const focusableNodes = Array.from(
    element.querySelectorAll<HTMLElement>(FOCUSABLE_QUERY_SELECTOR),
  ).filter((node) => {
    // It is not focusable if it is disabled
    if (
      node.getAttribute('aria-disabled') === 'true' ||
      node.hasAttribute('disabled')
    ) {
      return false;
    }
    // It is not focusable if it is aria-hidden
    if (node.getAttribute('aria-hidden') === 'true') {
      return false;
    }
    // It is not focusable if it is inside elements to omit
    if (elementsToOmit?.some((elementToOmit) => elementToOmit.contains(node))) {
      return false;
    }
    // It is not focusable if it is not a summary element and it is inside details closed element
    if (node.tagName !== 'SUMMARY' && node.closest('details:not([open])')) {
      return false;
    }
    return true;
  });
  return focusableNodes;
};

const isElementFocusable = (element: HTMLElement): boolean => {
  return (
    !element.hasAttribute('aria-disabled:true') &&
    !element.getAttribute('aria-hidden:true') &&
    element.matches(FOCUSABLE_QUERY_SELECTOR)
  );
};

const isSomeChildrenFocusable = (element: HTMLElement): boolean => {
  const focusableElements = getFocusableDescendants({ element });
  return !!(
    typeof focusableElements !== 'boolean' && focusableElements?.length
  );
};

const isElementOrSomeChildrenFocusable = (element: HTMLElement): boolean => {
  return isElementFocusable(element) || isSomeChildrenFocusable(element);
};

/**
 * Sets focus on the first focusable descendant of the given element.
 *
 * @param {Object} options - The options for focusing the first descendant.
 * @param {HTMLElement} options.element - The element on which to set focus.
 * @param {HTMLElement[]} [options.elementsToOmit] - An optional array of elements to omit from focus.
 * @param {boolean} [options.preventScroll] - An optional flag to prevent scrolling when focusing.
 *
 * @returns {void}
 */
export const focusFirstDescendant = ({
  element,
  elementsToOmit,
  preventScroll,
}: {
  element: HTMLElement;
  elementsToOmit?: HTMLElement[];
  preventScroll?: boolean;
}): void => {
  if (element?.childNodes?.length) {
    const focusableElements = getFocusableDescendants({
      element,
      elementsToOmit,
    });
    if (focusableElements.length) {
      focusableElements[0].focus({ preventScroll });
    }
  }
};

type focusElementOrFirstDescendantType = (
  element: HTMLElement,
  options?: { preventScroll?: boolean },
) => void;
export const focusElementOrFirstDescendant: focusElementOrFirstDescendantType =
  (element, options) => {
    if (isElementFocusable(element)) {
      element.focus(options);
      return;
    }
    focusFirstDescendant({ element, preventScroll: options?.preventScroll });
  };

export const focusLastDescendantOrElement = (element: HTMLElement): void => {
  const focusableElements = getFocusableDescendants({ element });
  if (typeof focusableElements !== 'boolean' && focusableElements?.length) {
    const focusableElement = focusableElements[focusableElements.length - 1];
    focusableElement.focus();
    return;
  }
  if (isElementFocusable(element)) {
    element.focus();
  }
};

/**
 * Find the next focusable element (without looking to children)
 * Return true when a focusable element has been found and focused
 * @param element
 * @returns boolean
 */

export const focusNextFocusableElement = (element: HTMLElement): boolean => {
  let focusableElement = element;
  let foundFocusableElement = false;
  // Search next focusable element
  while (focusableElement) {
    while (focusableElement.nextElementSibling) {
      focusableElement = focusableElement.nextElementSibling as HTMLElement;
      if (isElementOrSomeChildrenFocusable(focusableElement)) {
        foundFocusableElement = true;
        break;
      }
    }
    if (foundFocusableElement) {
      break;
    }
    focusableElement = focusableElement.parentNode as HTMLElement;
  }
  // If next focusable element has been found
  if (foundFocusableElement) {
    focusElementOrFirstDescendant(focusableElement);
  }
  return foundFocusableElement;
};

/**
 * Find the previous focusable element (without looking to children)
 * Return true when a focusable element has been found and focused
 * @param element
 * @returns boolean
 */

export const focusPreviousFocusableElement = (
  element: HTMLElement,
): boolean => {
  let focusableElement = element;
  let foundFocusableElement = false;
  let focusableElementIsParent = false;
  while (focusableElement) {
    while (focusableElement.previousElementSibling) {
      focusableElement = focusableElement.previousElementSibling as HTMLElement;
      if (isElementOrSomeChildrenFocusable(focusableElement)) {
        foundFocusableElement = true;
        break;
      }
    }
    if (foundFocusableElement) {
      break;
    }
    focusableElement = focusableElement.parentNode as HTMLElement;
    // Father is the previous focusable element
    if (isElementFocusable(focusableElement)) {
      foundFocusableElement = true;
      focusableElementIsParent = true;
      break;
    }
  }
  if (foundFocusableElement) {
    if (focusableElementIsParent) {
      focusableElement.focus();
    } else {
      focusLastDescendantOrElement(focusableElement);
    }
  }
  return foundFocusableElement;
};
