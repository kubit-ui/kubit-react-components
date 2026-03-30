import { useCallback, useRef, useState } from "react";

import { ENTER } from "@/lib/constants/keyboardKeys/keyboardKeys";
import { useActiveBreakpoints } from "@/lib/hooks/useMediaDevice/useActiveBreakpoints";
import { isKeyPressed } from "@/lib/utils/keyboard/keyboard";

import type { TooltipTriggerHandlers } from "../types/tooltip";

export interface UseTooltipParams {
  onToggle?: (open: boolean) => void;
  tooltipRef?: React.RefObject<HTMLDivElement | null>;
}

export interface UseTooltipReturn {
  handleClose: () => void;
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
  open: boolean;
  triggerHandlers: TooltipTriggerHandlers;
}

/**
 * @name useTooltip
 * @description
 * Hook to handle the tooltip state for UNCONTROLLED mode only.
 * Manages internal open state and provides handlers for user interactions.
 * This hook contains ALL the interaction logic including mouse events, focus events,
 * keyboard navigation, and mobile touch interactions.
 */
export const useTooltip = ({
  onToggle,
  tooltipRef,
}: UseTooltipParams): UseTooltipReturn => {
  const { isMobile } = useActiveBreakpoints();

  const [open, setOpen] = useState(false);

  // isMouseDownActive tracks if mouse is currently pressed down
  // Used to prevent opening on focus when clicking
  const isMouseDownActive = useRef(false);
  const shouldAllowFocusOpen = useRef(true);

  const updateOpen = useCallback(
    (newOpen: boolean) => {
      setOpen(newOpen);
      onToggle?.(newOpen);
    },
    [onToggle],
  );

  const handleTriggerClick = () => {
    const newOpen = !open;
    updateOpen(newOpen);
  };

  const handleWrapperMouseEnter = () => {
    updateOpen(true);
    shouldAllowFocusOpen.current = true;
  };

  const handleWrapperMouseLeave = () => {
    updateOpen(false);
    shouldAllowFocusOpen.current = true;
  };

  const handleTriggerFocus = () => {
    // Prevent opening on focus if:
    // - It's being clicked (to avoid conflict between click and focus)
    // - Focus open is not allowed (to avoid re-opening immediately after closing)
    if (isMouseDownActive.current || !shouldAllowFocusOpen.current) {
      return;
    }
    updateOpen(true);
  };

  const handleTriggerBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    // Don't close if focus is moving to the tooltip itself
    // This allows users to interact with content inside the tooltip
    const tooltipElement = tooltipRef?.current;
    if (
      tooltipElement &&
      event.relatedTarget &&
      tooltipElement.contains(event.relatedTarget as Node)
    ) {
      return;
    }

    updateOpen(false);
    shouldAllowFocusOpen.current = true;
  };

  const handleTriggerMouseDown = () => {
    isMouseDownActive.current = true;
  };

  const handleTriggerMouseUp = () => {
    isMouseDownActive.current = false;
  };

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isKeyPressed(event.key, ENTER.key) && !open) {
      updateOpen(true);
      event.preventDefault();
    }
  };

  // In mobile, we handle click and Enter key on trigger element
  // In desktop, we handle hover and focus on the trigger element
  const triggerHandlers: TooltipTriggerHandlers = isMobile
    ? { onClick: handleTriggerClick, onKeyDown: handleTriggerKeyDown }
    : {
        onBlur: handleTriggerBlur,
        onFocus: handleTriggerFocus,
        onMouseDown: handleTriggerMouseDown,
        onMouseUp: handleTriggerMouseUp,
      };

  const handleClose = () => {
    updateOpen(false);
  };

  return {
    handleClose,
    handleMouseEnter: !isMobile ? handleWrapperMouseEnter : undefined,
    handleMouseLeave: !isMobile ? handleWrapperMouseLeave : undefined,
    open,
    triggerHandlers,
  };
};
