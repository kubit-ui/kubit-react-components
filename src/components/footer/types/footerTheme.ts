import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CommonStyleType } from '@/types/styles/commonStyle';

import { ContentDirectionType } from './direction';

export type FooterLineSeparatorVariantType = { variant?: string } & {
  [Key in DeviceBreakpointsType]?: { variant?: string };
};
export type ContentDirection = {
  [Key in ContentDirectionType]?: CommonStyleType;
};

export type FooterPropsStylesType = {
  rootContainer?: CommonStyleType & ContentDirection;
  contentContainer?: CommonStyleType;
  lineSeparator?: FooterLineSeparatorVariantType;
};

export type FooterStylesType<P extends string | number | symbol> = {
  [key in P]: FooterPropsStylesType;
};
