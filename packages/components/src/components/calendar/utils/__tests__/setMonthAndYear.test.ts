import { describe, expect, it } from 'vitest';

import { setMonth } from '../setMonth';
import { setYear } from '../setYear';

describe('setMonth', () => {
  it('should set the month of a date', () => {
    const date = new Date(2024, 0, 15); // January 15, 2024
    const result = setMonth(date, 5); // Set to June

    expect(date.getMonth()).toBe(5);
    expect(typeof result).toBe('number');
  });

  it('should handle month overflow correctly', () => {
    const date = new Date(2024, 0, 31); // January 31, 2024
    setMonth(date, 1); // Set to February

    // February doesn't have 31 days, so it overflows
    expect(date.getMonth()).toBeGreaterThanOrEqual(1);
  });

  it('should handle negative month values', () => {
    const date = new Date(2024, 5, 15); // June 15, 2024
    setMonth(date, -1); // Set to previous year's December

    expect(date.getMonth()).toBe(11);
    expect(date.getFullYear()).toBe(2023);
  });

  it('should handle month values greater than 11', () => {
    const date = new Date(2024, 5, 15); // June 15, 2024
    setMonth(date, 13); // Set to next year's February

    expect(date.getMonth()).toBe(1);
    expect(date.getFullYear()).toBe(2025);
  });

  it('should return a timestamp', () => {
    const date = new Date(2024, 0, 15);
    const result = setMonth(date, 6);

    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThan(0);
  });
});

describe('setYear', () => {
  it('should set the year of a date', () => {
    const date = new Date(2024, 5, 15); // June 15, 2024
    const result = setYear(date, 2025);

    expect(date.getFullYear()).toBe(2025);
    expect(typeof result).toBe('number');
  });

  it('should handle leap year transitions', () => {
    const date = new Date(2024, 1, 29); // February 29, 2024 (leap year)
    setYear(date, 2025); // 2025 is not a leap year

    // Date adjusts to February 28 or March 1
    expect(date.getFullYear()).toBe(2025);
  });

  it('should handle negative years', () => {
    const date = new Date(2024, 5, 15);
    setYear(date, -100);

    expect(date.getFullYear()).toBeLessThan(0);
  });

  it('should handle year 0', () => {
    const date = new Date(2024, 5, 15);
    setYear(date, 0);

    expect(date.getFullYear()).toBe(0);
  });

  it('should preserve month and day', () => {
    const date = new Date(2024, 5, 15); // June 15, 2024
    setYear(date, 2030);

    expect(date.getMonth()).toBe(5);
    expect(date.getDate()).toBe(15);
  });

  it('should return a timestamp', () => {
    const date = new Date(2024, 5, 15);
    const result = setYear(date, 2025);

    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThan(0);
  });

  it('should handle very large years', () => {
    const date = new Date(2024, 5, 15);
    setYear(date, 9999);

    expect(date.getFullYear()).toBe(9999);
  });
});
