import { ForwardedRef, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';

// helpers
import { getHeight } from './helpers/height';

type ReturnValueType = {
  optionsListRefCollection: ForwardedRef<unknown> | (({ ref, index }) => void);
  optionsListCollectionRef: MutableRefObject<HTMLElement[]>;
  height: string;
};

type UseCustomHeightFromChildrensType = {
  limit: number;
  observer?: unknown[];
  customCalcHeight?: (element: HTMLElement[]) => string;
  shouldCalculateHeight?: boolean;
};

export const useCustomHeightFromChildrens = ({
  limit,
  observer = [],
  customCalcHeight,
  shouldCalculateHeight = true,
}: UseCustomHeightFromChildrensType): ReturnValueType => {
  // States
  const [height, setHeight] = useState('');

  // References
  const optionsListCollectionRef = useRef<HTMLElement[]>([]);

  const getList = (): HTMLElement[] => {
    if (!optionsListCollectionRef.current) {
      // Initialize the Map on first usage.
      optionsListCollectionRef.current = [];
    }
    return optionsListCollectionRef.current;
  };

  const calcHeight = useCallback(
    ({
      elementList,
      customCalcHeight,
    }: {
      elementList: HTMLElement[];
      customCalcHeight?: (element: HTMLElement[]) => string;
    }) => {
      if (!shouldCalculateHeight || !elementList || elementList.length === 0) {
        return;
      }
      if (customCalcHeight) {
        setHeight(customCalcHeight(elementList));
      } else {
        setHeight(getHeight(elementList, limit));
      }
    },
    [...observer, customCalcHeight, limit, shouldCalculateHeight]
  );

  // When the ref is initiallized, calcHeight will be called
  const optionsListRefCollection = useCallback(node => {
    const refList = getList();
    if (node) {
      refList[node.index] = node.ref;
    } else {
      refList.splice(node.index, 1);
    }
    calcHeight({ elementList: refList, customCalcHeight });
  }, []);

  useEffect(() => {
    const refList = getList();
    calcHeight({ elementList: refList, customCalcHeight });
  }, [calcHeight]);

  return {
    height,
    optionsListRefCollection,
    optionsListCollectionRef,
  };
};
