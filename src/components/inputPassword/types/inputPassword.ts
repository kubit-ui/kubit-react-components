import { IElementOrIcon } from '@/components/elementOrIcon';
import { ERROR_EXECUTION, IInputStandAlone } from '@/components/input/types';
import { CustomTokenTypes } from '@/types';

import { InputPasswordStylesProps } from './inputPasswordTheme';

type propsToOmitInputBasic =
  | 'styles'
  | 'inputId'
  | 'variant'
  | 'error'
  | 'disabled'
  | 'formatNumber'
  | 'locale';

export type IInputPasswordStandAlone = Omit<IInputStandAlone, propsToOmitInputBasic> & {
  styles: InputPasswordStylesProps;
  inputVariant?: string;
};

export type InputPasswordIconType = Omit<IElementOrIcon, 'onClick'> & {
  onClick?: (
    value: OnIconClickValueType,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

type propsToOmit = 'styles' | 'state' | 'icon' | 'formatNumber' | 'rightIcon';

export enum OnIconClickValueType {
  HIDE = 'hide',
  VISIBLE = 'visible',
}

export interface IInputPassword<V = undefined extends string ? unknown : string>
  extends Omit<IInputPasswordStandAlone, propsToOmit>,
    Omit<CustomTokenTypes<InputPasswordStylesProps>, 'cts' | 'extraCt'> {
  variant: V;
  activeIcon: InputPasswordIconType;
  disabledIcon: InputPasswordIconType;
  error?: boolean;
  disabled?: boolean;
  errorExecution?: ERROR_EXECUTION;
  keyValidation?: string;
  onInputTypeChange?: () => void;
  onInternalErrors?: (errors: string[]) => void;
  onError?: (error: boolean) => void;
  onIconClick?: (value: OnIconClickValueType) => void;
}
