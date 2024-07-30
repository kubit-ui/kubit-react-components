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

type Position = keyof typeof FooterPositionType;

interface IPositionedElement extends React.ReactElement {
  props: React.PropsWithChildren<{ ['data-position']: Position } & React.Attributes>;
}

export interface IFooterStandAlone extends FooterAriaAttributes {
  styles: FooterPropsStylesType;
  role?: ROLES;
  children: IPositionedElement[] | IPositionedElement;
  dataTestId?: string;
  contentDirection?: ContentDirectionType;
  simpleContainer?: boolean;
  /**
   * @deprecated
   */
  forceVertical?: boolean;
  tabInverse?: DeviceBreakpointsType[];
  orderInverse?: DeviceBreakpointsType[];
  /**
   * @deprecated
   */
  alignItems?: string;
  lineSeparatorLineStyles: LineSeparatorLinePropsStylesType;
  /**
   * @deprecated
   */
  footerMobileSortConfig?: MobileSort;
  device: DeviceBreakpointsType;
}

export interface IFooter<V = undefined extends string ? unknown : string>
  extends Omit<IFooterStandAlone, 'styles' | 'lineSeparatorLineStyles' | 'device'>,
    Omit<CustomTokenTypes<FooterPropsStylesType>, 'cts'> {
  variant: V;
}
