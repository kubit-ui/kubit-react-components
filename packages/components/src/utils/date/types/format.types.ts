export interface DateFormatOptions {
  weekday?: Intl.DateTimeFormatOptions['weekday'];
  year?: Intl.DateTimeFormatOptions['year'];
  month?: Intl.DateTimeFormatOptions['month'];
  day?: Intl.DateTimeFormatOptions['day'];
  hour?: Intl.DateTimeFormatOptions['hour'];
  minute?: Intl.DateTimeFormatOptions['minute'];
  second?: Intl.DateTimeFormatOptions['second'];
  timeZoneName?: Intl.DateTimeFormatOptions['timeZoneName'];
  hour12?: Intl.DateTimeFormatOptions['hour12'];
  hourCycle?: Intl.DateTimeFormatOptions['hourCycle'];
}

export type FormatDateType =
  | 'd'
  | 'dd'
  | 'ddd'
  | 'dddd'
  | 'f'
  | 'ff'
  | 'fff'
  | 'F'
  | 'FF'
  | 'FFF'
  | 'ffff'
  | 'FFFF'
  | 't'
  | 'tt'
  | 'T'
  | 'TT'
  | 'ttt'
  | 'TTT'
  | 'tttt'
  | 'TTTT';

export const FORMAT_DATE = {
  d: 'd',
  dd: 'dd',
  ddd: 'ddd',
  dddd: 'dddd',
  f: 'f',
  F: 'F',
  ff: 'ff',
  FF: 'FF',
  fff: 'fff',
  FFF: 'FFF',
  ffff: 'ffff',
  FFFF: 'FFFF',
  t: 't',
  T: 'T',
  tt: 'tt',
  TT: 'TT',
  ttt: 'ttt',
  TTT: 'TTT',
  tttt: 'tttt',
  TTTT: 'TTTT',
};

export interface DateDefaultConfig {
  [FORMAT_DATE.d]: DateFormatOptions;
  [FORMAT_DATE.dd]: DateFormatOptions;
  [FORMAT_DATE.ddd]: DateFormatOptions;
  [FORMAT_DATE.dddd]: DateFormatOptions;
  [FORMAT_DATE.t]: DateFormatOptions;
  [FORMAT_DATE.tt]: DateFormatOptions;
  [FORMAT_DATE.ttt]: DateFormatOptions;
  [FORMAT_DATE.tttt]: DateFormatOptions;
  [FORMAT_DATE.T]: DateFormatOptions;
  [FORMAT_DATE.TT]: DateFormatOptions;
  [FORMAT_DATE.TTT]: DateFormatOptions;
  [FORMAT_DATE.TTTT]: DateFormatOptions;
  [FORMAT_DATE.f]: DateFormatOptions;
  [FORMAT_DATE.ff]: DateFormatOptions;
  [FORMAT_DATE.fff]: DateFormatOptions;
  [FORMAT_DATE.ffff]: DateFormatOptions;
  [FORMAT_DATE.F]: DateFormatOptions;
  [FORMAT_DATE.FF]: DateFormatOptions;
  [FORMAT_DATE.FFF]: DateFormatOptions;
  [FORMAT_DATE.FFFF]: DateFormatOptions;
  [key: string]: DateFormatOptions;
}
