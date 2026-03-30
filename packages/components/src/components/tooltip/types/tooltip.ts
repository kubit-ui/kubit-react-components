import type { ReactNode, RefObject } from "react";

import type {
  ComponentSelected,
  ComponentsTypesComponents,
} from "@/lib/types/cssGenerator/componentsTypes";
import type { DataAttributes } from "@/lib/types/dataAttributes/dataAttributes";

import type { ArrowStyles, IPopover } from "../../popover/types/popover";

export type TooltipCssClasses = ComponentSelected<
  ComponentsTypesComponents["TOOLTIP"]
>;

export interface TooltipScrollableAccessibilityType {
  ["aria-label"]?: string;
  ["aria-labelledby"]?: string;
}

export interface TooltipMainContentType {
  content: ReactNode;
  role?: string;
  scrollableAccessibility?: TooltipScrollableAccessibilityType;
  tabIndex?: number;
}

export type TooltipPopover = Omit<
  IPopover,
  "children" | "open" | "anchorElement" | "arrowStyles"
>;

export interface TooltipTriggerHandlers {
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  onMouseUp?: React.MouseEventHandler<HTMLDivElement>;
}

export interface ITooltipStandAlone extends DataAttributes {
  children: ReactNode;
  isMobile: boolean;
  mainContent: TooltipMainContentType;
  tooltipId: string;
  triggerRef: RefObject<HTMLDivElement | null>;
  additionalClasses?: Partial<TooltipCssClasses>;
  asButton?: boolean;
  arrowStyles?: ArrowStyles;
  contentHasScroll?: boolean;
  contentRef?: React.ForwardedRef<HTMLDivElement>;
  cssClasses?: TooltipCssClasses;
  open?: boolean;
  popover?: TooltipPopover;
  triggerHandlers?: TooltipTriggerHandlers;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

type PropsToOmitControlled =
  | "contentHasScroll"
  | "contentRef"
  | "cssClasses"
  | "isMobile"
  | "tooltipId"
  | "triggerRef";

export interface ITooltipControlled<
  Variant = undefined extends string ? unknown : string,
> extends Omit<ITooltipStandAlone, PropsToOmitControlled> {
  open: boolean;
  variant?: Variant;
}

type PropsToOmitUnControlled =
  | "open"
  | "onMouseEnter"
  | "onMouseLeave"
  | "triggerHandlers";

export interface ITooltip<Variant = undefined extends string ? unknown : string>
  extends Omit<ITooltipControlled<Variant>, PropsToOmitUnControlled> {
  onToggle?: (open: boolean) => void;
}
