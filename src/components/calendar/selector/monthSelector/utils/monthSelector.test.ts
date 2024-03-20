import { keyLeftMove, keyRightMove, keyTabMove } from './monthSelector.utils';

describe('Month Selector utils', () => {
  it('should move to the left when left arrow key is pressed', () => {
    const result = keyLeftMove(1);
    const result2 = keyLeftMove(0);
    expect(result).toBe(0);
    expect(result2).toBe(new Date().getMonth());
  });
  it('should move to the right when right arrow key is pressed', () => {
    const result = keyRightMove(5);
    expect(result(1)).toBe(2);
    expect(result(5)).toBe(0);
  });
  it('should move when tab arrowy key is pressed', () => {
    const result = keyTabMove(5);
    expect(result).toBe(5);
  });
});
