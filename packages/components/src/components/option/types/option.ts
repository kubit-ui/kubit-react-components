import type { ReactNode } from 'react';

import type { GenericLinkType } from '@/lib/provider/genericComponentsProvider/types/genericComponentsProvider';
import type { CommonIconProps } from '@/lib/types/commons/icon';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

type OptionCssClasses = ComponentSelected<ComponentsTypesComponents['OPTION']>;

/**
 * Represents the ARIA attributes for the Option component.
 */
type OptionAriaProps = Pick<
  React.AriaAttributes,
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'aria-hidden'
  | 'aria-selected'
  | 'aria-current'
  | 'aria-checked'
>;

/**
 * Interface for the standalone Option component.
 * Includes ARIA attributes, labels, icons, event handlers, and CSS classes.
 */
export interface OptionStandAloneProps extends OptionAriaProps, DataAttributes {
  icon?: CommonIconProps;
  sublabel?: CommonTextProps;
  label: ReactNode;
  labelCharsHighlighted?: string;
  checkedIcon?: CommonIconProps;
  multiSelect?: boolean;
  disabled?: boolean;
  selected?: boolean;
  focus?: boolean;
  hover: boolean;
  url?: string;
  onClick?: (
    event:
      | React.KeyboardEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement>,
  ) => void;
  onMouseEnter: React.MouseEventHandler<HTMLElement>;
  onMouseLeave: React.MouseEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  role?: React.AriaRole;
  componentLink?: GenericLinkType;
  tabIndex?: number;
  component?: string | React.ElementType;
  extraContent?: React.ReactNode;
  cssClasses?: OptionCssClasses;
}

/**
 * Interface for the Option component with a variant.
 * Extends the OptionStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Option.
 */
export interface OptionProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<
  OptionStandAloneProps,
  'componentLink' | 'hover' | 'onMouseEnter' | 'onMouseLeave'
> {
  variant?: Variant;
  additionalClasses?: Partial<OptionCssClasses>;
}
