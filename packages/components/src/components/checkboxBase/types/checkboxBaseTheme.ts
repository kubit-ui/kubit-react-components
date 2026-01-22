import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface ChecboxBaseStyleProps extends CssLibPropsType {
  _input?: CssLibPropsType;
  _iconContainer?: CssLibPropsType;
  _icon?: CssLibPropsType;
}

export type ChecboxBaseVariantStyles<Variant extends string> =
  ChecboxBaseStyleProps & {
    [key in Variant]: ChecboxBaseStyleProps;
  };
