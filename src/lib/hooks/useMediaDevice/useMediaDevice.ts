import { useEffect, useState } from 'react';

import { useStylesContext } from '@/lib/provider/stylesProvider/stylesProvider';
import {
  DEVICE_BREAKPOINTS,
  type DeviceBreakpointsType,
} from '@/lib/types/breakpoints/breakpoints';

/**
 * A custom React hook to determine and track the current media device type (e.g., mobile, tablet, desktop) based on CSS media queries.
 *
 * @returns {DeviceBreakpointsType} - The current device type, which can be one of `DEVICE_BREAKPOINTS.MOBILE`, `DEVICE_BREAKPOINTS.TABLET`, or `DEVICE_BREAKPOINTS.DESKTOP`.
 *
 * @remarks
 * - The hook uses the `useStylesContext` to access media query definitions from the application's style provider.
 * - It initializes the device type based on the current media query matches and updates it dynamically when the viewport changes.
 * - The hook listens for changes in media query matches using the `addEventListener` method and cleans up listeners on unmount.
 *
 * @see {@link DeviceBreakpointsType} for the list of available device types.
 *
 * @dependencies
 * - `useStylesContext`: Provides access to the application's media query definitions.
 * - `useEffect`: React hook to handle side effects, such as adding and removing event listeners.
 * - `useState`: React hook to manage the current device type state.
 */
export const useMediaDevice = (): DeviceBreakpointsType => {
  const { mediaQueries } = useStylesContext();

  const initializeMedia = (): DeviceBreakpointsType => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return DEVICE_BREAKPOINTS.DESKTOP;
    }

    const { onlyMobile, onlyTablet } = mediaQueries;
    const isMobile = window.matchMedia(onlyMobile).matches;
    const isTablet = window.matchMedia(onlyTablet).matches;

    if (isMobile) {
      return DEVICE_BREAKPOINTS.MOBILE;
    }
    if (isTablet) {
      return DEVICE_BREAKPOINTS.TABLET;
    }
    return DEVICE_BREAKPOINTS.DESKTOP;
  };

  const [device, setDevice] = useState<DeviceBreakpointsType>(initializeMedia);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const { onlyDesktop, onlyMobile, onlyTablet } = mediaQueries;
    const desktopMatchMedia = window.matchMedia(onlyDesktop);
    const tabletMatchMedia = window.matchMedia(onlyTablet);
    const mobileMatchMedia = window.matchMedia(onlyMobile);

    const handleQueryListener = () => {
      if (mobileMatchMedia.matches) {
        setDevice(DEVICE_BREAKPOINTS.MOBILE);
      } else if (tabletMatchMedia.matches) {
        setDevice(DEVICE_BREAKPOINTS.TABLET);
      } else {
        setDevice(DEVICE_BREAKPOINTS.DESKTOP);
      }
    };

    desktopMatchMedia.addEventListener('change', handleQueryListener);
    tabletMatchMedia.addEventListener('change', handleQueryListener);
    mobileMatchMedia.addEventListener('change', handleQueryListener);

    handleQueryListener();

    // eslint-disable-next-line consistent-return
    return () => {
      desktopMatchMedia.removeEventListener('change', handleQueryListener);
      tabletMatchMedia.removeEventListener('change', handleQueryListener);
      mobileMatchMedia.removeEventListener('change', handleQueryListener);
    };
  }, [mediaQueries]);

  return device;
};
