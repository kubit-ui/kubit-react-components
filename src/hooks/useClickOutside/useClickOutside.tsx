import { useEffect } from 'react';

export const useClickOutside = (
  ref: React.MutableRefObject<HTMLElement | null>,
  onClickOutside: (event: MouseEvent) => void,
  preventOnClickElements: (HTMLElement | null | undefined)[] | undefined = []
): void | null => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !preventOnClickElements.some(element => element?.contains(event.target as Node))
      ) {
        onClickOutside(event);
      }
    }

    // Bind the event listener
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref, onClickOutside, preventOnClickElements]);
};
