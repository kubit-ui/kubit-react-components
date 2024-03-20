import { DateDefaultConfig, DateFormatOptions, FORMAT_DATE } from '../types/format.types';

export const NUMERIC = 'numeric',
  SHORT = 'short',
  LONG = 'long',
  TWO_DIGIT = '2-digit';

const DATE_SHORT: DateFormatOptions = {
  year: NUMERIC,
  month: TWO_DIGIT,
  day: TWO_DIGIT,
};

const DATE_MED: DateFormatOptions = {
  year: NUMERIC,
  month: SHORT,
  day: TWO_DIGIT,
};

const DATE_FULL: DateFormatOptions = {
  year: NUMERIC,
  month: LONG,
  day: TWO_DIGIT,
};

const DATE_HUGE: DateFormatOptions = {
  year: NUMERIC,
  month: LONG,
  day: TWO_DIGIT,
  weekday: LONG,
};

const TIME_SIMPLE: DateFormatOptions = {
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
};

const TIME_WITH_SECONDS: DateFormatOptions = {
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  second: TWO_DIGIT,
};

const TIME_WITH_SHORT_OFFSET: DateFormatOptions = {
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  second: TWO_DIGIT,
  timeZoneName: SHORT,
};

const TIME_WITH_LONG_OFFSET: DateFormatOptions = {
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  second: TWO_DIGIT,
  timeZoneName: LONG,
};

const TIME_24_SIMPLE: DateFormatOptions = {
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  hourCycle: 'h23',
};

const TIME_24_WITH_SECONDS: DateFormatOptions = {
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  second: TWO_DIGIT,
  hourCycle: 'h23',
};

const TIME_24_WITH_SHORT_OFFSET: DateFormatOptions = {
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  second: TWO_DIGIT,
  hourCycle: 'h23',
  timeZoneName: SHORT,
};

const TIME_24_WITH_LONG_OFFSET: DateFormatOptions = {
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  second: TWO_DIGIT,
  hourCycle: 'h23',
  timeZoneName: LONG,
};

const DATETIME_SHORT: DateFormatOptions = {
  year: NUMERIC,
  month: NUMERIC,
  day: NUMERIC,
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
};

const DATETIME_SHORT_WITH_SECONDS: DateFormatOptions = {
  year: NUMERIC,
  month: NUMERIC,
  day: NUMERIC,
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  second: TWO_DIGIT,
};

const DATETIME_MED: DateFormatOptions = {
  year: NUMERIC,
  month: SHORT,
  day: NUMERIC,
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
};

const DATETIME_MED_WITH_SECONDS: DateFormatOptions = {
  year: NUMERIC,
  month: SHORT,
  day: NUMERIC,
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  second: TWO_DIGIT,
};

const DATETIME_FULL: DateFormatOptions = {
  year: NUMERIC,
  month: LONG,
  day: NUMERIC,
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  timeZoneName: SHORT,
};

const DATETIME_FULL_WITH_SECONDS: DateFormatOptions = {
  year: NUMERIC,
  month: LONG,
  day: NUMERIC,
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  second: TWO_DIGIT,
  timeZoneName: SHORT,
};

const DATETIME_HUGE: DateFormatOptions = {
  year: NUMERIC,
  month: LONG,
  day: NUMERIC,
  weekday: LONG,
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  timeZoneName: LONG,
};

const DATETIME_HUGE_WITH_SECONDS: DateFormatOptions = {
  year: NUMERIC,
  month: LONG,
  day: NUMERIC,
  weekday: LONG,
  hour: TWO_DIGIT,
  minute: TWO_DIGIT,
  second: TWO_DIGIT,
  timeZoneName: LONG,
};

export const MACRO_TOKEN_TO_FORMAT_OPTS: DateDefaultConfig = {
  [FORMAT_DATE.d]: DATE_SHORT,
  [FORMAT_DATE.dd]: DATE_MED,
  [FORMAT_DATE.ddd]: DATE_FULL,
  [FORMAT_DATE.dddd]: DATE_HUGE,
  [FORMAT_DATE.t]: TIME_SIMPLE,
  [FORMAT_DATE.tt]: TIME_WITH_SECONDS,
  [FORMAT_DATE.ttt]: TIME_WITH_SHORT_OFFSET,
  [FORMAT_DATE.tttt]: TIME_WITH_LONG_OFFSET,
  [FORMAT_DATE.T]: TIME_24_SIMPLE,
  [FORMAT_DATE.TT]: TIME_24_WITH_SECONDS,
  [FORMAT_DATE.TTT]: TIME_24_WITH_SHORT_OFFSET,
  [FORMAT_DATE.TTTT]: TIME_24_WITH_LONG_OFFSET,
  [FORMAT_DATE.f]: DATETIME_SHORT,
  [FORMAT_DATE.ff]: DATETIME_MED,
  [FORMAT_DATE.fff]: DATETIME_FULL,
  [FORMAT_DATE.ffff]: DATETIME_HUGE,
  [FORMAT_DATE.F]: DATETIME_SHORT_WITH_SECONDS,
  [FORMAT_DATE.FF]: DATETIME_MED_WITH_SECONDS,
  [FORMAT_DATE.FFF]: DATETIME_FULL_WITH_SECONDS,
  [FORMAT_DATE.FFFF]: DATETIME_HUGE_WITH_SECONDS,
};
