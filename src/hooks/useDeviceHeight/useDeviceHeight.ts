import { useEffect, useRef } from 'react';

export const useDeviceHeight = (): void => {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setVh = () => {
    let vh;
    if (!window.CSS.supports) {
      vh = `${window.innerHeight}px`;
    } else {
      const supportSvh =
        window.CSS.supports('height: 100svh') || window.CSS.supports('max-height: 100svh');
      vh = supportSvh ? '100svh' : `${window.innerHeight}px`;
    }
    document.documentElement.style.setProperty('--100svh', vh);
  };

  const debounceHeight = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setVh();
    }, 250);
  };

  useEffect(() => {
    setVh();
    window.addEventListener('resize', debounceHeight);
    return () => {
      window.removeEventListener('resize', debounceHeight);
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);
};
