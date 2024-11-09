import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useScrollDetectionWithAutoFocus } from '@/hooks/useScrollDetectionWithAutoFocus/useScrollDetectionWithAutoFocus';
import { useStyles } from '@/hooks/useStyles/useStyles';

import { ErrorBoundary } from '../../provider/errorBoundary/errorBoundary';
import { FallbackComponent } from '../../provider/errorBoundary/fallbackComponent';
import { useTooltipAsModal } from './hooks/useTooltipAsModal';
import { useTooltipAsModalAriaLabel } from './hooks/useTooltipAsModalAriaLabel';
import { TooltipStandAlone } from './tooltipStandAlone';
import { ITooltipControlled } from './types/tooltip';
import { TooltipVariantStylesProps } from './types/tooltipTheme';

const TooltipControlledComponent = <V extends string | unknown>({
  tooltipAsModal: propTooltipAsModal,
  ctv,
  tooltipRef,
  tooltipAriaLabel,
  ...props
}: ITooltipControlled<V>): JSX.Element => {
  const styles = useStyles<TooltipVariantStylesProps, V>(STYLES_NAME.TOOLTIP, props.variant, ctv);
  const mediaDevice = useMediaDevice();
  const innerTooltipRef = React.useRef<HTMLDivElement>(null);
  const helpAriaLabel = useTooltipAsModalAriaLabel(innerTooltipRef);
  const tooltipAsModal = useTooltipAsModal({
    propTooltipAsModal: propTooltipAsModal,
    styleTooltipAsModal: styles.tooltipAsModal,
  });

  const { hasScroll: contentHasScroll, handleScrollDetection: contentRefHandler } =
    useScrollDetectionWithAutoFocus({ parentElementRef: innerTooltipRef });

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
