import { ExpressionType } from '../types';

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
  s: [MATCH1TO2, 'seconds'],
  ss: [MATCH1TO2, 'seconds'],
  m: [MATCH1TO2, 'minutes'],
  mm: [MATCH1TO2, 'minutes'],
  H: [MATCH1TO2, 'hours'],
  HH: [MATCH1TO2, 'hours'],
  h: [MATCH1TO2, 'hours'],
  hh: [MATCH1TO2, 'hours'],
  D: [MATCH1TO2, 'day'],
  DD: [MATCH2, 'day'],
  M: [MATCH1TO2, 'month'],
  MM: [MATCH2, 'month'],
  Y: [MATCH_SIGNED, 'year'],
  YY: [MATCH2, 'year', parseTwoDigitYear],
  YYYY: [MATCH4, 'year'],
};
