import { describe, expect, it } from 'vitest';

import { keyRightMove } from '../keyRightMove';

describe('keyRightMove', () => {
  it('should move focus to next tab when not at the end', () => {
    const moveRight = keyRightMove(10, 0, 5);

    expect(moveRight(0)).toBe(1);
    expect(moveRight(1)).toBe(2);
    expect(moveRight(2)).toBe(3);
  });

  it('should wrap around to the first visible tab when at the end of visible range', () => {
    const moveRight = keyRightMove(10, 0, 5);

    expect(moveRight(4)).toBe(0); // position + numTabsInView = 5, so 4 + 1 = 5 wraps to position (0)
  });

  it('should wrap around when reaching total length of options', () => {
    const moveRight = keyRightMove(10, 0, 5);

    expect(moveRight(9)).toBe(0); // prevFocus + 1 >= lengthOptions, return position
  });

  it('should handle position greater than 0', () => {
    const moveRight = keyRightMove(15, 5, 5);

    expect(moveRight(5)).toBe(6);
    expect(moveRight(8)).toBe(9);
    expect(moveRight(9)).toBe(5); // 9 + 1 = 10 which equals position + numTabsInView (5 + 5)
  });

  it('should work with single tab view', () => {
    const moveRight = keyRightMove(5, 0, 1);

    expect(moveRight(0)).toBe(0); // 0 + 1 = 1 equals position + numTabsInView (0 + 1), wrap to position
  });

  it('should handle edge case at boundary', () => {
    const moveRight = keyRightMove(10, 2, 5);

    expect(moveRight(6)).toBe(2); // 6 + 1 = 7 equals position + numTabsInView (2 + 5)
  });

  it('should move within visible range correctly', () => {
    const moveRight = keyRightMove(20, 10, 5);

    expect(moveRight(10)).toBe(11);
    expect(moveRight(11)).toBe(12);
    expect(moveRight(13)).toBe(14);
    expect(moveRight(14)).toBe(10); // 14 + 1 = 15 equals position + numTabsInView (10 + 5)
  });

  it('should wrap when at last option in total list', () => {
    const moveRight = keyRightMove(8, 3, 5);

    expect(moveRight(7)).toBe(3); // 7 + 1 = 8 >= lengthOptions
  });

  it('should handle case where numTabsInView equals lengthOptions', () => {
    const moveRight = keyRightMove(5, 0, 5);

    expect(moveRight(3)).toBe(4);
    expect(moveRight(4)).toBe(0); // 4 + 1 = 5 equals position + numTabsInView and >= lengthOptions
  });
});
