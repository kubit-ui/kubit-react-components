import { ReactNode } from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { IText } from '@/components/text';
import { CustomTokenTypes, ROLES } from '@/types';

import { ValidationStatusState, ValidationStatusStylesProps } from './validationStatusTheme';

export type ValidationStatusTextType = Omit<IText<string>, 'children'> & {
  content: ReactNode;
};

export type ValidationStatusItemType = {
  state: ValidationStatusState;
  text: ValidationStatusTextType;
  dataTestId?: string;
  role?: string | ROLES;
};

export type ValidationStatusStateIconsType = {
  [key in ValidationStatusState]: IElementOrIcon;
};

export interface IValidationStatusStandAlone {
  styles: ValidationStatusStylesProps;
  items: ValidationStatusItemType[];
  stateIcons: ValidationStatusStateIconsType;
  maxItemsAllowed?: number;
  dataTestId?: string;
}

export interface IValidationStatus<V = undefined extends string ? unknown : string>
  extends Omit<IValidationStatusStandAlone, 'styles'>,
    Omit<CustomTokenTypes<ValidationStatusStylesProps>, 'cts' | 'extraCt'> {
  variant: V;
}
