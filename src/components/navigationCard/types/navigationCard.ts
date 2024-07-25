import { ReactNode } from 'react';

import { ButtonType } from '@/components/button';
import { DecorativePropsType } from '@/components/decorativeElement';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { ITag } from '@/components/tag';
import { IText } from '@/components/text';
import { GenericLinkType, IGenericLink } from '@/provider/genericComponents';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

import { NavigationCardStylesPropsType } from './navigationCardTheme';

export interface INavigationCardStyled {
  styles?: NavigationCardStylesPropsType;
}

export type NavigationCardTextType = Omit<IText<string>, 'children'> & {
  content?: ReactNode;
};

export type NavigationCardTagType = Omit<ITag, 'variant' | 'option' | 'children'> & {
  content: React.ReactNode;
  variant?: string;
  option?: string;
  screenReaderText?: string;
};

export interface INavigationCardStandAlone
  extends Omit<IGenericLink, 'children' | 'classname' | 'url' | 'onClick'> {
  styles: NavigationCardStylesPropsType;
  device: DeviceBreakpointsType;
  component: GenericLinkType;
  decorative?: DecorativePropsType;
  title?: NavigationCardTextType;
  description?: NavigationCardTextType;
  tag?: NavigationCardTagType;
  arrowIcon?: IElementOrIcon;
  arrowIconText?: NavigationCardTextType;
  url?: string;
  type?: ButtonType;
  dataTestId?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export interface INavigationCard<V = undefined extends string ? unknown : string>
  extends Omit<INavigationCardStandAlone, 'styles' | 'device' | 'component'>,
    Omit<CustomTokenTypes<NavigationCardStylesPropsType>, 'cts' | 'extraCt'> {
  variant: V;
}
