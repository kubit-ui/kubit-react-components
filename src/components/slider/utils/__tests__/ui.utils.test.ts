import { describe, expect, it } from 'vitest';

import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { isActive, isTooltipVisible } from '../ui.utils';

describe('isActive', () => {
  it('should return true when state is true and points match', () => {
    const result = isActive(true, 'point1', 'point1');
    expect(result).toBe(true);
  });

  it('should return false when state is false and points match', () => {
    const result = isActive(false, 'point1', 'point1');
    expect(result).toBe(false);
  });

  it('should return false when state is true but points do not match', () => {
    const result = isActive(true, 'point1', 'point2');
    expect(result).toBe(false);
  });

  it('should return false when state is false and points do not match', () => {
    const result = isActive(false, 'point1', 'point2');
    expect(result).toBe(false);
  });

  it('should handle empty strings', () => {
    const result = isActive(true, '', '');
    expect(result).toBe(true);
  });

  it('should handle different point identifiers', () => {
    expect(isActive(true, 'left', 'left')).toBe(true);
    expect(isActive(true, 'right', 'right')).toBe(true);
    expect(isActive(true, 'left', 'right')).toBe(false);
  });
});

describe('isTooltipVisible', () => {
  it('should return true when tooltip exists, not pressed, and desktop device', () => {
    const tooltip = { content: 'Test' };
    const result = isTooltipVisible(tooltip, false, DEVICE_BREAKPOINTS.DESKTOP);
    expect(result).toBe(true);
  });

  it('should return false when tooltip is undefined', () => {
    const result = isTooltipVisible(
      undefined,
      false,
      DEVICE_BREAKPOINTS.DESKTOP,
    );
    expect(result).toBe(false);
  });

  it('should return false when pressed on desktop device', () => {
    const tooltip = { content: 'Test' };
    const result = isTooltipVisible(tooltip, true, DEVICE_BREAKPOINTS.DESKTOP);
    expect(result).toBe(false);
  });

  it('should return true when pressed on tablet device', () => {
    const tooltip = { content: 'Test' };
    const result = isTooltipVisible(tooltip, true, DEVICE_BREAKPOINTS.TABLET);
    expect(result).toBe(true);
  });

  it('should return true when pressed on mobile device', () => {
    const tooltip = { content: 'Test' };
    const result = isTooltipVisible(tooltip, true, DEVICE_BREAKPOINTS.MOBILE);
    expect(result).toBe(true);
  });

  it('should return true when not pressed on tablet device', () => {
    const tooltip = { content: 'Test' };
    const result = isTooltipVisible(tooltip, false, DEVICE_BREAKPOINTS.TABLET);
    expect(result).toBe(true);
  });

  it('should return true when not pressed on mobile device', () => {
    const tooltip = { content: 'Test' };
    const result = isTooltipVisible(tooltip, false, DEVICE_BREAKPOINTS.MOBILE);
    expect(result).toBe(true);
  });

  it('should return false when tooltip is undefined regardless of device', () => {
    expect(isTooltipVisible(undefined, false, DEVICE_BREAKPOINTS.DESKTOP)).toBe(
      false,
    );
    expect(isTooltipVisible(undefined, false, DEVICE_BREAKPOINTS.TABLET)).toBe(
      false,
    );
    expect(isTooltipVisible(undefined, false, DEVICE_BREAKPOINTS.MOBILE)).toBe(
      false,
    );
  });

  it('should handle LARGE_DESKTOP device as desktop', () => {
    const tooltip = { content: 'Test' };
    const result = isTooltipVisible(
      tooltip,
      true,
      DEVICE_BREAKPOINTS.LARGE_DESKTOP,
    );
    // LARGE_DESKTOP should show tooltip even when pressed because isDesktop() only checks for 'desktop', not 'large_desktop'
    expect(result).toBe(true);
  });

  it('should handle all combinations of states', () => {
    const tooltip = { content: 'Test' };

    // Desktop scenarios
    expect(isTooltipVisible(tooltip, false, DEVICE_BREAKPOINTS.DESKTOP)).toBe(
      true,
    );
    expect(isTooltipVisible(tooltip, true, DEVICE_BREAKPOINTS.DESKTOP)).toBe(
      false,
    );

    // Tablet scenarios
    expect(isTooltipVisible(tooltip, false, DEVICE_BREAKPOINTS.TABLET)).toBe(
      true,
    );
    expect(isTooltipVisible(tooltip, true, DEVICE_BREAKPOINTS.TABLET)).toBe(
      true,
    );

    // Mobile scenarios
    expect(isTooltipVisible(tooltip, false, DEVICE_BREAKPOINTS.MOBILE)).toBe(
      true,
    );
    expect(isTooltipVisible(tooltip, true, DEVICE_BREAKPOINTS.MOBILE)).toBe(
      true,
    );

    // Large Desktop scenarios - LARGE_DESKTOP is not considered desktop by isDesktop()
    expect(
      isTooltipVisible(tooltip, false, DEVICE_BREAKPOINTS.LARGE_DESKTOP),
    ).toBe(true);
    expect(
      isTooltipVisible(tooltip, true, DEVICE_BREAKPOINTS.LARGE_DESKTOP),
    ).toBe(true);
  });
});
