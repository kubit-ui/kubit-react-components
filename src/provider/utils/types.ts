import { FormatMonthOptionType, FormatWeekdayOptionType } from '@/types';

export interface DateFormatOptions {
  weekday?: FormatWeekdayOptionType;
  year?: '2-digit' | 'numeric';
  month?: FormatMonthOptionType;
  day?: '2-digit' | 'numeric';
  hour?: '2-digit' | 'numeric';
  minute?: '2-digit' | 'numeric';
  second?: '2-digit' | 'numeric';
  timeZoneName?: 'short' | 'long';
  hour12?: boolean;
  hourCycle?: 'h12' | 'h23' | 'h11' | 'h24';
}

export enum FORMAT_DATE {
  d = 'd',
  dd = 'dd',
  ddd = 'ddd',
  dddd = 'dddd',
  t = 't',
  tt = 'tt',
  ttt = 'ttt',
  tttt = 'tttt',
  T = 'T',
  TT = 'TT',
  TTT = 'TTT',
  TTTT = 'TTTT',
  f = 'f',
  ff = 'ff',
  fff = 'fff',
  ffff = 'ffff',
  F = 'F',
  FF = 'FF',
  FFF = 'FFF',
  FFFF = 'FFFF',
}

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
