import * as React from 'react';

import { useEscPressed, useMediaDevice, useStyles } from '@/hooks';
import { CustomTokenTypes, DeviceBreakpointsType } from '@/types';
import { focusElementOrFirstDescendant } from '@/utils';

import { TOOLTIP_STYLES } from '../constants';
// floating
import { arrow, computePosition, flip, shift } from '../positioning';
import { Coords } from '../positioning/types';
import { TooltipAlignType, TooltipVariantStylesProps } from '../types';

type UseTooltipType<V> = {
  labelRef: React.RefObject<HTMLDivElement>;
  tooltipRef: React.RefObject<HTMLDivElement>;
  variant: V;
  onOpenClose?: (open: boolean) => void;
  align?: TooltipAlignType;
} & Omit<CustomTokenTypes<TooltipVariantStylesProps>, 'cts' | 'extraCt'>;

type UseTooltipReturnType = {
  showTooltip: () => void;
  hideTooltip: () => void;
  allowFocusOpenTooltip: React.MutableRefObject<boolean>;
  open: boolean;
};

/**
 * @name useTooltip
 * @description
 * Hook to handle the tooltip functionality
 * @param {UseTooltipType} props
 * @returns {UseTooltipReturnType}
 */
export const useTooltip = <V>({
  align = TooltipAlignType.TOP,
  ...props
}: UseTooltipType<V>): UseTooltipReturnType => {
  const mediaDevice = useMediaDevice();
  const lastFocus = React.useRef<HTMLElement | null>(null);
  // Avoid tooltip is opened automatically after closing the tooltip
  const allowFocusOpenTooltip = React.useRef(true);
  const openRef = React.useRef(false);
  const [open, setOpen] = React.useState(false);

  // Need the styles to calc the arrow tooltip position
  const styles = useStyles<TooltipVariantStylesProps, V>(TOOLTIP_STYLES, props.variant, props.ctv);

  // Avoid to show tooltip when scrolling
  React.useEffect(() => {
    const handleResize = () => {
      updateTooltipPosition();
    };

    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onScroll = (e: Event) => {
    if (!props.tooltipRef.current?.contains(e.target as Node)) {
      hideTooltip();
    }
  };

  const showTooltip = () => {
    if (openRef.current) {
      return;
    }
    openRef.current = true;
    // Save last focusable element
    lastFocus.current = document.activeElement as HTMLElement;
    if (mediaDevice === DeviceBreakpointsType.DESKTOP) {
      if (!props.tooltipRef.current) {
        return;
      }
      props.tooltipRef.current.style.display = 'flex';
      updateTooltipPosition();
      focusElementOrFirstDescendant(props.tooltipRef.current);
    }
    setOpen(true);
    props.onOpenClose?.(true);
  };

  const hideTooltip = React.useCallback(() => {
    if (!openRef.current) {
      return;
    }
    // Apply focus in last focusable element
    openRef.current = false;
    allowFocusOpenTooltip.current = false;
    lastFocus.current?.focus();
    allowFocusOpenTooltip.current = true;
    if (mediaDevice === DeviceBreakpointsType.DESKTOP) {
      if (!props.tooltipRef.current) {
        return;
      }
      props.tooltipRef.current.style.display = 'none';
    }
    setOpen(false);
    props.onOpenClose?.(false);
  }, [mediaDevice, props.onOpenClose]);

  // Because desktop do not use popover component, we need to manually call manually to close on scape functionality
  useEscPressed({ element: props.labelRef, execute: hideTooltip });

  // This function calc the position position where the tooltip should be displayed

  const updateTooltipPosition = () => {
    if (!props.labelRef.current || !props.tooltipRef.current) {
      return;
    }
    const arrowElement = props.tooltipRef.current.lastElementChild;

    const { x, y, placement, middlewareData } = computePosition(
      props.labelRef.current,
      props.tooltipRef.current,
      {
        placement: align,
        middleware: [
          // Offset is handle internally with a padding
          // Avoiding onMouseLeave label close the tooltip when you want to put the mouse inside
          // offset(props.styles.DESKTOP?.tooltip_offset),
          flip(),
          shift({ crossAxis: true }),
          arrow({ element: arrowElement as Element }),
        ],
      }
    );
    Object.assign(props.tooltipRef.current.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
    // Arrow pos
    const { x: arrowX, y: arrowY } = middlewareData.arrow as Partial<Coords>;
    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[placement.split('-')[0]];

    const arrowStyle = {
      left: arrowX !== null ? `${arrowX}px` : '',
      top: arrowY !== null ? `${arrowY}px` : '',
      right: '',
      bottom: '',
      [staticSide as string]: `calc(${
        styles.tooltipExternalContainer?.[DeviceBreakpointsType.DESKTOP]?.padding ?? 0
      } - ${styles.arrowContainer?.arrow_position ?? '0px'} / 2)`,
    };

    if (arrowElement && (arrowElement as HTMLElement).style) {
      (arrowElement as HTMLElement).style.removeProperty('left');
      (arrowElement as HTMLElement).style.removeProperty('top');
      (arrowElement as HTMLElement).style.removeProperty('right');
      (arrowElement as HTMLElement).style.removeProperty('bottom');
      Object.assign((arrowElement as HTMLElement)?.style, arrowStyle);
    }
  };

  return { showTooltip, hideTooltip, allowFocusOpenTooltip, open };
};
