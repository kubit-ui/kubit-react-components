import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IIconHighlighted } from '../../iconHighlighted/types/iconHighlighted';
import { IconHighlightedSizeType } from '../../iconHighlighted/types/size';
import { LineSeparatorLinePropsStylesType } from '../../lineSeparator/types/lineSeparatorTheme';
import { IText } from '../../text/types/text';
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
