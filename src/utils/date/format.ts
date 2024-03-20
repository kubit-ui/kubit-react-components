import { FORMATTING_TOKENS, MACRO_TOKEN_TO_FORMAT_OPTS } from './constants';
import { locale } from './locale';
import { DateFormatOptions, FORMAT_DATE } from './types/format.types';

const addZero = (value: number) => `${value < 10 ? '0' : ''}${value}`;

export const formatDate = (
  date: Date,
  format: DateFormatOptions | FORMAT_DATE | string
): string => {
  const formatAux = typeof format === 'string' ? MACRO_TOKEN_TO_FORMAT_OPTS[format] : format;

  if (typeof format === 'string' && !formatAux) {
    const formatParts = format.match(FORMATTING_TOKENS) || [];
    const matches: { [key: string]: [string, (value: Date) => string] } = {
      YY: ['year', (value: Date) => `${new Date(value).getFullYear()}`.slice(-2)],
      YYYY: ['year', (value: Date) => `${new Date(value).getFullYear()}`],
      M: ['month', (value: Date) => `${new Date(value).getMonth() + 1}`],
      MM: ['month', (value: Date) => `${addZero(new Date(value).getMonth() + 1)}`],
      MMM: [
        'month',
        (value: Date) => new Date(value).toLocaleString(locale.getLocale(), { month: 'short' }),
      ],
      MMMM: [
        'month',
        (value: Date) => new Date(value).toLocaleString(locale.getLocale(), { month: 'long' }),
      ],
      D: ['day', (value: Date) => `${new Date(value).getDate()}`],
      DD: ['day', (value: Date) => `${addZero(new Date(value).getDate())}`],
      W: [
        'weekday',
        (value: Date) => new Date(value).toLocaleString(locale.getLocale(), { weekday: 'short' }),
      ],
      WW: [
        'weekday',
        (value: Date) => new Date(value).toLocaleString(locale.getLocale(), { weekday: 'long' }),
      ],
      H: ['hour', (value: Date) => `${new Date(value).getHours()}`],
      HH: ['hour', (value: Date) => `${addZero(new Date(value).getHours())}`],
      m: ['minute', (value: Date) => `${new Date(value).getMinutes()}`],
      mm: ['minute', (value: Date) => `${addZero(new Date(value).getMinutes())}`],
      s: ['second', (value: Date) => `${new Date(value).getSeconds()}`],
      ss: ['second', (value: Date) => `${addZero(new Date(value).getSeconds())}`],
    };
    const values = formatParts.map((token: string) => {
      const parseTo = matches[token];
      const key = parseTo && parseTo[0];
      const value = parseTo && parseTo[1](date);
      return key ? value : token;
    });

    return values.join('').replace(/[\\[\]]/g, '');
  }

  return date.toLocaleString(locale.getLocale(), {
    ...formatAux,
  });
};
