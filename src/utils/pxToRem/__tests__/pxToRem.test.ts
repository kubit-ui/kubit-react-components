import { pxToRem } from '../pxToRem';

describe('utils - pxToRem', () => {
  it('pxToRem should return a number', () => {
    expect(pxToRem(50)).toEqual(expect.any(Number));
  });
});
