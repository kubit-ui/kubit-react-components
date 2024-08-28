import {
  keyDownMove,
  keyLeftMove,
  keyRightMove,
  keyTabMove,
  keyUpMove,
} from './monthSelector.utils';

const firstMonth = 0;
const lastMonth = 11;

describe('Month Selector utils', () => {
  it('keyLeftMove - maxDate and currentDate in same year - should move to the left when left arrow key is pressed', () => {
    const maxDate = new Date(2023, 8, 15);
    const currentDate = new Date(2023, 8, 22);
    const minDate = new Date(2000, 0, 15);

    const keyLeftFunction = keyLeftMove({ currentDate, maxDate, minDate });

    const previous1 = firstMonth;
    const previous2 = 5;
    const result1 = keyLeftFunction(previous1);
    expect(result1).toBe(maxDate.getMonth());
    const result2 = keyLeftFunction(previous2);
    expect(result2).toBe(previous2 - 1);
  });
  it('keyLeftMove - minDate and currentDate in same year - should move to the left when left arrow key is pressed', () => {
    const maxDate = new Date(2025, 8, 15);
    const currentDate = new Date(2023, 8, 22);
    const minDate = new Date(2023, 0, 15);

    const keyLeftFunction = keyLeftMove({ currentDate, maxDate, minDate });

    const previous1 = minDate.getMonth();
    const previous2 = 5;
    const result1 = keyLeftFunction(previous1);
    expect(result1).toBe(lastMonth);
    const result2 = keyLeftFunction(previous2);
    expect(result2).toBe(previous2 - 1);
  });
  it('keyLeftMove - currentDate year is different than minDate and maxDate - should move to the left when left arrow key is pressed', () => {
    const maxDate = new Date(2025, 8, 15);
    const currentDate = new Date(2023, 8, 22);
    const minDate = new Date(2000, 0, 15);

    const keyLeftFunction = keyLeftMove({ currentDate, maxDate, minDate });

    const previous1 = firstMonth;
    const previous2 = 5;
    const result1 = keyLeftFunction(previous1);
    expect(result1).toBe(lastMonth);
    const result2 = keyLeftFunction(previous2);
    expect(result2).toBe(previous2 - 1);
  });
  it('keyRightMove - maxDate and currentDate in same year - should move to the right when right arrow key is pressed', () => {
    const maxDate = new Date(2023, 8, 15);
    const currentDate = new Date(2023, 8, 22);
    const minDate = new Date(2000, 0, 15);

    const keyRightFunction = keyRightMove({ currentDate, maxDate, minDate });

    const previous1 = maxDate.getMonth();
    const previous2 = 5;
    const result1 = keyRightFunction(previous1);
    expect(result1).toBe(firstMonth);
    const result2 = keyRightFunction(previous2);
    expect(result2).toBe(previous2 + 1);
  });
  it('keyRightMove - minDate and currentDate in same year - should move to the right when right arrow key is pressed', () => {
    const maxDate = new Date(2025, 8, 15);
    const currentDate = new Date(2023, 8, 22);
    const minDate = new Date(2023, 0, 15);

    const keyRightFunction = keyRightMove({ currentDate, maxDate, minDate });

    const previous1 = lastMonth;
    const previous2 = 5;
    const result1 = keyRightFunction(previous1);
    expect(result1).toBe(minDate.getMonth());
    const result2 = keyRightFunction(previous2);
    expect(result2).toBe(previous2 + 1);
  });
  it('keyRightMove - currentDate year is different than minDate and maxDate - should move to the right when right arrow key is pressed', () => {
    const maxDate = new Date(2025, 8, 15);
    const currentDate = new Date(2023, 8, 22);
    const minDate = new Date(2000, 0, 15);

    const keyRightFunction = keyRightMove({ currentDate, maxDate, minDate });

    const previous1 = lastMonth;
    const previous2 = 5;
    const result1 = keyRightFunction(previous1);
    expect(result1).toBe(firstMonth);
    const result2 = keyRightFunction(previous2);
    expect(result2).toBe(previous2 + 1);
  });
  it('keyUpMove - maxDate and currentDate in same year - should move up when up arrow key is pressed', () => {
    const maxDate = new Date(2023, 8, 15);
    const currentDate = new Date(2023, 8, 22);
    const minDate = new Date(2000, 0, 15);

    const keyUpFunction = keyUpMove({ currentDate, maxDate, minDate });

    const previous1 = firstMonth;
    const previous2 = 2;
    const previous3 = 4;
    const result1 = keyUpFunction(previous1);
    expect(result1).toBe(maxDate.getMonth());
    const result2 = keyUpFunction(previous2);
    expect(result2).toBe(firstMonth);
    const result3 = keyUpFunction(previous3);
    expect(result3).toBe(previous3 - 3);
  });
  it('keyUpMove - minDate and currentDate in same year - should move up when up arrow key is pressed', () => {
    const maxDate = new Date(2025, 8, 15);
    const currentDate = new Date(2023, 8, 22);
    const minDate = new Date(2023, 0, 15);

    const keyUpFunction = keyUpMove({ currentDate, maxDate, minDate });

    const previous1 = minDate.getMonth();
    const previous2 = minDate.getMonth() + 3;
    const previous3 = minDate.getMonth() + 2;
    const result1 = keyUpFunction(previous1);
    expect(result1).toBe(lastMonth);
    const result2 = keyUpFunction(previous2);
    expect(result2).toBe(previous2 - 3);
    const result3 = keyUpFunction(previous3);
    expect(result3).toBe(minDate.getMonth());
  });
  it('keyUpMove - currentDate year is different than minDate and maxDate - should move up when up arrow key is pressed', () => {
    const maxDate = new Date(2025, 8, 15);
    const currentDate = new Date(2023, 8, 22);
    const minDate = new Date(2000, 0, 15);

    const keyUpFunction = keyUpMove({ currentDate, maxDate, minDate });

    const previous1 = firstMonth;
    const previous2 = 3;
    const previous3 = 2;
    const result1 = keyUpFunction(previous1);
    expect(result1).toBe(lastMonth);
    const result2 = keyUpFunction(previous2);
    expect(result2).toBe(previous2 - 3);
    const result3 = keyUpFunction(previous3);
    expect(result3).toBe(firstMonth);
  });
  it('keyDownMove - maxDate and currentDate in same year - should move up when up arrow key is pressed', () => {
    const maxDate = new Date(2023, 8, 15);
    const currentDate = new Date(2023, 8, 22);
    const minDate = new Date(2000, 0, 15);

    const keyDownFunction = keyDownMove({ currentDate, maxDate, minDate });

    const previous1 = maxDate.getMonth();
    const previous2 = 1;
    const previous3 = maxDate.getMonth() + 3;
    const result1 = keyDownFunction(previous1);
    expect(result1).toBe(firstMonth);
    const result2 = keyDownFunction(previous2);
    expect(result2).toBe(previous2 + 3);
    const result3 = keyDownFunction(previous3);
    expect(result3).toBe(maxDate.getMonth());
  });
  it('keyDownMove - minDate and currentDate in same year - should move up when up arrow key is pressed', () => {
    const maxDate = new Date(2025, 8, 15);
    const currentDate = new Date(2023, 8, 22);
    const minDate = new Date(2023, 0, 15);

    const keyDownFunction = keyDownMove({ currentDate, maxDate, minDate });

    const previous1 = lastMonth;
    const previous2 = minDate.getMonth() + 3;
    const previous3 = minDate.getMonth() + 2;
    const result1 = keyDownFunction(previous1);
    expect(result1).toBe(minDate.getMonth());
    const result2 = keyDownFunction(previous2);
    expect(result2).toBe(lastMonth);
    const result3 = keyDownFunction(previous3);
    expect(result3).toBe(previous3 + 3);
  });
  it('keyDownMove - currentDate year is different than minDate and maxDate - should move up when up arrow key is pressed', () => {
    const maxDate = new Date(2025, 8, 15);
    const currentDate = new Date(2023, 8, 22);
    const minDate = new Date(2000, 0, 15);

    const keyDownFunction = keyDownMove({ currentDate, maxDate, minDate });

    const previous1 = lastMonth;
    const previous2 = 8;
    const previous3 = 4;
    const result1 = keyDownFunction(previous1);
    expect(result1).toBe(firstMonth);
    const result2 = keyDownFunction(previous2);
    expect(result2).toBe(lastMonth);
    const result3 = keyDownFunction(previous3);
    expect(result3).toBe(previous3 + 3);
  });
  it('keyTabMove - should return previous', () => {
    const previous = 5;
    const result = keyTabMove(previous);
    expect(result).toBe(previous);
  });
});
