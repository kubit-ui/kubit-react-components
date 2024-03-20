import { keyLeftMove, keyRightMove, keyTabMove } from './yearSelector.utils';

const yearList = [2010, 2011, 2012, 2013];

describe('Month Selector utils', () => {
  it('should move to the left when left arrow key is pressed', () => {
    const result = keyLeftMove(yearList);
    const result2 = keyLeftMove(yearList);
    expect(result(1)).toBe(0);
    expect(result2(0)).toBe(yearList.length - 1);
  });
  it('should move to the right when right arrow key is pressed', () => {
    const result = keyRightMove(yearList);
    expect(result(0)).toBe(1);
    expect(result(3)).toBe(0);
  });
  it('should move when tab arrowy key is pressed', () => {
    const result = keyTabMove(5);
    expect(result).toBe(5);
  });
});
