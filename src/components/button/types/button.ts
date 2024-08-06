import * as React from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { ILoader } from '@/components/loader/types';
import { CustomTokenTypes, ROLES } from '@/types';

import type { IconPositionType } from './buttonIconPosition';
import type { ButtonSizePropsType, ButtonStateKeyOfType } from './buttonTheme';
import type { ButtonStateType } from './state';
import type { ButtonType } from './type';

type ButtonAriaAttributes = Pick<
  React.AriaAttributes,
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'aria-controls'
  | 'aria-expanded'
  | 'aria-pressed'
  | 'aria-disabled'
  | 'aria-hidden'
>;

/**
 * @description
 * Button props
 *
 * @interface IButtonStyled
 * @property {boolean} [fullWidth] - If true, the button will take up the full width of its container.
 * @property {string} [size] - Size of the button.
 * @property {ButtonStateKeyOfType} [styles] - Styles of the button.
 * @property {ButtonStateType} state - State of the button.
 * @property {IconPositionType} [iconPosition] - Position of the icon.
 * @property {boolean} [loading] - If true, the button will show a loader.
 * @property {ILoader | React.ReactNode} [loader] - Loader of the button.
 * @property {string} [minWidth] - Min width of the button.
 * @property {ButtonSizePropsType} [sizeStyles] - Size styles of the button.
 * @property {string} [ghostText] - Ghost text of the button.
 * @property {string} [alignText] - Align text of the button.
 * @property {number} [tabIndex] - Tab index of the button.
 *
 */
export interface IButtonStyled {
  fullWidth?: boolean;
  styles?: ButtonStateKeyOfType;
  state: ButtonStateType;
  iconPosition?: IconPositionType;
  loading?: boolean;
  loader?: ILoader | React.ReactNode;
  minWidth?: string;
  sizeStyles?: ButtonSizePropsType;
  ghostText?: string;
  alignText?: string;
  tabIndex?: number;
}

export interface IButtonStandAlone
  extends React.PropsWithChildren<IButtonStyled>,
    ButtonAriaAttributes {
  type?: ButtonType;
  dataTestId?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: IElementOrIcon;
  form?: string;
  role?: string | ROLES;
  title?: string;
  id?: string;
}

/**
 * @description
 * Button props
 * @interface IButton
 * @property {string} [variant] - Variant of the button.
 * @property {string} [size] - Size of the button.
 * @property {boolean} [disabled] - Specifies if the button element is disabled or not.
 */
export interface IButton<
  V = undefined extends string | unknown ? string | undefined : string | unknown,
  S = undefined extends string | unknown ? string | undefined : string | unknown,
> extends Omit<IButtonStandAlone, 'styles' | 'sizeStyles' | 'state'>,
    Omit<CustomTokenTypes<ButtonStateKeyOfType, ButtonSizePropsType>, 'extraCt'> {
  variant: V;
  size: S;
  disabled?: boolean;
}
