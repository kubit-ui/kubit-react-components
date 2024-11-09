import React from 'react';

import { CustomTokenTypes } from '@/types/customToken/customToken';
import { TypographyTypes } from '@/types/styles/typography';

import { GenericLinkType } from '../../../provider/genericComponents/genericComponents.type';
import { TextComponentType } from './component';
import { TextDecorationType } from './decoration';
import { TextDisplayType } from './display';
import { TextVariantStylesType } from './textTheme';
import { TextTransformType } from './transform';

export interface ITextStyled {
  styles?: TextVariantStylesType;
  weight?: number;
  isDisabled?: boolean;
  align?: string;
  $transform?: TextTransformType;
  customTypography?: TypographyTypes;
}

type TextAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-describedby' | 'aria-hidden' | 'aria-level'
>;

export interface ITextStandAlone extends ITextStyled, TextAriaAttributes {
  children: React.ReactNode;
  component?: TextComponentType | GenericLinkType;
  dataTestId?: string;
  htmlFor?: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  role?: React.AriaRole;
  color?: string;
  filter?: string;
  display?: TextDisplayType;
  decoration?: TextDecorationType;
  cursor?: string;
  weight?: number;
  target?: string;
  // TODO: is that correct??
  align?: string;
  transform?: TextTransformType;
  // to Link component
  url?: string;
  draggable?: boolean;
}

export interface IText<V extends string | unknown>
  extends ITextStandAlone,
    Omit<CustomTokenTypes<TextVariantStylesType>, 'cts' | 'extraCt'> {
  variant?: V;
}
