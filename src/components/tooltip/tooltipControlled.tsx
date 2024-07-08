import * as React from 'react';

import { useMediaDevice } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { TOOLTIP_STYLES } from './constants';
import { useTooltipAsModalAriaLabel } from './hooks/useTooltipAsModalAriaLabel';
import { TooltipStandAlone } from './tooltipStandAlone';
import { ITooltipControlled, TooltipVariantStylesProps } from './types';
import { useTooltipAsModal } from './utils';

const TooltipControlledComponent = <V extends string | unknown>({
  tooltipAsModal,
  ctv,
  tooltipRef,
  tooltipAriaLabel,
  ...props
}: ITooltipControlled<V>): JSX.Element => {
  const styles = useStyles<TooltipVariantStylesProps, V>(TOOLTIP_STYLES, props.variant, ctv);
  const mediaDevice = useMediaDevice();
  const innerTooltipRef = React.useRef<HTMLDivElement>(null);
  const helpAriaLabel = useTooltipAsModalAriaLabel(innerTooltipRef);

  React.useImperativeHandle(tooltipRef, () => {
    return innerTooltipRef.current as HTMLDivElement;
  }, []);

  return (
    <TooltipStandAlone
      {...props}
      mediaDevice={mediaDevice}
      styles={styles}
      tooltipAriaLabel={tooltipAriaLabel ?? helpAriaLabel}
      tooltipAsModal={useTooltipAsModal({
        propTooltipAsModal: tooltipAsModal,
        styleTooltipAsModal: styles.tooltipAsModal,
      })}
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
