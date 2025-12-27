/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { AriaAttributes, KeyboardEventHandler, ReactNode } from 'react';

import type { NavBarProps } from '@/components/navBar/types/navBar';
import type { ElementOrIconProps } from '@/lib/components/elementOrIcon/types/elementOrIcon';
import type { DeviceBreakpointsType } from '@/lib/types/breakpoints/breakpoints';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/kubit/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { ButtonProps } from '../../button/types/button';
import type { IPopover } from '../../popover/types/popover';

type ModalCssClasses = ComponentSelected<ComponentsTypesComponents['MODAL']>;

/**
 * Represents the type for the button in the Modal component.
 */
export type ModalButtonProps = Omit<ButtonProps, 'children' | 'variant'> & {
  content?: ReactNode;
  variant?: string;
};

/**
 * Represents the type for the footer in the Modal component.
 */
export type ModalFooterProps = Omit<NavBarProps, 'variant'> & {
  variant?: string;
};

/**
 * Represents the type for the popover in the Modal component.
 */
export type ModalPopoverProps = Omit<IPopover, 'children' | 'open'>;

/**
 * Represents the styles for the Modal component.
 */
export interface ModalStyledProps {
  $maxHeight?: string;
  $minHeight?: string;
  $maxWidth?: string;
  $minWidth?: string;
  hasFooter?: boolean;
}

/**
 * Represents the content container for the Modal component.
 */
export interface ModalContentContainerProps extends Pick<
  AriaAttributes,
  'aria-label' | 'aria-labelledby'
> {
  tabIndex?: number;
  role?: string;
}

/**
 * Interface for the standalone Modal component.
 * Includes properties for styles, state, event handlers, and CSS classes.
 */
export interface ModalStandAloneProps extends DataAttributes {
  maxHeight?: string;
  minHeight?: string;
  maxWidth?: string;
  minWidth?: string;
  minContentHeight?: string;
  customHeightAllDevices?: boolean;
  customWidthAllDevices?: boolean;
  id?: string;
  open?: boolean;
  popover?: ModalPopoverProps;
  blocked?: boolean;
  title?: CommonTextProps & { visible?: boolean };
  closeIcon?: ElementOrIconProps;
  closeButton?: ModalButtonProps;
  contentContainer?: ModalContentContainerProps;
  content?: ReactNode;
  contentScrollArias?: Pick<AriaAttributes, 'aria-label' | 'aria-labelledby'>;
  contentHasScroll: boolean;
  footer?: ModalFooterProps;
  device: DeviceBreakpointsType;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  onPopoverCloseInternally?: () => void;
  cssClasses?: ModalCssClasses;
  dragIcon?: ElementOrIconProps;
}

type ModalOmittedProps = 'styles' | 'device' | 'contentHasScroll';

/**
 * Interface for the controlled Modal component.
 * Extends the ModalStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Modal.
 */
export interface ModalControlledProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<ModalStandAloneProps, ModalOmittedProps> {
  variant?: Variant;
  disableFocusableContent?: boolean;
  portalId?: string;
  onClose?: () => void;
  additionalClasses?: Partial<ModalCssClasses>;
}

/**
 * Interface for the uncontrolled Modal component.
 * Extends the ModalProps interface and adds default properties.
 *
 * @template Variant - The type of the variant for the Modal.
 */
export interface ModalUnControlledProps<
  Variant = undefined extends string ? unknown : string,
> extends ModalControlledProps<Variant> {}
