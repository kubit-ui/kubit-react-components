import { ReactNode } from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { IFooter } from '@/components/footer';
import { IPopoverControlled } from '@/components/popover';
import { IText, TextComponentType } from '@/components/text';
import { CustomTokenTypes } from '@/types';
import { DeviceBreakpointsType } from '@/types/breakpoints';

import { DrawerDeviceStyleType, DrawerVariantStylesType } from './drawerTheme';
import { DrawerLevelPositionTypes } from './level';

export type DrawerTextType = Omit<IText<string>, 'children'> & {
  content?: ReactNode;
};

export type DrawerFooterType = Omit<IFooter, 'children' | 'variant'> & {
  content?: JSX.Element[] | JSX.Element;
  variant?: string;
};

export type DrawerPopoverType = Omit<IPopoverControlled, 'children' | 'open'>;

export interface IDrawerStandAlone {
  styles: DrawerDeviceStyleType;
  children: ReactNode;
  footer?: DrawerFooterType;
  closeIcon?: IElementOrIcon;
  title?: DrawerTextType;
  /**
   * @deprecated This property will be removed. Use "props.title.component" instead
   */
  titleComponent?: TextComponentType | string;
  open: boolean;
  level: DrawerLevelPositionTypes;
  dataTestId?: string;
  device?: DeviceBreakpointsType;
  blocked?: boolean;
  popover?: DrawerPopoverType;
  /* To useScrollableEffect */
  scrollableRef: (node) => void;
  shadowRef: (node) => void;
  /* To useZoomEffect */
  footerRef: (node) => void;
  contentRef: (node) => void;
}

type OmitProps = 'styles' | 'device' | 'scrollableRef' | 'shadowRef' | 'footerRef' | 'contentRef';

export interface IDrawerControlled<V = undefined extends string ? unknown : string>
  extends Omit<IDrawerStandAlone, OmitProps>,
    Omit<CustomTokenTypes<DrawerVariantStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  portalId?: string;
}

export interface IDrawerUncontrolled<V = undefined extends string ? unknown : string>
  extends Omit<IDrawerControlled<V>, 'open'> {
  defaultOpen?: boolean;
  onOpenClose?: (open: boolean) => void;
}
