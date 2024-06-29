import { useCallback, useRef } from 'react';

import { useTheme } from 'styled-components';

import { DeviceBreakpointsType } from '@/types';
import { CssProperty, changeCssProperty } from '@/utils';

const MAX_ZOOM = 1.25;
const CONDITION = true;
const MEASURE_REM = 16;
const INIT_ZOOM = 1;

const getOriginalCssProps = (element: HTMLElement, cssProps: CssProperty[]) => {
  // to store the original css props
  const originalCssProps: CssProperty[] = [];
  // get element styles
  const computedStyles = window.getComputedStyle(element);
  //get only the modify values
  [...Array(cssProps.length)].forEach((_, index) => {
    const modifyCssPropName = cssProps[index].cssPropertyName;
    const modifyCssPropValue = computedStyles[modifyCssPropName];
    originalCssProps.push({
      cssPropertyName: modifyCssPropName,
      cssPropertyValue: modifyCssPropValue,
    });
  });
  // return the original values
  return originalCssProps;
};

const getRealDevice = breakpoints => {
  const deviceWidth = window.outerWidth / MEASURE_REM;
  if (deviceWidth <= breakpoints.S) {
    return DeviceBreakpointsType.MOBILE;
  } else if (deviceWidth > breakpoints.S && deviceWidth < breakpoints.M) {
    return DeviceBreakpointsType.TABLET;
  }
  return DeviceBreakpointsType.DESKTOP;
};

export const useZoomEffect = (
  effect: CssProperty[],
  maxZoom = MAX_ZOOM,
  condition = CONDITION
): ((node) => void) => {
  // inner element ref
  const innerElementRef = useRef<HTMLElement | null>(null);
  // original styles ref
  const originalStyles = useRef<CssProperty[]>([]);
  // indicate if zoomed
  const zoomed = useRef<boolean>(false);
  // control the previous zoom value
  const prevZoom = useRef<number>(INIT_ZOOM);
  // indicate the theme breakpoints
  const { BREAKPOINTS } = useTheme();

  const applyEffects = useCallback(() => {
    const realDevice = getRealDevice(BREAKPOINTS);
    if (!condition || !innerElementRef.current || realDevice !== DeviceBreakpointsType.DESKTOP) {
      return;
    }
    // set the element
    const element = innerElementRef.current;
    // storage the original styles
    const zoom = window.devicePixelRatio;
    if (zoom > maxZoom) {
      zoomed.current && changeCssProperty(element, effect);
      zoomed.current = false;
    } else if (prevZoom.current > zoom && zoom === INIT_ZOOM) {
      // apply the original styles when returning to normal size after zooming in
      !zoomed.current && changeCssProperty(element, originalStyles.current);
      zoomed.current = true;
    }
    prevZoom.current = zoom;
  }, [condition]);

  const elementRef = useCallback(
    node => {
      if (node) {
        innerElementRef.current = node;
        if (!originalStyles.current.length) {
          originalStyles.current = getOriginalCssProps(node, effect);
        }
        applyEffects();
        window.addEventListener('resize', applyEffects);
      } else {
        window.removeEventListener('resize', applyEffects);
        innerElementRef.current = null;
      }
    },
    [applyEffects]
  );

  return elementRef;
};
