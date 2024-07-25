import * as React from 'react';

import { useEscPressed, useMediaDevice } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { OliveMenuStandAlone } from './oliveMenuStandAlone';
import { IOliveMenu, IOliveMenuStandAlone, OliveMenuGlobalStylesType } from './types';

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
    React.useImperativeHandle(ref, () => innerRef.current as HTMLDivElement, []);

    const handlePressScape = React.useCallback(() => {
      // Do nothing if already closed
      if (!open) {
        return;
      }
      setOpen(false);
      onOpenClose?.(false);
    }, [open]);

    useEscPressed({ execute: handlePressScape, element: innerRef });

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

    const handleBlur: React.FocusEventHandler<HTMLDivElement> = e => {
      // Do nothing if the new focus is inside the component or already closed
      if (e.currentTarget.contains(e.relatedTarget) || !open) {
        return;
      }
      setOpen(false);
      onOpenClose?.(false, e);
    };

    return (
      <OliveMenuStandAlone
        {...props}
        ref={innerRef}
        actionBottomSheetStructure={{
          ...actionBottomSheetStructure,
          closeIcon: { ...actionBottomSheetStructure?.closeIcon, onClick: handleCloseIconClick },
        }}
        device={device}
        open={open}
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
