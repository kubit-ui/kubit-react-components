import { keyLeftMove, keyRightMove } from './getTabMoves';

describe('getTabMoves', () => {
  it('keyRightMove in second tab', () => {
    const res = keyRightMove(4, 0, 3)(1);
    expect(res).toBe(2);
  });

  it('keyRightMove in last view tab', () => {
    const res = keyRightMove(4, 0, 3)(2);
    expect(res).toBe(0);
  });

  it('keyLeftMove in second tab', () => {
    const res = keyLeftMove(0, 3)(1);
    expect(res).toBe(0);
  });

  it('keyLeftMove in first view tab', () => {
    const res = keyLeftMove(0, 3)(0);
    expect(res).toBe(2);
  });
});
