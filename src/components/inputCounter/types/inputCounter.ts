import { ERROR_EXECUTION, IInputStandAlone } from '@/components/input';
import { ITextCountControlled } from '@/components/textCount';
import { CustomTokenTypes } from '@/types';

import { InputCounterStylesProps } from './inputCounterTheme';

export type InputCounterTextCountType = Omit<ITextCountControlled, 'variant' | 'size'> & {
  variant?: string;
};

type propsToOmitInputBasic =
  | 'styles'
  | 'inputId'
  | 'variant'
  | 'error'
  | 'disabled'
  | 'maxLength'
  | 'formatNumber'
  | 'locale';

export interface IInputCounterStandAlone<V = undefined extends string ? unknown : string>
  extends Omit<IInputStandAlone, propsToOmitInputBasic> {
  styles: InputCounterStylesProps;
  variant: V;
  inputVariant?: string;
  screenReaderTextCount: string;
  maxLength: number;
  textCount?: InputCounterTextCountType;
}

type propsToOmit = 'styles' | 'state';

export interface IInputCounter<V = undefined extends string ? unknown : string>
  extends Omit<IInputCounterStandAlone<V>, propsToOmit>,
    Omit<CustomTokenTypes<InputCounterStylesProps>, 'cts' | 'extraCt'> {
  error?: boolean;
  disabled?: boolean;
  errorExecution?: ERROR_EXECUTION;
  keyValidation?: string;
  onInternalErrors?: (errors: string[]) => void;
  onError?: (error: boolean) => void;
}
