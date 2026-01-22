import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export type SkeletonVariantStyles<Variant extends string> = CssLibPropsType & {
  [key in Variant]?: CssLibPropsType;
};

export type SkeletonShapeStyles<Shape extends string> = CssLibPropsType & {
  [key in Shape]?: CssLibPropsType;
};

export type SkeletonStyles<
  Variant extends string,
  Shape extends string,
> = SkeletonVariantStyles<Variant> & SkeletonShapeStyles<Shape>;
