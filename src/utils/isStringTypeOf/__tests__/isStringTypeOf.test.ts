import { isStringTypeOf } from '../isStringTypeOf';

describe('isStringTypeOf utility', () => {
  it('should return true', () => {
    const value = 'This is a string';
    expect(isStringTypeOf(value)).toBeTruthy();
  });
  it('should return false', () => {
    const value = 23;
    expect(isStringTypeOf(value)).toBeFalsy();
  });
});
