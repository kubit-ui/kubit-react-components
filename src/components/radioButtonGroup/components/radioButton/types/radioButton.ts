import React from 'react';

import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';
import { VariantStyles } from '@/types/variantStyles/variantStyles';

import { IElementOrIcon } from '../../../../elementOrIcon/types/elementOrIcon';
import { ILabelStandAlone } from '../../../../label/types/label';
import { IText } from '../../../../text/types/text';
import { RadioButtonStylesType } from './radioButtonTheme';
import { RadioButtonStateType } from './state';

export type RadioButtonLabelType = Omit<ILabelStandAlone, 'children' | 'inputId'> & {
  content?: string;
};

export type RadioButtonSubtitleType = Omit<IText<string>, 'children'> & {
  content?: JSX.Element | string;
};

type RadioButtonAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-hidden'
>;

export interface IRadioButtonStandAlone extends RadioButtonAriaAttributes {
  styles: VariantStyles<RadioButtonStylesType> & { altVariant?: boolean };
  checked?: boolean;
  name?: string;
  label?: RadioButtonLabelType;
  errorMessage?: string;
  errorIcon?: IElementOrIcon;
  errorAriaLiveType?: AriaLiveOptionType;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  subTitle?: RadioButtonSubtitleType;
  state: RadioButtonStateType;
  error?: boolean;
  disabled?: boolean;
  value?: string | number;
  dataTestId?: string;
  screenReaderId?: string;
  id?: string;
  tabIndex?: number;
  lastChild?: boolean;
}
/**
 * @description
 * interface for the radio button
 * @interface IRadioButton
 * @template V
 * @property {V} variant - Variant of the radio button.
 */
export interface IRadioButton<V = undefined extends string ? unknown : string>
  extends Omit<IRadioButtonStandAlone, 'state' | 'styles'> {
  /**
   * @deprecated `state` is deprecated. Please use `error`, `disabled` or `checked` instead.
   */
  state?: RadioButtonStateType;
  styles?: VariantStyles<RadioButtonStylesType> & { altVariant?: boolean };
  variant: V;
}
