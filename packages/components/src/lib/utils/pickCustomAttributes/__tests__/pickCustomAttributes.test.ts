import { pickCustomAttributes } from '../pickCustomAttributes';

describe('pickCustomAttributes', () => {
  it('should return an empty object if no attributes are provided', () => {
    const result = pickCustomAttributes();
    expect(result).toEqual({});
  });

  it('should convert boolean values to strings', () => {
    const attributes = { 'aria-hidden': false, 'data-test': true };
    const result = pickCustomAttributes(attributes);
    expect(result).toEqual({ 'aria-hidden': 'false', 'data-test': 'true' });
  });

  it('should keep string values as strings', () => {
    const attributes = { 'aria-label': 'label', 'data-test': 'value' };
    const result = pickCustomAttributes(attributes);
    expect(result).toEqual({ 'aria-label': 'label', 'data-test': 'value' });
  });

  it('should handle mixed string and boolean values', () => {
    const attributes = { 'aria-hidden': true, 'data-test': 'value' };
    const result = pickCustomAttributes(attributes);
    expect(result).toEqual({ 'aria-hidden': 'true', 'data-test': 'value' });
  });

  it('should handle empty attributes object', () => {
    const attributes = {};
    const result = pickCustomAttributes(attributes);
    expect(result).toEqual({});
  });
});
