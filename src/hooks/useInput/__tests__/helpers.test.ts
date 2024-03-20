import { limitValue } from '../helpers/limitValue';

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
