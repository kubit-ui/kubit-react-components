import {
  ERROR_EXECUTION,
  IInputStandAlone,
  InputContentPosition,
  InputHelpMessagePosition,
} from '@/components/input';
import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';
import { POSITIONS } from '@/types/positions';

import { InputCurrencyStylesProps } from './inputCurrencyTheme';

type propsToOmitInputBasic = 'styles' | 'inputId' | 'variant' | 'error' | 'disabled';

export type InputCurrencyNameType = Omit<IText<string>, 'children'> & {
  content: string;
};

export interface IInputCurrencyStandAlone extends Omit<IInputStandAlone, propsToOmitInputBasic> {
  styles: InputCurrencyStylesProps;
  currencyName: InputCurrencyNameType;
  currencyPosition: POSITIONS;
  screenReaderCurrencyName?: string;
  maxDecimals?: number;
  currencyNameContainerPosition?: InputContentPosition;
  helpMessagePosition?: InputHelpMessagePosition;
  inputVariant?: string;
}

type propsToOmit = 'styles' | 'state';

export interface IInputCurrency<V = undefined extends string ? unknown : string>
  extends Omit<IInputCurrencyStandAlone, propsToOmit>,
    Omit<CustomTokenTypes<InputCurrencyStylesProps>, 'cts' | 'extraCt'> {
  error?: boolean;
  disabled?: boolean;
  errorExecution?: ERROR_EXECUTION;
  keyValidation?: string;
  regex?: string | RegExp;
  onInternalErrors?: (errors: string[]) => void;
  onError?: (error: boolean) => void;
  variant: V;
}
