import * as React from 'react';

import { PopoverControlled as Popover } from '@/components/popover';
import { STYLES_NAME } from '@/constants';
import { useId, useMediaDevice, useScrollEffect } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';
import { DeviceBreakpointsType } from '@/types';

import { ActionBottomSheetStandAlone } from './actionBottomSheetStandAlone';
import {
  IActionBottomSheetControlled,
  IActionBottomSheetControlledStructure,
  IActionBottomSheetStandAlone,
} from './types';
import { ActionBottomSheetVariantStylesType } from './types/actionBottomSheetTheme';

const SCROLL_DISTANCE = 5;

const ActionBottomSheetControlledStructureComponent = React.forwardRef(
  <V extends string | unknown>(
    { variant, ctv, ...props }: IActionBottomSheetControlledStructure<V>,
    ref: React.ForwardedRef<HTMLDivElement> | undefined | null
  ): JSX.Element => {
    const styles = useStyles<ActionBottomSheetVariantStylesType, V>(
      STYLES_NAME.ACTION_BOTTOM_SHEET,
      variant,
      ctv
    );
    const device = useMediaDevice();

    const condition = React.useMemo(
      () =>
        device !== DeviceBreakpointsType.DESKTOP && device !== DeviceBreakpointsType.LARGE_DESKTOP,
      [device]
    );

    const { scrollableRef, shadowRef } = useScrollEffect(
      condition,
      styles.header?.[device]?.box_shadow,
      SCROLL_DISTANCE
    );

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
    const titleId = title?.id ?? uniqueTitleId;
    const styles = useStyles<ActionBottomSheetVariantStylesType>(
      STYLES_NAME.ACTION_BOTTOM_SHEET,
      props.variant,
      props.ctv
    );

    return (
      <Popover
        aria-labelledby={titleId}
        clickOverlayClose={!blocked}
        dataTestId={`${props.dataTestId}Popover`}
        hasBackDrop={true}
        open={open}
        trapFocusInsideModal={true}
        variant={styles.popoverVariant}
        {...popover}
      >
        <ActionBottomSheetControlledStructure
          {...props}
          ref={ref}
          title={{ ...title, id: titleId }}
        />
      </Popover>
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
