import { isValidDate } from '../validateDate';

describe('isValidDate', () => {
  it('should return true for a valid date', () => {
    const validDate = new Date('2022-01-01');
    expect(isValidDate(validDate)).toBe(true);
  });
  it('should return false for an invalid date', () => {
    const invalidDate = new Date('2022-22-30');
    expect(isValidDate(invalidDate)).toBe(false);
  });
});
