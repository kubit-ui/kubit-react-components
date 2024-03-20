import * as React from 'react';

import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { OliveMenuStandAlone } from './oliveMenuStandAlone';
import { IOliveMenu, IOliveMenuStandAlone, OliveMenuGlobalStylesType } from './types';

const OLIVE_MENU_STYLES = 'OLIVE_MENU_STYLES';

const OliveMenuComponent = React.forwardRef(
  <V extends string | unknown>(
    {
      variant,
      ctv,
      trigger,
      popover,
      actionBottomSheetStructure,
      onOpenClose,
      ...props
    }: IOliveMenu<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const [open, setOpen] = React.useState<boolean>(false);
    const styles = useStyles<OliveMenuGlobalStylesType, V>(OLIVE_MENU_STYLES, variant, ctv);

    const handleTriggerClick = e => {
      setOpen(!open);
      onOpenClose?.(!open, e);
      trigger?.onClick?.(e);
    };

    const handlePopoverCloseInternally = () => {
      setOpen(false);
      onOpenClose?.(false);
      popover?.onCloseInternally?.();
    };

    const handleCloseIconClick = e => {
      setOpen(false);
      onOpenClose?.(false, e);
      actionBottomSheetStructure?.closeIcon?.onClick?.(e);
    };

    return (
      <OliveMenuStandAlone
        {...props}
        ref={ref}
        actionBottomSheetStructure={{
          ...actionBottomSheetStructure,
          closeIcon: { ...actionBottomSheetStructure?.closeIcon, onClick: handleCloseIconClick },
        }}
        open={open}
        popover={{ ...popover, onCloseInternally: handlePopoverCloseInternally }}
        styles={styles}
        trigger={trigger && { ...trigger, onClick: handleTriggerClick }}
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
