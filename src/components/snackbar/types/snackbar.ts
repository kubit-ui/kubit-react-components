import { IButton } from '@/components/button';
import { IElementOrIcon } from '@/components/elementOrIcon';
import { ILink } from '@/components/link';
import { IText } from '@/components/text';
import { CustomTokenTypes } from '@/types';
import { POSITIONS } from '@/types/positions';

import { SnackbarProps, SnakbarTypeStyleProps } from './snackbarTheme';
import { SnackbarMessageType } from './snackbarType';

export type SnackbarCloseIconType = Omit<IElementOrIcon, 'onClick'>;

export type SnackbarTitleType = Omit<IText<string>, 'children'> & {
  content?: string;
};

export type SnackbarDescriptionType = SnackbarTitleType;

export type SnackbarLinkType = Omit<ILink, 'children' | 'onClick' | 'variant'> & {
  variant?: string;
};

export type SnackbarActionButtonType = Omit<
  IButton,
  'children' | 'onClick' | 'variant' | 'size'
> & {
  variant?: string;
  size?: string;
};

export interface ISnackbarStandAlone {
  icon?: IElementOrIcon;
  closeIcon?: SnackbarCloseIconType;
  open?: boolean;
  onCloseButtonClick: (open: boolean) => React.MouseEventHandler<HTMLButtonElement>;
  title: SnackbarTitleType;
  description?: SnackbarDescriptionType;
  secondaryActionLink?: SnackbarLinkType;
  secondaryActionButton?: SnackbarActionButtonType;
  secondaryActionContent?: string;
  secondaryActionAriaLabel?: string;
  onSecondaryActionClick?: React.MouseEventHandler<HTMLButtonElement>;
  align?: POSITIONS.TOP_CENTER_FIXED | POSITIONS.BOTTOM_CENTER_FIXED;
  styles?: SnackbarProps;
  dataTestId?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
}

export interface ISnackbarControlled<V = undefined extends string ? unknown : string>
  extends Omit<ISnackbarStandAlone, 'styles'>,
    Omit<CustomTokenTypes<SnakbarTypeStyleProps>, 'cts' | 'extraCt'> {
  variant: V;
  type: SnackbarMessageType;
}

export interface ISnackbarUnControlled<V = undefined extends string ? unknown : string>
  extends Omit<ISnackbarControlled<V>, 'onCloseButtonClick'> {
  closeTimeout?: number;
  onOpenClose?: (open: boolean, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export type GenericConstantsType = {
  [key in SnackbarMessageType]?: string;
};
