import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface AlertStyleProps extends CssLibPropsType {
  _container?: CssLibPropsType;
  _contentContainer?: CssLibPropsType;
  _description?: CssLibPropsType;
}

export type AlertVariantStyles<Variant extends string> = AlertStyleProps & {
  [key in Variant]: AlertStyleProps;
};
