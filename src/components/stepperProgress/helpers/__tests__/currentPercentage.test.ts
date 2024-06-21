import { currentPercentage } from '../currentPercentage';

describe('currentPercentage', () => {
  it('currentPercentage default', () => {
    expect(currentPercentage(1, 0, 2)).toBe(50);
  });
  it('currentPercentage with 0', () => {
    expect(currentPercentage(0, 0, 2)).toBe(0);
  });
  it('currentPercentage with 100', () => {
    expect(currentPercentage(2, 0, 2)).toBe(100);
  });
});
