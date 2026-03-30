import type { UseRoveFocusProps } from '@/lib/hooks/useRoveFocus/types/useRoveFocus';
import type { CommonIconProps } from '@/lib/types/commons/icon';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { OptionProps } from '../../option/types/option';

import { type ListOptionsType } from './type';

type ListOptionsCssClasses = ComponentSelected<
  ComponentsTypesComponents['LIST_OPTIONS']
>;

/**
 * Represents the type for an option in the ListOptions component.
 */
export type ListOptionsOptionProps = Omit<
  OptionProps<string>,
  'children' | 'variant'
> & {
  variant?: string;
  highlighted?: boolean;
  value?: string | number;
  sublabel?: CommonTextProps;
};

/**
 * Represents the ARIA attributes for the options container in the ListOptions component.
 */
export type ListOptionsContainerAriasProps = Pick<
  React.AriaAttributes,
  'aria-label' | 'aria-labelledby'
>;

/**
 * Interface for the standalone ListOptions component.
 * Includes properties for options, ARIA attributes, event handlers, and CSS classes.
 */
export interface ListOptionsStandAloneProps extends DataAttributes {
  optionVariant?: string;
  highlightedOptionVariant?: string;
  type?: ListOptionsType;
  optionsContainerArias?: ListOptionsContainerAriasProps;
  options: ListOptionsOptionProps[];
  caseSensitive?: boolean;
  charsHighlighted?: string;
  selectedValue?: string | number | string[] | number[] | null;
  title?: CommonTextProps;
  content?: React.ReactNode;
  onOptionClick?: (
    value: string,
    event:
      | React.KeyboardEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement>,
  ) => void;
  multiSelect?: boolean;
  checkedIcon?: CommonIconProps;
  id?: string;
  roveFocus?: UseRoveFocusProps;
  index?: number;
  cssClasses?: ListOptionsCssClasses;
  listComponent?: string;
}

/**
 * Interface for the ListOptions component with a variant.
 * Extends the ListOptionsStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the ListOptions.
 */
export interface ListOptionsProps<
  Variant = undefined extends string ? unknown : string,
> extends ListOptionsStandAloneProps {
  variant?: Variant;
  additionalClasses?: Partial<ListOptionsCssClasses>;
}
