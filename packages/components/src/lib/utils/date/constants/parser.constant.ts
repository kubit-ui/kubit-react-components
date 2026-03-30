import type { ExpressionType } from '../types/parser.types';

const MATCH2 = /\d\d/; // 00 - 99
const MATCH4 = /\d{4}/; // 0000 - 9999
const MATCH1TO2 = /\d\d?/; // 0 - 99
const MATCH_SIGNED = /[+-]?\d+/; // -inf - inf

const parseTwoDigitYear = (year: string): number => {
  const numberYear = +year;
  const limitYear = +`${new Date().getFullYear() + 20}`.slice(2);

  return numberYear + (numberYear > limitYear ? 1900 : 2000);
};

export const EXPRESSIONS: ExpressionType = {
  d: [MATCH1TO2, 'day'],
  dd: [MATCH2, 'day'],
  H: [MATCH1TO2, 'hours'],
  h: [MATCH1TO2, 'hours'],
  HH: [MATCH1TO2, 'hours'],
  hh: [MATCH1TO2, 'hours'],
  m: [MATCH1TO2, 'minutes'],
  M: [MATCH1TO2, 'month'],
  mm: [MATCH1TO2, 'minutes'],
  MM: [MATCH2, 'month'],
  s: [MATCH1TO2, 'seconds'],
  ss: [MATCH1TO2, 'seconds'],
  y: [MATCH_SIGNED, 'year'],
  yy: [MATCH2, 'year', parseTwoDigitYear],
  yyyy: [MATCH4, 'year'],
};
