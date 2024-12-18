import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IButton } from '../../button/types/button';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IElementOrillustration } from '../../elementOrIllustration/types/elementOrIllustration';
import { IFooter } from '../../footer/types/footer';
import { IPopoverControlled } from '../../popover/types/popover';
import { IText } from '../../text/types/text';
import { ModalBaseStylesType } from './modalTheme';

export type ModalTitleTextType = Omit<IText<string>, 'children'> & {
  content?: React.ReactNode;
  visible?: boolean;
};

export type ModalButtonType = Omit<IButton, 'children' | 'variant'> & {
  content?: React.ReactNode;
  variant?: string;
};

export type ModalFooterType = Omit<IFooter, 'children' | 'variant'> & {
  content?: JSX.Element[] | JSX.Element;
  variant?: string;
};

export type ModalPopoverType = Omit<IPopoverControlled, 'children' | 'open'>;

export interface IModalStyled {
  $styles: ModalBaseStylesType;
  $maxHeight?: string;
  $minHeight?: string;
  $maxWidth?: string;
  $minWidth?: string;
  hasFooter?: boolean;
}

export type ModalContentScrollAriasType = {
  ['aria-label']?: string;
  ['aria-labelledby']?: string;
};

export interface IModalStandAlone {
  styles: ModalBaseStylesType;
  maxHeight?: string;
  minHeight?: string;
  maxWidth?: string;
  minWidth?: string;
  minContentHeight?: string;
  customHeightAllDevices?: boolean;
  customWidthAllDevices?: boolean;
  id?: string;
  open?: boolean;
  popover?: ModalPopoverType;
  blocked?: boolean;
  title?: ModalTitleTextType;
  closeIcon?: IElementOrIcon;
  closeButton?: ModalButtonType;
  imageIllustrationHeader?: IElementOrillustration;
  imageHeader?: IElementOrIcon;
  content?: React.ReactNode;
  contentScrollArias?: ModalContentScrollAriasType;
  contentHasScroll: boolean;
  footer?: ModalFooterType;
  device: DeviceBreakpointsType;
  dataTestId?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  onPopoverCloseInternally?: () => void;
  dragIcon?: IElementOrIcon;
}

type OmitProps = 'styles' | 'device' | 'contentHasScroll';

export interface IModalControlled<V = undefined extends string ? unknown : string>
  extends Omit<IModalStandAlone, OmitProps>,
    Omit<CustomTokenTypes<ModalBaseStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  portalId?: string;
  onClose?: () => void;
}

export interface IModalUnControlled<V = undefined extends string ? unknown : string>
  extends IModalControlled<V> {}
