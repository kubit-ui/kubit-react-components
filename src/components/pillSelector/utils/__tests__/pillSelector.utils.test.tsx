import { keyLeftMove, keyRightMove } from '../pillSelector.utils';

const pills = [
  {
    label: 'PillSelector label',
    value: 1,
  },
  {
    label: 'PillSelector',
    value: 2,
  },
];

describe('PillSelector Utils', () => {
  it('keyRightMove - when called, focus should increase in one', () => {
    expect(keyRightMove(pills)(0)).toBe(1);
  });
  it('keyRightMove - when new focus overpass the pill length, should restart in 0', () => {
    expect(keyRightMove(pills)(1)).toBe(0);
  });

  it('keyLeftMove - when called, focus should decrease in one', () => {
    expect(keyLeftMove(pills)(1)).toBe(0);
  });
  it('keyLeftMove - when new focus is less than 0, should restart in the last pill', () => {
    expect(keyLeftMove(pills)(0)).toBe(1);
  });
});
