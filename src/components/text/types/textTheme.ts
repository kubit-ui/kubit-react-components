import type { DeviceBreakpointsType } from '@/types/breakpoints';

import { TextDecorationType } from './decoration';
import { TextDisplayType } from './display';
import { TextTransformType } from './transform';

/**
 * @name TypographyType
 * @description
 * Typography type
 */
export type TypographyType = {
  font_size: string;
  line_height: string;
  sup?: {
    font_size: string; // percentage
  };
  sub?: { font_size: string }; // percentage
};

/**
 * @name TypographyMediaType
 * @description
 * Typography media type
 */
export type TypographyMediaType = {
  [key in DeviceBreakpointsType]?: TypographyType;
};

/**
 * @name TextPropsStylesType
 * @description
 * Text props styles type
 */
export type TextPropsStylesType = {
  color?: string;
  cursor?: string;
  decoration?: TextDecorationType;
  display?: TextDisplayType;
  $transform?: TextTransformType;
  align?: string;
  weight?: number;
  isDisabled?: boolean;
};

/**
 * @name TextThemeStylesType
 * @description
 * Text theme styles type
 */
export type TextThemeStylesType = {
  font_family: string;
  font_weight?: number | string;
  typography: TypographyMediaType;
};

/**
 * @name TextVariantStylesType
 * @description
 * Text variant styles type
 */
export type TextVariantStylesType = TextPropsStylesType & TextThemeStylesType;

/**
 * @name TextStylesType
 * @description
 * Text styles type
 */
export type TextStylesType<P extends string | number | symbol> = {
  [key in P]?: TextVariantStylesType;
};
