import { ReactNode } from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import {
  IInputStandAlone,
  InputHelpMessageType,
  InputLabelType,
  InputState,
  InputStylesProps,
} from '@/components/input/types';
import { ListOptionsOptionType } from '@/components/listOptions';
import { ILoader } from '@/components/loader/types';
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
export interface IOptionGroup {
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
  icon?: IElementOrIcon;
  overrideStyles?: InputStylesProps;
  placeholder?: string;
  value?: string;
  variant?: string;
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
  preventCloseOnClickElements?: (HTMLElement | null | undefined)[];
  searchText?: string;
  recommendedOption?: string;
  hasResultTextWrittenByUser?: boolean;
  state: InputState;
  styles: InputSearchStylesProps;
  sublabel?: string;
  titleActionBottomSheet?: string;
  value?: string;
  // Functions
  onOpenOptions: (value: boolean) => void;
  onValueSelected: (value: string) => void;
  onOptionsListKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export interface IOptionsListSearchList {
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
  | 'icon'
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
  | 'formatNumber';

export interface IInputSearchStandAlone extends Omit<IInputStandAlone, propsToOmitInputStandalone> {
  device: DeviceBreakpointsType;
  styles: InputSearchStylesProps;
  // Modifiers
  inputVariant?: string;
  open: boolean;
  searchText?: string;
  value?: string;
  titleActionBottomSheet?: string;
  // listOptions
  listOptionsHeight: string;
  optionList: IOptionGroup[];
  loadingList?: boolean;
  loadingText?: InputSearchLoadingTextType;
  elementsToShow?: number;
  noResultsText?: InputSearchNoResultTextType;
  highlightedOption?: string;
  hasResultTextWrittenByUser?: boolean;
  hasHighlightedOption?: boolean;
  recommendedOption?: string;
  // actionBottomSheet
  sublabel?: string;
  closeIcon?: IElementOrIcon;
  icon?: IElementOrIcon;
  // input popover
  inputPopoverIcon?: IElementOrIcon;
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
  | 'recommendedOption'
  | 'onChange'
  | 'onInputPopoverChange'
  | 'onInputPopoverKeyDown'
  | 'onInputPopoverIconClick'
  | 'onValueSelected'
  | 'onClick';

export interface InputSearchBestMatch {
  list: number;
  bestMatchkey: string;
  bestMatch: object | undefined;
}

export interface InputSearchFilterOptionReturnValue {
  optionsFiltered: IOptionGroup[];
  recommendedOption?: string;
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
  error?: boolean;
  searchFilterConfig?: SearchFilterConfig;
  disableErrorInvalidOption?: boolean;
  regex?: string;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  clearTextInputPopoverIconClick?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onInputPopoverIconClick?: () => void;
  onOptionsListKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onPopoverOpen?: (open: boolean) => void;
  onOptionClick?: IInputSearchStandAlone['onValueSelected'];
  executeInternalOpenOptions?: boolean;
  onInternalErrors?: (errors: string[]) => void;
}
