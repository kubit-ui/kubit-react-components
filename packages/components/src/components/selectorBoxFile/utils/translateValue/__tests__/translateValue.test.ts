import { translateValue } from '../translateValue';

describe('translateValue', () => {
  it('should translate a value from one range to another', () => {
    const result = translateValue({
      inputMax: 100,
      inputMin: 0,
      outputMax: 1,
      outputMin: 0,
      value: 50,
    });
    expect(result).toBe(0.5);
  });

  it('should translate a value from one range to another with different ranges', () => {
    const result = translateValue({
      inputMax: 200,
      inputMin: 0,
      outputMax: 2,
      outputMin: 0,
      value: 100,
    });
    expect(result).toBe(1);
  });

  it('should constrain the output value within the output range', () => {
    const result = translateValue({
      inputMax: 100,
      inputMin: 0,
      outputMax: 1,
      outputMin: 0,
      value: 150,
    });
    expect(result).toBe(1);
  });

  it('should handle negative input and output ranges', () => {
    const result = translateValue({
      inputMax: 100,
      inputMin: -100,
      outputMax: 1,
      outputMin: -1,
      value: 0,
    });
    expect(result).toBe(0);
  });

  it('should return outputMin when inputMin equals inputMax', () => {
    const result = translateValue({
      inputMax: 50,
      inputMin: 50,
      outputMax: 10,
      outputMin: 5,
      value: 50,
    });
    expect(result).toBe(5);
  });

  it('should constrain value below minimum to outputMin', () => {
    const result = translateValue({
      inputMax: 100,
      inputMin: 0,
      outputMax: 10,
      outputMin: 0,
      value: -50,
    });
    expect(result).toBe(0);
  });

  it('should handle decimal values', () => {
    const result = translateValue({
      inputMax: 1,
      inputMin: 0,
      outputMax: 100,
      outputMin: 0,
      value: 0.75,
    });
    expect(result).toBe(75);
  });
});
