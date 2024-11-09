import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';

import { IconHighlightedSizeType } from './size';

export type IconHighlightedSizePropsType = {
  container?: CommonStyleType & {
    disabled?: CommonStyleType;
  };
  icon?: IconTypes & {
    disabled?: IconTypes;
  };
};

export type IconHighlightedVariantStylesType = {
  [key in IconHighlightedSizeType]?: IconHighlightedSizePropsType;
};

export type IconHighlightedStylesType<P extends string | number | symbol> = {
  [key in P]: IconHighlightedVariantStylesType;
};
