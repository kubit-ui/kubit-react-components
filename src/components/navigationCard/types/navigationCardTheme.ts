import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CommonStyleType } from '@/types/styles/commonStyle';
import { IconTypes } from '@/types/styles/icon';
import { IllustrationTypes } from '@/types/styles/illustration';
import { TypographyTypes } from '@/types/styles/typography';

import { IconHighlightedSizeType } from '../../iconHighlighted/types/size';
import { TextComponentType } from '../../text/types/component';

export type NavigationCardStylesPropsType = {
  container?: CommonStyleType;
  containerExpandedContent?: boolean;

  contentContainer?: CommonStyleType;
  rightContentContainer?: CommonStyleType;

  decorativeElementContainer?: CommonStyleType;

  icon?: IconTypes & {
    margin_right?: string;
  };
  iconHighlighted?: {
    variant?: string;
    size?: IconHighlightedSizeType;
    color?: string;
    backgroundColor?: string;
    margin_right?: string;
  };
  illustration?: IllustrationTypes & {
    margin_right?: string;
  };
  avatar?: {
    margin_right?: string;
  };

  title?: Omit<TypographyTypes, 'DESKTOP' | 'TABLET' | 'MOBILE'> & {
    component?: TextComponentType;
    linesNumber?: number;
  } & {
    [key in DeviceBreakpointsType]?: TypographyTypes & {
      component?: TextComponentType;
      linesNumber?: number;
    };
  };

  arrowIcon?: IconTypes;
  arrowIconText?: TypographyTypes;

  descriptionContainer?: CommonStyleType;
  description?: Omit<TypographyTypes, 'DESKTOP' | 'TABLET' | 'MOBILE'> & {
    linesNumber?: number;
  } & {
    [key in DeviceBreakpointsType]?: TypographyTypes & {
      linesNumber?: number;
    };
  };

  tagContainer?: CommonStyleType;
  tag?: {
    variant?: string;
    option?: string;
  };
};

export type NavigationCardStylesType<P extends string | number | symbol> = {
  [variant in P]?: NavigationCardStylesPropsType;
};
