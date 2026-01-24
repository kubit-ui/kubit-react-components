import {
  firstYear,
  keyDownMove,
  keyLeftMove,
  keyRightMove,
  keyTabMove,
  keyUpMove,
  lastYear,
} from './yearSelector.utils';

const yearList = [2010, 2011, 2012, 2013];
const firstYearIndex = firstYear(yearList);
const lastYearIndex = lastYear(yearList);

describe('Month Selector utils', () => {
  it('keyLeftMove - should move to the left when left arrow key is pressed', () => {
    const keyLeftFunction = keyLeftMove(yearList);

    const previous = firstYearIndex;
    const previous2 = lastYearIndex;

    const result = keyLeftFunction(previous);
    const result2 = keyLeftFunction(previous2);
    expect(result).toBe(lastYearIndex);
    expect(result2).toBe(previous2 - 1);
  });
  it('keyRightMove - should move to the right when right arrow key is pressed', () => {
    const keyRightFunction = keyRightMove(yearList);

    const previous = lastYearIndex;
    const previous2 = firstYearIndex;

    const result = keyRightFunction(previous);
    const result2 = keyRightFunction(previous2);
    expect(result).toBe(firstYearIndex);
    expect(result2).toBe(previous2 + 1);
  });
  it('keyUpMove - should move to the up when up arrow key is pressed', () => {
    const keyUpFunction = keyUpMove(yearList);

    const previous = firstYearIndex;
    const previous2 = 4;
    const previous3 = 5;

    const result = keyUpFunction(previous);
    const result2 = keyUpFunction(previous2);
    const result3 = keyUpFunction(previous3);
    expect(result).toBe(lastYearIndex);
    expect(result2).toBe(firstYearIndex);
    expect(result3).toBe(previous3 - 4);
  });
  it('keyDownMove - should move to the down when down arrow key is pressed', () => {
    const keyDownFunction = keyDownMove(yearList);

    const previous = lastYearIndex;
    const previous2 = lastYearIndex + 1;
    const previous3 = lastYearIndex - 5;

    const result = keyDownFunction(previous);
    const result2 = keyDownFunction(previous2);
    const result3 = keyDownFunction(previous3);
    expect(result).toBe(firstYearIndex);
    expect(result2).toBe(lastYearIndex);
    expect(result3).toBe(previous3 + 4);
  });
  it('should move when tab arrowy key is pressed', () => {
    const keyTabFunction = keyTabMove;

    const previous = 3;

    const result = keyTabFunction(previous);
    expect(result).toBe(previous);
  });
});
