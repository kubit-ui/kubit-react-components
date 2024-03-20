import { formatDate } from '../format';
import { locale } from '../locale';
import { FORMAT_DATE } from '../types';

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
