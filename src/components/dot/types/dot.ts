import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type DotCssClasses = ComponentSelected<ComponentsTypesComponents['DOT']>;

/**
 * Interface for the styled dot component.
 * Includes optional width and height properties.
 */
export interface DotStyledProps {
  $width?: string;
  $height?: string;
}

/**
 * Interface for the standalone dot component.
 * Extends DotStyledProps and includes additional properties like label and CSS classes.
 */
export interface DotStandAloneProps extends DataAttributes {
  formatedNumber?: number | string;
  width?: string;
  height?: string;
  label?: string;
  cssSizeClasses?: DotCssClasses;
  cssVariantClasses?: DotCssClasses;
}

/**
 * Interface for the dot component with a variant and size.
 * Extends DotStandAloneProps and adds variant, size, and additional CSS classes.
 *
 * @template Variant - The type of the variant for the dot.
 * @template Size - The type of the size for the dot.
 */
export interface DotProps<
  Variant = undefined extends string | unknown
    ? string | undefined
    : string | unknown,
  Size = undefined extends string | unknown
    ? string | undefined
    : string | unknown,
> extends Omit<DotStandAloneProps, 'formatedNumber'> {
  variant?: Variant;
  size?: Size;
  number?: number;
  maxNumber?: number;
  ref?: React.ForwardedRef<HTMLSpanElement> | undefined | null;
  additionalVariantClasses?: Partial<DotCssClasses>;
  additionalSizeClasses?: Partial<DotCssClasses>;
}
