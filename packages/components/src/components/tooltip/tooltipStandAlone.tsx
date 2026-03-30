import "./tooltip.css";

import { forwardRef, useMemo } from "react";

import { classNames } from "@/lib/utils/classNames/classNames";
import { pickCustomAttributes } from "@/lib/utils/pickCustomAttributes/pickCustomAttributes";

import { Popover } from "../popover/popover";
import { TriggerElement } from "./components/triggerElement";
import type { ITooltipStandAlone } from "./types/tooltip";
import { getMainContentAccessibility } from "./utils/accessibility.utils";

/**
 * @accessibility Mobile uses role="dialog" instead of role="tooltip" because:
 *
 * Role differences:
 * - role="tooltip": Designed for hover/focus, non-modal, auto-dismisses, cannot contain interactive elements
 * - role="dialog": Supports modal behavior, traps focus, requires user action to dismiss, can contain interactive content
 *
 * Why dialog for mobile:
 * - Touch devices lack hover/focus interactions that tooltips require
 * - Content opens as a modal-like overlay requiring explicit user dismissal (tap outside/overlay)
 * - Dialog provides better screen reader announcements for this modal behavior
 * - Enables proper focus trapping and aria-modal support
 * - Allows scrollable or interactive content within the tooltip
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
 */
const TooltipStandAloneComponent = (
  {
    arrowStyles,
    children,
    contentHasScroll,
    cssClasses,
    isMobile,
    mainContent,
    open,
    popover,
    tooltipId,
    triggerHandlers,
    triggerRef,
    onMouseEnter,
    onMouseLeave,
    ...props
  }: ITooltipStandAlone,
  ref: React.ForwardedRef<HTMLDivElement>,
): JSX.Element => {
  const customAttributes = pickCustomAttributes(props) as Record<
    string,
    string
  >;

  const mainContentAccessibility = getMainContentAccessibility(
    mainContent,
    contentHasScroll,
  );
  const popoverConfiguration = useMemo(() => {
    if (isMobile) {
      const preventCloseElements = popover?.overlay
        ? undefined
        : [triggerRef.current];

      return {
        ["aria-describedby"]: tooltipId,
        ["aria-modal"]: true,
        disableScrollBackground: true,
        overlay: (
          <div
            className={classNames("kbt-tooltip__overlay", cssClasses?.overlay)}
          />
        ),
        placement: "bottom" as const,
        preventCloseOnClickElements: preventCloseElements,
        role: "dialog",
        additionalClasses: cssClasses?.popover,
        ...popover,
        middlewareOptions: undefined, // Disable middleware for mobile to ensure consistent behavior
      };
    }

    return {
      arrowStyles,
      disableAnimations: true,
      disableAutoFocusFirstDescendant: true,
      disableRestoreFocusAfterClose: true,
      role: "tooltip",
      additionalClasses: cssClasses?.popover,
      ...popover,
      middlewareOptions: {
        enableFlip: true,
        hideWhenDetached: true,
        // Important: offsetDistance [0, 0] is required because HoverBridgeContainer's padding handles
        // the visual gap and hover bridge. Without this, the default would add arrowSize as offset,
        // causing double-spacing. This also enables correct arrow positioning within the padding area.
        offsetDistance: [0, 0] as [number, number],
        ...popover?.middlewareOptions,
      },
    };
  }, [isMobile, popover, tooltipId, arrowStyles, triggerRef, cssClasses]);

  return (
    <div
      ref={ref}
      className="kbt-tooltip"
      data-testid="tooltip"
      role="presentation"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...customAttributes}
    >
      <TriggerElement
        ref={triggerRef as React.RefObject<HTMLElement>}
        asButton={props.asButton}
        cssClasses={cssClasses}
        isMobile={isMobile}
        open={open}
        tooltipId={tooltipId}
        {...triggerHandlers}
      >
        {children}
      </TriggerElement>
      <Popover
        anchorElement={isMobile ? undefined : triggerRef?.current}
        {...popoverConfiguration}
        open={open}
      >
        {!isMobile ? (
          <div
            className={classNames(
              "kbt-tooltip__hover-bridge-container",
              cssClasses?.hoverbridgecontainer,
            )}
          >
            <div
              ref={props.contentRef as React.RefObject<HTMLDivElement>}
              data-kbt-tooltip-content
              className={classNames(
                "kbt-tooltip__main-content",
                cssClasses?.maincontent,
              )}
              id={tooltipId}
              {...mainContentAccessibility}
            >
              {mainContent?.content}
            </div>
          </div>
        ) : (
          <div
            ref={props.contentRef as React.RefObject<HTMLDivElement>}
            data-kbt-tooltip-content
            className={classNames(
              "kbt-tooltip__main-content",
              "kbt-tooltip__main-content--mobile",
              cssClasses?.maincontent,
            )}
            id={tooltipId}
            {...mainContentAccessibility}
          >
            {mainContent?.content}
          </div>
        )}
      </Popover>
    </div>
  );
};

export const TooltipStandAlone = forwardRef(TooltipStandAloneComponent);
