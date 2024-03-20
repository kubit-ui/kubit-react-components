import * as React from 'react';

const FOCUSABLE_QUERY_SELECTOR =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';

export const getFocusableDescendants = (element: HTMLElement): HTMLElement[] | boolean => {
  const focusableNodes = Array.from(
    element.querySelectorAll<HTMLElement>(FOCUSABLE_QUERY_SELECTOR)
  ).filter(
    node =>
      !node.hasAttribute('aria-disabled:true') &&
      !node.getAttribute('aria-hidden:true') &&
      !node.hasAttribute('disabled')
  );

  return focusableNodes?.length ? focusableNodes : false;
};

/**
 * Find the next focusable element (without looking to children)
 * Return true when a focusable element has been found and focused
 * @param element
 * @returns boolean
 */
// eslint-disable-next-line complexity
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
// eslint-disable-next-line complexity
export const focusPreviousFocusableElement = (element: HTMLElement): boolean => {
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

const isElementFocusable = (element: HTMLElement): boolean => {
  return (
    !element.hasAttribute('aria-disabled:true') &&
    !element.getAttribute('aria-hidden:true') &&
    element.matches(FOCUSABLE_QUERY_SELECTOR)
  );
};

const isSomeChildrenFocusable = (element: HTMLElement): boolean => {
  const focusableElements = getFocusableDescendants(element);
  return !!(typeof focusableElements !== 'boolean' && focusableElements?.length);
};

const isElementOrSomeChildrenFocusable = (element: HTMLElement): boolean => {
  return isElementFocusable(element) || isSomeChildrenFocusable(element);
};

export const focusElementOrFirstDescendant = (element: HTMLElement): void => {
  if (isElementFocusable(element)) {
    element.focus();
    return;
  }
  focusFirstDescendant(element);
};

export const focusLastDescendantOrElement = (element: HTMLElement): void => {
  const focusableElements = getFocusableDescendants(element);
  if (typeof focusableElements !== 'boolean' && focusableElements?.length) {
    const focusableElement = focusableElements[focusableElements.length - 1];
    focusableElement.focus();
    return;
  }
  if (isElementFocusable(element)) {
    element.focus();
  }
};

export const focusFirstDescendant = (element: HTMLElement): void => {
  if (element?.childNodes?.length) {
    const focusableElements = getFocusableDescendants(element);

    if (typeof focusableElements !== 'boolean' && focusableElements?.length) {
      focusableElements.some(node => {
        node.focus();
        return document.activeElement === node;
      });
    }
  }
};

export const trapFocus = (element: HTMLElement, e: React.KeyboardEvent<HTMLElement>): void => {
  const focusableElements = getFocusableDescendants(element);
  if (typeof focusableElements !== 'boolean' && focusableElements.length) {
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
};
