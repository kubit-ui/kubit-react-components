import { IElementOrIcon } from '@/components/elementOrIcon';
import { IPopoverControlled } from '@/components/popover';
import { IText } from '@/components/text';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

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
  title?: ActionBottomSheetTextType;
  hasHeader?: boolean;
  dataTestId?: string;
  device: DeviceBreakpointsType;
  headerContent?: React.ReactNode;
  height?: string;
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
  extends IActionBottomSheetControlledStructure<V> {
  open: boolean;
  popover?: ActionBottomPopoverType;
}

/**
 * @description
 * interface for the action bottom sheet styles
 * @interface ActionBottomSheetPropsStylesType
 * @template V
 */
export type ActionBottomSheetUnControlledType<V = undefined extends string ? unknown : string> =
  IActionBottomSheetControlled<V>;
