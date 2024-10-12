import React from 'react';

type UseEscPressedV2ParamsType = {
  ref: React.RefObject<HTMLElement>;
  onEscPress: (event: KeyboardEvent) => void;
  disablePreventDefault?: boolean;
  disableStopPropagation?: boolean;
};

type UseEscPressedV2ReturnType = void;

export const useEscPressedV2 = ({
  ref,
  onEscPress,
  disablePreventDefault = false,
  disableStopPropagation = false,
}: UseEscPressedV2ParamsType): UseEscPressedV2ReturnType => {
  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (!disablePreventDefault) {
          event.preventDefault();
        }
        if (!disableStopPropagation) {
          event.stopPropagation();
        }
        onEscPress(event);
      }
    };
    ref.current.addEventListener('keydown', handleKeyDown);
    return () => {
      ref.current?.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEscPress]);
};
