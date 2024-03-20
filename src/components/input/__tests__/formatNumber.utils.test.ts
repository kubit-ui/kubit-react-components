import { FormatNumber } from '../types';
import {
  checkValidFormattedNumber,
  formatNumber,
  getDecimalSeparator,
  getThousandSeparator,
  removeThousandSeparator,
} from '../utils/formatNumber';

const format: FormatNumber = {
  locale: 'en-US',
  style: 'decimal',
  currency: 'EUR',
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
};

describe('Utils aria', () => {
  it('If format number', () => {
    expect(formatNumber(1000, format)).toBe('1,000');
  });

  it('If valid value and locale', () => {
    expect(checkValidFormattedNumber('1000', format.locale)).toBeTruthy();
  });

  it('If not valid value without locale', () => {
    expect(checkValidFormattedNumber('1000a')).toBeFalsy();
  });

  it('removeThousandSeparator without locale', () => {
    expect(removeThousandSeparator('1,000.00')).toBe('1000.00');
  });

  it('removeThousandSeparator with locale', () => {
    expect(removeThousandSeparator('1,000', format.locale)).toBe('1000');
  });

  it('getThousandSeparator without locale', () => {
    expect(getThousandSeparator()).toBe(',');
  });

  it('getDecimalSeparator without locale', () => {
    expect(getDecimalSeparator()).toBe('.');
  });
});
