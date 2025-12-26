import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type ContainerCssClasses = ComponentSelected<
  ComponentsTypesComponents['CONTAINER']
>;

/**
 * Interface for the standalone container component.
 * It includes optional custom CSS classes, a title, and a data-testid attribute.
 */
export interface ContainerStandAloneProps extends DataAttributes {
  cssClasses?: ContainerCssClasses;
  title?: CommonTextProps;
}

/**
 * Interface for the container component with a variant.
 * Extends the IContainerStandAlone interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the container.
 */
export interface ContainerProps<Variant extends string | unknown>
  extends Omit<ContainerStandAloneProps, 'cssClasses'> {
  variant?: Variant;
  additionalClasses?: Partial<ContainerCssClasses>;
}
