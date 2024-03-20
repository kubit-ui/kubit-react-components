import type { GridConfigType } from '@/components/grid/types';
import { CustomTokenTypes } from '@/types';
import { DeviceBreakpointsType } from '@/types/breakpoints';

import type { OperativeLayoutVariantStylesType } from './operativeLayoutTheme';

export enum OperativePosition {
  LEFT = 'LEFT',
  CENTER = 'CENTER',
  RIGHT = 'RIGHT',
}

export interface IOperativeLayoutBiColor {
  leftContainerColor: string;
  rightContainerColor: string;
}

export interface IOperativeLayoutHorizontalMargin {
  leftMargin: string;
  rightMargin: string;
}

export interface IColumnsConfig {
  main: {
    [DeviceBreakpointsType.LARGE_DESKTOP]: number;
    [DeviceBreakpointsType.DESKTOP]: number;
    [DeviceBreakpointsType.TABLET]: number;
    [DeviceBreakpointsType.MOBILE]: number;
    DESKTOP_FULL: number;
  };
  aside: {
    [deviceBreakpoint in DeviceBreakpointsType]: number;
  };
}

export interface IGridConfig {
  [DeviceBreakpointsType.DESKTOP]: GridConfigType;
  [DeviceBreakpointsType.TABLET]: GridConfigType;
  [DeviceBreakpointsType.MOBILE]: GridConfigType;
}

export interface IOperativeLayoutStandAlone {
  contentBgColor?: string | IOperativeLayoutBiColor;
  contentPosition?: OperativePosition;
  contentOverflowColor?: boolean;
  contentHeight?: string;
  asideContent?: JSX.Element;
  mainContent: JSX.Element;
  styles: OperativeLayoutVariantStylesType;
  minMarginRightAndLeft?: string;
  maxWidthToApply?: { [key in DeviceBreakpointsType]?: string };
  columnsConfig?: IColumnsConfig;
  gridConfig?: IGridConfig;
  device: DeviceBreakpointsType;
  horizontalExternalMargin?: string | IOperativeLayoutHorizontalMargin;
}

export interface IOperativeLayout
  extends Omit<IOperativeLayoutStandAlone, 'styles' | 'device' | 'maxWidthToApply'>,
    Omit<CustomTokenTypes<OperativeLayoutVariantStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
  maxWidthParentContainer?: { [key in DeviceBreakpointsType]?: string };
}

export enum OperativeLayoutRoleType {
  main = 'main',
  aside = 'aside',
}
