export type formatPartsType = (
  | string
  | {
      regex: RegExp;
      key: string;
      execute?: (value: string) => number;
    }
)[];

export type DateType = {
  year?: number;
  month?: number;
  day?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  [key: string]: number | undefined;
};

export type ElementExpressionType = [RegExp, string] | [RegExp, string, (value: string) => number];

export type ExpressionType = {
  s: ElementExpressionType;
  ss: ElementExpressionType;
  m: ElementExpressionType;
  mm: ElementExpressionType;
  H: ElementExpressionType;
  HH: ElementExpressionType;
  h: ElementExpressionType;
  hh: ElementExpressionType;
  D: ElementExpressionType;
  DD: ElementExpressionType;
  M: ElementExpressionType;
  MM: ElementExpressionType;
  Y: ElementExpressionType;
  YY: ElementExpressionType;
  YYYY: ElementExpressionType;
  [key: string]: ElementExpressionType;
};
