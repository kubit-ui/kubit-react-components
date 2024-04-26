import { CSSProp } from 'styled-components';

import { CommonStyleType, TypographyTypes } from '@/types';

export type LineSeparatorLabelPropsStylesType = {
  labelContainer?: CommonStyleType;
  label?: TypographyTypes;
};

export type LineSeparatorLabelStylesType<P extends string | number | symbol> = {
  [key in P]?: LineSeparatorLabelPropsStylesType;
};

export enum LineSeparatorPositionType {
  LEFT = 'left',
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
}

export type LineSeparatorLinePropsStylesType = {
  buildLineStyles?: (position?: LineSeparatorPositionType) => CSSProp;
  lineSeparatorRootWrapper?: CommonStyleType;
};

export type LineSeparatorLineStylesType<P extends string | number | symbol> = {
  [key in P]?: LineSeparatorLinePropsStylesType;
};

export type LineSeparatorStylesType<
  S extends string | number | symbol,
  P extends string | number | symbol,
> = LineSeparatorLabelStylesType<S> & LineSeparatorLineStylesType<P>;
