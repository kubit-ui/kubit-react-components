import { describe, expect, it } from 'vitest';

import { keyLeftMove } from '../keLeftMove';

describe('keyLeftMove', () => {
  it('should move focus to previous tab when not at the beginning', () => {
    const moveLeft = keyLeftMove(0, 5);

    expect(moveLeft(3)).toBe(2);
    expect(moveLeft(2)).toBe(1);
    expect(moveLeft(1)).toBe(0);
  });

  it('should wrap around to the last visible tab when at the beginning', () => {
    const moveLeft = keyLeftMove(0, 5);

    expect(moveLeft(0)).toBe(4); // 0 - 1 + 5 = 4
  });

  it('should wrap around when moving before the position', () => {
    const moveLeft = keyLeftMove(2, 5);

    expect(moveLeft(2)).toBe(6); // position - 1 + numTabsInView = 2 - 1 + 5 = 6
    expect(moveLeft(1)).toBe(6);
  });

  it('should handle position greater than 0', () => {
    const moveLeft = keyLeftMove(3, 4);

    expect(moveLeft(5)).toBe(4);
    expect(moveLeft(4)).toBe(3);
    expect(moveLeft(3)).toBe(6); // 3 - 1 + 4 = 6
  });

  it('should work with single tab view', () => {
    const moveLeft = keyLeftMove(0, 1);

    expect(moveLeft(0)).toBe(0); // 0 - 1 + 1 = 0
  });

  it('should handle negative focus when at start position', () => {
    const moveLeft = keyLeftMove(0, 10);

    expect(moveLeft(0)).toBe(9); // -1 + 10 = 9
  });

  it('should move focus within visible range', () => {
    const moveLeft = keyLeftMove(5, 3);

    expect(moveLeft(7)).toBe(6);
    expect(moveLeft(6)).toBe(5);
    expect(moveLeft(5)).toBe(7); // 5 - 1 + 3 = 7
  });
});
