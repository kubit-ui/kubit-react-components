import { CommonStyleType, IconTypes } from '@/types';

import { ArrowsControlState, PageControlState } from './pageControlStates';

export type PageControlCommonProps = {
  container?: CommonStyleType;
  dotsContainer?: CommonStyleType;
  isBullet?: boolean;
};

export type PageControlStateProps = {
  pageDot?: CommonStyleType;
};

export type PageControlStateKeys = {
  [state in PageControlState]?: PageControlStateProps;
};

export type PageControlVariantStylesType = PageControlCommonProps & PageControlStateKeys;

export type PageControlStylesProps<V extends string | number | symbol> = {
  [key in V]?: PageControlVariantStylesType;
};

export type ArrowsControlCommonProps = {
  leftArrowControlContainer?: CommonStyleType;
  rightArrowControlContainer?: CommonStyleType;
};

export type ArrowsControlStateProps = {
  icon?: IconTypes;
};

export type ArrowsControlStateKeys = {
  [state in ArrowsControlState]?: ArrowsControlStateProps;
};

export type ArrowsControlVariantStylesType = ArrowsControlCommonProps & ArrowsControlStateKeys;

export type ArrowsControlStylesProps<AV extends string | number | symbol> = {
  [key in AV]?: ArrowsControlVariantStylesType;
};

export type PageControlStylesType<
  V extends string | number | symbol,
  AV extends string | number | symbol,
> = PageControlStylesProps<V> & ArrowsControlStylesProps<AV>;
