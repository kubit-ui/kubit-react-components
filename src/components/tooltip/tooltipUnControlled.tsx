import * as React from 'react';

import { useMediaDevice, useSwipeDown } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { DeviceBreakpointsType } from '@/types';
import { isKeyEnterPressed, isKeyTabPressed } from '@/utils';
import { trapFocus } from '@/utils/focusHandlers/focusHandlers';

import { TOOLTIP_STYLES } from './constants';
import { useTooltip } from './hooks';
import { useTooltipAsModalAriaLabel } from './hooks/useTooltipAsModalAriaLabel';
import { TooltipStandAlone } from './tooltipStandAlone';
import { ITooltipStandAlone, ITooltipUnControlled, TooltipVariantStylesProps } from './types';
import { useTooltipAsModal } from './utils';

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

    const helpAriaLabel = useTooltipAsModalAriaLabel(tooltipRef);

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
      ctv,
    });

    const handleFocus: React.FocusEventHandler<HTMLElement> = () => {
      // Avoid tooltip is opened automatically after closing the tooltip
      if (!tooltipAsModalValue && allowFocusOpenTooltip.current) {
        showTooltip();
      }
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

    const handleMouseDown: React.MouseEventHandler<HTMLElement> = event => {
      // Avoid onFocus and onClick are executed at the same time
      event.preventDefault();
    };

    const handleClick: React.MouseEventHandler<HTMLElement> = event => {
      if (mediaDevice === DeviceBreakpointsType.DESKTOP) {
        if (tooltipAsModalValue && !open) {
          //this condition is needed because tooltip would close if you clicked on tooltip container beeing tooltip a modal
          showTooltip();
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

    const handleKeyDownTooltip: React.KeyboardEventHandler<HTMLElement> = event => {
      if (
        mediaDevice === DeviceBreakpointsType.DESKTOP &&
        isKeyTabPressed(event.key) &&
        tooltipRef.current
      ) {
        trapFocus(tooltipRef.current, event);
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

    // It is used TooltipStandAlone instead of TooltipControlled
    // The reason is that TooltipControlled only provides the styles and mediaDevice props that are used and needed in this component
    return (
      <TooltipStandAlone
        {...props}
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
        onPopoverCloseInternally={handlePopoverCloseInternally}
        onTooltipFocus={handleFocusTooltip}
        onTooltipKeyDown={handleKeyDownTooltip}
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
