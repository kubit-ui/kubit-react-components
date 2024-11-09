import { IPopoverControlled } from '@/components/popover/types/popover';
import { CustomTokenTypes } from '@/types/customToken/customToken';
import { POSITIONS } from '@/types/positions/positions';

import { IButton } from '../../button/types/button';
import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { ILink } from '../../link/types/link';
import { IText } from '../../text/types/text';
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

export type SnackbarPopoverType = Omit<IPopoverControlled, 'children' | 'open'>;

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
  popover?: SnackbarPopoverType;
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
  onCloseButton?: React.MouseEventHandler<HTMLButtonElement>;
  onOpenClose?: (open: boolean, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export type GenericConstantsType = {
  [key in SnackbarMessageType]?: string;
};
