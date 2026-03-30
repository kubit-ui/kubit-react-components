import { forwardRef } from "react";

import { useClassName } from "@/lib/hooks/useClassName/useClassName";
import { useTrapFocus } from "@/lib/hooks/useTrapFocus/useTrapFocus";

import { usePopoverInteractions } from "./hooks/usePopoverInteractions";
import { usePopoverLifecycle } from "./hooks/usePopoverLifecycle";
import { usePopoverPositioning } from "./hooks/usePopoverPositioning";
import { PopoverStandAlone } from "./popoverStandAlone";
import type { IPopover } from "./types/popover";

const PopoverComponent = (
  {
    additionalClasses,
    anchorElement,
    animationExitDuration = 200,
    disableAnimations = false,
    disableAutoFocusFirstDescendant = false,
    disableAutoFocusFirstDescendantAfterClose = true,
    disableClickOverlayClose = false,
    disableEscapeClose = false,
    disableRestoreFocusAfterClose = false,
    disableScrollBackground = false,
    disableTrapFocus = false,
    middlewareOptions,
    middlewares,
    onClose,
    open = false,
    popoverContainerRef,
    preventCloseOnClickElements = [],
    preventScrollOnCloseFocus = false,
    strategy = "absolute",
    ...props
  }: IPopover,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null,
): JSX.Element => {
  const _disableAnimations = disableAnimations || !!anchorElement;
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: "POPOVER",
  });

  const { handleInnerRef, isClosing, isVisible, popoverRef } =
    usePopoverLifecycle({
      animationExitDuration,
      disableAnimations: _disableAnimations,
      disableAutoFocusFirstDescendant,
      disableAutoFocusFirstDescendantAfterClose,
      disableRestoreFocusAfterClose,
      disableScrollBackground,
      open,
      popoverContainerRef,
      preventScrollOnCloseFocus,
    });

  useTrapFocus({
    ref: popoverRef,
    trapFocus: !disableTrapFocus && isVisible,
  });

  usePopoverInteractions({
    disableClickOverlayClose,
    disableEscapeClose,
    isVisible,
    onClose,
    popoverRef,
    preventCloseOnClickElements,
  });

  usePopoverPositioning({
    anchorElement,
    arrowStyles: props.arrowStyles,
    isVisible,
    middlewareOptions,
    middlewares,
    placement: props.placement,
    ref: popoverRef,
    strategy,
  });

  return (
    <PopoverStandAlone
      ref={ref}
      {...props}
      anchorElement={!!anchorElement}
      cssClasses={cssClasses}
      disableAnimations={_disableAnimations}
      isClosing={isClosing}
      isVisible={isVisible}
      middlewareOptions={middlewareOptions}
      popoverContainerRef={handleInnerRef}
      strategy={strategy}
    />
  );
};

/**
 * Positioning utilities built on top of Floating UI.
 * @see https://floating-ui.com/docs/platform
 * @license MIT - Floating UI is licensed under MIT
 */
export const Popover = forwardRef(PopoverComponent);
