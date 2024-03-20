import { useEffect, useState } from 'react';

type UseKeyPressedType = boolean;

export const useKeyPressed = (targetKey: string): UseKeyPressedType => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({ key }): void => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };

  const upHandler = ({ key }): void => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
};
