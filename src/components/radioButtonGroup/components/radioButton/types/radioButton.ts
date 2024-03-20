import * as React from 'react';

import { ILabelStandAlone } from '@/components/label';
import { IText } from '@/components/text';
import { VariantStyles } from '@/types/variantStyles';

import { RadioButtonStylesType } from './radioButtonTheme';
import { RadioButtonStateType } from './state';

export interface IRadioButtonStyled {
  styles: VariantStyles<RadioButtonStylesType> & { altVariant?: boolean };
  state?: RadioButtonStateType;
  hasLabel?: boolean;
}

export type RadioButtonLabelType = Omit<ILabelStandAlone, 'children' | 'inputId'> & {
  content?: string;
};

export type RadioButtonSubtitleType = Omit<IText<string>, 'children'> & {
  content?: JSX.Element | string;
};

export interface IRadioButtonStandAlone extends IRadioButtonStyled {
  checked: boolean;
  name: string;
  label?: RadioButtonLabelType;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  subTitle?: RadioButtonSubtitleType;
  state?: RadioButtonStateType;
  value: string | number;
  dataTestId?: string;
  screenReaderId?: string | undefined;
  id?: string;
}
/**
 * @description
 * interface for the radio button
 * @interface IRadioButton
 * @template V
 * @property {V} variant - Variant of the radio button.
 */
export interface IRadioButton<V = undefined extends string ? unknown : string>
  extends IRadioButtonStandAlone {
  variant: V;
}
