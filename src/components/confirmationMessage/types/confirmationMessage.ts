import * as React from 'react';

import { IDecorativeElementStandAlone } from '@/components/decorativeElement';
import { IFooter } from '@/components/footer';
import { IText } from '@/components/text/types';
import { CustomTokenTypes } from '@/types';

import {
  ConfirmationMessagePropsStateStylesType,
  ConfirmationMessagePropsStylesType,
} from './confirmationMessageTheme';
import { ConfirmationMessageStateType } from './state';

export type AlignTypeConfirmationMessage = {
  center: string;
  right: string;
  left: string;
};

export enum ALIGN_TYPE {
  CENTER = 'center',
  RIGHT = 'right',
  LEFT = 'left',
}

export type ConfirmationMessageTitleType = Omit<IText<string>, 'children'> & {
  content?: string;
};

export type ConfirmationMessageDescriptionType = Omit<IText<string>, 'children'> & {
  content: JSX.Element | string;
};

export type ConfirmationMessageSecondaryDescriptionType = ConfirmationMessageTitleType;

export type ConfirmationMessageFooterType = Omit<IFooter, 'variant' | 'children'> & {
  content?: JSX.Element[];
  variant?: string;
};
export interface IConfirmationMessageStandAlone {
  stylesState?: ConfirmationMessagePropsStylesType;
  title?: ConfirmationMessageTitleType;
  description: ConfirmationMessageDescriptionType;
  decorativeElement?: IDecorativeElementStandAlone;
  align?: ALIGN_TYPE;
  dataTestId?: string;
  secondaryDescription?: ConfirmationMessageSecondaryDescriptionType;
  content?: React.ReactNode;
  footer?: ConfirmationMessageFooterType;
}

export interface IConfirmationMessage<V = undefined extends string ? unknown : string>
  extends Omit<IConfirmationMessageStandAlone, 'styles' | 'stylesState'>,
    Omit<CustomTokenTypes<ConfirmationMessagePropsStateStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  state?: ConfirmationMessageStateType;
}
