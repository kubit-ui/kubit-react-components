import { ReactNode } from 'react';

import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IFooter } from '../../footer/types/footer';
import { IPopoverControlled } from '../../popover/types/popover';
import { TextComponentType } from '../../text/types/component';
import { IText } from '../../text/types/text';
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

export type DrawerContentScrollAriasType = {
  ['aria-label']?: string;
  ['aria-labelledby']?: string;
};

export interface IDrawerStandAlone {
  styles: DrawerDeviceStyleType;
  children: ReactNode;
  contentScrollArias?: DrawerContentScrollAriasType;
  contentHasScroll: boolean;
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
  onContentScroll?: (e: Event) => void;
}

type OmitProps = 'styles' | 'device' | 'contentHasScroll';

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
