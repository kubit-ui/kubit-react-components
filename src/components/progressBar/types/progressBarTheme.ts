import { CommonStyleType } from '@/types';

/**
 * @description
 * interface for the ProgressBarVariantStylesType
 * @interface ProgressBarVariantStylesType
 */
export type ProgressBarVariantStylesType = {
  container?: CommonStyleType;
  barContainer?: CommonStyleType;
  bar?: CommonStyleType;
  progressBar?: CommonStyleType;
  useAsSlider?: boolean;
  sliderVariant?: string;
};

/**
 * @description
 * interface for the ProgressBarSizePropsType
 * @interface ProgressBarSizePropsType
 */
export type ProgressBarSizeStylesType = {
  progressBar?: CommonStyleType;
  bar?: CommonStyleType;
};

/**
 * @interface IProgressBarStyled
 */
export type ProgressBarStylesVariantType<P extends string | number | symbol> = {
  [key in P]?: ProgressBarVariantStylesType;
};

/**
 * @interface IProgressBarStyled
 */
export type ProgressBarSizeType<S extends string | number | symbol> = {
  [key in S]?: ProgressBarSizeStylesType;
};

/**
 * @description
 * interface for the ProgressBarStylesType
 * @interface ProgressBarStylesType
 */
export type ProgressBarStylesType<
  P extends string | number | symbol,
  S extends string | number | symbol,
> = ProgressBarStylesVariantType<P> & ProgressBarSizeType<S>;
