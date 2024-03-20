import { CommonStyleType } from '@/types';

/**
 * @description
 * interface for the loader
 * @interface LoaderStylesPropsType
 */
export type MediaProgressBarVariantStylesType = {
  container?: CommonStyleType;
  barContainer?: CommonStyleType & { filled?: CommonStyleType };
  bar?: CommonStyleType & { filled?: CommonStyleType };
  progressBar?: CommonStyleType;
  bullet?: CommonStyleType;
};

/**
 * @description
 * interface for the loader
 * @interface ILoaderStyled
 */
export type MediaProgressBarStylesType<P extends string | number | symbol> = {
  [variant in P]: MediaProgressBarVariantStylesType;
};
