import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';
import { CustomTokenTypes } from '@/types/customToken/customToken';
import type { IInputComponent } from '@/types/type/type';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { ILabelStandAlone } from '../../label/types/label';
import { IText } from '../../text/types/text';
import type { CheckboxPropsStateStylesType, CheckboxPropsStylesType } from './checkboxTheme';
import type { CheckboxStateType } from './state';

export type CheckboxLabelType = Omit<ILabelStandAlone, 'children' | 'inputId'> & {
  content?: string | JSX.Element;
};

export type CheckboxHelpContentType = Omit<IText<string>, 'children'> & {
  content: JSX.Element | string;
};

export type CheckboxHelperAndErrorTextType = Omit<IText<string>, 'children'> & {
  content: string;
};

/**
 * @description
 * interface for the checkbox error standAlone
 */
export interface ICheckboxErrorStandAlone {
  id: string;
  dataTestId: string;
  styles?: CheckboxPropsStylesType;
  errorIcon?: IElementOrIcon;
  errorAriaLiveType: AriaLiveOptionType;
  error: boolean;
  errorMessage?: CheckboxHelperAndErrorTextType;
}

type CheckboxAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-hidden'
>;

/**
 * @description
 * interface for the checkbox standAlone
 */
export interface ICheckboxStandAlone extends IInputComponent, CheckboxAriaAttributes {
  dataTestId?: string;
  state: CheckboxStateType;
  styles?: CheckboxPropsStylesType;
  required?: boolean;
  value?: string;
  name?: string;
  label?: CheckboxLabelType;
  errorMessage?: CheckboxHelperAndErrorTextType;
  checkedIcon?: IElementOrIcon;
  errorIcon?: IElementOrIcon;
  errorAriaLiveType?: AriaLiveOptionType;
  helperContent?: CheckboxHelpContentType;
  helperText?: CheckboxHelperAndErrorTextType;
  extraAriaDescribedBy?: string;
  screenReaderText?: string;
  tabIndex?: number;
}

/**
 * @description
 * interface for the controlled checkbox
 */
export interface ICheckboxControlled<V = undefined extends string ? unknown : string>
  extends Omit<ICheckboxStandAlone, 'styles' | 'state'>,
    Omit<CustomTokenTypes<CheckboxPropsStateStylesType, V>, 'cts' | 'extraCt'> {
  variant: V;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  ref?: React.ForwardedRef<HTMLInputElement> | undefined | null;
}

export type ICheckboxUnControlled<V = undefined extends string ? unknown : string> =
  ICheckboxControlled<V>;
