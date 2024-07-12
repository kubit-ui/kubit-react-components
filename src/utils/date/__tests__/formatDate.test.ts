import { formatDate, formatDateToUTC } from '../formatDate';
import { locale } from '../locale';
import { FORMAT_DATE } from '../types';

describe('Format Dates', () => {
  it('Format D - Spanish', () => {
    locale.setLocale('es');
    const today = new Date('2022-12-09');
    const date = formatDate(today, FORMAT_DATE.d);
    expect(date).toBe('09/12/2022');
  });

  it('Format D - Korean', () => {
    locale.setLocale('ko-KR');
    const today = new Date('2022-12-09');
    const date = formatDate(today, FORMAT_DATE.d);
    expect(date).toBe('2022. 12. 09.');
  });

  it('Format DD - French', () => {
    locale.setLocale('fr');
    const today = new Date('2022-12-09');
    const date = formatDate(today, FORMAT_DATE.dd);
    expect(date).toContain('déc.');
  });

  it('Format DD - English', () => {
    locale.setLocale('en');
    const today = new Date('2022-12-09');
    const date = formatDate(today, FORMAT_DATE.dd);
    expect(date).toContain('Dec');
  });

  it('Format Custom string - English', () => {
    locale.setLocale('en');
    const today = new Date('2022-12-09');
    const date = formatDate(today, 'WW, MMMM DD, YYYY');

    expect(date).toBe('Friday, December 09, 2022');
  });

  it('Format Custom string - Spanish', () => {
    locale.setLocale('es');
    const today = new Date('2022-12-09');
    const date = formatDate(today, 'WW, DD [de] MMMM [de] YYYY');
    const date2 = formatDate(today, 'W, DD [de] MMM [de] YYYY');

    expect(date).toBe('viernes, 09 de diciembre de 2022');
    expect(date2).toBe('vie, 09 de dic de 2022');
  });

  it('Format Custom string - short', () => {
    const today = new Date('2022-12-09');
    const date = formatDate(today, 'D-M-YY');
    const date2 = formatDate(today, 'DD-MM-YYYY');
    expect(date).toBe('9-12-22');
    expect(date2).toBe('09-12-2022');
  });

  it('Format Custom string - with hours', () => {
    const today = new Date('2022-12-09 09:30:01');
    const date = formatDate(today, 'DD-MM-YYYY H:m:s');
    const date2 = formatDate(today, 'DD-MM-YYYY HH:mm:ss');
    expect(date).toBe('09-12-2022 9:30:1');
    expect(date2).toBe('09-12-2022 09:30:01');
  });

  it('Format Custom options - English', () => {
    locale.setLocale('en');
    const today = new Date('2022-12-09');
    const date = formatDate(today, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });

    expect(date).toBe('Friday, December 9, 2022');
  });
  // Format date to UTC time tests
  it('should return a Date object when given a valid Date object', () => {
    const date = new Date('2022-01-01T00:00:00Z');
    const result = formatDateToUTC(date);
    expect(result).toBeInstanceOf(Date);
  });

  it('should return a Date object when given a valid string representation of a date', () => {
    const dateString = '2022-01-01T00:00:00Z';
    const result = formatDateToUTC(dateString);
    expect(result).toBeInstanceOf(Date);
  });

  it('should return a Date object when given a valid number representing a timestamp', () => {
    const timestamp = 1640995200000; // January 1, 2022 00:00:00 UTC
    const result = formatDateToUTC(timestamp);
    expect(result).toBeInstanceOf(Date);
  });
  it('should return a Date object with the time set to 00:00:00 when given a Date object with a time of 00:00:00', () => {
    const date = new Date('2022-01-01T00:00:00');
    const result = formatDateToUTC(date);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result).toBeInstanceOf(Date);
    expect(result).toEqual(date);
  });
  it('should throw an error when given an invalid Date object', () => {
    const dateString = '2023-14-01';
    const date = new Date(dateString);
    expect(() => formatDateToUTC(date)).toThrow('Date is invalid');
    expect(() => formatDateToUTC(dateString)).toThrow('Date is invalid');
  });
});
