import { ReactNode } from 'react';

import { IActionBottomSheetControlledStructure } from '@/components/actionBottomSheet';
import { IButton } from '@/components/button';
import { IListOptions } from '@/components/listOptions';
import { IPopoverControlled } from '@/components/popover';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

import { OliveMenuGlobalStylesType } from './oliveMenuTheme';

export type OliveMenuTriggerType = Omit<IButton, 'children' | 'size'> & {
  content?: ReactNode;
  size?: string;
};

export type OliveMenuActionBottomSheetStructure = Omit<
  IActionBottomSheetControlledStructure,
  'children' | 'variant'
> & {
  variant?: string;
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
