import { forwardRef, useId, useImperativeHandle, useRef } from "react";

import { useClassName } from "@/lib/hooks/useClassName/useClassName";
import { useActiveBreakpoints } from "@/lib/hooks/useMediaDevice/useActiveBreakpoints";
import { useScrollDetection } from "@/lib/hooks/useScrollDetection/useScrollDetection";

import { TooltipStandAlone } from "./tooltipStandAlone";
import type { ITooltipControlled } from "./types/tooltip";

/**
 * @description
 * TooltipControlled is a controlled version of the Tooltip component.
 * It requires an `open` prop to control the tooltip visibility externally.
 */
export const TooltipControlled = forwardRef(function <
  Variant extends string | undefined,
>(
  {
    additionalClasses,
    open,
    popover,
    variant,
    ...props
  }: ITooltipControlled<Variant>,
  ref: React.ForwardedRef<HTMLDivElement>,
): JSX.Element {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: "TOOLTIP",
    variant,
  });

  const innerTooltipRef = useRef<HTMLDivElement>(null);
  const triggerElementRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return innerTooltipRef.current as HTMLDivElement;
    },
    [],
  );

  const { isMobile } = useActiveBreakpoints();

  const reactId = useId();
  const tooltipId = `tooltip-${reactId.replace(/:/g, "")}`;

  const {
    hasScroll: contentHasScroll,
    handleScrollDetection: contentRefHandler,
  } = useScrollDetection({ autoFocus: true });

  return (
    <TooltipStandAlone
      {...props}
      ref={innerTooltipRef}
      contentHasScroll={contentHasScroll}
      contentRef={contentRefHandler}
      cssClasses={cssClasses}
      isMobile={isMobile}
      open={open}
      popover={popover}
      tooltipId={tooltipId}
      triggerRef={triggerElementRef}
    />
  );
});
