import { IIconHighlighted, IconHighlightedSizeType } from '@/components/iconHighlighted';
import { ERROR_EXECUTION, IInputStandAlone } from '@/components/input';
import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';

import { InputPhoneStylesProps } from './inputPhoneTheme';

type propsToOmitInputBasic =
  | 'styles'
  | 'inputId'
  | 'variant'
  | 'error'
  | 'disabled'
  | 'formatNumber';

export type InputPhoneFlagType = Omit<IIconHighlighted, 'variant' | 'size'> & {
  variant?: string;
  size?: IconHighlightedSizeType;
};

export type InputPhonePrefixType = Omit<IText<string>, 'children'> & {
  content: string;
};

export interface IInputPhoneStandAlone extends Omit<IInputStandAlone, propsToOmitInputBasic> {
  styles: InputPhoneStylesProps;
  flag: InputPhoneFlagType;
  prefix: InputPhonePrefixType;
  inputVariant?: string;
}

type propsToOmit = 'styles' | 'state';

export interface IInputPhone<V = undefined extends string ? unknown : string>
  extends Omit<IInputPhoneStandAlone, propsToOmit>,
    Omit<CustomTokenTypes<InputPhoneStylesProps>, 'cts' | 'extraCt'> {
  variant: V;
  error?: boolean;
  disabled?: boolean;
  errorExecution?: ERROR_EXECUTION;
  keyValidation?: string;
  onInternalErrors?: (errors: string[]) => void;
  onError?: (error: boolean) => void;
}
