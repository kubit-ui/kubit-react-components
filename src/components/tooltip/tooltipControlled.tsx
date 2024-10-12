import * as React from 'react';

import { useMediaDevice } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { TOOLTIP_STYLES } from './constants';
import { useTooltipAsModal, useTooltipAsModalAriaLabel, useTooltipContentScroll } from './hooks';
import { TooltipStandAlone } from './tooltipStandAlone';
import { ITooltipControlled, TooltipVariantStylesProps } from './types';

const TooltipControlledComponent = <V extends string | unknown>({
  tooltipAsModal: propTooltipAsModal,
  ctv,
  tooltipRef,
  tooltipAriaLabel,
  ...props
}: ITooltipControlled<V>): JSX.Element => {
  const styles = useStyles<TooltipVariantStylesProps, V>(TOOLTIP_STYLES, props.variant, ctv);
  const mediaDevice = useMediaDevice();
  const innerTooltipRef = React.useRef<HTMLDivElement>(null);
  const helpAriaLabel = useTooltipAsModalAriaLabel(innerTooltipRef);
  const tooltipAsModal = useTooltipAsModal({
    propTooltipAsModal: propTooltipAsModal,
    styleTooltipAsModal: styles.tooltipAsModal,
  });

  const { contentHasScroll, contentRefHandler } = useTooltipContentScroll({
    tooltipRef: innerTooltipRef,
  });

  React.useImperativeHandle(tooltipRef, () => {
    return innerTooltipRef.current as HTMLDivElement;
  }, []);

  return (
    <TooltipStandAlone
      {...props}
      contentHasScroll={contentHasScroll}
      contentRef={contentRefHandler}
      mediaDevice={mediaDevice}
      styles={styles}
      tooltipAriaLabel={tooltipAriaLabel ?? helpAriaLabel}
      tooltipAsModal={tooltipAsModal}
      tooltipRef={innerTooltipRef}
    />
  );
};

TooltipControlledComponent.displayName = 'TooltipControlledComponent';

const TooltipControlled = <V extends string | unknown>(
  props: ITooltipControlled<V>
): JSX.Element => (
  <ErrorBoundary
    fallBackComponent={
      <FallbackComponent>
        <TooltipControlledComponent {...props} />
      </FallbackComponent>
    }
  >
    <TooltipControlledComponent {...props} />
  </ErrorBoundary>
);

/**
 * @description
 * Tooltip component to show a message when interact whit the label
 * @example
 * <Tooltip
 * variant={TooltipVariantType.DEFAULT}
 * >
 * <Text>Tooltip</Text>
 * </Tooltip>
 */
export { TooltipControlled };
