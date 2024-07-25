import { IButton } from '@/components/button';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { IText } from '@/components/text';
import { ITooltipUnControlled } from '@/components/tooltip/types';
import { CustomTokenTypes, InputModeType } from '@/types';

import { InputDigitSequenceStateStyles } from './inputDigitSequenceTheme';
import { InputDigitSequenceStateType } from './state';

export type InputDigitSequenceTooltipType = Omit<ITooltipUnControlled, 'children' | 'variant'> & {
  variant?: string;
};

export type InputDigitSequenceTextType = Omit<IText<string>, 'children'> & {
  content?: React.ReactNode;
};

export type InputDigiSequenceButtonType = Omit<IButton, 'children' | 'size'> & {
  content: string;
  size?: string;
};

export type InputsArrayType = {
  blockedBySystem: boolean;
  ['aria-label']?: string;
  value?: string;
};

export type UseStateInputDigitsType = {
  index: number;
  value: string;
  blockedBySystem: boolean;
  ['aria-label']?: string;
};
export interface IInputDigitSequenceStandAlone {
  styles?: InputDigitSequenceStateStyles;
  state: InputDigitSequenceStateType;
  inputDigits: UseStateInputDigitsType[];
  title?: InputDigitSequenceTextType;
  tooltipIcon?: IElementOrIcon;
  tooltip?: InputDigitSequenceTooltipType;
  actionButton?: InputDigiSequenceButtonType;
  disabled?: boolean;
  error?: boolean;
  errorText?: InputDigitSequenceTextType;
  helpText?: InputDigitSequenceTextType;
  errorIcon?: IElementOrIcon;
  showPassword: boolean;
  passwordIndex?: number;
  digitId: string;
  onInputChange: (index: number) => React.ChangeEventHandler<HTMLInputElement>;
  onActionButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  inputMode?: InputModeType;
  animated: boolean;
  boxesAnimationDone: boolean;
  labelAnimationDone: boolean;
  dataTestId?: string;
}

type propsToOmit =
  | 'styles'
  | 'state'
  | 'inputDigits'
  | 'getNextInput'
  | 'onInputChange'
  | 'onActionButtonClick'
  | 'showPassword'
  | 'passwordIndex'
  | 'digitId'
  | 'animated'
  | 'boxesAnimationDone'
  | 'labelAnimationDone';

export interface IInputDigitSequenceControlled
  extends Omit<IInputDigitSequenceStandAlone, propsToOmit>,
    Omit<CustomTokenTypes<InputDigitSequenceStateStyles>, 'cts' | 'extraCt'> {
  variant: string;
  animated?: boolean;
  inputsArray: InputsArrayType[];
  showDigitAfterWrite?: boolean;
  showDigitTimeMiliseconds?: number;
  onInputChange?: (
    value: UseStateInputDigitsType[],
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export type IInputDigitSequenceUncontrolled = IInputDigitSequenceControlled;
