export type formatPartsType = (
  | string
  | {
      regex: RegExp;
      key: string;
      execute?: (value: string) => number;
    }
)[];

export interface DateType {
  year?: number;
  month?: number;
  day?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  [key: string]: number | undefined;
}

export type ElementExpressionType =
  | [RegExp, string]
  | [RegExp, string, (value: string) => number];

export interface ExpressionType {
  s: ElementExpressionType;
  ss: ElementExpressionType;
  m: ElementExpressionType;
  mm: ElementExpressionType;
  H: ElementExpressionType;
  HH: ElementExpressionType;
  h: ElementExpressionType;
  hh: ElementExpressionType;
  d: ElementExpressionType;
  dd: ElementExpressionType;
  M: ElementExpressionType;
  MM: ElementExpressionType;
  y: ElementExpressionType;
  yy: ElementExpressionType;
  yyyy: ElementExpressionType;
  [key: string]: ElementExpressionType;
}
