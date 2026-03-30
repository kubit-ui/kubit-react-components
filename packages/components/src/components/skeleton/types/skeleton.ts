import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type SkeletonCssClasses = ComponentSelected<
  ComponentsTypesComponents['SKELETON']
>;

/**
 * Represents the ARIA attributes for the Skeleton component.
 */
type SkeletonAriaProps = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby' | 'aria-describedby'
>;

/**
 * Interface for the standalone Skeleton component.
 * Includes ARIA attributes, dimensions, animation duration, shape, and CSS classes.
 */
export interface SkeletonStandAloneProps
  extends SkeletonAriaProps, DataAttributes {
  width?: string;
  height?: string;
  borderRadius?: string;
  duration?: string;
  cssClasses?: SkeletonCssClasses;
  shapeVariant?: string;
  cssShapeClasses?: SkeletonCssClasses;
}

/**
 * Interface for the Skeleton component with a variant.
 * Extends the SkeletonStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Skeleton.
 */
export interface SkeletonProps<
  Variant = undefined extends string ? unknown : string,
> extends SkeletonStandAloneProps {
  variant?: Variant;
  additionalClasses?: Partial<SkeletonCssClasses>;
  additionalShapeClasses?: Partial<SkeletonCssClasses>;
}
