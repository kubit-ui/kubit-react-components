import { ReactNode } from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';

import { PillPropsStylesType, PillVariantPropsStylesType } from './pillTheme';
import { PillType } from './pillType';

export type PillLabelType = Omit<IText<string>, 'children'> & {
  content?: ReactNode;
};

export interface IPillStandAlone {
  styles?: PillPropsStylesType;
  leftIcon?: IElementOrIcon;
  label?: PillLabelType;
  rightIcon?: IElementOrIcon;
  selected: boolean;
  disabled: boolean;
  type?: PillType;
  name?: string;
  ['aria-controls']?: string;
  onClick?: React.MouseEventHandler;
  onChange?: React.ChangeEventHandler;
  dataTestId?: string;
}

export interface IPill
  extends Omit<IPillStandAlone, 'styles' | 'selected' | 'disabled'>,
    Omit<CustomTokenTypes<PillVariantPropsStylesType>, 'cts' | 'extraCt'> {
  variant?: string;
  size?: string;
  selected?: boolean;
  disabled?: boolean;
}
