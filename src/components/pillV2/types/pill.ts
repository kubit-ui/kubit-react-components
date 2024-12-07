import { ReactNode } from 'react';

import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IText } from '../../text/types/text';
import { PillPropsStylesType, PillVariantPropsStylesType } from './pillTheme';
import { PillType } from './pillType';

export type PillLabelType = Omit<IText<string>, 'children'> & {
  content?: ReactNode;
};

export type PillAriaAttributes = Pick<
  React.AriaAttributes,
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-checked'
  | 'aria-describedby'
  | 'aria-pressed'
  | 'aria-disabled'
  | 'aria-controls'
  | 'aria-expanded'
>;

export interface IPillStandAlone extends PillAriaAttributes {
  styles?: PillPropsStylesType;
  leftIcon?: IElementOrIcon;
  label?: PillLabelType;
  rightIcon?: IElementOrIcon;
  selected: boolean;
  disabled: boolean;
  type?: PillType;
  name?: string;
  value?: string | number;
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

export { IPill as IPillV2 };
