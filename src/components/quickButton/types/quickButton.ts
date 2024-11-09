import { CustomTokenTypes } from '@/types/customToken/customToken';

import { ButtonType } from '../../button/types/type';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { ILabelStandAlone } from '../../label/types/label';
import { QuickButtonVariantStylesType } from './quickButtonTheme';
import { QuickButtonState } from './state';

export type QuickButtonLabelType = Omit<ILabelStandAlone, 'children' | 'inputId'> & {
  content: string;
};

/**
 * @description
 * QuickButton component props
 * @property {QuickButtonVariantStylesType} styles - styles of the quickButton
 */
export interface IQuickButtonStandAlone {
  styles?: QuickButtonVariantStylesType;
  state: QuickButtonState;
  buttonId: string;
  label?: QuickButtonLabelType;
  icon?: IElementOrIcon;
  maxWidth?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  dataTestId?: string;
  type?: ButtonType;
  ['aria-label']?: string;
  role?: string;
}

/**
 * @description
 * QuickButton component props
 * @property {string} variant - variant of the quickButton
 */
export interface IQuickButton<V = undefined extends string ? unknown : string>
  extends Omit<IQuickButtonStandAlone, 'styles' | 'state'>,
    Omit<CustomTokenTypes<QuickButtonVariantStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  disabled?: boolean;
}
