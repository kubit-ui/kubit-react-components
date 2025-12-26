import type {
  FocusEventHandler,
  HTMLAttributeAnchorTarget,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
} from 'react';

import type { GenericLinkType } from '@/lib/provider/genericComponentsProvider/types/genericComponentsProvider';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { ElementOrIconProps } from '../../elementOrIcon/types/elementOrIcon';
import type { ListOptionsProps } from '../../listOptions/types/listOptions';
import type { IPopover } from '../../popover/types/popover';

type DropdownSelectedCssClasses = ComponentSelected<
  ComponentsTypesComponents['DROPDOWN_SELECTED']
>;

/**
 * Represents the type for the list options in the DropdownSelected component.
 */
export type DropdownSelectedListOptionsProps = Omit<
  ListOptionsProps,
  'selectedValue' | 'onOptionClick'
>;

/**
 * Represents the type for the popover in the DropdownSelected component.
 */
export type DropdownSelectedPopoverProps = Omit<IPopover, 'children' | 'open'>;

/**
 * Interface for the standalone DropdownSelected component.
 * Includes properties for state, event handlers, and CSS classes.
 */
export interface DropdownSelectedStandAloneProps extends DataAttributes {
  open: boolean;
  popover?: DropdownSelectedPopoverProps;
  onButtonClick: MouseEventHandler<HTMLButtonElement | HTMLLinkElement>;
  onButtonKeyDown: KeyboardEventHandler<HTMLButtonElement | HTMLLinkElement>;
  onClosePopover: () => void;
  label: CommonTextProps;
  icon: ElementOrIconProps;
  listOptions: DropdownSelectedListOptionsProps;
  optionSelected?: string;
  onOptionClick: (value: string) => void;
  listOptionsRef: RefObject<HTMLDivElement>;
  closePopoverOnScroll?: boolean;
  openAndCloseOnHover?: boolean;
  url?: string;
  urlTarget?: HTMLAttributeAnchorTarget;
  component: 'button' | GenericLinkType;
  buttonOrLinkRef?: RefObject<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLDivElement>;
  onBlur?: FocusEventHandler<HTMLDivElement>;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  cssClasses?: DropdownSelectedCssClasses;
}

/**
 * Interface for the controlled DropdownSelected component.
 * Extends the DropdownSelectedStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the DropdownSelected.
 */
export interface DropdownSelectedControlledProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<
  DropdownSelectedStandAloneProps,
  'listOptionsRef' | 'onButtonKeyDown' | 'component'
> {
  variant?: Variant;
  additionalClasses?: Partial<DropdownSelectedCssClasses>;
}

type DropdownSelectedOmittedProps =
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
 * Interface for the uncontrolled DropdownSelected component.
 * Extends the DropdownSelectedProps interface and adds default properties.
 */
export interface DropdownSelectedUnControlledProps extends Omit<
  DropdownSelectedControlledProps,
  DropdownSelectedOmittedProps
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
