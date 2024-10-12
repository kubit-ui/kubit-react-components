import * as React from 'react';

import { CssAnimationExecuteOption } from '@/components/cssAnimation';
import { STYLES_NAME } from '@/constants';
import {
  useClickOutside,
  useEscPressedV2,
  useMediaDevice,
  useScrollBlock,
  useStyles,
} from '@/hooks';
import { useTrapFocus } from '@/hooks/useTrapFocus/useTrapFocus';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { focusFirstDescendant, isKeyTabPressed } from '@/utils';
import { convertDurationToNumber } from '@/utils/stringUtility/string.utility';

import { PopoverStandAlone } from './popoverStandAlone';
import { PopoverComponentType, PopoverVariantStylesType } from './types';
import type { IPopoverControlled, IPopoverStandAlone } from './types';
import { getAnimationConfig } from './utils/getAnimationConfig';

const MILISECONDS = 1000;

const PopoverControlledComponent = React.forwardRef(
  (
    {
      variant,
      component = PopoverComponentType.DIALOG,
      focusFirstDescendantAutomatically = true,
      focusLastElementFocusedAfterClose = true,
      focusScreenFirstDescendantAfterClose = false,
      onCloseInternally,
      blockBack,
      clickOverlayClose = true,
      pressEscapeClose = true,
      preventScrollOnCloseFocus = false,
      ctv,
      ...props
    }: IPopoverControlled,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const { blockScroll, allowScroll } = useScrollBlock();
    const currentFocus = React.useRef<HTMLElement | null>(null);
    const innerRef = React.useRef<HTMLDivElement | null>(null);
    const forwardedRef = React.useRef<HTMLDivElement | null>(null);
    const setForwareddRef = React.useCallback(
      node => {
        if (node && focusFirstDescendantAutomatically) {
          focusFirstDescendant(node);
        }
        if (props.forwardedRef) {
          props.forwardedRef(node);
        }
        if (node && blockBack) {
          blockScroll({ elementsToOmit: [node] });
        }
        if (!node && blockBack) {
          allowScroll();
        }
        forwardedRef.current = node;
      },
      [props.forwardedRef, focusFirstDescendantAutomatically]
    );
    const styles = useStyles<PopoverVariantStylesType>(STYLES_NAME.POPOVER, variant, ctv);
    const device = useMediaDevice();

    const animationConfig = getAnimationConfig(
      styles,
      device,
      props.animation,
      props.animationOptions
    );

    const [showAnimationEnd, setShowAnimationEnd] = React.useState(false);
    const [openAnimation, setOpenAnimation] = React.useState(props.open);
    const openAnimationRef = React.useRef(props.open);

    // Expose the ref to the parent component
    React.useImperativeHandle(ref, () => {
      return innerRef.current as HTMLDivElement;
    }, []);

    // To improve: this ref has been created to avoid update a state when the component does not longer exists.
    // Check waitForAnimation and setOpenAnimation in the onClose method
    const componentAlive = React.useRef(true);
    React.useEffect(() => {
      componentAlive.current = true;
      return () => {
        componentAlive.current = false;
      };
    }, []);

    const onClose = async () => {
      if (!openAnimationRef.current) {
        return;
      }
      if (animationConfig && animationConfig?.animation) {
        setShowAnimationEnd(true);
        await waitForAnimation();
      }
      afterModalFocus();
      openAnimationRef.current = false;
      if (componentAlive.current) {
        setOpenAnimation(false);
      }
    };

    const handleClickOutside = async () => {
      if (clickOverlayClose) {
        await onClose();
        onCloseInternally?.();
      }
    };

    const handlePressScape = async () => {
      if (pressEscapeClose) {
        await onClose();
        onCloseInternally?.();
      }
    };

    useClickOutside(forwardedRef, handleClickOutside, props.preventCloseOnClickElements);
    useEscPressedV2({ ref: innerRef, onEscPress: handlePressScape });

    const beforeModalFocus = () => {
      currentFocus.current = document.activeElement as HTMLElement;
      setShowAnimationEnd(false);
    };

    const afterModalFocus = () => {
      if (focusScreenFirstDescendantAfterClose) {
        focusFirstDescendant(document.body);
        return;
      }
      if (focusLastElementFocusedAfterClose) {
        currentFocus.current?.focus({ preventScroll: preventScrollOnCloseFocus });
      }
    };

    // to force rerender to update ref in useTrapFocus
    const [tabPressed, setTabPressed] = React.useState(false);

    const handleKeyDown: React.KeyboardEventHandler<HTMLElement> = event => {
      if (isKeyTabPressed(event.key) && forwardedRef.current) {
        setTabPressed(true);
        props.onKeyDown?.(event);
      }
    };

    useTrapFocus({ element: forwardedRef, hasFocusTrap: props.trapFocusInsideModal, tabPressed });

    React.useEffect(() => {
      if (!props.open && openAnimationRef.current) {
        onClose();
      }
      if (props.open) {
        if (!openAnimationRef.current) {
          beforeModalFocus();
          openAnimationRef.current = true;
          setOpenAnimation(true);
        }
      }
    }, [props.open]);

    // deprecated - Remove the condition when `exitDuration`, `duration` and `delay' are type string
    const animationExitDuration = () => {
      if (
        typeof animationConfig?.animationOptions?.exitDuration === 'string' ||
        typeof animationConfig?.animationOptions?.duration === 'string' ||
        typeof animationConfig?.animationOptions?.delay === 'string'
      ) {
        const exitDuration = convertDurationToNumber(
          animationConfig?.animationOptions?.exitDuration
        );
        const duration = convertDurationToNumber(animationConfig?.animationOptions?.duration);
        const delay = convertDurationToNumber(animationConfig?.animationOptions?.delay);

        return (exitDuration || duration || 0) + (delay || 0);
      }
      return (
        ((animationConfig?.animationOptions?.exitDuration ||
          animationConfig?.animationOptions?.duration ||
          0) +
          (animationConfig?.animationOptions?.delay || 0)) *
        MILISECONDS
      );
    };

    const waitForAnimation = () => {
      return new Promise<void>(resolve => {
        setTimeout(() => {
          resolve();
        }, animationExitDuration());
      });
    };

    return (
      <PopoverStandAlone
        {...props}
        ref={innerRef}
        animationConfig={animationConfig}
        animationExecution={
          showAnimationEnd ? CssAnimationExecuteOption.END : CssAnimationExecuteOption.START
        }
        component={component}
        device={device}
        forwardedRef={setForwareddRef}
        open={openAnimation}
        styles={styles}
        onKeyDown={handleKeyDown}
      />
    );
  }
);
PopoverControlledComponent.displayName = 'PopoverControlledComponent';

const PopoverBoundary = (
  props: IPopoverControlled,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <PopoverStandAlone {...(props as unknown as IPopoverStandAlone)} ref={ref} />
      </FallbackComponent>
    }
  >
    <PopoverControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

export const PopoverControlled = React.forwardRef(PopoverBoundary);
