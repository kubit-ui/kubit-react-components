import { CustomTokenTypes } from '@/types/customToken/customToken';
import { POSITIONS } from '@/types/positions/positions';

import {
  ERROR_EXECUTION,
  IInputStandAlone,
  INTERNAL_ERROR_EXECUTION,
} from '../../input/types/input';
import { InputContentPosition, InputHelpMessagePosition } from '../../input/types/inputTheme';
import { IText } from '../../text/types/text';
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
  internalErrorExecution?: INTERNAL_ERROR_EXECUTION;
  keyValidation?: string;
  regex?: string | RegExp;
  onInternalErrors?: (errors: string[]) => void;
  onError?: (error: boolean) => void;
  variant: V;
}
