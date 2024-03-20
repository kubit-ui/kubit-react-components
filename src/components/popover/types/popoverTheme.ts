import { CssAnimationType, ICssAnimationOptions } from '@/components/cssAnimation';
import type { DeviceBreakpointsType } from '@/types/breakpoints';
import { POSITIONS } from '@/types/positions';

export type PopoverBackDropStylesType = {
  backDropColor?: string;
};

export type PopoverVariantStylesProps = {
  display?: object;
  align?: POSITIONS;
  positionVariant?: string;
  fullWidth?: boolean;
  overlay?: string;
  animation?: CssAnimationType;
  animationOptions?: ICssAnimationOptions;
  extraWidth?: string;
  extraWidthSide?: POSITIONS;
  zIndex?: string | number;
};

export type PopoverZIndexStylesProps = {
  zIndex?: string | number;
};

export type PopoverVariantStylesType = {
  [key in DeviceBreakpointsType]?: PopoverVariantStylesProps;
};

export type PopoverStylesType<P extends string | number | symbol> = {
  [key in P]?: PopoverZIndexStylesProps & Partial<PopoverVariantStylesType>;
};
