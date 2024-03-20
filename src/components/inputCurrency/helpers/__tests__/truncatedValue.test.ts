import { truncatedValue } from '../truncatedValue';

describe('Utils truncatedValue', () => {
  it('truncatedValue default', () => {
    expect(truncatedValue('10000', 3)).toBe('10000');
  });
  it('truncatedValue default with dot', () => {
    expect(truncatedValue('100,00', 3)).toBe('100,00');
  });

  it('truncatedValue default with dot, different', () => {
    expect(truncatedValue('1', 5)).toBe('1');
  });
  it('truncatedValue with  numberOfDecimals > maxDecimals', () => {
    expect(truncatedValue('100.345678', 4)).toBe('100.3456');
  });
});
