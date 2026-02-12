import { type AriaAttributes } from 'react';

import type { IPopover } from '@/components/popover/types/popover';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

export type SnackbarPopover = Omit<IPopover, 'children' | 'open'>;

export type SnackbarV2CssClasses = ComponentSelected<
  ComponentsTypesComponents['SNACKBAR']
>;

export interface ISnackbarStandAlone extends DataAttributes, AriaAttributes {
  cssClasses?: SnackbarV2CssClasses;
  popover?: SnackbarPopover;
  open?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
}

export interface ISnackbar extends Omit<
  ISnackbarStandAlone,
  'onMouseEnter' | 'onMouseLeave' | 'onFocus' | 'onBlur'
> {
  additionalClasses?: SnackbarV2CssClasses;
  closeTimeout?: number;
}
