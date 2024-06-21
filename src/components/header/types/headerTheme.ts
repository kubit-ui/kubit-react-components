import { CommonStyleType } from '@/types';

export type HeaderPropsStyles = {
  styles?: HeaderPropsStylesType;
};

export type HeaderPropsStylesType = {
  container?: CommonStyleType & { scrollShadow?: Pick<CommonStyleType, 'box_shadow'> };
  breadcrumbs?: CommonStyleType;
  content?: CommonStyleType;
  leftContent?: CommonStyleType;
  rightContent?: CommonStyleType;
};

export type HeaderStylesType<P extends string | number | symbol> = {
  [variant in P]?: HeaderPropsStylesType;
};
