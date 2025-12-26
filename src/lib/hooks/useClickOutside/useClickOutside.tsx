import { useEffect } from 'react';

/**
 * Custom React hook to detect clicks outside a specified element.
 *
 * @param ref - A React ref object pointing to the target element. The hook will detect clicks outside this element.
 * @param onClickOutside - A callback function that is triggered when a click outside the target element is detected.
 * @param preventOnClickElements - An optional array of elements where clicks should not trigger the `onClickOutside` callback, even if they are outside the target element.
 *
 * @returns `void`
 *
 * @remarks
 * - This hook is useful for implementing behaviors like closing dropdowns, modals, or tooltips when clicking outside of them.
 * - The `preventOnClickElements` parameter allows you to specify additional elements that should not trigger the `onClickOutside` callback, such as buttons or other interactive elements.
 * - The hook uses the `mouseup` event to detect clicks outside the target element.
 *
 * @example
 * ```tsx
 * import { useRef } from 'react';
 * import { useClickOutside } from './useClickOutside';
 *
 * const MyComponent = () => {
 *   const ref = useRef<HTMLDivElement>(null);
 *
 *   const handleClickOutside = (event: MouseEvent) => {
 *     console.log('Clicked outside the element!', event);
 *   };
 *
 *   useClickOutside(ref, handleClickOutside);
 *
 *   return (
 *     <div ref={ref}>
 *       <p>Click outside this box to trigger the callback.</p>
 *     </div>
 *   );
 * };
 * ```
 */
export const useClickOutside = (
  ref: React.MutableRefObject<HTMLElement | null>,
  onClickOutside: (event: MouseEvent) => void,
  preventOnClickElements: (HTMLElement | null | undefined)[] | undefined = [],
): void | null => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      //We use composedPath because it is needed for a vertical using a shadowRoot
      const path = event.composedPath();
      const isInsideRef = ref.current && path.includes(ref.current);
      const isInsidePrevent = preventOnClickElements.some(
        element => element && path.includes(element)
      );

      if (ref.current && !isInsideRef && !isInsidePrevent) {
        onClickOutside(event);
      }
    }

    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref, onClickOutside, preventOnClickElements]);
};
