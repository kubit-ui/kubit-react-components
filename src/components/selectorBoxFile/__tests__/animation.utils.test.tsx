import {
  getBottomBarWith,
  getLeftBarHeight,
  getRightBarHeight,
  getTopBarWith,
} from '../utils/animation.utils';

describe('animation utils', () => {
  it('should return the total width', () => {
    const result = getTopBarWith(100);
    expect(result).toBe(100);
  });

  it('should return the correct width for the top bar', () => {
    const result = getTopBarWith(10);
    expect(result).toBe(40);
  });

  it('should return the correct width for the right bar', () => {
    const result = getRightBarHeight(30);
    expect(result).toBe(20);
  });

  it('should return the correct width for the bottom bar', () => {
    const result = getBottomBarWith(60);
    expect(result).toBe(40);
  });

  it('should return the correct width for the left bar', () => {
    const result = getLeftBarHeight(90);
    expect(result).toBe(60);
  });
});
