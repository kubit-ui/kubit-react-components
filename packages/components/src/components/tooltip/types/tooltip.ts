import type {
  AriaAttributes,
  FocusEventHandler,
  ForwardedRef,
  KeyboardEventHandler,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
} from 'react';

import type { DeviceBreakpointsType } from '@/lib/types/breakpoints/breakpoints';
import type { CommonTextProps } from '@/lib/types/commons/text';
import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from '@/lib/types/cssGenerator/componentsTypes';
import type { DataAttributes } from '@/lib/types/dataAttributes/dataAttributes';

import type { IPopover } from '../../popover/types/popover';
import { type TooltipAlignType } from './tooltipAlign';

export type TooltipCssClasses = ComponentSelected<
  ComponentsTypesComponents['TOOLTIP']
>;

/**
 * Represents the type for the popover in the Tooltip component.
 */
export type TooltipPopoverProps = Omit<IPopover, 'children' | 'open'>;

/**
 * Interface for the standalone Tooltip component.
 * Includes ARIA attributes, styling options, event handlers, and additional attributes.
 */
export interface TooltipStandAloneProps extends DataAttributes {
  disabled?: boolean;
  mediaDevice: DeviceBreakpointsType;
  align?: TooltipAlignType | string;
  contentHasScroll?: boolean;
  content?: CommonTextProps;
  contentRef?: ForwardedRef<HTMLDivElement> | undefined;
  contentScrollArias?: Pick<AriaAttributes, 'aria-label' | 'aria-labelledby'>;
  onWrapperFocus?: FocusEventHandler<HTMLElement>;
  onWrapperBlur?: FocusEventHandler<HTMLElement>;
  onWrapperMouseEnter?: MouseEventHandler<HTMLElement>;
  onWrapperMouseLeave?: MouseEventHandler<HTMLElement>;
  onTriggerClick?: MouseEventHandler<HTMLElement>;
  onTriggerMouseDown?: MouseEventHandler<HTMLElement>;
  onTriggerMouseUp?: MouseEventHandler<HTMLElement>;
  children: JSX.Element | string | ReactNode;
  popoverOpen?: boolean;
  cssClasses?: TooltipCssClasses;
  childrenAsButton?: boolean;
  triggerAsButton?: Pick<
    AriaAttributes,
    | 'aria-label'
    | 'aria-labelledby'
    | 'aria-describedby'
    | 'aria-controls'
    | 'aria-expanded'
    | 'aria-pressed'
    | 'aria-disabled'
  >;
  onPopoverCloseInternally?: () => void;
  tooltipRef?: MutableRefObject<HTMLDivElement | null>;
  tooltipAsModal?: boolean;
  labelRef?: MutableRefObject<HTMLDivElement | null>;
  onTooltipFocus?: FocusEventHandler<HTMLElement>;
  onTriggerKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  onTooltipKeyDown?: KeyboardEventHandler<HTMLElement>;
  popover?: TooltipPopoverProps;
  tooltipAriaLabel?: string;
}

/**
 * Interface for the controlled Tooltip component.
 * Extends the TooltipStandAloneProps interface and adds a variant and additional CSS classes.
 *
 * @template Variant - The type of the variant for the Tooltip.
 */
export interface TooltipControlledProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<
  TooltipStandAloneProps,
  'mediaDevice' | 'contentHasScroll' | 'contentRef'
> {
  variant?: Variant;
  additionalClasses?: Partial<TooltipCssClasses>;
}

type TooltipUnControlledPropsToOmit =
  | 'onWrapperFocus'
  | 'onWrapperBlur'
  | 'onWrapperMouseEnter'
  | 'onWrapperMouseLeave'
  | 'onTriggerClick'
  | 'onTriggerMouseDown'
  | 'onTriggerMouseUp'
  | 'onCloseIconClick'
  | 'popoverOpen'
  | 'onPopoverCloseInternally'
  | 'tooltipRef'
  | 'labelRef'
  | 'onTooltipFocus'
  | 'onTriggerKeyDown'
  | 'onTooltipKeyDown'
  | 'dragIconRef';

/**
 * Interface for the uncontrolled Tooltip component.
 * Extends the TooltipControlledProps interface and omits specific properties.
 */
export interface TooltipUnControlledProps<
  Variant = undefined extends string ? unknown : string,
> extends Omit<
  TooltipControlledProps<Variant>,
  TooltipUnControlledPropsToOmit
> {
  onOpenClose?: (open: boolean) => void;
}

/**
 * Union type for Tooltip components.
 * Can be either controlled or uncontrolled.
 */
export type TooltipProps<
  Variant = undefined extends string ? unknown : string,
> = TooltipControlledProps<Variant> | TooltipUnControlledProps<Variant>;
