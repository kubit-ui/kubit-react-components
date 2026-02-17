import { type Coords, arrow, flip, shift } from '@floating-ui/dom';
import {
  type MutableRefObject,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useClassName } from '@/lib/hooks/useClassName/useClassName';
import { useClickOutside } from '@/lib/hooks/useClickOutside/useClickOutside';
import { useEscPressed } from '@/lib/hooks/useEscPressed/useEscPressed';
import { useActiveBreakpoints } from '@/lib/hooks/useMediaDevice/useActiveBreakpoints';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';
import { POSITIONS } from '@/lib/types/positions/positions';

import type { TooltipCssClasses } from '../types/tooltip';
import type { TooltipAlignType } from '../types/tooltipAlign';

import { focusElementOrFirstDescendant } from '../../../lib/utils/focusHandlers/focusHandlers';
import { computePosition } from '../positioning/computePosition';

interface UseTooltipType<Variant> {
  labelRef: RefObject<HTMLDivElement | null>;
  tooltipRef: RefObject<HTMLDivElement | null>;
  variant?: Variant;
  onOpenClose?: (open: boolean) => void;
  align?: `${TooltipAlignType}` | string;
  tooltipAsModal?: boolean;
  additionalClasses?: Partial<TooltipCssClasses>;
  cssClasses?: TooltipCssClasses;
}

interface UseTooltipReturnType {
  showTooltip: () => void;
  hideTooltip: () => void;
  allowFocusOpenTooltip: MutableRefObject<boolean>;
  open: boolean;
  placement: `${TooltipAlignType}` | string;
}

/**
 * @name useTooltip
 * @description
 * Hook to handle the tooltip functionality
 * @param {UseTooltipType} props
 * @returns {UseTooltipReturnType}
 */
export const useTooltip = <Variant>({
  align = POSITIONS.TOP,
  ...props
}: UseTooltipType<Variant>): UseTooltipReturnType => {
  const { device: mediaDevice, isDesktop, isTablet } = useActiveBreakpoints();
  const isDesktopOrTablet = isDesktop || isTablet;

  const lastFocus = useRef<HTMLElement | null>(null);
  // Avoid tooltip is opened automatically after closing the tooltip
  const allowFocusOpenTooltip = useRef(true);
  const openRef = useRef(false);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState(align);

  // Need the styles to calculate the arrow tooltip position
  const cssClasses = useClassName({
    additionalClassNames: props.additionalClasses,
    component: 'TOOLTIP',
    variant: props.variant as string,
  });

  // This function calculates the position where the tooltip should be displayed
  const updateTooltipPosition = async () => {
    if (!props.labelRef.current || !props.tooltipRef.current) {
      return;
    }
    const arrowElement = props.tooltipRef.current.lastElementChild;

    try {
      const position = await computePosition(
        props.labelRef.current,
        props.tooltipRef.current,
        {
          // Offset is handle internally with a padding
          // Avoiding onMouseLeave label close the tooltip when you want to put the mouse inside
          middleware: [
            // Offset is handle internally with a padding
            // Avoiding onMouseLeave label close the tooltip when you want to put the mouse inside
            // Flip placement if there's not enough space
            flip(),
            // Shift the tooltip if it would overflow the viewport
            // This prevents tooltips from being cut off at screen edges
            shift({ padding: 4 }),
            // Position the arrow correctly
            arrow({ element: arrowElement as HTMLElement }),
          ],
          placement: align as TooltipAlignType,
          strategy: 'absolute',
        },
      );
      const { middlewareData, placement: computedPlacement, x, y } = position;

      setPlacement(computedPlacement);

      // Apply the position calculated by floating-ui directly
      // The shift middleware will have already handled keeping the tooltip in the viewport
      if (props.tooltipRef.current?.style) {
        Object.assign(props.tooltipRef.current.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      }

      // Arrow position is calculated correctly by the arrow middleware
      // We can use these values directly
      const { x: arrowX, y: arrowY } = middlewareData.arrow as Partial<Coords>;

      const staticSide = {
        bottom: POSITIONS.TOP,
        left: POSITIONS.RIGHT,
        right: POSITIONS.LEFT,
        top: POSITIONS.BOTTOM,
      }[placement.split('-')[0]];
      const arrowStyle = {
        bottom: '',
        left: arrowX !== null ? `${arrowX}px` : '',
        right: '',
        [staticSide as string]: `calc(${cssClasses.tooltipexternalcontainer?.[DEVICE_BREAKPOINTS.DESKTOP]?.padding ?? 0} - ${
          cssClasses.arrowposition?.[DEVICE_BREAKPOINTS.DESKTOP]?.top ?? '0px'
        } / 2)`,
        top: arrowY !== null ? `${arrowY}px` : '',
      };

      if (arrowElement && (arrowElement as HTMLElement).style) {
        (arrowElement as HTMLElement).style.removeProperty('left');
        (arrowElement as HTMLElement).style.removeProperty('top');
        (arrowElement as HTMLElement).style.removeProperty('right');
        (arrowElement as HTMLElement).style.removeProperty('bottom');
        Object.assign((arrowElement as HTMLElement)?.style, arrowStyle);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error computing position:', error);
    }
  };

  const onScroll = (e: Event) => {
    if (!props.tooltipRef.current?.contains(e.target as Node)) {
      updateTooltipPosition();
    }
  };

  // Avoid showing tooltip when scrolling
  useEffect(() => {
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

  const showTooltip = () => {
    if (openRef.current) {
      return;
    }
    openRef.current = true;
    // Save last focusable element
    lastFocus.current = document.activeElement as HTMLElement;
    if (isDesktopOrTablet) {
      if (!props.tooltipRef.current) {
        return;
      }
      if (props.tooltipRef.current.style) {
        props.tooltipRef.current.style.display = 'flex';
      }
      updateTooltipPosition();
      focusElementOrFirstDescendant(props.tooltipRef.current, {
        preventScroll: true,
      });
    }
    setOpen(true);
    props.onOpenClose?.(true);
  };

  const hideTooltip = useCallback(() => {
    if (!openRef.current) {
      return;
    }
    // Apply focus in last focusable element
    openRef.current = false;
    allowFocusOpenTooltip.current = false;
    // Only focus in the last element if the tooltip is a modal
    if (props.tooltipAsModal) {
      lastFocus.current?.focus({ preventScroll: true });
    }
    allowFocusOpenTooltip.current = true;
    if (isDesktopOrTablet) {
      if (!props.tooltipRef.current) {
        return;
      }
      if (props.tooltipRef.current.style) {
        props.tooltipRef.current.style.display = 'none';
      }
    }
    setOpen(false);
    props.onOpenClose?.(false);
  }, [mediaDevice, props.onOpenClose, props.tooltipAsModal]);

  const handleEscPress = useCallback(
    (event: KeyboardEvent) => {
      if (!openRef.current) {
        return;
      }
      // Only stop propagation if the tooltip is opened and its going to be closed
      event.stopPropagation();
      hideTooltip();
    },
    [hideTooltip],
  );

  // Because desktop do not use popover component, we need to manually call manually to close on scape and click outside functionality
  useEscPressed({
    disableStopPropagation: true,
    onEscPress: handleEscPress,
    ref: props.labelRef,
  });

  // Prevent to be closed when clicking the label, it will be handled by the tooltip label click in order to open/close the tooltip
  useClickOutside(props.tooltipRef, hideTooltip, [props.labelRef.current]);

  return { allowFocusOpenTooltip, hideTooltip, open, placement, showTooltip };
};
