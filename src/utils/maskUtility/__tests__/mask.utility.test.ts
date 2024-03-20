import { MASK_TYPE } from '@/components/input/types';

import { cleanInputValue, formatMask, matchInputValue } from '../mask.utility';

const MASK = '## - ## - ####';
const PHONE_MASK = '+(##) ### ###';

describe('Mask utility', () => {
  it('formatMask - should return value formatted with -', () => {
    const result = formatMask('12345678', MASK);
    expect(result).toBe('12 - 34 - 5678');
  });

  it('formatMask - should return value formatted without last 2 numbers', () => {
    const result = formatMask('123456', MASK);
    expect(result).toBe('12 - 34 - 56');
  });

  it('formatMask - should return value formatted with any mask given', () => {
    const result = formatMask('12345699999', PHONE_MASK);
    expect(result).toBe('+(12) 345 699');
  });

  it('cleanInputValue numbers - should return value cleaned', () => {
    const result = cleanInputValue('12a - 34a - 56', MASK_TYPE.NUMBERS);
    expect(result).toBe('123456');
  });

  it('cleanInputValue letters - should return value cleaned', () => {
    const result = cleanInputValue('aa1 - bb2 - cc3', MASK_TYPE.LETTERS);
    expect(result).toBe('aabbcc');
  });

  it('cleanInputValue alphanumerics - should return value cleaned', () => {
    const result = cleanInputValue('1A - 2B - 3C', MASK_TYPE.ALPHANUMERIC);
    const result2 = cleanInputValue('1A - 2B - 3C');
    expect(result).toBe('1A2B3C');
    expect(result2).toBe('1A2B3C');
  });

  it('cleanInputValue letters hyphen space - should return value cleaned', () => {
    const result = cleanInputValue('aA1 - bB2 - cC3', MASK_TYPE.LETTERS_HYPHEN_SPACE);
    expect(result).toBe('aA - bB - cC');
  });

  it('cleanInputValue alphanumerics with space - should return value cleaned', () => {
    const result = cleanInputValue('1A - 2B - 3C', MASK_TYPE.ALPHANUMERIC_WITH_SPACES);
    expect(result).toBe('1A  2B  3C');
  });

  it('cleanInputValue number with space - should return value cleaned', () => {
    const result = cleanInputValue('12a - 34a - 56', MASK_TYPE.NUMBERS_WITH_SPACES);
    expect(result).toBe('12  34  56');
  });

  it('matchInputValue - with string', () => {
    //only accepts number
    const regex = '^[0-9]*$';
    const result = matchInputValue('1234', '1234a', regex);
    expect(result).toBe('1234');
  });

  it('matchInputValue - with regex', () => {
    //only accepts number
    const regex = new RegExp('^[0-9]*$');
    const result = matchInputValue('1234', '1234a', regex);
    expect(result).toBe('1234');
  });
});
