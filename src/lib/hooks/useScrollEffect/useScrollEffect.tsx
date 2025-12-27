import { useCallback, useRef } from 'react';

import type {
  CustomHookProps,
  CustomHookReturnValue,
} from './types/useScrollEffect';

import { changeCssProperty } from '../../utils/changeCssProperty/changeCssProperty';
import { scrollPercentage } from './utils/scrollPercentage';

const MAX_PERCENTAGE = 100;
const proportionLimit = 1.25;

/**
 * A custom React hook that applies dynamic effects based on the scroll position of an element.
 * This hook allows for resizing elements and toggling shadow styles based on the scroll percentage,
 * and it also supports custom scroll callbacks.
 *
 * @param {CustomHookProps} props - The properties for configuring the hook.
 * @param {boolean} [props.conditional=true] - A flag to enable or disable the scroll effect.
 * @param {(event: Event) => void} [props.scrollCallback] - A callback function triggered on scroll events.
 * @param {string} [props.shadowStyles] - A CSS class name to apply when the shadow effect is visible.
 * @param {number} [props.shadowVisible=1] - The scroll percentage threshold at which the shadow effect becomes visible.
 *
 * @returns {CustomHookReturnValue} An object containing refs for managing the scrollable element, resizable element, and shadow element:
 * - `resizeRef`: A ref callback for the element whose size will be dynamically adjusted based on the scroll percentage.
 * - `scrollableRef`: A ref callback for the scrollable element that triggers the scroll effects.
 * - `shadowRef`: A ref callback for the element where shadow styles will be applied or removed.
 *
 * @example
 * const { resizeRef, scrollableRef, shadowRef } = useScrollEffect({
 *   conditional: true,
 *   scrollCallback: (e) => console.log('Scroll event:', e),
 *   shadowStyles: 'shadow-visible',
 *   shadowVisible: 50,
 * });
 *
 * return (
 *   <div>
 *     <div ref={scrollableRef} style={{ overflowY: 'scroll', height: '300px' }}>
 *       <div ref={resizeRef} style={{ height: '500px', width: '500px' }}>
 *         Scrollable content here
 *       </div>
 *     </div>
 *     <div ref={shadowRef} className="shadow-container">
 *       Shadow effect container
 *     </div>
 *   </div>
 * );
 */
export const useScrollEffect = ({
  conditional = true,
  scrollCallback,
  shadowStyles,
  shadowVisible = 1,
}: CustomHookProps): CustomHookReturnValue => {
  const innerScrollableRef = useRef<HTMLElement | null>(null);
  const innerResizeRef = useRef<HTMLElement | null>(null);
  const innerShadowRef = useRef<HTMLElement | null>(null);
  const resizeHeight = useRef<number>(0);
  const resizeWidth = useRef<number>(0);

  const applyEffect = useCallback(() => {
    if (!innerScrollableRef.current) {
      return;
    }
    const percentage = scrollPercentage(
      innerScrollableRef.current,
      proportionLimit,
    );

    if (innerResizeRef.current) {
      const subHeight = (percentage * resizeHeight.current) / MAX_PERCENTAGE;
      const subWidth = (percentage * resizeWidth.current) / MAX_PERCENTAGE;

      const cssProperties = [
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

    if (innerShadowRef.current) {
      if (percentage > shadowVisible) {
        if (shadowStyles) {
          innerShadowRef.current.classList.add(...shadowStyles.split(' '));
        }
      } else {
        if (shadowStyles) {
          innerShadowRef.current.classList.remove(...shadowStyles.split(' '));
        }
      }
    }
  }, [conditional, shadowStyles, shadowVisible]);

  const scrollableRef = useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        innerScrollableRef.current = node;
        applyEffect();
        innerScrollableRef.current?.addEventListener('scroll', (e) => {
          applyEffect();
          scrollCallback?.(e);
        });
      } else {
        innerScrollableRef.current?.removeEventListener('scroll', (e) => {
          applyEffect();
          scrollCallback?.(e);
        });
        innerScrollableRef.current = null;
      }
    },
    [applyEffect, scrollCallback],
  );

  const resizeRef = useCallback((node: HTMLElement | null) => {
    const handleLoad = () => {
      if (innerResizeRef.current) {
        resizeHeight.current = innerResizeRef.current.clientHeight;
        resizeWidth.current = innerResizeRef.current.clientWidth;
      }
    };
    if (node) {
      innerResizeRef.current = node;
      innerResizeRef.current?.addEventListener('load', handleLoad);
    } else {
      innerResizeRef.current?.removeEventListener('load', handleLoad);
      innerResizeRef.current = null;
    }
  }, []);

  const shadowRef = useCallback((node: HTMLElement | null) => {
    if (node) {
      innerShadowRef.current = node;
    } else {
      innerShadowRef.current = null;
    }
  }, []);

  return {
    resizeRef,
    scrollableRef,
    shadowRef,
  };
};
