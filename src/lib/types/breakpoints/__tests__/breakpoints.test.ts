import { describe, expect, it } from 'vitest';

import { DEVICE_BREAKPOINTS, DeviceBreakpointsTypeUtils } from '../breakpoints';

describe('Breakpoints - DeviceBreakpointsTypeUtils', () => {
  describe('isMobile', () => {
    it('returns true for MOBILE', () => {
      expect(
        DeviceBreakpointsTypeUtils.isMobile(DEVICE_BREAKPOINTS.MOBILE),
      ).toBe(true);
    });
    it('returns false for other types', () => {
      expect(
        DeviceBreakpointsTypeUtils.isMobile(DEVICE_BREAKPOINTS.TABLET),
      ).toBe(false);
      expect(
        DeviceBreakpointsTypeUtils.isMobile(DEVICE_BREAKPOINTS.DESKTOP),
      ).toBe(false);
      expect(
        DeviceBreakpointsTypeUtils.isMobile(DEVICE_BREAKPOINTS.LARGE_DESKTOP),
      ).toBe(false);
    });
  });

  describe('isTablet', () => {
    it('returns true for TABLET', () => {
      expect(
        DeviceBreakpointsTypeUtils.isTablet(DEVICE_BREAKPOINTS.TABLET),
      ).toBe(true);
    });
    it('returns false for other types', () => {
      expect(
        DeviceBreakpointsTypeUtils.isTablet(DEVICE_BREAKPOINTS.MOBILE),
      ).toBe(false);
      expect(
        DeviceBreakpointsTypeUtils.isTablet(DEVICE_BREAKPOINTS.DESKTOP),
      ).toBe(false);
      expect(
        DeviceBreakpointsTypeUtils.isTablet(DEVICE_BREAKPOINTS.LARGE_DESKTOP),
      ).toBe(false);
    });
  });

  describe('isMobileOrTablet', () => {
    it('returns true for MOBILE and TABLET', () => {
      expect(
        DeviceBreakpointsTypeUtils.isMobileOrTablet(DEVICE_BREAKPOINTS.MOBILE),
      ).toBe(true);
      expect(
        DeviceBreakpointsTypeUtils.isMobileOrTablet(DEVICE_BREAKPOINTS.TABLET),
      ).toBe(true);
    });
    it('returns false for DESKTOP and LARGE_DESKTOP', () => {
      expect(
        DeviceBreakpointsTypeUtils.isMobileOrTablet(DEVICE_BREAKPOINTS.DESKTOP),
      ).toBe(false);
      expect(
        DeviceBreakpointsTypeUtils.isMobileOrTablet(
          DEVICE_BREAKPOINTS.LARGE_DESKTOP,
        ),
      ).toBe(false);
    });
  });

  describe('isDesktop', () => {
    it('returns true for DESKTOP', () => {
      expect(
        DeviceBreakpointsTypeUtils.isDesktop(DEVICE_BREAKPOINTS.DESKTOP),
      ).toBe(true);
    });
    it('returns false for other types', () => {
      expect(
        DeviceBreakpointsTypeUtils.isDesktop(DEVICE_BREAKPOINTS.MOBILE),
      ).toBe(false);
      expect(
        DeviceBreakpointsTypeUtils.isDesktop(DEVICE_BREAKPOINTS.TABLET),
      ).toBe(false);
      expect(
        DeviceBreakpointsTypeUtils.isDesktop(DEVICE_BREAKPOINTS.LARGE_DESKTOP),
      ).toBe(false);
    });
  });

  describe('isLargeDesktop', () => {
    it('returns true for LARGE_DESKTOP', () => {
      expect(
        DeviceBreakpointsTypeUtils.isLargeDesktop(
          DEVICE_BREAKPOINTS.LARGE_DESKTOP,
        ),
      ).toBe(true);
    });
    it('returns false for other types', () => {
      expect(
        DeviceBreakpointsTypeUtils.isLargeDesktop(DEVICE_BREAKPOINTS.MOBILE),
      ).toBe(false);
      expect(
        DeviceBreakpointsTypeUtils.isLargeDesktop(DEVICE_BREAKPOINTS.TABLET),
      ).toBe(false);
      expect(
        DeviceBreakpointsTypeUtils.isLargeDesktop(DEVICE_BREAKPOINTS.DESKTOP),
      ).toBe(false);
    });
  });

  describe('isDesktopOrLargeDesktop', () => {
    it('returns true for DESKTOP and LARGE_DESKTOP', () => {
      expect(
        DeviceBreakpointsTypeUtils.isDesktopOrLargeDesktop(
          DEVICE_BREAKPOINTS.DESKTOP,
        ),
      ).toBe(true);
      expect(
        DeviceBreakpointsTypeUtils.isDesktopOrLargeDesktop(
          DEVICE_BREAKPOINTS.LARGE_DESKTOP,
        ),
      ).toBe(true);
    });
    it('returns false for MOBILE and TABLET', () => {
      expect(
        DeviceBreakpointsTypeUtils.isDesktopOrLargeDesktop(
          DEVICE_BREAKPOINTS.MOBILE,
        ),
      ).toBe(false);
      expect(
        DeviceBreakpointsTypeUtils.isDesktopOrLargeDesktop(
          DEVICE_BREAKPOINTS.TABLET,
        ),
      ).toBe(false);
    });
  });
});
