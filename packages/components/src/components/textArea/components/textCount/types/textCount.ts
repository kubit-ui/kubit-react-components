import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type CssTextCountComponentsClassType = ComponentSelected<
  ComponentsTypesComponents['TEXT_COUNT']
>;

/**
 * Represents the styles for the TextCount component.
 */
export interface TextCountStyledProps {
  cssClasses?: CssTextCountComponentsClassType;
}

/**
 * Interface for the standalone TextCount component.
 * Includes properties for character count, weights, colors, and CSS classes.
 */
export interface TextCountStandAloneProps
  extends TextCountStyledProps, DataAttributes {
  maxLength: number;
  currentCharacters: number;
  id: string;
  screenReaderText: string;
  textVariant?: string;
  leftWeight?: number;
  rightWeight?: number;
  leftColor?: string;
  rightColor?: string;
  marginTop?: string;
}

/**
 * Interface for the TextCount component with a variant.
 * Extends the TextCountStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the TextCount.
 */
export interface TextCountProps<
  Variant = undefined extends string ? unknown : string,
> extends TextCountStandAloneProps {
  variant?: Variant;
  additionalClasses?: Partial<CssTextCountComponentsClassType>;
}
