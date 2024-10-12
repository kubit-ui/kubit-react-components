import { RefObject, useEffect } from 'react';

type ParamsType = {
  execute: () => void;
  element: RefObject<HTMLElement>;
};

// @deprecated - try the new useEscPressedV2 instead
export const useEscPressed = ({ execute, element }: ParamsType): void => {
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (
        event.key === 'Escape' &&
        (document.activeElement === element.current ||
          element.current?.contains(document.activeElement))
      ) {
        event.preventDefault();

        execute();
      }
    };

    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [element.current, execute]);
};
