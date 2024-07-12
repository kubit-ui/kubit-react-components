import { InputState, LABEL_TYPE } from '@/components/input/types';
import { formatDateToUTC } from '@/utils';

import { getMask, getPlaceholder, verifyDate, verifyFormat, verifyYear } from '../utils';

const format = 'DD-MM-YYYY';
const dateSeparator = 'to';
const today = 'Today';
const minDate = new Date('01-01-2000');
const maxDate = new Date();

describe('Input Date Utils', () => {
  test('Should get mask', async () => {
    const mask = '##-##-####';
    expect(getMask(format)).toBe(mask);
  });
  test('Should normalize date', async () => {
    const date = '2024-07-09T00:00';
    const newNormalizeDate = new Date(date);
    expect(formatDateToUTC(date)).toStrictEqual(newNormalizeDate);
  });
  test('Should verify length with no range date', async () => {
    const value = '01-06-2023';
    expect(verifyDate(format, value, minDate, maxDate, dateSeparator, false, today)).toBe(true);
  });

  test('Should verify length with range date', async () => {
    const value = '01-06-2023 to 04-06-2023';
    expect(verifyDate(format, value, minDate, maxDate, dateSeparator, true, today)).toBe(true);
  });
  test('Should verify February 29th at leap year', async () => {
    const value = '29-02-2020';
    expect(verifyDate(format, value, minDate, maxDate, dateSeparator, false, today)).toBe(true);
  });
  test('Should verify dates are ordered like YYYY-MM-DD', async () => {
    const value = '29-02-2020';
    const format = 'XX-MM-YYYY';
    expect(verifyDate(format, value, minDate, maxDate, dateSeparator, false, today)).toBe(false);
  });
  test('Should verify month', async () => {
    const value = '03-40-2020';
    expect(verifyDate(format, value, minDate, maxDate, dateSeparator, false, today)).toBe(false);
  });
  test('Should verify year is between minDate and maxDate', async () => {
    expect(verifyYear('2030-03-30', minDate, maxDate)).toBe(false);
  });
  test('Should verify getPlaceholder returns the same placeholder with labelType=STANDARD', async () => {
    const placeholder = 'example';
    const state = InputState.EMPTY;
    const labelType = LABEL_TYPE.STANDARD;

    const resultExpected = 'example';
    expect(getPlaceholder(placeholder, state, labelType)).toBe(resultExpected);
  });
  test('Should verify getPlaceholder returns undefined with labelType!=STANDARD and state=EMPTY', async () => {
    const placeholder = 'example';
    const state = InputState.EMPTY;
    const labelType = LABEL_TYPE.FILLED;

    const resultExpected = undefined;
    expect(getPlaceholder(placeholder, state, labelType)).toBe(resultExpected);
  });
  test('Should verify getPlaceholder returns the same placeholder with labelType!=STANDARD and state=ACTIVE', async () => {
    const placeholder = 'example';
    const state = InputState.ACTIVE;
    const labelType = LABEL_TYPE.FILLED;

    const resultExpected = 'example';
    expect(getPlaceholder(placeholder, state, labelType)).toBe(resultExpected);
  });
  test('Should call verifyFormatRangeDate', async () => {
    const value = '2023-11-21 to 2023-13-21';
    const minDate = formatDateToUTC(new Date('01-01-2000'));
    const maxDate = formatDateToUTC(new Date());
    const today = 'Today,';
    const dateSeparator = 'to';
    const format = 'DD-MM-YYYY';
    const resultExpected = { hasError: true, valueFormatted: ['2023-11-21', '2023-13-21'] };
    const isRange = true;
    expect(
      verifyFormat(format, value, minDate, maxDate, today, dateSeparator, isRange)
    ).toStrictEqual(resultExpected);
  });
  test('Should call verifyFormatRangeDate without today and dateSeparator', async () => {
    const value = '2023-11-21 to 2023-13-21';
    const minDate = formatDateToUTC(new Date('01-01-2000'));
    const maxDate = formatDateToUTC(new Date());
    const today = undefined;
    const dateSeparator = undefined;
    const format = 'DD-MM-YYYY';
    const resultExpected = { hasError: true, valueFormatted: ['2023-11-21', 'to2023-13-', '21'] };
    const isRange = true;
    expect(
      verifyFormat(format, value, minDate, maxDate, dateSeparator, today, isRange)
    ).toStrictEqual(resultExpected);
  });
});
