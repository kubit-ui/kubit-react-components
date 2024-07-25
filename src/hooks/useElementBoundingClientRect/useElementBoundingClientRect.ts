import * as React from 'react';

interface Params {
  ref?: React.MutableRefObject<HTMLElement | null>;
}

interface ReturnValue {
  measures?: DOMRect;
}

/**
 * Custom hook that returns the bounding client rect of a specified element.
 *
 * @param {Params} props - The hook parameters.
 * @param {React.MutableRefObject<HTMLElement | null>} props.ref - The reference to the element.
 *
 * @returns {ReturnValue} - The hook return value.
 * @returns {DOMRect | undefined} ReturnValue.measures - The bounding client rect of the element.
 */
export const useElementBoundingClientRect = (props: Params): ReturnValue => {
  const [measures, setMeasures] = React.useState<DOMRect | undefined>(undefined);

  React.useEffect(() => {
    const element = props.ref?.current;
    if (!element) {
      return () => null;
    }

    const getMeasures = () => {
      if (element) {
        const measure = element?.getBoundingClientRect();
        setMeasures(measure);
      }
    };

    getMeasures();

    window.addEventListener('resize', getMeasures);
    return () => window.removeEventListener('resize', getMeasures);
  }, [props.ref]);

  return { measures };
};
