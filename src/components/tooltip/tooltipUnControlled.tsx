import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useScrollDetectionWithAutoFocus } from '@/hooks/useScrollDetectionWithAutoFocus/useScrollDetectionWithAutoFocus';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { useSwipeDown } from '@/hooks/useSwipeDown/useSwipeDown';
import { useTrapFocus } from '@/hooks/useTrapFocus/useTrapFocus';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { DeviceBreakpointsType } from '../../types/breakpoints/breakpoints';
import { isKeyEnterPressed } from '../../utils/keyboard/keyboard.utility';
import { useTooltip } from './hooks/useTooltip';
import { useTooltipAsModal } from './hooks/useTooltipAsModal';
import { TooltipStandAlone } from './tooltipStandAlone';
import { ITooltipStandAlone, ITooltipUnControlled } from './types/tooltip';
import { TooltipVariantStylesProps } from './types/tooltipTheme';

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
    const styles = useStyles<TooltipVariantStylesProps, V>(STYLES_NAME.TOOLTIP, variant, ctv);
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

    const handleWrapperFocus: React.FocusEventHandler<HTMLElement> = () => {
      // allowFocusOpenTooltip Avoid tooltip is opened automatically after closing the tooltip
      if (isBeingClicked.current || tooltipAsModalValue || !allowFocusOpenTooltip.current) {
        return;
      }
      showTooltip();
    };

    const handleWrapperBlur: React.FocusEventHandler<HTMLElement> = event => {
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

    const handleWrapperMouseEnter: React.MouseEventHandler<HTMLElement> = () => {
      if (!tooltipAsModalValue) {
        if (mediaDevice !== DeviceBreakpointsType.DESKTOP) {
          return;
        }
        showTooltip();
      }
    };

    const handleWrapperMouseLeave: React.MouseEventHandler<HTMLElement> = () => {
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

    const handleTriggerMouseDown: React.MouseEventHandler<HTMLElement> = () => {
      isBeingClicked.current = true;
    };

    const handleTriggerMouseUp: React.MouseEventHandler<HTMLElement> = () => {
      isBeingClicked.current = false;
    };

    const handleTriggerClick: React.MouseEventHandler<HTMLElement> = event => {
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

    const handleTriggerKeyDown: React.KeyboardEventHandler<HTMLDivElement> = event => {
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

export { TooltipUnControlled as Tooltip };
