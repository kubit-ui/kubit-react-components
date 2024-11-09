import React from 'react';

import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CustomTokenTypes } from '@/types/customToken/customToken';

import { IElementOrIcon } from '../../elementOrIcon/types/elementOrIcon';
import { IIcon } from '../../icon/types/icon';
import { IPopoverControlled } from '../../popover/types/popover';
import { IText } from '../../text/types/text';
import { TooltipAlignType } from './tooltipAlign';
import { TooltipVariantStylesProps } from './tooltipTheme';

export type TooltipTitleType = Omit<IText<string>, 'children'> & {
  content?: string;
};

type TooltipContentScrollAriasType = {
  ['aria-label']?: string;
  ['aria-labelledby']?: string;
};

export type TooltipContentType = Omit<IText<string>, 'children'> & {
  content?: JSX.Element | string;
};

export type TooltipCloseIconType = Omit<IIcon, 'icon'> & {
  icon?: string;
};

export type TooltipPopoverType = Omit<IPopoverControlled, 'children' | 'open'>;

export type TooltipTriggerAsButtonType = Pick<
  React.AriaAttributes,
  | 'aria-label'
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'aria-controls'
  | 'aria-expanded'
  | 'aria-pressed'
  | 'aria-disabled'
>;

/**
 * @name ITooltip
 * @description
 * Interface for the Tooltip component
 */
export interface ITooltipStandAlone {
  disabled?: boolean;
  mediaDevice: DeviceBreakpointsType;
  align?: TooltipAlignType;
  title?: TooltipTitleType;
  contentHasScroll?: boolean;
  content?: TooltipContentType;
  contentRef?: React.ForwardedRef<HTMLDivElement> | undefined;
  contentScrollArias?: TooltipContentScrollAriasType;
  /**
   * @deprecated - use onWrapperFocus instead
   */
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onWrapperFocus?: React.FocusEventHandler<HTMLElement>;
  /**
   * @deprecated - use onWrapperFocus instead
   */
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onWrapperBlur?: React.FocusEventHandler<HTMLElement>;
  /**
   * @deprecated - use onWrapperMouseEnter instead
   */
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onWrapperMouseEnter?: React.MouseEventHandler<HTMLElement>;
  /**
   * @deprecated - use onWrapperMouseLeave instead
   */
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onWrapperMouseLeave?: React.MouseEventHandler<HTMLElement>;
  /**
   * @deprecated - use onTriggerClick instead
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  onTriggerClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * @deprecated - use onTriggerMouseDown instead
   */
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  onTriggerMouseDown?: React.MouseEventHandler<HTMLElement>;
  /**
   * @deprecated - use onTriggerMouseUp instead
   */
  onMouseUp?: React.MouseEventHandler<HTMLElement>;
  onTriggerMouseUp?: React.MouseEventHandler<HTMLElement>;
  onCloseIconClick?: React.MouseEventHandler<HTMLElement>;
  children: JSX.Element | string | React.ReactNode;
  popoverOpen?: boolean;
  styles: TooltipVariantStylesProps;
  closeIcon?: IIcon;
  childrenAsButton?: boolean;
  triggerAsButton?: TooltipTriggerAsButtonType;
  onPopoverCloseInternally?: () => void;
  tooltipRef?: React.MutableRefObject<HTMLDivElement | null>;
  tooltipAsModal?: boolean;
  labelRef?: React.MutableRefObject<HTMLDivElement | null>;
  dataTestId?: string;
  onTooltipFocus?: React.FocusEventHandler<HTMLElement>;
  /**
   * @deprecated - use onTriggerKeyDown instead
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  onTriggerKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  onTooltipKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  popover?: TooltipPopoverType;
  dragIcon?: IElementOrIcon;
  dragIconRef?: (node) => void;
  tooltipAriaLabel?: string;
}

/**
 * @name ITooltipControlled
 * @description
 * Interface for the Tooltip Controlled component
 * @property {string} variant - The variant of the tooltip
 */
export interface ITooltipControlled<V = undefined extends string ? unknown : string>
  extends Omit<ITooltipStandAlone, 'styles' | 'mediaDevice' | 'contentHasScroll' | 'contentRef'>,
    Omit<CustomTokenTypes<TooltipVariantStylesProps>, 'cts' | 'extraCt'> {
  variant: V;
}

type propsToOmitUnControlled =
  | 'onFocus'
  | 'onWrapperFocus'
  | 'onBlur'
  | 'onWrapperBlur'
  | 'onMouseEnter'
  | 'onWrapperMouseEnter'
  | 'onMouseLeave'
  | 'onWrapperMouseLeave'
  | 'onClick'
  | 'onTriggerClick'
  | 'onMouseDown'
  | 'onTriggerMouseDown'
  | 'onMouseUp'
  | 'onTriggerMouseUp'
  | 'onCloseIconClick'
  | 'popoverOpen'
  | 'onPopoverCloseInternally'
  | 'tooltipRef'
  | 'labelRef'
  | 'onTooltipFocus'
  | 'onKeyDown'
  | 'onTriggerKeyDown'
  | 'onTooltipKeyDown'
  | 'dragIconRef';

/**
 * @name ITooltipUnControlled
 * @description
 * Interface for the TooltipUnControlled component
 */
export interface ITooltipUnControlled<V = undefined extends string ? unknown : string>
  extends Omit<ITooltipControlled<V>, propsToOmitUnControlled> {
  onOpenClose?: (open: boolean) => void;
}

export type ITooltip<V = undefined extends string ? unknown : string> =
  | ITooltipControlled<V>
  | ITooltipUnControlled<V>;
