//vendors
import * as React from 'react';

interface ReturnValue {
  innerRef: React.MutableRefObject<HTMLElement | null>;
  isOverflow: boolean;
}

const useIsOverflow = (): ReturnValue => {
  const [isOverflow, setIsOverflow] = React.useState(false);
  const innerRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
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

/**
 * @description
 * Hook to check if the element is overflow
 * @param {React.MutableRefObject<HTMLElement | null>} ref - Ref of the element.
 * @returns {boolean} - Return if the element is overflow.
 * @example
 * const {innerRef, isOverflow} = useIsOverflow();
 */
export default useIsOverflow;
