import type {
  FocusEventHandler,
  HTMLAttributeAnchorTarget,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
} from 'react';

import type { GenericLinkType } from '@/lib/provider/genericComponentsProvider/types/genericComponentsProvider';
import type { CommonIconProps } from '@/lib/types/commons/icon';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { ListOptionsProps } from '../../listOptions/types/listOptions';
import type { IPopover } from '../../popover/types/popover';

type SelectCssClasses = ComponentSelected<ComponentsTypesComponents['SELECT']>;

/**
 * Represents the type for the list options in the Select component.
 */
export type SelectListOptionsProps = Omit<
  ListOptionsProps,
  'selectedValue' | 'onOptionClick'
>;

/**
 * Represents the type for the popover in the Select component.
 */
export type SelectPopoverProps = Omit<IPopover, 'children' | 'open'>;

/**
 * Interface for the standalone Select component.
 * Includes properties for state, event handlers, and CSS classes.
 */
export interface SelectStandAloneProps extends DataAttributes {
  open: boolean;
  popover?: SelectPopoverProps;
  onButtonClick: MouseEventHandler<HTMLButtonElement | HTMLLinkElement>;
  onButtonKeyDown: KeyboardEventHandler<HTMLButtonElement | HTMLLinkElement>;
  onClosePopover: () => void;
  label: CommonTextProps;
  icon: CommonIconProps;
  listOptions: SelectListOptionsProps;
  optionSelected?: string;
  onOptionClick: (value: string) => void;
  listOptionsRef: RefObject<HTMLDivElement | null>;
  closePopoverOnScroll?: boolean;
  openAndCloseOnHover?: boolean;
  url?: string;
  urlTarget?: HTMLAttributeAnchorTarget;
  component: 'button' | GenericLinkType;
  buttonOrLinkRef?: RefObject<HTMLButtonElement | null>;
  onFocus?: FocusEventHandler<HTMLDivElement>;
  onBlur?: FocusEventHandler<HTMLDivElement>;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  cssClasses?: SelectCssClasses;
}

/**
 * Interface for the controlled Select component.
 * Extends the SelectStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Select.
 */
export interface SelectControlledProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<
  SelectStandAloneProps,
  'listOptionsRef' | 'onButtonKeyDown' | 'component'
> {
  variant?: Variant;
  additionalClasses?: Partial<SelectCssClasses>;
}

type SelectOmittedProps =
  | 'buttonOrLinkRef'
  | 'open'
  | 'onButtonClick'
  | 'optionSelected'
  | 'onOptionClick'
  | 'onClosePopover'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onBlur'
  | 'onFocus'
  | 'onKeyDown';

/**
 * Interface for the uncontrolled Select component.
 * Extends the SelectProps interface and adds default properties.
 */
export interface SelectUnControlledProps extends Omit<
  SelectControlledProps,
  SelectOmittedProps
> {
  defaultOpen?: boolean;
  defaultOptionSelected?: string;
  onOptionClick?: (value: string) => void;
  onButtonClick?: (open: boolean) => void;
  onClosePopover?: (open: boolean) => void;
  onMouseEnter?: (open: boolean) => void;
  onMouseLeave?: (open: boolean) => void;
  onFocus?: (open: boolean) => void;
  onBlur?: (open: boolean) => void;
}
