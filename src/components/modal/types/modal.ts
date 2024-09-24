import { IButton } from '@/components/button';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IElementOrillustration } from '@/components/elementOrIllustration';
import { IFooter } from '@/components/footer';
import { IPopoverControlled } from '@/components/popover';
import { IText } from '@/components/text/types';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

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
  footer?: ModalFooterType;
  device: DeviceBreakpointsType;
  dataTestId?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  onPopoverCloseInternally?: () => void;
  dragIcon?: IElementOrIcon;
  dragIconRef?: (node) => void;
  /* To useScrollableEffect */
  scrollableRef: (node) => void;
  resizeRef: (node) => void;
  shadowRef: (node) => void;
  /* to useZoomEffect */
  zoomRef: (node) => void;
  zoomRefChild: (node) => void;
}

type OmitProps =
  | 'styles'
  | 'device'
  | 'scrollableRef'
  | 'resizeRef'
  | 'shadowRef'
  | 'zoomRef'
  | 'zoomRefChild'
  | 'dragIconRef';

export interface IModalControlled<V = undefined extends string ? unknown : string>
  extends Omit<IModalStandAlone, OmitProps>,
    Omit<CustomTokenTypes<ModalBaseStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  portalId?: string;
  onClose?: () => void;
}

export interface IModalUnControlled<V = undefined extends string ? unknown : string>
  extends IModalControlled<V> {}
