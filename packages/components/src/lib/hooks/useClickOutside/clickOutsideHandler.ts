// This file is part of the WIP vanilla JS version of the SOFTWEB web UI components.
// It is not intended for use in production and is subject to change.
/**
 * Creates a handler to detect clicks outside a specified element.
 *
 * @param element - The target HTML element to monitor for outside clicks.
 * @param onClickOutside - A callback function to execute when a click outside the element is detected.
 * @param preventOnClickElements - (Optional) An array of elements where clicks should not trigger the `onClickOutside` callback, even if they are outside the main `element`.
 *
 * @returns An object with a `destroy` method to remove the event listener when it's no longer needed.
 *
 * @example
 * ```typescript
 * const handler = createClickOutsideHandler({
 *   element: myElement,
 *   onClickOutside: (event) => {
 *     console.log('Clicked outside the element!', event);
 *   },
 *   preventOnClickElements: [buttonElement],
 * });
 *
 * // Later, when you no longer need the handler:
 * handler.destroy();
 * ```
 */
export function createClickOutsideHandler({
  element,
  onClickOutside,
  preventOnClickElements = [],
}: {
  element: HTMLElement | null;
  onClickOutside: (event: MouseEvent) => void;
  preventOnClickElements?: (HTMLElement | null | undefined)[];
}):
  | { destroy: () => void }
  | { destroy: () => void; element: HTMLElement | null } {
  if (typeof window === 'undefined' || !element) {
    return {
      destroy: () => {
        // No-op in server-side rendering or if element is null
      },
    };
  }

  function handleClickOutside(event: MouseEvent) {
    if (
      element &&
      !element.contains(event.target as Node) &&
      !preventOnClickElements.some((el) => el?.contains(event.target as Node))
    ) {
      onClickOutside(event);
    }
  }

  document.addEventListener('mouseup', handleClickOutside);

  return {
    destroy() {
      document.removeEventListener('mouseup', handleClickOutside);
    },
  };
}
