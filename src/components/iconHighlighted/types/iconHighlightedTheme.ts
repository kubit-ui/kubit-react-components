import { CommonStyleType, IconTypes } from '@/types';

import { IconHighlightedSizeType } from './size';

export type IconHighlightedSizePropsType = {
  container?: CommonStyleType;
  icon?: IconTypes;
};

export type IconHighlightedVariantStylesType = {
  [key in IconHighlightedSizeType]?: IconHighlightedSizePropsType;
};

export type IconHighlightedStylesType<P extends string | number | symbol> = {
  [key in P]: IconHighlightedVariantStylesType;
};
