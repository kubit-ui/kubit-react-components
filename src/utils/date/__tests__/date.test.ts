import {
  getAddDays,
  getAddMonths,
  getAddYears,
  getAllMonthNames,
  getAllWeekdayNames,
  getSubDays,
  getSubMonths,
  getSubYears,
  isAfter,
  isBefore,
  isDatesEqual,
} from '../date';
import { formatDate } from '../formatDate';

describe('Date functions', () => {
  const date1 = new Date('2022-01-01');
  const date2 = new Date('2022-02-01');
  const date3 = new Date('2022-01-01');

  it('should return true if date1 is after date2', () => {
    expect(isAfter(date1, date2)).toBe(false);
  });

  it('should return false if date1 is not after date2', () => {
    expect(isAfter(date2, date1)).toBe(true);
  });

  it('should return true if date1 is before date2', () => {
    expect(isBefore(date1, date2)).toBe(true);
  });

  it('should return false if date1 is not before date2', () => {
    expect(isBefore(date2, date1)).toBe(false);
  });

  it('should return true if date1 and date3 are equal', () => {
    expect(isDatesEqual(date1, date3)).toBe(true);
  });

  it('should return false if date1 and date2 are not equal', () => {
    expect(isDatesEqual(date1, date2)).toBe(false);
  });

  it('should return a new date with the specified number of days added', () => {
    const expectedDate = new Date('2022-01-06');
    expect(getAddDays(date1, 5)).toEqual(expectedDate);
  });

  it('should return a new date with the specified number of months added', () => {
    const expectedDate = formatDate(new Date('2022-06-01'), 'DD-MM-YYYY');
    expect(formatDate(getAddMonths(date1, 5), 'DD-MM-YYYY')).toEqual(expectedDate);
  });

  it('should return a new date with the specified number of years added', () => {
    const expectedDate = new Date('2027-01-01');
    expect(getAddYears(date1, 5)).toEqual(expectedDate);
  });

  it('should return a new date with the specified number of days subtracted', () => {
    const expectedDate = new Date('2021-12-27');
    expect(getSubDays(date1, 5)).toEqual(expectedDate);
  });

  it('should return a new date with the specified number of months subtracted', () => {
    const expectedDate = formatDate(new Date('2021-08-01'), 'DD-MM-YYYY');
    expect(formatDate(getSubMonths(date1, 5), 'DD-MM-YYYY')).toEqual(expectedDate);
  });

  it('should return a new date with the specified number of years subtracted', () => {
    const expectedDate = formatDate(new Date('2017-01-01'), 'DD-MM-YYYY');
    expect(formatDate(getSubYears(date1, 5), 'DD-MM-YYYY')).toEqual(expectedDate);
  });

  it('should return an array of all month names', () => {
    const expectedMonthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    expect(getAllMonthNames().sort()).toEqual(expectedMonthNames.sort());
  });

  it('should return an array of all weekday names', () => {
    const expectedWeekdayNames = [
      'Friday',
      'Saturday',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
    ];
    expect(getAllWeekdayNames('long', false).sort()).toEqual(expectedWeekdayNames.sort());
  });
});
