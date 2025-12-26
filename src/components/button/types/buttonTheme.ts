// External types
import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

/**
 * @description
 * Button size props type
 */
export interface ButtonStyleProps extends CssLibPropsType {
  _icon: CssLibPropsType;
  _loader: CssLibPropsType;
}

export type ButtonVariantStyles<Variant extends string> = ButtonStyleProps & {
  [key in Variant]?: Partial<ButtonStyleProps>;
};
