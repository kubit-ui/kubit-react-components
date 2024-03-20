import { sumMeasuresInRem } from '../sumMeasuresInRem';

describe('utils - sumMeasuresInRem', () => {
  it('sumMeasuresInRem should return a string', () => {
    expect(sumMeasuresInRem('3rem', '0.5rem')).toEqual(expect.any(String));
  });
  it('sumMeasuresInRem should return rem value', () => {
    const result = sumMeasuresInRem('3rem', '0.5rem');
    expect(result).toBe('3.5rem');
  });

  it('sumMeasuresInRem should sum px and return rem', () => {
    const result = sumMeasuresInRem('16px', '16px');
    expect(result).toBe('2rem');
  });

  it('sumMeasuresInRem should sum different units and return rem', () => {
    const result = sumMeasuresInRem('1rem', '16px');
    expect(result).toBe('2rem');
  });

  it('sumMeasuresInRem should return 0rem value when empty strings', () => {
    const result = sumMeasuresInRem('', '');
    expect(result).toBe('0rem');
  });
});
