import {
  type FocusEventHandler,
  type ForwardedRef,
  type KeyboardEventHandler,
  type MouseEventHandler,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

import { ENTER } from '@/lib/constants/keyboardKeys/keyboardKeys';
import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useActiveBreakpoints } from '@/lib/hooks/useMediaDevice/useActiveBreakpoints';
import { useScrollDetection } from '@/lib/hooks/useScrollDetection/useScrollDetection';
import { useSwipeDown } from '@/lib/hooks/useSwipeDown/useSwipeDown';
import { useTrapFocus } from '@/lib/hooks/useTrapFocus/useTrapFocus';

import type { TooltipUnControlledProps } from './types/tooltip';

import { isKeyPressed } from '../../lib/utils/keyboard/keyboard';
import { useTooltip } from './hooks/useTooltip';
import { useTooltipAsModal } from './hooks/useTooltipAsModal';
import { TooltipStandAlone } from './tooltipStandAlone';

export const TooltipUnControlled = forwardRef(function <
  Variant extends string | undefined,
>(
  {
    additionalClasses,
    align,
    closeIcon,
    onOpenClose,
    popover,
    tooltipAriaLabel,
    tooltipAsModal,
    variant,
    ...props
  }: TooltipUnControlledProps<Variant>,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TOOLTIP',
    variant,
  });

  const {
    device: mediaDevice,
    isDesktop,
    isMobile,
    isTablet,
  } = useActiveBreakpoints();
  const isDesktopOrTablet = isDesktop || isTablet;

  const labelRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipAsModalValue = useTooltipAsModal({
    propTooltipAsModal: tooltipAsModal,
    styleTooltipAsModal: tooltipAsModal,
  });
  useImperativeHandle(ref, () => labelRef.current as HTMLDivElement);
  const { allowFocusOpenTooltip, hideTooltip, open, placement, showTooltip } =
    useTooltip<Variant>({
      additionalClasses,
      align: align || 'top',
      labelRef,
      onOpenClose,
      tooltipAsModal: tooltipAsModalValue,
      tooltipRef,
      variant,
    });
  const {
    handleScrollDetection: contentRefHandler,
    hasScroll: contentHasScroll,
  } = useScrollDetection({
    autoFocus: true,
  });
  const isBeingClicked = useRef(false);
  const handleWrapperFocus: FocusEventHandler<HTMLElement> = () => {
    if (
      isBeingClicked.current ||
      tooltipAsModalValue ||
      !allowFocusOpenTooltip.current ||
      isMobile
    ) {
      return;
    }
    showTooltip();
  };
  const handleWrapperBlur: FocusEventHandler<HTMLElement> = (event) => {
    if (
      !tooltipAsModalValue &&
      !event.currentTarget.contains(event.relatedTarget)
    ) {
      hideTooltip();
    }
  };
  const handleFocusTooltip: React.FocusEventHandler<HTMLElement> = (event) => {
    if (!tooltipAsModalValue) {
      // Avoid on focus (label) be executed on focus tooltip
      event.preventDefault();
      event.stopPropagation();
    }
  };
  const handleWrapperMouseEnter: MouseEventHandler<HTMLElement> = () => {
    if (!tooltipAsModalValue && isDesktopOrTablet) {
      showTooltip();
    }
  };
  const handleWrapperMouseLeave: MouseEventHandler<HTMLElement> = () => {
    if (!tooltipAsModalValue && isDesktopOrTablet) {
      hideTooltip();
    }
  };
  const handleCloseIconClick: MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    closeIcon?.onClick?.(event);
    hideTooltip();
  };
  const handleTriggerMouseDown: MouseEventHandler<HTMLElement> = () => {
    isBeingClicked.current = true;
  };
  const handleTriggerMouseUp: MouseEventHandler<HTMLElement> = () => {
    isBeingClicked.current = false;
  };
  const handleTriggerClick: MouseEventHandler<HTMLElement> = (event) => {
    if (isDesktopOrTablet) {
      if (!tooltipAsModalValue) {
        return;
      }
      if (!open) {
        showTooltip();
        return;
      }
      if (!tooltipRef.current?.contains(event.target as Node)) {
        hideTooltip();
      }
      return;
    }
    if (!open) {
      showTooltip();
      return;
    }
    if (!tooltipRef.current?.contains(event.target as Node)) {
      hideTooltip();
    }
  };
  const handleTriggerKeyDown: KeyboardEventHandler<HTMLDivElement> = (
    event,
  ) => {
    if (isKeyPressed(event.key, ENTER.key) && !open) {
      showTooltip();
      event.preventDefault();
    }
  };
  const handlePopoverCloseInternally = () => {
    popover?.onClose?.();
    hideTooltip();
  };
  const { setDragIconRef, setPopoverRef } = useSwipeDown({
    onClose: hideTooltip,
  });
  useTrapFocus({
    ref: tooltipRef,
    trapFocus: open && tooltipAsModalValue,
  });
  return (
    <TooltipStandAlone
      {...props}
      align={placement}
      contentHasScroll={contentHasScroll}
      contentRef={contentRefHandler}
      cssClasses={cssClasses}
      dragIconRef={setDragIconRef as never}
      labelRef={labelRef}
      mediaDevice={mediaDevice}
      popover={{
        ...popover,
        popoverContainerRef: setPopoverRef as never,
      }}
      popoverOpen={open}
      tooltipAriaLabel={tooltipAriaLabel}
      tooltipAsModal={tooltipAsModalValue}
      tooltipRef={tooltipRef}
      onCloseIconClick={handleCloseIconClick}
      onPopoverCloseInternally={handlePopoverCloseInternally}
      onTooltipFocus={handleFocusTooltip}
      onTriggerClick={handleTriggerClick}
      onTriggerKeyDown={handleTriggerKeyDown}
      onTriggerMouseDown={handleTriggerMouseDown}
      onTriggerMouseUp={handleTriggerMouseUp}
      onWrapperBlur={handleWrapperBlur}
      onWrapperFocus={handleWrapperFocus}
      onWrapperMouseEnter={handleWrapperMouseEnter}
      onWrapperMouseLeave={handleWrapperMouseLeave}
    />
  );
});

export { TooltipUnControlled as Tooltip };
