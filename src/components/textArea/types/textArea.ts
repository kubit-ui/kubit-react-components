import React from 'react';

import { AriaLiveOptionType } from '@/types/ariaLiveOption/ariaLiveOption';
import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { ILabelStandAlone } from '../../label/types/label';
import { IText } from '../../text/types/text';
import { TextAreaStateType } from './state';
import { TextAreaVariantStylesType } from './textAreaTheme';
import { TextAreaTitleComponentType } from './titleComponent';

export interface ITextAreaStyled {
  styles?: TextAreaVariantStylesType;
  state: TextAreaStateType;
}

export type TextAreaTitleType = Omit<IText<string>, 'children' | 'component'> & {
  content: string;
  component?: TextAreaTitleComponentType;
};

export type TextAreaTextType = Omit<IText<string>, 'children'> & {
  content: string;
};

export type TextAreaLabelType = Omit<ILabelStandAlone, 'children' | 'inputId'> & {
  content: string;
};

export interface ITextAreaStandAlone extends ITextAreaStyled {
  label: TextAreaLabelType;
  additionalInfo?: React.ReactNode;
  placeholder: string;
  maxLength: number;
  screenReaderTextCount: string;
  onFocus: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
  id?: string;
  required?: boolean;
  title?: TextAreaTitleType;
  errorIcon?: IElementOrIcon;
  value?: string;
  errorMessage?: TextAreaTextType;
  errorAriaLiveType?: AriaLiveOptionType;
  helpMessage?: TextAreaTextType;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  height?: string;
  dataTestId?: string;
  spellCheck?: boolean;
}

export interface ITextArea<V = undefined extends string ? unknown : string>
  extends Omit<ITextAreaStandAlone, 'styles' | 'state' | 'onFocus' | 'onBlur'>,
    Omit<CustomTokenTypes<TextAreaVariantStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  disabled?: boolean;
  error?: boolean;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
}
