import { type MutableRefObject, useEffect, useRef, useState } from 'react';

interface ReturnValue {
  innerRef: MutableRefObject<HTMLElement | null>;
  isOverflow: boolean;
}

export const useIsOverflow = (): ReturnValue => {
  const [isOverflow, setIsOverflow] = useState(false);
  const innerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = innerRef.current;
    if (!element) {
      return () => null;
    }
    const getOverflow = () => {
      const hasOverflow = element.offsetWidth > window.innerWidth;
      setIsOverflow(hasOverflow);
    };
    getOverflow();
    window.addEventListener('resize', getOverflow);
    return () => window.removeEventListener('resize', getOverflow);
  }, []);

  return { innerRef, isOverflow };
};
