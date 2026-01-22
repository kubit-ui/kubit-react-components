import type {
  AriaAttributes,
  AriaRole,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
} from 'react';

import type { CommonIconProps } from '@/lib/types/commons/icon';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';
import type { PositionType } from '@/lib/types/positions/positions';

export type ButtonCssClasses = ComponentSelected<
  ComponentsTypesComponents['BUTTON']
>;

/**
 * Represents the ARIA attributes for the Button component.
 */
type ButtonAriaProps = Pick<
  AriaAttributes,
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
 * Interface for the styled Button component.
 * Includes styling options such as width, alignment, and loading state.
 */
export interface ButtonStylesProps {
  fullWidth?: boolean;
  iconPosition?: PositionType;
  loading?: boolean;
  loader?: ReactNode;
  minWidth?: string;
  ghostText?: string;
  alignText?: string;
  tabIndex?: number;
  disabled?: boolean;
}

/**
 * Interface for the standalone Button component.
 * Includes ARIA attributes, event handlers, and additional attributes.
 */
export interface ButtonStandAloneProps
  extends
    PropsWithChildren<ButtonStylesProps>,
    ButtonAriaProps,
    DataAttributes {
  type?: HTMLButtonElement['type'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: CommonIconProps;
  form?: string;
  role?: AriaRole;
  title?: string;
  id?: string;
  cssVariantClasses?: ButtonCssClasses;
  cssSizeClasses?: ButtonCssClasses;
}

/**
 * Interface for the Button component with a variant and size.
 * Extends the ButtonStandAloneProps interface and adds variant and size properties.
 *
 * @template Variant - The type of the variant for the Button.
 * @template Size - The type of the size for the Button.
 */
export interface ButtonProps<
  Variant = undefined extends string | unknown
    ? string | undefined
    : string | unknown,
  Size = undefined extends string | unknown
    ? string | undefined
    : string | unknown,
> extends ButtonStandAloneProps {
  variant?: Variant;
  size?: Size;
  additionalVariantClasses?: Partial<ButtonCssClasses>;
  additionalSizeClasses?: Partial<ButtonCssClasses>;
}
