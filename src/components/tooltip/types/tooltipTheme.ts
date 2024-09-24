import { CommonStyleType, DeviceBreakpointsType, IconTypes, TypographyTypes } from '@/types';

import { TooltipAlignType } from './tooltipAlign';

export type TooltipVariantStylesProps = {
  tooltipExternalContainer?: CommonStyleType;
  tooltipInternalContainer?: CommonStyleType;
  headerContainer?: CommonStyleType;
  title?: TypographyTypes;
  paragraph?: TypographyTypes;
  paragraphContainer?: CommonStyleType;
  closeButtonIcon?: IconTypes;
  closeButtonContainer?: CommonStyleType & { altVariant?: boolean };
  divider?: CommonStyleType;
  tooltipAsModal?: boolean;
  popoverVariant?: {
    [DeviceBreakpointsType.DESKTOP]?: string;
    [DeviceBreakpointsType.TABLET]?: string;
    [DeviceBreakpointsType.MOBILE]?: string;
  };
  showOverlay?: {
    [DeviceBreakpointsType.DESKTOP]?: boolean;
    [DeviceBreakpointsType.TABLET]?: boolean;
    [DeviceBreakpointsType.MOBILE]?: boolean;
  };
  arrowContainer?: CommonStyleType & {
    arrow_size?: string;
    arrow_position?: string;
    tooltipAlignStyles?: {
      [key in TooltipAlignType]?: CommonStyleType;
    };
  };
  arrow?: CommonStyleType;
  dragIconContainer?: CommonStyleType;
  dragIcon?: IconTypes;
};

/**
 * @name TooltipStylesType
 * @description
 * Interface for the Tooltip component
 */
export type TooltipStylesType<P extends string | number | symbol> = {
  [key in P]?: TooltipVariantStylesProps;
};
