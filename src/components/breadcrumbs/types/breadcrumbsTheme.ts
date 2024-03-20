import { CommonStyleType, IconTypes, TypographyTypes } from '@/types';

import { BreadcrumbsStateType } from './state';

export type BreadcrumbsPropsStateStylesType = {
  [i in BreadcrumbsStateType]?: BreadcrumbsPropsStylesType;
};

export type BreadcrumbsPropsStylesType = {
  linkContainer?: CommonStyleType & TypographyTypes;
  link?: TypographyTypes;
  lastOneCrumb?: TypographyTypes;
  iconDividerContainer?: CommonStyleType;
  iconDivider?: IconTypes;
};

/**
 * @description
 * Breadcrumbs styles type
 * @template P
 * @property {P} [key] - Variant of the breadcrumbs.
 * @property {BreadcrumbsPropsStateStylesType} [key] - Styles of the breadcrumbs.
 */
export type BreadcrumbsStylesType<P extends string | number | symbol> = {
  [key in P]?: BreadcrumbsPropsStateStylesType;
};
