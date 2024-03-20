import { LineSeparatorLinePropsStylesType } from '@/components/lineSeparator';
import { CustomTokenTypes, DeviceBreakpointsType, ROLES } from '@/types';

import { ContentDirectionType } from './direction';
import { FooterPropsStylesType } from './footerTheme';
import { FooterPositionType } from './position';

export enum FooterMobileColumnFlow {
  DEFAULT = 'DEFAULT',
  REVERSE = 'REVERSE',
}

export interface MobileSort {
  column: FooterMobileColumnFlow;
  firstContent?: FooterPositionType;
  secondContent?: FooterPositionType;
  thirdContent?: FooterPositionType;
}

type FooterAriaAttributes = Pick<React.AriaAttributes, 'aria-label'>;

export interface IFooterStandAlone extends FooterAriaAttributes {
  styles: FooterPropsStylesType;
  role?: ROLES;
  children: JSX.Element[] | JSX.Element;
  dataTestId?: string;
  contentDirection?: ContentDirectionType;
  simpleContainer?: boolean;
  forceVertical?: boolean;
  alignItems?: string;
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
  footerMobileSortConfig?: MobileSort;
  device: DeviceBreakpointsType;
}

export interface IFooter<V = undefined extends string ? unknown : string>
  extends Omit<IFooterStandAlone, 'styles' | 'lineSeparatorLineStyles' | 'device'>,
    Omit<CustomTokenTypes<FooterPropsStylesType>, 'cts'> {
  variant: V;
}
