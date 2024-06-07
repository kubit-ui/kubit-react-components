import * as React from 'react';

import {
  ButtonSizePropsType,
  ButtonStateKeyOfType,
  ButtonStateType,
  IButtonStandAlone,
} from '@/components/button';
import { IElementOrIcon } from '@/components/elementOrIcon';
import {
  TextComponentType,
  TextDecorationType,
  TextVariantStylesType,
} from '@/components/text/types';
import { GenericLinkType } from '@/provider/genericComponents';
import { CustomTokenTypes } from '@/types';

import type { LinkActionType } from './action';
import type { LinkPropsStylesType, LinkStylesType } from './linkTheme';
import type { LinkPositionType } from './position';
import type { LinkStateType } from './state';
import { LinkTargetType } from './target';

type LinkAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-describedby' | 'aria-disabled'
>;
export interface ILinkStandAlone extends LinkAriaAttributes {
  action?: LinkActionType;
  children: JSX.Element | string;
  color?: string;
  component?: GenericLinkType;
  dataTestId?: string;
  decoration?: TextDecorationType;
  icon?: IElementOrIcon;
  iconPosition?: LinkPositionType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  role?: string;
  state: LinkStateType;
  styles: LinkPropsStylesType;
  textStyles?: TextVariantStylesType;
  target?: LinkTargetType;
  url: string;
  weight?: number;
  alignCenter: boolean;
  draggable?: boolean;
}

export interface ILink
  extends Omit<
      ILinkStandAlone,
      'styles' | 'component' | 'alignCenter' | 'state' | 'aria-disabled' | 'textStyles'
    >,
    Omit<CustomTokenTypes<LinkStylesType<string>>, 'cts' | 'extraCt'> {
  alignCenter?: boolean;
  disabled?: boolean;
  variant: string;
  textVariant?: string;
}

export interface ILinkAsButtonStandAlone extends Omit<IButtonStandAlone, 'showLoader'> {
  styles: ButtonStateKeyOfType;
  sizeStyles: ButtonSizePropsType;
  children: string | JSX.Element;
  component?: TextComponentType | GenericLinkType;
  url: string;
  state: ButtonStateType;
  target?: string;
  role?: string;
}

export interface ILinkAsButton
  extends Omit<ILinkAsButtonStandAlone, 'styles' | 'sizeStyles' | 'state' | 'component'> {
  size: string;
  variant: string;
  disabled?: boolean;
}
