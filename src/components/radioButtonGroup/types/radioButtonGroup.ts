import React from 'react';

import { CustomTokenTypes } from '@/types/customToken/customToken';
import { VariantStyles } from '@/types/variantStyles/variantStyles';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { TextComponentType } from '../../text/types/component';
import { ITooltipUnControlled } from '../../tooltip/types/tooltip';
import { RadioButtonStylesType } from '../components/radioButton/types/radioButtonTheme';
import { RadioButtonOptionType } from './radioButtonOption';
import { RadioButtonGroupStateType } from './state';

// declared here to avoid cyclic dependency
export type RadioButtonGroupStylesType<P extends string = string> = RadioButtonStylesType<P>;

export interface IRadioButtonGroupStyled {
  styles: VariantStyles<RadioButtonGroupStylesType>;
}

export type RadioButtonGroupTooltipType = Omit<ITooltipUnControlled, 'children' | 'variant'> & {
  variant?: string;
};

export interface IInfoIconWithTooltipStandAlone extends IRadioButtonGroupStyled {
  infoIcon?: IElementOrIcon;
  tooltip?: RadioButtonGroupTooltipType;
  dataTestId?: string;
}

export interface IRadioButtonGroupStandAlone
  extends IRadioButtonGroupStyled,
    IInfoIconWithTooltipStandAlone {
  variant: string;
  errorMessageId?: string;
  legend?: string;
  screenReaderText?: string;
  name: string;
  options: RadioButtonOptionType[];
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  requiredSymbol?: React.ReactNode;
  requiredScreenReaderText?: string;
  selectedOption?: RadioButtonOptionType;
  /**
   * @deprecated `state` is deprecated. Please use `error` or `disabled` instead.
   */
  state?: RadioButtonGroupStateType;
  error?: boolean;
  disabled?: boolean;
  legendComponent?: TextComponentType;
}

export interface IRadioButtonGroupControlled
  extends Omit<IRadioButtonGroupStandAlone, 'styles'>,
    Omit<CustomTokenTypes<VariantStyles<RadioButtonGroupStylesType>>, 'cts' | 'extraCt'> {}

export interface IRadioButtonGroupUncontrolled
  extends Omit<IRadioButtonGroupControlled, 'selectedOption'> {
  defaultSelectedOption?: RadioButtonOptionType;
}
