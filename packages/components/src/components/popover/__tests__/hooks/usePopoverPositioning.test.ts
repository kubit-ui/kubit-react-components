import type { Mock } from 'vitest';

import { autoUpdate, computePosition } from '@floating-ui/dom';
import { renderHook } from '@testing-library/react';

import { usePopoverPositioning } from '../../hooks/usePopoverPositioning';

// Mock floating-ui functions
vi.mock('@floating-ui/dom', () => ({
  arrow: vi.fn(() => ({ fn: vi.fn(), name: 'arrow' })),
  autoUpdate: vi.fn(),
  computePosition: vi.fn(),
  flip: vi.fn(() => ({ fn: vi.fn(), name: 'flip' })),
  hide: vi.fn(() => ({ fn: vi.fn(), name: 'hide' })),
  inline: vi.fn(() => ({ fn: vi.fn(), name: 'inline' })),
  offset: vi.fn(() => ({ fn: vi.fn(), name: 'offset' })),
  shift: vi.fn(() => ({ fn: vi.fn(), name: 'shift' })),
  size: vi.fn(() => ({ fn: vi.fn(), name: 'size' })),
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
      middlewareData: {},
      placement: 'bottom',
      x: 100,
      y: 200,
    });
    mockAutoUpdate.mockReturnValue(mockCleanup);
  });

  describe('hook behavior', () => {
    it('should execute without errors when isVisible is false', () => {
      expect(() => {
        renderHook(() =>
          usePopoverPositioning({
            anchorElement: mockAnchorElement,
            isVisible: false,
            placement: 'bottom',
            ref: mockRef,
            strategy: 'absolute',
          }),
        );
      }).not.toThrow();
    });

    it('should execute without errors when isVisible is true', () => {
      expect(() => {
        renderHook(() =>
          usePopoverPositioning({
            anchorElement: mockAnchorElement,
            isVisible: true,
            placement: 'bottom',
            ref: mockRef,
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
          anchorElement: mockAnchorElement,
          isVisible: false,
          placement: 'bottom',
          ref: mockRef,
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
          anchorElement,
          isVisible: true,
          placement: 'bottom',
          ref: mockRef,
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
            anchorElement: mockAnchorElement,
            isVisible: true,
            middlewareOptions: {
              edgePadding: 8,
            },
            placement: 'bottom',
            ref: mockRef,
            strategy: 'absolute',
          }),
        );
      }).not.toThrow();
    });

    it('should handle arrow configuration', () => {
      expect(() => {
        renderHook(() =>
          usePopoverPositioning({
            anchorElement: mockAnchorElement,
            arrowStyles: {
              backgroundColor: '#000',
              size: 8,
            },
            isVisible: true,
            placement: 'bottom',
            ref: mockRef,
            strategy: 'absolute',
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
              anchorElement: mockAnchorElement,
              isVisible: true,
              placement,
              ref: mockRef,
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
              anchorElement: mockAnchorElement,
              isVisible: true,
              placement: 'bottom',
              ref: mockRef,
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
            anchorElement: null,
            isVisible: true,
            placement: 'top',
            ref: mockRef,
            strategy: 'absolute',
          }),
        );
      }).not.toThrow();
    });
  });
});
