import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface TextAreaStyleProps extends CssLibPropsType {
  _titleContainer?: CssLibPropsType;
  _title?: CssLibPropsType;
  _labelTextAreaContainer?: CssLibPropsType;
  _label?: CssLibPropsType;
  _labelAndAdditionalInfoContainer?: CssLibPropsType;
  _required?: CssLibPropsType;
  _textArea?: CssLibPropsType;
  _bottomContainer?: CssLibPropsType;
  _helpMessageErrorContainer?: CssLibPropsType;
  _helpMessage?: CssLibPropsType;
  _errorContainer?: CssLibPropsType;
  _errorIcon?: CssLibPropsType;
  _errorMessage?: CssLibPropsType;
  _counter?: CssLibPropsType;
  _counterLeft?: CssLibPropsType;
  _counterRight?: CssLibPropsType;
}

export type TextAreaVariantStyles<Variant extends string> =
  TextAreaStyleProps & {
    [key in Variant]?: TextAreaStyleProps;
  };
