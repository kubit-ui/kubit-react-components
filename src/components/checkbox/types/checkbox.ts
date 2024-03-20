import { IElementOrIcon } from '@/components/elementOrIcon';
import { ILabelStandAlone } from '@/components/label';
import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';
import { AriaLiveOptionType } from '@/types/ariaLiveOption';
import type { IInputComponent } from '@/types/type';

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

/**
 * @description
 * interface for the checkbox standAlone
 */
export interface ICheckboxStandAlone extends IInputComponent {
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
