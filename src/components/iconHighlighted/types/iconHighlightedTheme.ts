import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

import { IconHighlightedSizeType } from './size';

export type IconHighlightedSizePropsType = {
  parentContainer?: CommonStyleType;
  container?: CommonStyleType & {
    disabled?: CommonStyleType;
    selected?: CommonStyleType;
  };
  icon?: IconTypes & {
    disabled?: IconTypes;
  };
  customContentContainer?: CommonStyleType &
    TypographyTypes & {
      disabled?: CommonStyleType & TypographyTypes;
      selected?: CommonStyleType & TypographyTypes;
    };
};

export type IconHighlightedVariantStylesType = {
  [key in IconHighlightedSizeType]?: IconHighlightedSizePropsType;
};

export type IconHighlightedStylesType<P extends string | number | symbol> = {
  [key in P]: IconHighlightedVariantStylesType;
};
