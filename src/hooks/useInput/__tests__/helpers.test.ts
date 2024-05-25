import { limitValue } from '../helpers/limitValue';
import { modifyInputNumberValue } from '../helpers/modifyInputNumberValue';

describe('Input hook helpers', () => {
  test('LimitValue should return same value', () => {
    const value = 'limit';
    expect(limitValue(value, undefined, undefined, 5)).toBe(value);
  });
  test('LimitValue should return limited string value', () => {
    const value = 'limit0';
    expect(limitValue(value, undefined, undefined, 5)).toBe(value.substring(0, 5));
  });

  test('LimitValue should return max number value', () => {
    const value = 10;
    expect(limitValue(value, undefined, '5', undefined)).toBe('5');
  });
  test('LimitValue should return min number value', () => {
    const value = 0;
    expect(limitValue(value, '1', '5', undefined)).toBe('1');
  });
});

describe('modifyInputNumberValue', () => {
  it('should return true if the value is less than min', () => {
    const result = modifyInputNumberValue({ value: 5, min: 10 });
    expect(result).toBe(true);
  });

  it('should return true if the value is greater than max', () => {
    const result = modifyInputNumberValue({ value: 15, max: 10 });
    expect(result).toBe(true);
  });

  it('should return true if the length of the value is greater than maxLength', () => {
    const result = modifyInputNumberValue({ value: '12345', maxLength: 4 });
    expect(result).toBe(true);
  });

  it('should return false if the value is within the min and max range and does not exceed maxLength', () => {
    const result = modifyInputNumberValue({ value: 7, min: 5, max: 10, maxLength: 5 });
    expect(result).toBe(false);
  });
});
