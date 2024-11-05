import { translateValue } from '../translateValue';

describe('translateValue', () => {
  it('should translate a value from one range to another', () => {
    const result = translateValue({
      inputMin: 0,
      inputMax: 100,
      outputMin: 0,
      outputMax: 1,
      value: 50,
    });
    expect(result).toBe(0.5);
  });

  it('should translate a value from one range to another with different ranges', () => {
    const result = translateValue({
      inputMin: 0,
      inputMax: 200,
      outputMin: 0,
      outputMax: 2,
      value: 100,
    });
    expect(result).toBe(1);
  });

  it('should constrain the output value within the output range', () => {
    const result = translateValue({
      inputMin: 0,
      inputMax: 100,
      outputMin: 0,
      outputMax: 1,
      value: 150,
    });
    expect(result).toBe(1);
  });

  it('should handle negative input and output ranges', () => {
    const result = translateValue({
      inputMin: -100,
      inputMax: 100,
      outputMin: -1,
      outputMax: 1,
      value: 0,
    });
    expect(result).toBe(0);
  });
});
