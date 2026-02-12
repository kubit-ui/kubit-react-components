import type { CommonIconProps } from '@/lib/types/commons/icon';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type InputDecorationCssClasses = ComponentSelected<
  ComponentsTypesComponents['INPUT_DECORATION']
>;

/**
 * Interface for the standalone InputDecoration component.
 * Includes properties for decoration, CSS classes, and disabled state.
 */
export interface InputDecorationStandAloneProps extends DataAttributes {
  disabled?: boolean;
  decoration?: CommonIconProps;
  cssClasses?: InputDecorationCssClasses;
  component?: React.ElementType;
}

/**
 * Interface for the InputDecoration component with a variant.
 * Extends the InputDecorationStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the InputDecoration.
 */
export interface InputDecorationProps<
  Variant = undefined extends string ? unknown : string,
> extends InputDecorationStandAloneProps {
  /** Internal state for styles customization  */
  error?: boolean;
  /** Internal state for styles customization  */
  filled?: boolean;
  /** Internal state for styles customization  */
  focused?: boolean;
  variant?: Variant;
  additionalClasses?: Partial<InputDecorationCssClasses>;
}
