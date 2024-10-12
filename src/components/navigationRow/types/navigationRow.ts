import { IElementOrIcon } from '@/components/elementOrIcon';
import { IIconHighlighted, IconHighlightedSizeType } from '@/components/iconHighlighted/types';
import { LineSeparatorLinePropsStylesType } from '@/components/lineSeparator';
import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';

import { NavigationRowStylesPropsType } from './navigationRowTheme';

export interface INavigationRowStyled {
  styles?: NavigationRowStylesPropsType;
}

export type NavigationRowTextAndDescriptionType = Omit<IText<string>, 'children'> & {
  content: string;
};

export type NavigationRowIconHighlightedType = Omit<IIconHighlighted, 'variant' | 'size'> & {
  variant?: string;
  size?: IconHighlightedSizeType;
};

export interface INavigationRowStandAlone {
  styles: NavigationRowStylesPropsType;
  text?: NavigationRowTextAndDescriptionType;
  description?: NavigationRowTextAndDescriptionType;
  // icons
  arrowIcon: IElementOrIcon;
  /**
   * @deprecated this prop will be removed in the next major version. Use decorativeElement to send the IconHighlighted
   */
  iconHighlighted?: NavigationRowIconHighlightedType;
  /**
   * @deprecated this prop will be removed in the next major version. Use decorativeElement to send the ElementOrIcon
   */
  decorativeIcon?: IElementOrIcon;
  decorativeElement?: React.ReactNode;
  // lines
  topLine?: boolean;
  bottomLine?: boolean;
  lineSeparatorLineStyles?: LineSeparatorLinePropsStylesType;
  dataTestId?: string;
  // functions
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface INavigationRow<V = undefined extends string ? unknown : string>
  extends Omit<INavigationRowStandAlone, 'styles' | 'lineSeparatorLineStyles'>,
    Omit<
      CustomTokenTypes<NavigationRowStylesPropsType, undefined, LineSeparatorLinePropsStylesType>,
      'cts'
    > {
  variant: V;
}
