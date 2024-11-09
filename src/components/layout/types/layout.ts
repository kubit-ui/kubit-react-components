import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CustomTokenTypes } from '@/types/customToken/customToken';

import type { GridConfigType } from '../../grid/types/grid';
import type { LayoutVariantStylesType } from './layoutTheme';

export interface ILayoutStandAlone {
  asideContent?: JSX.Element;
  headerContent?: JSX.Element;
  mainContent: JSX.Element;
  footerContent?: JSX.Element;
  styles: LayoutVariantStylesType;
  backgroundColor: string;
  columnsConfig?: {
    header: {
      [deviceBreakpoint in DeviceBreakpointsType]: number;
    };
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
    footer?: {
      [deviceBreakpoint in DeviceBreakpointsType]: number;
    };
  };
  dataTestId?: string;
  gridConfig?: {
    [DeviceBreakpointsType.DESKTOP]?: GridConfigType;
    [DeviceBreakpointsType.TABLET]?: GridConfigType;
    [DeviceBreakpointsType.MOBILE]?: GridConfigType;
  };
  device: DeviceBreakpointsType;
}

export interface ILayout
  extends Omit<ILayoutStandAlone, 'styles' | 'device'>,
    Omit<CustomTokenTypes<LayoutVariantStylesType>, 'cts' | 'extraCt'> {
  variant: string;
}

export enum LayoutRoleType {
  main = 'main',
  header = 'header',
  aside = 'aside',
  footer = 'footer',
}
