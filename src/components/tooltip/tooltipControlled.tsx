import { useImperativeHandle, useRef } from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useMediaDevice } from '@/lib/hooks/useMediaDevice/useMediaDevice';
import { useScrollDetection } from '@/lib/hooks/useScrollDetection/useScrollDetection';

import { useTooltipAsModal } from './hooks/useTooltipAsModal';
import { useTooltipAsModalAriaLabel } from './hooks/useTooltipAsModalAriaLabel';
import { TooltipStandAlone } from './tooltipStandAlone';
import type { TooltipControlledProps } from './types/tooltip';

export const TooltipControlled = <Variant extends string>({
  additionalClasses,
  tooltipAriaLabel,
  tooltipAsModal: propTooltipAsModal,
  tooltipAsModal: isModal = false,
  tooltipRef,
  variant,
  ...props
}: TooltipControlledProps<Variant>): JSX.Element => {
  const cssClasses = useClassName({
    additionalClassNames: additionalClasses,
    component: 'TOOLTIP',
    variant,
  });

  const mediaDevice = useMediaDevice();
  const innerTooltipRef = useRef<HTMLDivElement>(null);
  const helpAriaLabel = useTooltipAsModalAriaLabel(innerTooltipRef);
  const tooltipAsModal = useTooltipAsModal({
    propTooltipAsModal: propTooltipAsModal,
    styleTooltipAsModal: isModal,
  });

  const {
    handleScrollDetection: contentRefHandler,
    hasScroll: contentHasScroll,
  } = useScrollDetection({ autoFocus: true });

  useImperativeHandle(tooltipRef, () => {
    return innerTooltipRef.current as HTMLDivElement;
  }, []);

  return (
    <TooltipStandAlone
      {...props}
      contentHasScroll={contentHasScroll}
      contentRef={contentRefHandler}
      cssClasses={cssClasses}
      mediaDevice={mediaDevice}
      tooltipAriaLabel={tooltipAriaLabel ?? helpAriaLabel}
      tooltipAsModal={useTooltipAsModal({
        propTooltipAsModal: tooltipAsModal,
        styleTooltipAsModal: isModal,
      })}
      tooltipRef={innerTooltipRef}
    />
  );
};
