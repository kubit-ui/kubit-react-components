import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IText } from '../../text/types/text';
import { ChipPropsStateStylesType, ChipPropsStylesType } from './chipTheme';
import type { ChipStateType } from './state';

export type ChipLabelType = Omit<IText<string>, 'children'> & {
  content: string;
};

export type ChipTextType = Omit<IText<string>, 'children'> & {
  content: string;
};

/**
 * @description
 * interface for the checkbox error standAlone
 * @interface IChipErrorStandAlone
 * @extends {IInputComponent}
 */

export interface IChipStandAlone {
  styles?: ChipPropsStylesType;
  label?: ChipLabelType;
  closeIcon?: IElementOrIcon;
  leftIcon?: IElementOrIcon;
  errorIcon?: IElementOrIcon;
  dataTestId?: string;
  range?: {
    label: string;
    key?: string;
  }[];
  rangeIcon?: IElementOrIcon;
  errorMessage?: ChipTextType;
  rangeSeparator?: ChipTextType;
  deleteText?: string;
  state: ChipStateType;
}

/**
 * @description
 * interface for the controlled checkbox
 * @template V
 * @interface ICheckboxControlled
 * @extends {Omit<ICheckboxStandAlone, 'styles' | 'state'>}
 */
export interface IChipControlled<V = undefined extends string ? unknown : string>
  extends Omit<IChipStandAlone, 'state' | 'styles'>,
    Omit<CustomTokenTypes<ChipPropsStateStylesType>, 'cts' | 'extraCt'> {
  variant: V;
  state?: ChipStateType;
}
