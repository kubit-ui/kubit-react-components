import * as React from 'react';

import { CSSProp } from 'styled-components';

import { IButton } from '@/components/button/types';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IIconHighlighted, IconHighlightedSizeType } from '@/components/iconHighlighted';
import {
  InputCounterStateProps,
  InputCounterStylesProps,
} from '@/components/inputCounter/types/inputCounterTheme';
import {
  InputCurrencyStateProps,
  InputCurrencyStylesProps,
} from '@/components/inputCurrency/types/inputCurrencyTheme';
import {
  InputDateStateProps,
  InputDateStylesProps,
} from '@/components/inputDate/types/inputDateTheme';
import {
  InputDropdownStateProps,
  InputDropdownStylesProps,
} from '@/components/inputDropdown/types/inputDropdownTheme';
import {
  InputPhoneStateProps,
  InputPhoneStylesProps,
} from '@/components/inputPhone/types/inputPhoneTheme';
import {
  InputSearchStateProps,
  InputSearchStylesProps,
} from '@/components/inputSearch/types/inputSearchTheme';
import { ILabelStandAlone } from '@/components/label';
import { ILoader } from '@/components/loader/types';
import { IText } from '@/components/text';
import { AriaLiveOptionType, CustomTokenTypes, InputModeType, ROLES } from '@/types';

// themes
import { InputIconPosition, InputState } from './inputTheme';
import { InputTypeType } from './inputType';
import { InputTitleComponentType } from './titleComponent';

// common styles
export type InputStylesProps =
  | InputCurrencyStylesProps
  | InputCounterStylesProps
  | InputPhoneStylesProps
  | InputDateStylesProps
  | InputSearchStylesProps
  | InputDropdownStylesProps;
export type InputStateProps =
  | InputCurrencyStateProps
  | InputCounterStateProps
  | InputPhoneStateProps
  | InputDateStateProps
  | InputSearchStateProps
  | InputDropdownStateProps;

// Enums
export enum MASK_TYPE {
  LETTERS = 'LETTERS',
  NUMBERS = 'NUMBERS',
  NUMBERS_WITH_SPACES = 'NUMBERS_WITH_SPACES',
  ALPHANUMERIC = 'ALPHANUMERIC',
  ALPHANUMERIC_WITH_SPACES = 'ALPHANUMERIC_WITH_SPACES',
  LETTERS_HYPHEN_SPACE = 'LETTERS_HYPHEN_SPACE',
}

export enum ERROR_EXECUTION {
  ON_CHANGE = 'onChange',
  ON_BLUR = 'onBlur',
}

export enum INTERNAL_ERROR_EXECUTION {
  ON_CHANGE = 'onChange',
  ON_BLUR = 'onBlur',
  ON_CHANGE_ON_BLUR = 'onChangeOnBlur',
}

export enum AUTOCAPITALIZE_TYPE {
  OFF = 'off',
  NONE = 'none',
  ON = 'on',
  SENTENCES = 'sentences',
  WORDS = 'words',
  CHARACTERS = 'characters',
}

export enum AUTOCOMPLETE_TYPE {
  ON = 'on',
  OFF = 'off',
  NAME = 'name',
  HONORIFIC_PREFIX = 'honorific-prefix',
  GIVEN_NAME = 'given-name',
  ADDITIONAL_NAME = 'additional-name',
  FAMILY_NAME = 'family-name',
  HONORIFIC_SUFFIX = 'honorific-suffix',
  NICKNAME = 'nickname',
  EMAIL = 'email',
  USERNAME = 'username',
  NEW_PASSWORD = 'new-password',
  CURRENT_PASSWORD = 'current-password',
  ONE_TIME_CODE = 'one-time-code',
  ORGANIZATION_TITLE = 'organization-title',
  ORGANIZATION = 'organization',
  STREET_ADDRESS = 'street-address',
  ADDRESS_LINE1 = 'address-line1',
  ADDRESS_LINE2 = 'address-line2',
  ADDRESS_LINE3 = 'address-line3',
  ADDRESS_LEVEL4 = 'address-level4',
  ADDRESS_LEVEL3 = 'address-level3',
  ADDRESS_LEVEL2 = 'address-level2',
  ADDRESS_LEVEL1 = 'address-level1',
  COUNTRY = 'country',
  POSTAL_CODE = 'postal-code',
  CC_NAME = 'cc-name',
  CC_GIVEN_NAME = 'cc-given-name',
  CC_ADDITIONAL_NAME = 'cc-additional-name',
  CC_FAMILY_NAME = 'cc-family-name',
  CC_NUMBER = 'cc-number',
  CC_EXP = 'cc-exp',
  CC_EXP_MONTH = 'cc-exp-month',
  CC_EXP_YEAR = 'cc-exp-year',
  CC_CSC = 'cc-csc',
  CC_TYPE = 'cc-type',
  TRANSACTION_CURRENCY = 'transaction-currency',
  TRANSACTION_AMOUNT = 'transaction-amount',
  LANGUAGE = 'language',
  BDAY = 'bday',
  BDAY_DAY = 'bday-day',
  BDAY_MONTH = 'bday-month',
  BDAY_YEAR = 'bday-year',
  SEX = 'sex',
  TEL = 'tel',
  TEL_COUNTRY_CODE = 'tel-country-code',
  TEL_NATIONAL = 'tel-national',
  TEL_AREA_CODE = 'tel-area-code',
  TEL_LOCAL = 'tel-local',
  TEL_EXTENSION = 'tel-extension',
  IMPP = 'impp',
  URL = 'url',
  PHOTO = 'photo',
  PHOTO_URL = 'photo-url',
  ROLE = 'role',
  ORGANIZATION_ROLE = 'organization-role',
  NOTE = 'note',
  SECTION = 'section',
  SEARCH = 'search',
  BOOKMARK = 'bookmark',
  HOME = 'home',
  WORK = 'work',
  MOBILE = 'mobile',
  FAX = 'fax',
  PAGER = 'pager',
  OTHER = 'other',
}

// Component types
export interface IInputIcon {
  state: InputState;
  styles?: InputStateProps;
  // modifiers
  loading?: boolean;
  disabled?: boolean;
  // icons
  rightIcon?: IElementOrIcon;
  leftIcon?: IElementOrIcon;
  iconPosition?: InputIconPosition;
  /**
   * @deprecated `icon` will be removed. Use `rightIcon` or `leftIcon` instead
   */
  icon?: IElementOrIcon;
}

export interface IInputLoader {
  styles?: InputStateProps;
  loader?: Omit<ILoader, 'variant'> & { variant?: string };
  loading?: boolean;
}

export type InputTitleType = Omit<IText<string>, 'children' | 'component'> & {
  content: string;
  component?: InputTitleComponentType;
};

export interface ITitle {
  styles?: InputStateProps;
  // modifiers
  title?: InputTitleType;
  additionalInfo?: React.ReactNode;
  state: InputState;
  dataTestId?: string;
}

export type InputLabelType = Omit<ILabelStandAlone, 'children' | 'inputId'> & {
  content?: string;
};

export interface ILabel {
  state: InputState;
  styles?: InputStylesProps;
  // modifiers
  inputId: string;
  id: string;
  required?: boolean;
  label?: InputLabelType;
  placeholder?: string;
  textVariant?: string;
  additionalInfo?: React.ReactNode;
  secondaryLabel?: React.ReactNode;
  leftExtraStyles?: boolean;
  topExtraStyles?: boolean;
  // dataTestId
  dataTestId?: string;
}

export interface ITextCount {
  styles?: InputCounterStateProps;
  textCounter?: React.ReactNode;
}

export type InputInformationAssociatedIconType = IElementOrIcon & {
  position?: InputIconPosition;
};

export type InputHighlightedInformationAssociatedIconType = Omit<
  IIconHighlighted,
  'variant' | 'size'
> & {
  position?: InputIconPosition;
  variant?: string;
  size?: IconHighlightedSizeType;
};
export interface IInformationAssociatedDecoration {
  styles?: InputStateProps;
  informationAssociatedIcon?: InputInformationAssociatedIconType;
  highlightedInformationAssociatedIcon?: InputHighlightedInformationAssociatedIconType;
}

export type InputInformationAssociatedValueType = Omit<IText<string>, 'children'> & {
  content: string;
};

export type InputInformationAssociatedButtonType = Omit<
  IButton,
  'children' | 'variant' | 'size'
> & {
  content: string;
  variant?: string;
  size?: string;
};

export type IInformationAssociated = IInformationAssociatedDecoration & {
  state: InputState;
  // modifiers
  informationAssociatedValue?: InputInformationAssociatedValueType;
  informationAssociatedButton?: InputInformationAssociatedButtonType;
  // dataTestId
  dataTestId?: string;
};

export type InputHelpMessageType = Omit<IText<string>, 'children'> & {
  content?: React.ReactNode | string;
};

export interface IHelpMessage {
  styles?: InputStateProps;
  // modifiers
  helpMessage?: InputHelpMessageType;
  helpMessageId?: string;
  // dataTestId
  dataTestId?: string;
}

export type InputErrorMessageType = Omit<IText<string>, 'children'> & {
  content?: string;
};

export interface IErrorMessage {
  styles?: InputStateProps;
  state: InputState;
  // modifiers
  errorMessage?: InputErrorMessageType;
  errorMessageId?: string;
  // icons
  errorIcon?: IElementOrIcon;
  errorAriaLiveType?: AriaLiveOptionType;
  // dataTestId
  dataTestId?: string;
}

type InputAriaAttributes = Pick<
  React.AriaAttributes,
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'aria-controls'
  | 'aria-expanded'
  | 'aria-invalid'
  | 'aria-disabled'
>;

// Input types
type componentPropsToOmit =
  | 'styles'
  | 'state'
  | 'dataTestId'
  | 'placeholder'
  | 'leftExtraStyles'
  | 'topExtraStyles'
  // uncomment when icon prop is removed
  // | 'iconPosition'
  | 'id';
export interface IInputComponents
  extends InputAriaAttributes,
    Omit<IErrorMessage, componentPropsToOmit>,
    Omit<IHelpMessage, componentPropsToOmit>,
    Omit<IInformationAssociated, componentPropsToOmit>,
    Omit<ITextCount, componentPropsToOmit>,
    Omit<ILabel, componentPropsToOmit>,
    Omit<ITitle, componentPropsToOmit>,
    Omit<IInputLoader, componentPropsToOmit>,
    // remove interface extension when icon prop is removed
    Omit<IInputIcon, componentPropsToOmit> {}

type AriaHasPopupType =
  | boolean
  | 'dialog'
  | 'menu'
  | 'true'
  | 'false'
  | 'grid'
  | 'listbox'
  | 'tree'
  | undefined;

export interface MultipleRef {
  refInput?: React.MutableRefObject<HTMLInputElement>;
  // remove `refIcon` when icon prop is removed
  refIcon: React.MutableRefObject<HTMLSpanElement | undefined>;
  refRightIcon: React.MutableRefObject<HTMLSpanElement | undefined>;
  refLeftIcon: React.MutableRefObject<HTMLSpanElement | undefined>;
}

export type FormatNumber = Intl.NumberFormatOptions & {
  /**
   * @deprecated `locale` in `formatNumber` is deprecated. Please use `locale` instead.
   */
  locale?: string;
};

// Input properties
export type IInputStandAlone = IInputComponents & {
  // modifiers
  state: InputState;
  styles: InputStylesProps;
  value?: string | number;
  name?: string;
  id?: string;
  type?: InputTypeType;
  truncate?: boolean;
  disabledArrowUpDownInputNumber?: boolean;
  placeholder?: string;
  autocomplete?: AUTOCOMPLETE_TYPE;
  autoCapitalize?:
    | 'off'
    | 'none'
    | 'on'
    | 'sentences'
    | 'words'
    | 'characters'
    | AUTOCAPITALIZE_TYPE;
  disabledCopyAndPaste?: boolean;
  disabledWheelMouse?: boolean;
  maxLength?: number;
  minLength?: number;
  min?: number;
  max?: number;
  ignoreKeys?: string[];
  inputMode?: InputModeType;
  formatNumber?: FormatNumber;
  // extra content around the input
  leftContent?: string | JSX.Element;
  leftExtraStyles?: CSSProp;
  rightContent?: string | JSX.Element;
  rightExtraStyles?: CSSProp;
  topExtraStyles?: CSSProp;
  bottomExtraStyles?: CSSProp;
  centerExtraStyles?: CSSProp;
  // dataTestId
  dataTestId?: string;
  // arias
  extraAriaLabelledBy?: string;
  ['aria-haspopup']?: AriaHasPopupType;
  role?: ROLES;
  mask?: string;
  maskType?: MASK_TYPE;
  locale?: string;
  // functions
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
};

type propsToOmit =
  | 'styles'
  | 'textVariant'
  | 'inputId'
  | 'helpMessageId'
  | 'errorMessageId'
  | 'filled';

export interface IInputControlled<V = undefined extends string ? unknown : string>
  extends Omit<IInputStandAlone, propsToOmit>,
    Omit<CustomTokenTypes<InputStylesProps>, 'cts' | 'extraCt'> {
  variant: V;
  id?: string;
  // override styles from other input
  overrideStyles?: InputStylesProps;
}

export type IInputUnControlled<V = undefined extends string ? unknown : string> = Omit<
  IInputControlled<V>,
  'value' | 'state'
> & {
  // modifiers
  error?: boolean;
  disabled?: boolean;
  value?: string | number;
  errorExecution?: ERROR_EXECUTION;
  internalErrorExecution?: INTERNAL_ERROR_EXECUTION;
  keyValidation?: string;
  regex?: string | RegExp;
  // functions
  onInternalErrors?: (errors: string[]) => void;
  onError?: (error: boolean) => void;
};
