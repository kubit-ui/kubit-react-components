import { useEffect, useState } from 'react';

import { useTheme } from 'styled-components';

import { DeviceBreakpointsType } from '@/types/breakpoints';

export const useMediaDevice = (): DeviceBreakpointsType => {
  const mediaQueries = useTheme().MEDIA_QUERIES.matchMedia;
  const initialiceMedia = () => {
    // Perhaps should return null by default
    let deviceFound = DeviceBreakpointsType.DESKTOP;
    if (typeof window !== 'undefined' && window?.matchMedia) {
      const tableMatchMedia = window.matchMedia(mediaQueries.onlyTablet);
      const mobileMatchMedia = window.matchMedia(mediaQueries.onlyMobile);
      if (mobileMatchMedia.matches) {
        deviceFound = DeviceBreakpointsType.MOBILE;
      } else if (tableMatchMedia.matches) {
        deviceFound = DeviceBreakpointsType.TABLET;
      } else {
        deviceFound = DeviceBreakpointsType.DESKTOP;
      }
    }
    return deviceFound;
  };

  const [device, setDevice] = useState<DeviceBreakpointsType>(initialiceMedia);

  useEffect(() => {
    let deviceFound = DeviceBreakpointsType.DESKTOP;

    let desktopMatchMedia: MediaQueryList;
    let tableMatchMedia: MediaQueryList;
    let mobileMatchMedia: MediaQueryList;

    const handleQueryListener = () => {
      if (mobileMatchMedia?.matches) {
        deviceFound = DeviceBreakpointsType.MOBILE;
      } else if (tableMatchMedia?.matches) {
        deviceFound = DeviceBreakpointsType.TABLET;
      } else {
        deviceFound = DeviceBreakpointsType.DESKTOP;
      }
      setDevice(deviceFound);
    };

    if (typeof window !== 'undefined' && window && window.matchMedia) {
      desktopMatchMedia = window.matchMedia(mediaQueries.onlyDesktop);
      tableMatchMedia = window.matchMedia(mediaQueries.onlyTablet);
      mobileMatchMedia = window.matchMedia(mediaQueries.onlyMobile);

      // Add listeners
      desktopMatchMedia.addEventListener('change', handleQueryListener);
      tableMatchMedia.addEventListener('change', handleQueryListener);
      mobileMatchMedia.addEventListener('change', handleQueryListener);

      if (mobileMatchMedia.matches) {
        deviceFound = DeviceBreakpointsType.MOBILE;
      } else if (tableMatchMedia.matches) {
        deviceFound = DeviceBreakpointsType.TABLET;
      } else {
        deviceFound = DeviceBreakpointsType.DESKTOP;
      }
    }

    setDevice(deviceFound);
    return () => {
      desktopMatchMedia?.removeEventListener('change', handleQueryListener);
      tableMatchMedia?.removeEventListener('change', handleQueryListener);
      mobileMatchMedia?.removeEventListener('change', handleQueryListener);
    };
  }, [mediaQueries]);

  return device;
};
