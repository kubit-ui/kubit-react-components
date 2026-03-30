import {
  type CSSProperties,
  type ComponentProps,
  useRef,
  useState,
} from 'react';

import type { Placement } from '@floating-ui/dom';

import { Button } from '@/components/button/button';
import { Text } from '@/components/text/text';
import { TextVariantType } from '@/lib/designSystem/kubit/components/text/variants';
import {
  ButtonSizeType,
  ButtonVariantType,
} from '@/lib/designSystem/kubit/components/variants';
import { useActiveBreakpoints } from '@/lib/hooks/useMediaDevice/useActiveBreakpoints';

import { Popover } from '../../popover';
import type { BodyDirection } from '../../utils/placement.utils';

// Convert body direction to placement
const getPlacementFromBodyDirection = (
  direction: BodyDirection,
): Placement | undefined => {
  switch (direction) {
    case 'center':
      return undefined; // undefined gets converted to 'center' internally for body positioning
    case 'top':
      return 'top';
    case 'right':
      return 'right';
    case 'left':
      return 'left';
    case 'bottom':
      return 'bottom';
    default:
      return undefined;
  }
};

/**
 * Component to demonstrate all body position options for Popover
 *
 * This component showcases the different body positioning options available:
 * - center: Displays the popover centered on the screen (placement: 'top')
 * - right: Anchors the popover to the right side of the screen (placement: 'right')
 * - left: Anchors the popover to the left side of the screen (placement: 'left')
 * - bottom: Anchors the popover to the bottom of the screen (placement: 'bottom')
 */
export const BodyPositionsDemo = (
  args: ComponentProps<typeof Popover>,
): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<BodyDirection>('center');
  const [middlewareOptions, setMiddlewareOptions] = useState({
    edgePadding: 0,
    offsetDistance: [0, 0] as [number, number],
  });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handlePositionChange = (newPosition: BodyDirection) => {
    setPosition(newPosition);
    setOpen(true);
  };

  const toggleEdgePadding = () => {
    setMiddlewareOptions((prev) => ({
      ...prev,
      edgePadding: prev.edgePadding === 0 ? 24 : 0,
    }));
  };

  const { isMobile } = useActiveBreakpoints();

  // Filter out placement from args to prevent storybook default from overriding our demo logic
  const { placement: _, ...argsWithoutPlacement } = args;

  // Get width for different positions to demonstrate how content controls its size
  const getContentWidth = (pos: BodyDirection): CSSProperties => {
    if (isMobile && pos !== 'center') {
      return { width: '100%' };
    }

    switch (pos) {
      case 'center':
        return { maxWidth: '500px', minWidth: '400px' };
      case 'top':
        return { maxWidth: '90vw', minWidth: '300px' };
      case 'right':
        return { maxWidth: '400px', minWidth: '300px' };
      case 'left':
        return { maxWidth: '350px', minWidth: '250px' };
      case 'bottom':
        return { maxWidth: '600px', minWidth: '200px' };
      default:
        return {};
    }
  };

  const positionDescriptions = {
    bottom:
      'This popover is anchored to the bottom of the viewport. Perfect for action sheets, mobile menus, and keyboard-avoiding containers. (Width: 200px - 600px)',
    center:
      'This popover is centered in the viewport. This is the default positioning behavior and works well for dialogs and modals. (Width: 400px - 500px)',
    left: 'This popover is anchored to the left edge of the viewport. Good for navigation menus or toolbars. (Width: 250px - 350px)',
    right:
      'This popover is anchored to the right edge of the viewport. Useful for side panels, contextual menus, or navigation drawers. (Width: 300px - 400px)',
    top: 'This popover is anchored to the top of the viewport. Perfect for top notifications, banners, or alerts that need immediate attention. (Width: 300px - 90vw)',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text
        style={{ fontWeight: 700 }}
        variant={TextVariantType.PARAGRAPH_MEDIUM_EXTENDED}
      >
        Popover Body Positioning
      </Text>
      <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
        Without a specific anchor element (body by default), the popover can be
        positioned in different ways relative to the viewport with placement
        property.
      </Text>
      <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
        Uses an overlay with backdrop (overlay property) that darkens the
        background, and can be configured with a optional directional arrow with
        hasArrow property.
      </Text>
      <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
        When using the body as anchor, the popover can be positioned in
        different ways (placement prop). Select one of the options below to see
        how each position works.
      </Text>
      <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
        <strong>Edge Padding:</strong> This demo also showcases the{' '}
        <code>edgePadding</code> option, which maintains distance from viewport
        edges to prevent the popover from touching the screen boundaries.
      </Text>
      <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
        <strong>Width and Height Control:</strong> Each position demonstrates
        different width constraints. The popover content controls its own
        dimensions instead of the popover container having fixed constraints.
        Notice how each position has different sizing to show the flexibility.
      </Text>
      <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
        For more information, check the{' '}
        <a
          href="?path=/docs/components-resources-Popover--docs"
          rel="noopener noreferrer"
          style={{ color: '#0066cc', textDecoration: 'underline' }}
          target="_blank"
        >
          Documentation section
        </a>{' '}
        in Storybook.
      </Text>
      <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
        <strong>Edge Padding Demo:</strong> Use the controls below to see how{' '}
        <code>edgePadding</code> affects popover positioning relative to
        viewport edges.
      </Text>

      {/* Middleware Options Controls */}
      <div
        style={{
          backgroundColor: '#e8f4fd',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '20px',
        }}
      >
        <Text variant={TextVariantType.PARAGRAPH_MEDIUM_EXTENDED}>
          <strong>🔧 Edge Padding Controls</strong>
        </Text>

        {/* Edge Padding Control */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ alignItems: 'center', display: 'flex', gap: '12px' }}>
            <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
              <strong>Edge Padding:</strong>
            </Text>
            <Button
              size={ButtonSizeType.SMALL}
              variant={
                middlewareOptions.edgePadding > 0
                  ? ButtonVariantType.PRIMARY
                  : ButtonVariantType.SECONDARY
              }
              onClick={toggleEdgePadding}
            >
              {middlewareOptions.edgePadding > 0 ? '24px ON' : 'OFF'}
            </Button>
          </div>
          <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
            Current: {middlewareOptions.edgePadding}px -{' '}
            {middlewareOptions.edgePadding > 0
              ? '✅ Maintains distance from viewport edges'
              : '❌ Can touch viewport edges'}
          </Text>
        </div>
      </div>

      {/* Debug Information */}
      <div
        style={{
          backgroundColor: '#fff9e6',
          border: '1px solid #ffd700',
          borderRadius: '8px',
          padding: '12px',
        }}
      >
        <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
          <strong>🔍 How edge padding work:</strong>
        </Text>
        <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
          1. <strong>Edge Padding:</strong> Always works - maintains distance
          from viewport edges
        </Text>
      </div>

      <div
        style={{
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div>
          <Text variant={TextVariantType.PARAGRAPH_MEDIUM_EXTENDED}>
            <strong>Current Position:</strong> {position}
          </Text>
        </div>
        <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
          {position === 'center'
            ? 'The popover will be centered on the screen.'
            : position === 'top'
              ? 'The popover will be anchored to the top of the screen.'
              : position === 'right'
                ? 'The popover will be anchored to the right edge of the screen.'
                : position === 'left'
                  ? 'The popover will be anchored to the left edge of the screen.'
                  : 'The popover will be anchored to the bottom of the screen.'}
        </Text>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          {(['center', 'top', 'right', 'left', 'bottom'] as const).map(
            (pos) => (
              <Button
                key={pos}
                ref={pos === 'center' ? buttonRef : undefined}
                size={ButtonSizeType.LARGE}
                type="button"
                variant={
                  position === pos
                    ? ButtonVariantType.PRIMARY
                    : ButtonVariantType.SECONDARY
                }
                onClick={() => handlePositionChange(pos)}
              >
                {pos === 'center'
                  ? 'Center (Default)'
                  : pos.charAt(0).toUpperCase() + pos.slice(1)}
              </Button>
            ),
          )}
        </div>
      </div>

      <Popover
        {...argsWithoutPlacement}
        middlewareOptions={middlewareOptions}
        open={open}
        placement={getPlacementFromBodyDirection(position)}
        zIndex={800}
        onClose={handleClose}
      >
        <div
          style={{
            backgroundColor: 'white',
            border: '1px solid #e8e8e8',
            borderRadius: '8px',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)',
            height: isMobile && position !== 'center' ? '100vh' : 'auto',
            padding: '24px',
            ...getContentWidth(position),
          }}
        >
          <Text variant={TextVariantType.HEADING_H3_EXTENDED}>
            {position.charAt(0).toUpperCase() + position.slice(1)} Position
          </Text>
          <div
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #f0f0f0',
              borderRadius: '6px',
              marginBottom: '20px',
              marginTop: '12px',
              padding: '12px',
            }}
          >
            <Text variant={TextVariantType.PARAGRAPH_MEDIUM_EXTENDED}>
              {positionDescriptions[position]}
            </Text>
          </div>
          <div
            style={{
              backgroundColor: '#f0f8ff',
              border: '1px solid #d0e7ff',
              borderRadius: '6px',
              marginBottom: '20px',
              padding: '12px',
            }}
          >
            <Text variant={TextVariantType.PARAGRAPH_MEDIUM_EXTENDED}>
              <strong>🔧 Current Edge Padding Configuration</strong>
            </Text>
            <div style={{ marginTop: '8px' }}>
              <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
                <strong>Edge Padding:</strong> {middlewareOptions.edgePadding}px{' '}
                {middlewareOptions.edgePadding > 0
                  ? '✅ Active'
                  : '❌ Disabled'}
              </Text>
              <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
                {middlewareOptions.edgePadding > 0
                  ? `• Maintains ${middlewareOptions.edgePadding}px distance from viewport edges`
                  : '• Popover can touch viewport edges'}
              </Text>
              <Text variant={TextVariantType.PARAGRAPH_SMALL_EXTENDED}>
                <strong>Current Position:</strong> {position}
              </Text>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              size={ButtonSizeType.LARGE}
              variant={ButtonVariantType.PRIMARY}
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </div>
      </Popover>
    </div>
  );
};
