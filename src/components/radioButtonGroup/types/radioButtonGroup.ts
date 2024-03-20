import * as React from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { TextComponentType } from '@/components/text';
import { ITooltipUnControlled } from '@/components/tooltip/types';
import { CustomTokenTypes } from '@/types';
import { VariantStyles } from '@/types/variantStyles';

import { RadioButtonStylesType } from '../components/radioButton/types';
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
  state?: RadioButtonGroupStateType;
  legendComponent?: TextComponentType;
}

export interface IRadioButtonGroupControlled
  extends Omit<IRadioButtonGroupStandAlone, 'styles'>,
    Omit<CustomTokenTypes<VariantStyles<RadioButtonGroupStylesType>>, 'cts' | 'extraCt'> {}

export interface IRadioButtonGroupUncontrolled
  extends Omit<IRadioButtonGroupControlled, 'selectedOption'> {
  defaultSelectedOption?: RadioButtonOptionType;
}
