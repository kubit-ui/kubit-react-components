import { ReactNode } from 'react';

import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IActionBottomSheetControlledStructure } from '../../actionBottomSheet/types/actionBottomSheet';
import { IButton } from '../../button/types/button';
import { IListOptions } from '../../listOptions/types/listOptions';
import { IPopoverControlled } from '../../popover/types/popover';
import { OliveMenuGlobalStylesType } from './oliveMenuTheme';

export type OliveMenuTriggerType = Omit<IButton, 'children' | 'size'> & {
  content?: ReactNode;
  size?: string;
};

export type OliveMenuActionBottomSheetStructure = Omit<
  IActionBottomSheetControlledStructure,
  'children' | 'variant' | 'dragIconRef'
> & {
  variant?: string;
  forwardedRef?: (node: HTMLDivElement) => void;
};

export type OliveMenuListOptions = Omit<
  IListOptions,
  'variant' | 'optionVariant' | 'onOptionClick' | 'selectedValue'
> & {
  variant?: string;
  optionVariant?: string;
};

export type OliveMenuPopover = Omit<IPopoverControlled, 'children' | 'open'>;

export interface IOliveMenuStandAlone {
  styles: OliveMenuGlobalStylesType;
  device: DeviceBreakpointsType;
  open?: boolean;
  trigger?: OliveMenuTriggerType;
  screenReaderText?: string;
  popover?: OliveMenuPopover;
  actionBottomSheetStructure?: OliveMenuActionBottomSheetStructure;
  sections?: OliveMenuListOptions[];
  selectedValue?: string | number;
  dataTestId?: string;
  onOptionClick?: (value?: string | number) => void;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
}

export interface IOliveMenu<V = undefined extends string ? unknown : string>
  extends Omit<IOliveMenuStandAlone, 'styles' | 'device' | 'open' | 'active' | 'onBlur'>,
    Omit<CustomTokenTypes<OliveMenuGlobalStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  onOpenClose?: (
    open: boolean,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FocusEvent<HTMLDivElement>
  ) => void;
}
