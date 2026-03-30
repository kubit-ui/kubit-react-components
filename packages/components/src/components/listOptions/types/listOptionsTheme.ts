import type { CssLibPropsType } from '@/lib/types/cssGenerator/stylesTypes';

export interface ListOptionsStyleProps extends CssLibPropsType {
  _titleContainer?: CssLibPropsType;
  _title?: CssLibPropsType;
  _optionsContainer?: CssLibPropsType;
}

// $foreign?: {
//   option?: object;
// };

export type ListOptionsVariantStyles<Variant extends string> =
  ListOptionsStyleProps & {
    [key in Variant]: ListOptionsStyleProps;
  };
