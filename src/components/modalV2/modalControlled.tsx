import * as React from 'react';

import { STYLES_NAME } from '@/constants';
import { useMediaDevice, useScrollEffect, useStylesV2, useSwipeDown } from '@/hooks';
import { ErrorBoundary } from '@/provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '@/provider/errorBoundary/fallbackComponent';

import { Portal } from '../portal';
import { ModalStandAlone } from './modalStandAlone';
import type { IModalControlled, IModalStandAlone, ModalBaseStylesType } from './types';

const ModalControlledComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, portalId, ...props }: IModalControlled<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStylesV2<ModalBaseStylesType, V>({
      styleName: STYLES_NAME.MODAL_V2,
      variantName: variant,
      customTokens: ctv,
    });
    const device = useMediaDevice();

    const { scrollableRef, shadowRef } = useScrollEffect({
      // The box_shadow token is need for the shadow effect
      shadowStyles: styles?.headerContainer?.box_shadow,
    });

    const { setPopoverRef, setDragIconRef } = useSwipeDown(props.popover?.animationOptions, () =>
      props.onClose?.()
    );

    const handlePopoverCloseInternally = () => {
      props.popover?.onCloseInternally?.();
      props.onClose?.();
    };

    const modalStructure = (
      <ModalStandAlone
        {...props}
        ref={ref}
        device={device}
        dragIconRef={setDragIconRef}
        popover={{ ...props.popover, forwardedRef: setPopoverRef }}
        scrollableRef={scrollableRef}
        shadowRef={shadowRef}
        styles={styles as ModalBaseStylesType}
        onPopoverCloseInternally={handlePopoverCloseInternally}
      />
    );

    return portalId ? <Portal wrapperId={portalId}>{modalStructure}</Portal> : modalStructure;
  }
);
ModalControlledComponent.displayName = 'ModalControlledComponent';

const ModalBoundary = <V extends string | unknown>(
  { portalId, ...props }: IModalControlled<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => {
  const modalStructure = <ModalStandAlone {...(props as unknown as IModalStandAlone)} ref={ref} />;

  return (
    <ErrorBoundary
      fallBackComponent={
        <FallbackComponent>
          {portalId ? <Portal wrapperId={portalId}>{modalStructure}</Portal> : modalStructure}
        </FallbackComponent>
      }
    >
      <ModalControlledComponent {...props} ref={ref} portalId={portalId} />
    </ErrorBoundary>
  );
};

const ModalControlled = React.forwardRef(ModalBoundary) as <V extends string | unknown>(
  props: React.PropsWithChildren<IModalControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof ModalBoundary>;

export { ModalControlled };
