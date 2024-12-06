import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IconHighlightedVariantStylesType } from './iconHighlightedTheme';
import { IconHighlightedSizeType } from './size';
import { IconHighlightedType } from './type';

export interface IIconHighlightedStyled {
  styles: IconHighlightedVariantStylesType;
  backgroundColor?: string;
  disabled?: boolean;
  selected?: boolean;
}

export interface IIconHighlightedStandAlone extends IElementOrIcon, IIconHighlightedStyled {
  size: IconHighlightedSizeType;
  type?: IconHighlightedType;
  customContent?: React.ReactNode;
}

export interface IIconHighlighted<V = undefined extends string ? unknown : string>
  extends Omit<IIconHighlightedStandAlone, 'styles'>,
    Omit<CustomTokenTypes<IconHighlightedVariantStylesType>, 'cts' | 'extraCt'> {
  variant: V;
}
