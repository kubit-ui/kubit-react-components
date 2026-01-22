import type { CommonIconProps } from '@/lib/types/commons/icon';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { DotProps } from '../../dot/types/dot';

/**
 * Type for CSS classes specific to the badge component.
 */
type BadgeCssClasses = ComponentSelected<ComponentsTypesComponents['BADGE']>;

/**
 * Type for ARIA attributes specific to the badge component.
 */
type BadgeAriaAttributes = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-controls' | 'aria-expanded' | 'aria-hidden'
>;

/**
 * Interface for the standalone badge component.
 * Includes ARIA attributes, event handlers, and optional properties like dot, icon, and label.
 */
export interface BadgeStandAloneProps
  extends BadgeAriaAttributes,
    DataAttributes {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBadgeBlur?: React.FocusEventHandler<HTMLButtonElement>;
  dot?: DotProps;
  hasDot?: boolean;
  icon: CommonIconProps;
  label?: CommonTextProps;
  labelIcon?: CommonIconProps;
  ariaLiveText?: string;
  customDotTranslate?: string;
  role?: React.AriaRole;
  active?: boolean;
  disabled?: boolean;
  cssVariantClasses?: BadgeCssClasses;
  cssSizeClasses?: BadgeCssClasses;
}

/**
 * Interface for the badge component with a variant and size.
 * Extends the BadgeStandAloneProps interface and adds variant and size properties.
 *
 * @template Variant - The type of the variant for the badge.
 * @template Size - The type of the size for the badge.
 */
export interface BadgeProps<
  Variant = undefined extends string ? unknown : string,
  Size = undefined extends string ? unknown : string,
> extends Omit<
    BadgeStandAloneProps,
    'styles' | 'sizeStyles' | 'iconStyles' | 'active'
  > {
  variant?: Variant;
  size?: Size;
  additionalVariantClasses?: Partial<BadgeCssClasses>;
  additionalSizeClasses?: Partial<BadgeCssClasses>;
}
