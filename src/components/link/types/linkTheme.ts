import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { TypographyTypes } from '@/types/styles/typography';

import { LinkActionType } from './action';
import type { LinkPositionType } from './position';
import { LinkStateType } from './state';

export type LinkIconPropsType = {
  styles: LinkPropsStylesType;
};

export type LinkPropsType = {
  iconPosition: LinkPositionType | undefined;
  styles: LinkPropsStylesType;
};

export type LinkPropsStylesType = {
  altVariant?: boolean;
  container?: CommonStyleType & TypographyTypes;
  labelIconContainer?: CommonStyleType & TypographyTypes;
  icon?: IconTypes;
};

export type LinkStylesType<P extends string | number | symbol> = {
  [action in LinkActionType]?: {
    [variant in P]?: {
      [state in LinkStateType]?: LinkPropsStylesType;
    };
  };
};
