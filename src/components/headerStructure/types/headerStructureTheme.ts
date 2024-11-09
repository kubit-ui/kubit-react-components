import { CommonStyleType } from '@/types/styles/commonStyle';

export type HeaderStructurePropsStyles = {
  styles?: HeaderStructurePropsStylesType;
};

export type HeaderStructurePropsStylesType = {
  container?: CommonStyleType;
  breadcrumbs?: CommonStyleType;
  content?: CommonStyleType;
  leftContent?: CommonStyleType;
  rightContent?: CommonStyleType;
  centerContent?: CommonStyleType;
};

export type HeaderStructureStylesType<P extends string | number | symbol> = {
  [variant in P]: HeaderStructurePropsStylesType;
};
