import React from 'react';

import { STYLES_NAME } from '@/constants/stylesName/stylesName';
import { useClickOutside } from '@/hooks/useClickOutside/useClickOutside';
import { useEscPressedV2 } from '@/hooks/useEscPressedV2/useEscPressedV2';
import { useMediaDevice } from '@/hooks/useMediaDevice/useMediaDevice';
import { useStyles } from '@/hooks/useStyles/useStyles';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { CustomTokenTypes } from '@/types/customToken/customToken';

import { focusElementOrFirstDescendant } from '../../../utils/focusHandlers/focusHandlers';
import { computePosition } from '../positioning/computePosition';
// floating
import { arrow } from '../positioning/middlewares/arrow';
import { flip } from '../positioning/middlewares/flip';
import { shift } from '../positioning/middlewares/shift';
import { Coords } from '../positioning/types';
import { TooltipAlignType } from '../types/tooltipAlign';
import { TooltipVariantStylesProps } from '../types/tooltipTheme';

type UseTooltipType<V> = {
  labelRef: React.RefObject<HTMLDivElement>;
  tooltipRef: React.RefObject<HTMLDivElement>;
  variant: V;
  onOpenClose?: (open: boolean) => void;
  align?: TooltipAlignType;
  tooltipAsModal?: boolean;
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
  const styles = useStyles<TooltipVariantStylesProps, V>(
    STYLES_NAME.TOOLTIP,
    props.variant,
    props.ctv
  );

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
      updateTooltipPosition();
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
    // Only focus in the last element if the tooltip is a modal
    if (props.tooltipAsModal) {
      lastFocus.current?.focus();
    }
    allowFocusOpenTooltip.current = true;
    if (mediaDevice === DeviceBreakpointsType.DESKTOP) {
      if (!props.tooltipRef.current) {
        return;
      }
      props.tooltipRef.current.style.display = 'none';
    }
    setOpen(false);
    props.onOpenClose?.(false);
  }, [mediaDevice, props.onOpenClose, props.tooltipAsModal]);

  const handleEscPress = React.useCallback(
    (event: KeyboardEvent) => {
      if (!openRef.current) {
        return;
      }
      // Only stop propagation if the tooltip is opened and its going to be closed
      event.stopPropagation();
      hideTooltip();
    },
    [hideTooltip]
  );

  // Because desktop do not use popover component, we need to manually call manually to close on scape and click outside functionality
  useEscPressedV2({
    ref: props.labelRef,
    onEscPress: handleEscPress,
    disableStopPropagation: true,
  });
  // Prevent to be closed when clicking the label, it will be handled by the tooltip label click in order to open/close the tooltip
  useClickOutside(props.tooltipRef, hideTooltip, [props.labelRef.current]);

  // This function calc the position position where the tooltip should be displayed
  // eslint-disable-next-line complexity
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
      [staticSide as string]: `calc(${styles.tooltipExternalContainer?.[DeviceBreakpointsType.DESKTOP]?.padding ?? 0} - ${
        styles.arrowContainer?.arrow_position ?? '0px'
      } / 2)`,
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
