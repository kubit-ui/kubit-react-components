import * as React from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { LinkTargetType } from '@/components/link';
import { IListOptions } from '@/components/listOptions';
import { IPopoverControlled } from '@/components/popover';
import { IText } from '@/components/text';
import { GenericLinkType } from '@/provider/genericComponents';
import { CustomTokenTypes, ROLES } from '@/types';

import {
  DropdownSelectedPropsStylesType,
  DropdownSelectedStateStylesType,
} from './dropdownSelectedTheme';

export type DropdownSelectedTextType = Omit<IText<string>, 'children'> & {
  content: string;
};

export type DropdownSelectedListOptionsType = Omit<
  IListOptions,
  'variant' | 'optionVariant' | 'selectedValue' | 'onOptionClick'
> & {
  variant?: string;
  optionVariant?: string;
};

export type DropdownSelectedPopoverType = Omit<IPopoverControlled, 'children' | 'open'>;

export interface IDropdownSelectedStandAlone {
  styles?: DropdownSelectedPropsStylesType;
  open: boolean;
  popover?: DropdownSelectedPopoverType;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement | HTMLLinkElement>;
  onButtonKeyDown: React.KeyboardEventHandler<HTMLButtonElement | HTMLLinkElement>;
  onClosePopover: () => void;
  label: DropdownSelectedTextType;
  icon: IElementOrIcon;
  listOptions: DropdownSelectedListOptionsType;
  optionSelected?: string;
  onOptionClick: (value: string) => void;
  listOptionsRef: React.RefObject<HTMLDivElement>;
  dataTestIdComponent?: string;
  dataTestIdListOptionsContainer?: string;
  closePopoverOnScroll?: boolean;
  openAndCloseOnHover?: boolean;
  url?: string;
  urlTarget?: LinkTargetType;
  component: ROLES.BUTTON | GenericLinkType;
  buttonOrLinkRef?: React.RefObject<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
}

export interface IDropdownSelectedControlled<V = undefined extends string ? unknown : string>
  extends Omit<
      IDropdownSelectedStandAlone,
      'styles' | 'listOptionsRef' | 'onButtonKeyDown' | 'component'
    >,
    Omit<CustomTokenTypes<DropdownSelectedStateStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}

type propsToOmit =
  | 'buttonOrLinkRef'
  | 'open'
  | 'onButtonClick'
  | 'optionSelected'
  | 'onOptionClick'
  | 'onClosePopover'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onBlur'
  | 'onFocus'
  | 'onKeyDown';

export interface IDropdownSelectedUncontrolled
  extends Omit<IDropdownSelectedControlled, propsToOmit> {
  defaultOpen?: boolean;
  defaultOptionSelected?: string;
  onOptionClick?: (value: string) => void;
  onButtonClick?: (open: boolean) => void;
  onClosePopover?: (open: boolean) => void;
  onMouseEnter?: (open: boolean) => void;
  onMouseLeave?: (open: boolean) => void;
  onFocus?: (open: boolean) => void;
  onBlur?: (open: boolean) => void;
}
