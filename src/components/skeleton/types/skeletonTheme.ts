import { CommonStyleType } from '@/types';

/**
 * @description
 * Skeleton Styles component props
 */
export type SkeletonVariantStylesType = {
  skeleton?: CommonStyleType;
};

export type SkeletonShapeStylesType<P extends string | number | symbol = string> = {
  [key in P]?: SkeletonVariantStylesType;
};

/**
 * @description
 * Skeleton Styles component props
 */
export type SkeletonStylesType<
  S extends string | number | symbol,
  P extends string | number | symbol,
> = {
  [shape in S]: SkeletonShapeStylesType<P>;
};
