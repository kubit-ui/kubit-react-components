import { useCallback, useRef } from 'react';

import { CssProperty, changeCssProperty, scrollPercentage } from '@/utils';

interface CustomHookReturnValue {
  scrollableRef: (node) => void;
  resizeRef: (node) => void;
  shadowRef: (node) => void;
}

interface CustomHookProps {
  shadowStyles?: string;
  conditional?: boolean;
  shadowVisible?: number;
}

const MAX_PERCENTAGE = 100;
const proportionLimit = 1.25;
const defaultShadow = 'none';

export const useScrollEffect = ({
  conditional = true,
  shadowStyles = defaultShadow,
  shadowVisible = 1,
}: CustomHookProps): CustomHookReturnValue => {
  // the scrollable element ref
  const innerScrollableRef = useRef<HTMLElement | null>(null);
  // the element ref to change the height and width
  const innerResizeRef = useRef<HTMLElement | null>(null);
  // the element ref to change the shadow
  const innerShadowRef = useRef<HTMLElement | null>(null);
  // initial size
  const resizeHeight = useRef<number>(0);
  const resizeWidth = useRef<number>(0);

  // Function to apply the scroll styles effects
  const applyEffect = useCallback(() => {
    if (!innerScrollableRef.current) {
      return;
    }
    const percentage = scrollPercentage(innerScrollableRef.current, proportionLimit);

    // Code to resize element
    if (innerResizeRef.current) {
      const subHeight = (percentage * resizeHeight.current) / MAX_PERCENTAGE;
      const subWidth = (percentage * resizeWidth.current) / MAX_PERCENTAGE;

      const cssProperties: CssProperty[] = [
        {
          cssPropertyName: 'min-height',
          cssPropertyValue: `calc(${resizeHeight.current}px - ${subHeight}px)`,
        },
        {
          cssPropertyName: 'height',
          cssPropertyValue: `calc(${resizeHeight.current}px - ${subHeight}px)`,
        },
        {
          cssPropertyName: 'min-width',
          cssPropertyValue: `calc(${resizeWidth.current}px - ${subWidth}px)`,
        },
        {
          cssPropertyName: 'width',
          cssPropertyValue: `calc(${resizeWidth.current}px - ${subWidth}px)`,
        },
      ];

      changeCssProperty(innerResizeRef.current, cssProperties);
    }

    // Code to change shadow box
    if (innerShadowRef.current) {
      if (percentage > shadowVisible) {
        const shadow = [{ cssPropertyName: 'box-shadow', cssPropertyValue: shadowStyles }];
        changeCssProperty(innerShadowRef.current, shadow);
      } else {
        const shadow = [{ cssPropertyName: 'box-shadow', cssPropertyValue: defaultShadow }];
        changeCssProperty(innerShadowRef.current, shadow);
      }
    }
  }, [conditional, shadowStyles]);

  const scrollableRef = useCallback(
    node => {
      if (node) {
        innerScrollableRef.current = node;
        applyEffect();
        innerScrollableRef.current?.addEventListener('scroll', applyEffect);
      } else {
        innerScrollableRef.current?.removeEventListener('scroll', applyEffect);
        innerScrollableRef.current = null;
      }
    },
    [applyEffect]
  );

  const resizeRef = useCallback(node => {
    if (node) {
      innerResizeRef.current = node;
      resizeHeight.current = node.clientHeight;
      resizeWidth.current = node.clientWidth;
    } else {
      innerResizeRef.current = null;
    }
  }, []);

  const shadowRef = useCallback(node => {
    if (node) {
      innerShadowRef.current = node;
    } else {
      innerShadowRef.current = null;
    }
  }, []);

  return { scrollableRef, resizeRef, shadowRef };
};
