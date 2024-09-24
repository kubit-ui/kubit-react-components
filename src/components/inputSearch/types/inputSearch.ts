import { ReactNode } from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import {
  IInputStandAlone,
  INTERNAL_ERROR_EXECUTION,
  InputHelpMessageType,
  InputLabelType,
  InputState,
  InputStylesProps,
} from '@/components/input/types';
import { ListOptionsOptionType } from '@/components/listOptions';
import { ILoader } from '@/components/loader/types';
import { OptionSublabelType } from '@/components/option';
import { IText } from '@/components/text/types';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

import {
  InputSearchListOptionsProps,
  InputSearchStateProps,
  InputSearchStylesProps,
} from './inputSearchTheme';

export type InputSearchOptionType = ListOptionsOptionType;

export type InputSearchTitleType = Omit<IText<string>, 'children'> & {
  content?: string | number;
};

export type OptionGroupAriasTypes = Pick<React.AriaAttributes, 'aria-label' | 'aria-labelledby'>;

export interface IOptionGroup extends OptionGroupAriasTypes {
  options: string[];
  title?: InputSearchTitleType;
  optionVariant?: string;
  listOptionsVariant?: string;
}

export type InputSearchLoadingTextType = Omit<IText<string>, 'children'> & {
  content?: string;
};

export type InputSearchNoResultTextType = Omit<IText<string>, 'children'> & {
  content?: string | ReactNode;
};

export type PopoverSearchInputType = {
  additionalInfo?: ReactNode;
  label?: InputLabelType;
  secondaryLabel?: ReactNode;
  helpMessage?: InputHelpMessageType;
  /**
   * @deprecated `icon` will be removed. Use `rightIcon instead
   */
  icon?: IElementOrIcon;
  rightIcon?: IElementOrIcon;
  overrideStyles?: InputStylesProps;
  placeholder?: string;
  value?: string;
  variant?: string;
  error?: boolean;
  errorIcon?: IElementOrIcon;
  errorMessage?: InputSearchLoadingTextType;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onIconClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export interface IPopoverSearchList {
  blockBackPopover?: boolean;
  ['aria-controls']?: string;
  closeIcon?: IElementOrIcon;
  dataTestId?: string;
  device: DeviceBreakpointsType;
  elementsToShow?: number;
  highlightedOption?: string;
  hasHighlightedOption?: boolean;
  inputConfiguration?: PopoverSearchInputType;
  listOptionsHeight: string;
  loader?: Omit<ILoader, 'variant'> & { variant?: string };
  loading?: boolean;
  noResultsText?: InputSearchNoResultTextType;
  loadingText?: InputSearchLoadingTextType;
  open: boolean;
  optionList: IOptionGroup[];
  optionsListDefaultArias?: OptionGroupAriasTypes;
  preventCloseOnClickElements?: (HTMLElement | null | undefined)[];
  searchText?: string;
  hasResultTextWrittenByUser?: boolean;
  state: InputState;
  styles: InputSearchStylesProps;
  sublabel?: OptionSublabelType;
  titleActionBottomSheet?: string;
  regex?: string | RegExp;
  value?: string;
  caseSensitive?: boolean;
  optionCheckedIcon?: IElementOrIcon;
  // Functions
  onOpenOptions: (value: boolean) => void;
  onValueSelected: (value: string) => void;
  onOptionsListKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export interface IOptionsListSearchList extends OptionGroupAriasTypes {
  caseSensitive?: boolean;
  index?: number;
  stylesListOption?: InputSearchListOptionsProps;
  stylesState?: InputSearchStateProps;
  options: string[];
  optionVariant?: string;
  listOptionsVariant?: string;
  title?: InputSearchTitleType;
  onOpenOptions: (value: boolean) => void;
  onValueSelected: (value: string) => void;
  ['aria-controls']?: string;
  dataTestId?: string;
  hightlightedOption?: InputSearchOptionType;
  loading?: boolean;
  loader?: Omit<ILoader, 'variant'> & { variant?: string };
  loadingText?: InputSearchLoadingTextType;
  value?: string;
  searchText?: string;
  optionCheckedIcon?: IElementOrIcon;
}

export interface ILoadingIcon {
  expanded: boolean;
  loading?: boolean;
  loader?: Omit<ILoader, 'variant'> & { variant?: string };
  loadingText?: InputSearchLoadingTextType;
  stateStyles?: InputSearchStateProps;
}

// Input Search

type propsToOmitInputStandalone =
  | 'variant'
  | 'styles'
  | 'inputId'
  | 'error'
  | 'disabled'
  | 'textCounter'
  | 'max'
  | 'min'
  | 'minLength'
  | 'mask'
  | 'maskType'
  | 'truncate'
  | 'role'
  | 'aria-controls'
  | 'aria-expanded'
  | 'aria-haspopup'
  | 'formatNumber'
  | 'locale';

export interface IInputSearchStandAlone extends Omit<IInputStandAlone, propsToOmitInputStandalone> {
  device: DeviceBreakpointsType;
  styles: InputSearchStylesProps;
  // Modifiers
  inputVariant?: string;
  open: boolean;
  error?: boolean;
  searchText?: string;
  value?: string;
  titleActionBottomSheet?: string;
  regex?: string | RegExp;
  // listOptions
  caseSensitive?: boolean;
  listOptionsHeight: string;
  optionList: IOptionGroup[];
  optionsListDefaultArias?: OptionGroupAriasTypes;
  optionCheckedIcon?: IElementOrIcon;
  loadingList?: boolean;
  loadingText?: InputSearchLoadingTextType;
  elementsToShow?: number;
  noResultsText?: InputSearchNoResultTextType;
  highlightedOption?: string;
  hasResultTextWrittenByUser?: boolean;
  hasHighlightedOption?: boolean;
  // actionBottomSheet
  sublabel?: OptionSublabelType;
  closeIcon?: IElementOrIcon;
  // input popover
  /**
   * @deprecated `inputPopoverIcon` will be removed. Use `popoverRightIcon` instead
   */
  inputPopoverIcon?: IElementOrIcon;
  inputPopoverRightIcon?: IElementOrIcon;
  inputPopoverValue?: string;
  inputPopoverVariant?: string;
  // Functions
  onOpenOptions: (value: boolean) => void;
  onValueSelected: (value: string) => void;
  onInputPopoverIconClick: () => void;
  onInputPopoverChange: React.ChangeEventHandler<HTMLInputElement>;
  onInputPopoverKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onOptionsListKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  blockBackPopover?: boolean;
}

type propsToOmit =
  | 'styles'
  | 'state'
  | 'searchText'
  | 'device'
  | 'inputPopoverValue'
  | 'open'
  | 'listOptionsHeight'
  | 'hasHighlightedOption'
  | 'onOpenOptions'
  | 'onChange'
  | 'onInputPopoverChange'
  | 'onInputPopoverKeyDown'
  | 'onInputPopoverIconClick'
  | 'onValueSelected'
  | 'onClick';

export interface InputSearchFilterOptionReturnValue {
  optionsFiltered: IOptionGroup[];
}

export interface SearchFilterConfig {
  wordSeparator: string;
  suggestInit: number;
}

export interface IInputSearch<V = undefined extends string ? unknown : string>
  extends Omit<IInputSearchStandAlone, propsToOmit>,
    Omit<CustomTokenTypes<InputSearchStylesProps>, 'cts' | 'extraCt'> {
  variant: V;
  open?: boolean;
  disabled?: boolean;
  searchFilterConfig?: SearchFilterConfig;
  disableErrorInvalidOption?: boolean;
  regex?: string | RegExp;
  internalErrorExecution?: INTERNAL_ERROR_EXECUTION;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  /**
   * @deprecated
   * @description This prop is deprecated and will be removed in the next major version.
   */
  clearTextInputPopoverIconClick?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInputPopoverIconClick?: () => void;
  onOptionsListKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onPopoverOpen?: (open: boolean) => void;
  onOptionClick?: IInputSearchStandAlone['onValueSelected'];
  executeInternalOpenOptions?: boolean;
  onInternalErrors?: (errors: string[]) => void;
}
