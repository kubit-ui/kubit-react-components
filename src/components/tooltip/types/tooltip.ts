import * as React from 'react';

import { IElementOrIcon } from '@/components/elementOrIcon';
import { IIcon } from '@/components/icon';
import { IPopoverControlled } from '@/components/popover';
import { IText } from '@/components/text';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';

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
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  onMouseUp?: React.MouseEventHandler<HTMLElement>;
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
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
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
  | 'onBlur'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onClick'
  | 'onMouseDown'
  | 'onMouseUp'
  | 'onCloseIconClick'
  | 'popoverOpen'
  | 'onPopoverCloseInternally'
  | 'tooltipRef'
  | 'labelRef'
  | 'onTooltipFocus'
  | 'onKeyDown'
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
