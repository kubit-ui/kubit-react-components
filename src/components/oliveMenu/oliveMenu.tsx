import React from 'react';

import { useEscPressedV2 } from '@/hooks/useEscPressedV2/useEscPressedV2';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { useSwipeDown } from '@/hooks/useSwipeDown/useSwipeDown';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { DeviceBreakpointsType } from '../../types/breakpoints/breakpoints';
import { OliveMenuStandAlone } from './oliveMenuStandAlone';
import { IOliveMenu, IOliveMenuStandAlone } from './types/oliveMenu';
import { OliveMenuGlobalStylesType } from './types/oliveMenuTheme';

const OLIVE_MENU_STYLES = 'OLIVE_MENU_STYLES';

const OliveMenuComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, trigger, actionBottomSheetStructure, onOpenClose, ...props }: IOliveMenu<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const [open, setOpen] = React.useState<boolean>(false);
    const styles = useStyles<OliveMenuGlobalStylesType, V>(OLIVE_MENU_STYLES, variant, ctv);
    const device = useMediaDevice();

    const innerRef = React.useRef<HTMLDivElement>(null);
    const actionBottomSheetRef = React.useRef<HTMLDivElement | null>(null);
    React.useImperativeHandle(ref, () => innerRef.current as HTMLDivElement, []);

    const handlePressScape = React.useCallback(() => {
      // Do nothing if already closed
      if (!open) {
        return;
      }
      setOpen(false);
      onOpenClose?.(false);
      // Focus the trigger button since its not handled automatically by the popover
      // and the focus in inside the component that is going to be closed
      const trigger = innerRef.current?.querySelector('button');
      trigger?.focus();
    }, [open]);

    // It is handled internally by the component to allow close when the focus is on the button
    useEscPressedV2({ ref: innerRef, onEscPress: handlePressScape });

    const handleTriggerClick = e => {
      setOpen(!open);
      onOpenClose?.(!open, e);
      trigger?.onClick?.(e);
    };

    const handleCloseIconClick = e => {
      setOpen(false);
      onOpenClose?.(false, e);
      actionBottomSheetStructure?.closeIcon?.onClick?.(e);
    };

    const handleCloseInternally = () => {
      setOpen(false);
      onOpenClose?.(false);
      props.popover?.onCloseInternally?.();
    };

    const handleBlur: React.FocusEventHandler<HTMLDivElement> = e => {
      // Do nothing if:
      // * Is device with popover (mobile or tablet)
      // * the new focus is inside the component
      // * it is already closed
      if (
        [DeviceBreakpointsType.MOBILE, DeviceBreakpointsType.TABLET].includes(device) ||
        e.currentTarget.contains(e.relatedTarget) ||
        !open
      ) {
        return;
      }
      setOpen(false);
      onOpenClose?.(false, e);
    };

    const { setPopoverRef, setDragIconRef } = useSwipeDown(
      props.popover?.animationOptions,
      handleCloseInternally
    );

    const setInnerRef = React.useCallback(node => {
      actionBottomSheetRef.current = node;
      const dragIcon = actionBottomSheetRef.current?.querySelector('[data-drag-icon]');
      if (dragIcon instanceof HTMLElement) {
        setDragIconRef(dragIcon);
      }
    }, []);

    return (
      <OliveMenuStandAlone
        {...props}
        ref={innerRef}
        actionBottomSheetStructure={{
          ...actionBottomSheetStructure,
          forwardedRef: setInnerRef,
          closeIcon: { ...actionBottomSheetStructure?.closeIcon, onClick: handleCloseIconClick },
        }}
        device={device}
        open={open}
        popover={{
          ...props.popover,
          forwardedRef: setPopoverRef,
          onCloseInternally: handleCloseInternally,
        }}
        styles={styles}
        trigger={trigger && { ...trigger, onClick: handleTriggerClick }}
        onBlur={handleBlur}
      />
    );
  }
);
OliveMenuComponent.displayName = 'OliveMenuComponent';

const OliveMenuBoundary = <V extends string | unknown>(
  props: IOliveMenu<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <OliveMenuStandAlone {...(props as unknown as IOliveMenuStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <OliveMenuComponent {...props} ref={ref} />
  </ErrorBoundary>
);

const OliveMenu = React.forwardRef(OliveMenuBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IOliveMenu<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof OliveMenuBoundary>;

export { OliveMenu };
