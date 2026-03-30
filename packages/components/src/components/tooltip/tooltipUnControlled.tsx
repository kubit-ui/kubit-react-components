import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";

import { useTooltip } from "./hooks/useTooltip";
import { TooltipControlled } from "./tooltipControlled";
import type { ITooltip } from "./types/tooltip";

/**
 * @description
 * TooltipUnControlled is an uncontrolled version of the Tooltip component.
 * It manages its own internal open state based on user interactions (hover/focus on desktop, click on mobile).
 */
export const TooltipUnControlled = forwardRef(function <
  Variant extends string | undefined,
>(
  { onToggle, popover, ...props }: ITooltip<Variant>,
  ref: React.ForwardedRef<HTMLDivElement>,
): JSX.Element {
  const innerTooltipRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => innerTooltipRef.current as HTMLDivElement, []);

  const {
    handleClose,
    handleMouseEnter,
    handleMouseLeave,
    open,
    triggerHandlers,
  } = useTooltip({
    onToggle,
    tooltipRef: innerTooltipRef,
  });

  const popoverWithCombinedClose = useMemo(
    () => ({
      ...popover,
      onClose: () => {
        handleClose();
        popover?.onClose?.();
      },
    }),
    [popover, handleClose],
  );

  return (
    <TooltipControlled
      {...props}
      ref={innerTooltipRef}
      open={open}
      popover={popoverWithCombinedClose}
      triggerHandlers={triggerHandlers}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
});
