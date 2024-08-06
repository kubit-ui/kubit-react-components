import { DeviceBreakpointsType } from '@/types/breakpoints';
import { CommonStyleType } from '@/types/styles/commonStyle';

export type GridType = {
  addPaddingForLayout?: boolean;
  isFullWidth?: boolean;
  columnsPadding?: number;
  styles?: CommonStyleType;
  config?: {
    [DeviceBreakpointsType.DESKTOP]?: GridConfigType;
    [DeviceBreakpointsType.TABLET]?: GridConfigType;
    [DeviceBreakpointsType.MOBILE]?: GridConfigType;
  };
};

export type GridColumns = {
  start: number;
  end: number;
};

export type GridItemType = {
  desktop?: number | GridColumns;
  tablet?: number | GridColumns;
  mobile?: number | GridColumns;
};

export type GridConfigType = {
  columns?: number;
  gap?: string;
  margin?: number;
  headerStyles?: CommonStyleType;
  mainStyles?: CommonStyleType;
  footerStyles?: CommonStyleType;
};

export type CustomGridItemType = GridItemType & {
  paddingRight?: string;
  paddingLeft?: string;
  containerColor?: string;
  height?: string;
};

export type ContentCustomGridItemType = {
  isMainContainer?: boolean;
  containerWidth?: number;
  marginsContainer?: number;
  minMarginRightAndLeft?: string;
  paddingRight?: string;
  paddingLeft?: string;
};
