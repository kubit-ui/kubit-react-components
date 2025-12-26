import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { ElementOrIconProps } from '../../elementOrIcon/types/elementOrIcon';
import type { VirtualKeyboardStateType } from './state';

type VirtualKeyboardCssClasses = ComponentSelected<
  ComponentsTypesComponents['VIRTUAL_KEYBOARD']
>;
/**
 * Interface for a digit button in the VirtualKeyboard component.
 * Includes properties for the digit, event handlers, and CSS classes.
 */
export interface VirtualKeyboardDigitButtonProps extends DataAttributes {
  id?: string;
  digit: string;
  onClick: (
    digit: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  cssClasses?: VirtualKeyboardCssClasses;
}

/**
 * Interface for the standalone VirtualKeyboard component.
 * Includes properties for state, event handlers, icons, and CSS classes.
 */
export interface VirtualKeyboardStandAloneProps extends DataAttributes {
  id?: string;
  state: VirtualKeyboardStateType;
  digits?: string[];
  onVirtualKeyboardFocus: React.FocusEventHandler<HTMLDivElement>;
  onVirtualKeyboardBlur: React.FocusEventHandler<HTMLDivElement>;
  onDigitButtonClick: (
    digit: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onRemoveButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: ElementOrIconProps;
  cssClasses?: VirtualKeyboardCssClasses;
}

type VirtualKeyboardOmitProps =
  | 'state'
  | 'onVirtualKeyboardFocus'
  | 'onVirtualKeyboardBlur';

/**
 * Interface for the VirtualKeyboard component with a variant.
 * Extends the VirtualKeyboardStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the VirtualKeyboard.
 */
export interface VirtualKeyboardProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<VirtualKeyboardStandAloneProps, VirtualKeyboardOmitProps> {
  variant?: Variant;
  additionalClasses?: Partial<VirtualKeyboardCssClasses>;
}
