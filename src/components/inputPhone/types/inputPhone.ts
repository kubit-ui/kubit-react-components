import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IIconHighlighted } from '../../iconHighlighted/types/iconHighlighted';
import { IconHighlightedSizeType } from '../../iconHighlighted/types/size';
import {
  ERROR_EXECUTION,
  IInputStandAlone,
  INTERNAL_ERROR_EXECUTION,
} from '../../input/types/input';
import { IText } from '../../text/types/text';
import { InputPhoneStylesProps } from './inputPhoneTheme';

type propsToOmitInputBasic =
  | 'styles'
  | 'inputId'
  | 'variant'
  | 'error'
  | 'disabled'
  | 'formatNumber'
  | 'locale';

export type InputPhoneFlagType = Omit<IIconHighlighted, 'variant' | 'size'> & {
  variant?: string;
  size?: IconHighlightedSizeType;
};

export type InputPhonePrefixType = Omit<IText<string>, 'children'> & {
  content: string;
};

export interface IInputPhoneStandAlone extends Omit<IInputStandAlone, propsToOmitInputBasic> {
  styles: InputPhoneStylesProps;
  flag?: InputPhoneFlagType;
  prefix?: InputPhonePrefixType;
  prefixNode?: React.ReactNode;
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
  internalErrorExecution?: INTERNAL_ERROR_EXECUTION;
  keyValidation?: string;
  onInternalErrors?: (errors: string[]) => void;
  onError?: (error: boolean) => void;
}
