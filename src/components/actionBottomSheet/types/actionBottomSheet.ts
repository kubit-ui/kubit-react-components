import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { ILink } from '../../link/types/link';
import { IPopoverControlled } from '../../popover/types/popover';
import { IText } from '../../text/types/text';
import { ActionBottomSheetVariantStylesType } from './actionBottomSheetTheme';

export type ActionBottomPopoverType = Omit<IPopoverControlled, 'children' | 'open'>;

export type ActionBottomSheetTextType = Omit<IText<string>, 'children'> & {
  content?: React.ReactNode;
};

/**
 * @description
 * interface for the action bottom sheet stand alone
 * @interface ActionBottomSheetProps
 * @template V
 */
export interface IActionBottomSheetStandAlone {
  children: React.ReactNode;
  styles: ActionBottomSheetVariantStylesType;
  closeIcon?: IElementOrIcon;
  actionLink?: ILink;
  title?: ActionBottomSheetTextType;
  hasHeader?: boolean;
  dataTestId?: string;
  device: DeviceBreakpointsType;
  headerContent?: React.ReactNode;
  height?: string;
  dragIcon?: IElementOrIcon;
  dragIconRef?: (node: HTMLDivElement) => void;
  /* to useScrollEffect */
  scrollableRef: (node) => void;
  shadowRef: (node) => void;
}

type OmitProps = 'styles' | 'device' | 'scrollableRef' | 'shadowRef';

/**
 * @description
 * interface for the action bottom sheet uncontrolled
 * @interface ActionBottomSheetProps
 * @template V
 */
export interface IActionBottomSheetControlledStructure<
  V = undefined extends string ? unknown : string,
> extends Omit<IActionBottomSheetStandAlone, OmitProps>,
    Omit<CustomTokenTypes<ActionBottomSheetVariantStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  blocked?: boolean;
}

/**
 * @description
 * interface for the action bottom sheet controlled
 * @interface ActionBottomSheetProps
 * @template V
 * @extends {IActionBottomSheetControlledStructure<V>}
 */
export interface IActionBottomSheetControlled<V = undefined extends string ? unknown : string>
  extends Omit<IActionBottomSheetControlledStructure<V>, 'dragIconRef'> {
  open: boolean;
  popover?: ActionBottomPopoverType;
}

/**
 * @description
 * interface for the action bottom sheet styles
 * @interface ActionBottomSheetPropsStylesType
 * @template V
 */
export interface ActionBottomSheetUnControlledType<V = undefined extends string ? unknown : string>
  extends Omit<IActionBottomSheetControlled<V>, 'open'> {
  open?: boolean;
}
