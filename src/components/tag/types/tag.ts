import type { CommonIconProps } from '@/lib/types/commons/icon';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type TagCssClasses = ComponentSelected<ComponentsTypesComponents['TAG']>;

/**
 * Represents the ARIA attributes for the tag component.
 */
type TagAriaProps = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-describedby' | 'aria-disabled' | 'aria-labelledby'
>;

/**
 * Interface for the standalone tag component.
 * Includes ARIA attributes, an optional icon, label, component type, data-testid attribute, and custom CSS classes.
 */
export interface TagStandAloneProps extends TagAriaProps, DataAttributes {
  icon?: CommonIconProps;
  label?: CommonTextProps;
  component?: React.ElementType;
  cssClasses?: TagCssClasses;
}

/**
 * Interface for the tag component with a variant.
 * Extends the TagStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the tag component.
 */
export interface TagProps<Variant = undefined extends string ? unknown : string>
  extends Omit<TagStandAloneProps, 'cssClasses'> {
  variant?: Variant;
  additionalClasses?: Partial<TagCssClasses>;
}
