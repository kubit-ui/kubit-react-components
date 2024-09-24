import { formatDateToNative } from '../syntheticDate/helper/formatDateToNative';
import { syntheticDate } from '../syntheticDate/syntheticDate';

describe('syntheticDate test', () => {
  it('return a synthectic date event', () => {
    const { setDate } = syntheticDate('date');

    const date = '11-02-2020';
    const format = 'DD-MM-YYYY';
    const event = setDate(date, format);

    expect(event.type).toBe('change');
  });
  it('format the date correctly for a native input date', () => {
    const date = '11-02-2020';
    const format = 'DD-MM-YYYY';

    const rightFormatDate = formatDateToNative(date, format, false);

    expect(rightFormatDate).toBe('2020-02-11');
  });
  it('empty date when it doesnt comply with valid format', () => {
    const date = '2024-09-1';
    const format = 'YYYY-MM-DD';

    const rightFormatDate = formatDateToNative(date, format, false);

    expect(rightFormatDate).toBe('');
  });
  it('fill in the year with zeros when year is in the last position and value is less than four digits', () => {
    const date = '11-02-2';
    const format = 'DD-MM-YYYY';

    const rightFormatDate = formatDateToNative(date, format, false);

    expect(rightFormatDate).toBe('0002-02-11');
  });
});
