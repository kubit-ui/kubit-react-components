import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useDeviceHeight } from '@/hooks/useDeviceHeight/useDeviceHeight';
import { useId } from '@/hooks/useId/useId';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useScrollEffect } from '@/hooks/useScrollEffect/useScrollEffect';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { useSwipeDown } from '@/hooks/useSwipeDown/useSwipeDown';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { DeviceBreakpointsType } from '../../types/breakpoints/breakpoints';
import { ROLES } from '../../types/role/role';
import { PopoverControlled } from '../popover/popoverControlled';
import { PopoverComponentType } from '../popover/types/component';
import { ActionBottomSheetStandAlone } from './actionBottomSheetStandAlone';
import {
  IActionBottomSheetControlled,
  IActionBottomSheetControlledStructure,
  IActionBottomSheetStandAlone,
} from './types/actionBottomSheet';
import { ActionBottomSheetVariantStylesType } from './types/actionBottomSheetTheme';

const SCROLL_DISTANCE = 5;

const ActionBottomSheetControlledStructureComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, ...props }: IActionBottomSheetControlledStructure<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    useDeviceHeight();
    const styles = useStyles<ActionBottomSheetVariantStylesType, V>(
      STYLES_NAME.ACTION_BOTTOM_SHEET,
      variant,
      ctv
    );
    const device = useMediaDevice();

    const conditional = React.useMemo(
      () =>
        device !== DeviceBreakpointsType.DESKTOP && device !== DeviceBreakpointsType.LARGE_DESKTOP,
      [device]
    );

    const { scrollableRef, shadowRef } = useScrollEffect({
      conditional,
      shadowStyles: styles.controlContainer?.[device]?.box_shadow,
      shadowVisible: SCROLL_DISTANCE,
    });

    return (
      <ActionBottomSheetStandAlone
        {...props}
        ref={ref}
        device={device}
        scrollableRef={scrollableRef}
        shadowRef={shadowRef}
        styles={styles}
      />
    );
  }
);
ActionBottomSheetControlledStructureComponent.displayName =
  'ActionBottomSheetControlledStructureComponent';

const ActionBottomSheetControlledStructureComponentBoundary = <V extends string | unknown>(
  props: IActionBottomSheetControlledStructure<V>,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <ActionBottomSheetStandAlone
          {...(props as unknown as IActionBottomSheetStandAlone)}
          ref={ref}
        />
      </FallbackComponent>
    }
  >
    <ActionBottomSheetControlledStructureComponent {...props} ref={ref} />
  </ErrorBoundary>
);

export const ActionBottomSheetControlledStructure = React.forwardRef(
  ActionBottomSheetControlledStructureComponentBoundary
);

const ActionBottomSheetControlledComponent = React.forwardRef(
  (
    { open, title, popover, blocked = false, ...props }: IActionBottomSheetControlled,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const uniqueTitleId = useId('actionSheet-title');
    const titleId = (title?.id ?? title?.content) ? uniqueTitleId : undefined;
    const styles = useStyles<ActionBottomSheetVariantStylesType>(
      STYLES_NAME.ACTION_BOTTOM_SHEET,
      props.variant,
      props.ctv
    );

    const innerRef = React.useRef<HTMLDivElement | null>(null);
    React.useImperativeHandle(ref, () => {
      return innerRef.current as HTMLDivElement;
    }, []);

    const { setPopoverRef, setDragIconRef } = useSwipeDown(
      popover?.animationOptions,
      popover?.onCloseInternally
    );

    const setInnerRef = React.useCallback(node => {
      innerRef.current = node;
      const dragIcon = innerRef.current?.querySelector('[data-drag-icon]');
      if (dragIcon instanceof HTMLElement) {
        setDragIconRef(dragIcon);
      }
    }, []);

    return (
      <PopoverControlled
        aria-labelledby={titleId}
        aria-modal={true}
        clickOverlayClose={!blocked}
        component={PopoverComponentType.DIV}
        dataTestId={`${props.dataTestId}Popover`}
        forwardedRef={setPopoverRef}
        hasBackDrop={true}
        open={open}
        role={ROLES.DIALOG}
        trapFocusInsideModal={true}
        variant={styles.popoverVariant}
        {...popover}
      >
        <ActionBottomSheetControlledStructure
          {...props}
          ref={setInnerRef}
          title={{ ...title, id: titleId }}
        />
      </PopoverControlled>
    );
  }
);
ActionBottomSheetControlledComponent.displayName = 'ActionBottomSheetControlledComponent';

const ActionBottomSheetControlledComponentBoundary = (
  props: IActionBottomSheetControlled,
  ref: React.ForwardedRef<HTMLDivElement> | undefined | null
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <ActionBottomSheetControlledStructure {...props} ref={ref} />
      </FallbackComponent>
    }
  >
    <ActionBottomSheetControlledComponent {...props} ref={ref} />
  </ErrorBoundary>
);

/**
 * @description
 * ActionBottomSheetControlled component is a controlled action bottom sheet, that use a Popover component to show the content.
 * @param {React.PropsWithChildren<IActionBottomSheetControlled<V>>} props
 * @returns {JSX.Element}
 * @example
 * <ActionBottomSheetControlled
 *  open={open}
 * onCloseIconClick={onCloseIconClick}
 * onPopoverCloseInternally={handleOnPopoverCloseInternally}
 * title="Title"
 * >
 * <div>Content</div>
 * </ActionBottomSheetControlled>
 *
 */
const ActionBottomSheetControlled = React.forwardRef(
  ActionBottomSheetControlledComponentBoundary
) as <V extends string | unknown>(
  props: React.PropsWithChildren<IActionBottomSheetControlled<V>> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined | null;
  }
) => ReturnType<typeof ActionBottomSheetControlledComponentBoundary>;

export { ActionBottomSheetControlled };
