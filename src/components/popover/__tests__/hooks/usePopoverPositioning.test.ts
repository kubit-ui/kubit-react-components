import { autoUpdate, computePosition } from '@floating-ui/dom';
import { renderHook } from '@testing-library/react';
import type { Mock } from 'vitest';

import { usePopoverPositioning } from '../../hooks/usePopoverPositioning';

// Mock floating-ui functions
vi.mock('@floating-ui/dom', () => ({
  autoUpdate: vi.fn(),
  computePosition: vi.fn(),
  offset: vi.fn(() => ({ name: 'offset', fn: vi.fn() })),
  flip: vi.fn(() => ({ name: 'flip', fn: vi.fn() })),
  shift: vi.fn(() => ({ name: 'shift', fn: vi.fn() })),
  arrow: vi.fn(() => ({ name: 'arrow', fn: vi.fn() })),
  hide: vi.fn(() => ({ name: 'hide', fn: vi.fn() })),
  inline: vi.fn(() => ({ name: 'inline', fn: vi.fn() })),
  size: vi.fn(() => ({ name: 'size', fn: vi.fn() })),
}));

const mockComputePosition = computePosition as Mock;
const mockAutoUpdate = autoUpdate as Mock;

describe('usePopoverPositioning', () => {
  const mockRef = { current: document.createElement('div') };
  const mockAnchorElement = document.createElement('div');
  const mockCleanup = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockComputePosition.mockResolvedValue({
      x: 100,
      y: 200,
      placement: 'bottom',
      middlewareData: {},
    });
    mockAutoUpdate.mockReturnValue(mockCleanup);
  });

  describe('hook behavior', () => {
    it('should execute without errors when isVisible is false', () => {
      expect(() => {
        renderHook(() =>
          usePopoverPositioning({
            ref: mockRef,
            placement: 'bottom',
            anchorElement: mockAnchorElement,
            isVisible: false,
            strategy: 'absolute',
          }),
        );
      }).not.toThrow();
    });

    it('should execute without errors when isVisible is true', () => {
      expect(() => {
        renderHook(() =>
          usePopoverPositioning({
            ref: mockRef,
            placement: 'bottom',
            anchorElement: mockAnchorElement,
            isVisible: true,
            strategy: 'absolute',
          }),
        );
      }).not.toThrow();
    });
  });

  describe('positioning updates', () => {
    it('should not call computePosition when not visible', async () => {
      renderHook(() =>
        usePopoverPositioning({
          ref: mockRef,
          placement: 'bottom',
          anchorElement: mockAnchorElement,
          isVisible: false,
          strategy: 'absolute',
        }),
      );

      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(mockComputePosition).not.toHaveBeenCalled();
    });

    it('should call computePosition when visible with real anchor', async () => {
      // Add elements to DOM for proper testing
      const anchorElement = document.createElement('div');
      const popoverElement = document.createElement('div');
      document.body.appendChild(anchorElement);
      document.body.appendChild(popoverElement);

      // eslint-disable-next-line @typescript-eslint/no-shadow
      const mockRef = { current: popoverElement };

      renderHook(() =>
        usePopoverPositioning({
          ref: mockRef,
          placement: 'bottom',
          anchorElement,
          isVisible: true,
          strategy: 'absolute',
        }),
      );

      // Wait for effects and requestAnimationFrame to complete
      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve(undefined);
          });
        });
      });

      expect(mockComputePosition).toHaveBeenCalled();

      // Cleanup
      document.body.removeChild(anchorElement);
      document.body.removeChild(popoverElement);
    });
  });

  describe('configuration options', () => {
    it('should handle middleware options correctly', () => {
      expect(() => {
        renderHook(() =>
          usePopoverPositioning({
            ref: mockRef,
            placement: 'bottom',
            anchorElement: mockAnchorElement,
            isVisible: true,
            strategy: 'absolute',
            middlewareOptions: {
              edgePadding: 8,
            },
          }),
        );
      }).not.toThrow();
    });

    it('should handle arrow configuration', () => {
      expect(() => {
        renderHook(() =>
          usePopoverPositioning({
            ref: mockRef,
            placement: 'bottom',
            anchorElement: mockAnchorElement,
            isVisible: true,
            strategy: 'absolute',
            arrowStyles: {
              size: 8,
              backgroundColor: '#000',
            },
          }),
        );
      }).not.toThrow();
    });

    it('should handle different placements', () => {
      const placements = ['top', 'right', 'bottom', 'left'] as const;

      placements.forEach((placement) => {
        expect(() => {
          renderHook(() =>
            usePopoverPositioning({
              ref: mockRef,
              placement,
              anchorElement: mockAnchorElement,
              isVisible: true,
              strategy: 'absolute',
            }),
          );
        }).not.toThrow();
      });
    });

    it('should handle different strategies', () => {
      const strategies = ['absolute', 'fixed'] as const;

      strategies.forEach((strategy) => {
        expect(() => {
          renderHook(() =>
            usePopoverPositioning({
              ref: mockRef,
              placement: 'bottom',
              anchorElement: mockAnchorElement,
              isVisible: true,
              strategy,
            }),
          );
        }).not.toThrow();
      });
    });

    it('should handle null anchor element (body anchor)', () => {
      expect(() => {
        renderHook(() =>
          usePopoverPositioning({
            ref: mockRef,
            placement: 'top',
            anchorElement: null,
            isVisible: true,
            strategy: 'absolute',
          }),
        );
      }).not.toThrow();
    });
  });
});
