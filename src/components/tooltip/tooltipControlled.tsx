import * as React from 'react';

import { useMediaDevice } from '@/hooks';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { ErrorBoundary, FallbackComponent } from '@/provider/errorBoundary';

import { TOOLTIP_STYLES } from './constants';
import { TooltipStandAlone } from './tooltipStandAlone';
import { ITooltipControlled, TooltipVariantStylesProps } from './types';
import { useTooltipAsModal } from './utils';

const TooltipControlledComponent = <V extends string | unknown>({
  tooltipAsModal,
  ctv,
  ...props
}: ITooltipControlled<V>): JSX.Element => {
  const styles = useStyles<TooltipVariantStylesProps, V>(TOOLTIP_STYLES, props.variant, ctv);
  const mediaDevice = useMediaDevice();

  return (
    <TooltipStandAlone
      {...props}
      mediaDevice={mediaDevice}
      styles={styles}
      tooltipAsModal={useTooltipAsModal({
        propTooltipAsModal: tooltipAsModal,
        styleTooltipAsModal: styles.tooltipAsModal,
      })}
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
