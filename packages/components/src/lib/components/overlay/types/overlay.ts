import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type OverlayCssClasses = ComponentSelected<
  ComponentsTypesComponents['OVERLAY']
>;

/**
 * Interface for the standalone Overlay component.
 * Includes optional CSS classes and data attributes.
 */
export interface OverlayStandAloneProps extends DataAttributes {
  cssClasses?: OverlayCssClasses;
}

/**
 * Interface for the Overlay component with a variant.
 * Extends the OverlayStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Overlay.
 */
export interface OverlayProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<OverlayStandAloneProps, 'cssClasses'> {
  variant?: Variant;
  additionalClasses?: Partial<OverlayCssClasses>;
}
