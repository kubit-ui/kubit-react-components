import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface InputStyleProps extends CssLibPropsType {
  _inputAndLabelContainer?: CssLibPropsType;
}

export type InputVariantStyles<Variant extends string> = InputStyleProps & {
  [key in Variant]: InputStyleProps;
};
