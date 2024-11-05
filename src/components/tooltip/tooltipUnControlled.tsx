import * as React from 'react';

import { useMediaDevice, useScrollDetectionWithAutoFocus, useSwipeDown } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { useTrapFocus } from '@/hooks/useTrapFocus/useTrapFocus';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { DeviceBreakpointsType } from '@/types';
import { isKeyEnterPressed } from '@/utils';

import { TOOLTIP_STYLES } from './constants';
import { useTooltip, useTooltipAsModal } from './hooks';
import { TooltipStandAlone } from './tooltipStandAlone';
import { ITooltipStandAlone, ITooltipUnControlled, TooltipVariantStylesProps } from './types';

const TooltipUnControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      ctv,
      tooltipAsModal,
      onOpenClose,
      variant,
      tooltipAriaLabel,
      ...props
    }: ITooltipUnControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<TooltipVariantStylesProps, V>(TOOLTIP_STYLES, variant, ctv);
    const mediaDevice = useMediaDevice();

    const labelRef = React.useRef<HTMLDivElement>(null);
    const tooltipRef = React.useRef<HTMLDivElement>(null);

    const tooltipAsModalValue = useTooltipAsModal({
      propTooltipAsModal: tooltipAsModal,
      styleTooltipAsModal: styles.tooltipAsModal,
    });

    React.useImperativeHandle(ref, () => {
      return labelRef.current as HTMLDivElement;
    }, []);

    const { showTooltip, hideTooltip, allowFocusOpenTooltip, open } = useTooltip<V>({
      labelRef,
      tooltipRef,
      variant,
      onOpenClose,
      align: props.align,
      tooltipAsModal: tooltipAsModalValue,
      ctv,
    });

    const { hasScroll: contentHasScroll, handleScrollDetection: contentRefHandler } =
      useScrollDetectionWithAutoFocus({ parentElementRef: tooltipRef });

    // When !tooltipAsModal, in tablet/mobile, onFocus and onClick are executed at the same time
    // So onFocus will open the tooltip, and onClick will close it (because it was opened)
    // To avoid calling onFocus when onClick, onMouseDown -> preventDefoult could be used,
    // But this approach will lead to the focus-visible pseudo class being applied (strange, but true)
    // So the approach is to use a flag to avoid calling onFocus when onClick
    const isBeingClicked = React.useRef(false);

    const handleFocus: React.FocusEventHandler<HTMLElement> = () => {
      // allowFocusOpenTooltip Avoid tooltip is opened automatically after closing the tooltip
      if (isBeingClicked.current || tooltipAsModalValue || !allowFocusOpenTooltip.current) {
        return;
      }
      showTooltip();
    };

    const handleBlur: React.FocusEventHandler<HTMLElement> = event => {
      if (!tooltipAsModalValue && !event.currentTarget.contains(event.relatedTarget)) {
        hideTooltip();
      }
    };

    const handleFocusTooltip: React.FocusEventHandler<HTMLElement> = event => {
      if (!tooltipAsModalValue) {
        // Avoid on focus (label) be executed on focus tooltip
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const handleMouseEnter: React.MouseEventHandler<HTMLElement> = () => {
      if (!tooltipAsModalValue) {
        if (mediaDevice !== DeviceBreakpointsType.DESKTOP) {
          return;
        }
        showTooltip();
      }
    };

    const handleMouseLeave: React.MouseEventHandler<HTMLElement> = () => {
      if (!tooltipAsModalValue) {
        if (mediaDevice !== DeviceBreakpointsType.DESKTOP) {
          return;
        }
        hideTooltip();
      }
    };

    const handleCloseIconClick: React.MouseEventHandler<HTMLButtonElement> = event => {
      props.closeIcon?.onClick?.(event);
      hideTooltip();
    };

    const handleMouseDown: React.MouseEventHandler<HTMLElement> = () => {
      isBeingClicked.current = true;
    };

    const handleMouseUp: React.MouseEventHandler<HTMLElement> = () => {
      isBeingClicked.current = false;
    };

    const handleClick: React.MouseEventHandler<HTMLElement> = event => {
      if (mediaDevice === DeviceBreakpointsType.DESKTOP) {
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
      // Mobile / tablet
      if (!open) {
        showTooltip();
        return;
      }
      if (!tooltipRef.current?.contains(event.target as Node)) {
        hideTooltip();
      }
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = event => {
      if (isKeyEnterPressed(event.key) && !open) {
        showTooltip();
        event.preventDefault();
      }
    };

    const handlePopoverCloseInternally = () => {
      props.popover?.onCloseInternally?.();
      hideTooltip();
    };

    const { setDragIconRef, setPopoverRef } = useSwipeDown(
      props.popover?.animationOptions,
      hideTooltip
    );

    useTrapFocus({ ref: tooltipRef, trapFocus: open && tooltipAsModalValue });

    // It is used TooltipStandAlone instead of TooltipControlled
    // The reason is that TooltipControlled only provides the styles and mediaDevice props that are used and needed in this component
    return (
      <TooltipStandAlone
        {...props}
        contentHasScroll={contentHasScroll}
        contentRef={contentRefHandler}
        dragIconRef={setDragIconRef}
        labelRef={labelRef}
        mediaDevice={mediaDevice}
        popover={{
          ...props.popover,
          forwardedRef: setPopoverRef,
        }}
        popoverOpen={open}
        styles={styles}
        tooltipAriaLabel={tooltipAriaLabel}
        tooltipAsModal={tooltipAsModalValue}
        tooltipRef={tooltipRef}
        onBlur={handleBlur}
        onClick={handleClick}
        onCloseIconClick={handleCloseIconClick}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onPopoverCloseInternally={handlePopoverCloseInternally}
        onTooltipFocus={handleFocusTooltip}
      />
    );
  }
);

TooltipUnControlledComponent.displayName = 'TooltipUnControlledComponent';

const TooltipUnControlledBoundary = <V extends string | unknown>(
  props: ITooltipUnControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <TooltipStandAlone {...(props as unknown as ITooltipStandAlone)} />
      </FallbackComponent>
    }
  >
    <TooltipUnControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const TooltipUnControlled = React.forwardRef(TooltipUnControlledBoundary) as <V>(
  props: React.PropsWithChildren<ITooltipUnControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => JSX.Element;

/**
 * @description
 * Tooltip component to show a message when interact whit the label
 * @example
 * <Tooltip
 *  align={TooltipAlignType.CENTER}
 * variant={TooltipVariantType.DEFAULT}
 * >
 * <Text>Tooltip</Text>
 * </Tooltip>
 */
export { TooltipUnControlled };
