import { ReactNode } from 'react';

import { ActionBottomSheetTextType } from '@/components/actionBottomSheet';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IInputStandAlone, INTERNAL_ERROR_EXECUTION, InputState } from '@/components/input/types';
import { ListOptionsOptionType } from '@/components/listOptions';
import { ILoader } from '@/components/loader/types';
import { IText } from '@/components/text';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

import {
  InputDropdownListOptionsProps,
  InputDropdownStateProps,
  InputDropdownStylesProps,
} from './inputDropdownTheme';

export type InputDropdownOptionsAriasTypes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby'
>;

export type InputDropdownOptionsType = {
  options: ListOptionsOptionType[];
  optionVariant?: string;
  listOptionsVariant?: string;
} & InputDropdownOptionsAriasTypes;

export interface IPopoverDropdownList {
  open: boolean;
  optionList: InputDropdownOptionsType;
  state: InputState;
  styles: InputDropdownStylesProps;
  onOpenOptions: (value: boolean) => void;
  onValueSelected: (value: string) => void;
  listOptionsHeight: string;
  ['aria-controls']?: string;
  closeIcon?: IElementOrIcon;
  dataTestId?: string;
  elementsToShow?: number;
  noResultsText?: InputDropdownNoResultTextType;
  device: DeviceBreakpointsType;
  label?: ActionBottomSheetTextType;
  loading?: boolean;
  loader?: Omit<ILoader, 'variant'> & { variant?: string };
  loadingText?: InputDropdownLoadingTextType;
  preventCloseOnClickElements?: (HTMLElement | null | undefined)[];
  hasResultTextWrittenByUser?: boolean;
  hasInputInSearchList?: boolean;
  searchText?: string;
  /**
   * @deprecated `inputPopoverIcon` will be removed. Use `popoverRightIcon` instead
   */
  inputPopoverIcon?: IElementOrIcon;
  inputPopoverRightIcon?: IElementOrIcon;
  inputPopoverVariant?: string;
  inputPopoverValue?: string;
  value?: string;
  onInputPopoverChange: React.ChangeEventHandler<HTMLInputElement>;
  onInputPopoverKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onInputPopoverIconClick: () => void;
  onCloseIconTabletMobileClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export type InputDropdownLoadingTextType = Omit<IText<string>, 'children'> & {
  content?: string;
};

export type InputDropdownNoResultTextType = Omit<IText<string>, 'children'> & {
  content?: string | ReactNode;
};

export interface IOptionsListDropdownList {
  stylesListOption?: InputDropdownListOptionsProps;
  stylesState?: InputDropdownStateProps;
  optionList: InputDropdownOptionsType;
  onOpenOptions: (value: boolean) => void;
  onValueSelected: (value: string) => void;
  ['aria-controls']?: string;
  dataTestId?: string;
  loading?: boolean;
  loader?: Omit<ILoader, 'variant'> & { variant?: string };
  loadingText?: InputDropdownLoadingTextType;
  searchText?: string;
  value?: string;
}

export interface ILoadingIconDropdown {
  loading?: boolean;
  optionList?: InputDropdownOptionsType;
  loader?: Omit<ILoader, 'variant'> & { variant?: string };
  loadingText?: InputDropdownLoadingTextType;
  stateStyles?: InputDropdownStateProps;
}

// Input Dropdown

type PropsToOmitIInputStandAlone =
  | 'variant'
  | 'styles'
  | 'inputId'
  | 'error'
  | 'disabled'
  | 'textCounter'
  | 'max'
  | 'min'
  | 'maxLength'
  | 'minLength'
  | 'mask'
  | 'maskType'
  | 'truncate'
  | 'role'
  | 'value'
  | 'aria-controls'
  | 'aria-expanded'
  | 'aria-haspopup'
  | 'formatNumber'
  | 'locale';

export interface IInputDropdownStandAlone
  extends Omit<IInputStandAlone, PropsToOmitIInputStandAlone> {
  device: DeviceBreakpointsType;
  styles: InputDropdownStylesProps;
  // Modifiers
  inputVariant?: string;
  open: boolean;
  searchText?: string;
  value?: string;
  // listOptions
  listOptionsHeight: string;
  optionList: InputDropdownOptionsType;
  loadingList?: boolean;
  loadingText?: InputDropdownLoadingTextType;
  elementsToShow?: number;
  noResultsText?: InputDropdownNoResultTextType;
  // actionBottomSheet
  closeIcon?: IElementOrIcon;
  hasResultTextWrittenByUser?: boolean;
  // input popover
  hasInputInSearchList?: boolean;
  /**
   * @deprecated `inputPopoverIcon` will be removed. Use `popoverRightIcon` instead
   */
  inputPopoverIcon?: IElementOrIcon;
  inputPopoverRightIcon?: IElementOrIcon;
  inputPopoverValue?: string;
  inputPopoverVariant?: string;
  clearTextInputPopoverIconClick?: boolean;
  // Functions
  onOpenOptions: (value: boolean) => void;
  onValueSelected: (value: string) => void;
  onInputPopoverIconClick: () => void;
  onInputPopoverChange: React.ChangeEventHandler<HTMLInputElement>;
  onInputPopoverKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onCloseIconTabletMobileClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

type PropsToOmitIInputDropdownStandAlone =
  | 'styles'
  | 'state'
  | 'searchText'
  | 'inputPopoverValue'
  | 'device'
  | 'open'
  | 'listOptionsHeight'
  | 'onOpenOptions'
  | 'onValueSelected'
  | 'onChange'
  | 'onInputPopoverChange'
  | 'onInputPopoverKeyDown'
  | 'onInputPopoverIconClick'
  | 'onClick';

export type InputDropdownOnChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => void;

export interface IInputDropdown<V = undefined extends string ? unknown : string>
  extends Omit<IInputDropdownStandAlone, PropsToOmitIInputDropdownStandAlone>,
    Omit<CustomTokenTypes<InputDropdownStylesProps>, 'cts' | 'extraCt'> {
  open?: boolean;
  disabled?: boolean;
  error?: boolean;
  internalErrorExecution?: INTERNAL_ERROR_EXECUTION;
  onClick?: (
    event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => void;
  onChange?: InputDropdownOnChangeType;
  onInputPopoverIconClick?: () => void;
  onOpenCloseOptions?: (open: boolean) => void;
  onInternalErrors?: (errors: string[]) => void;
  variant: V;
}
