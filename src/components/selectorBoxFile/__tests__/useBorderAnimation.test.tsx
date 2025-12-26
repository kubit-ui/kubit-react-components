import { renderHook, waitFor } from '@testing-library/react';
import { type Mock, vi } from 'vitest';

import { useBorderAnimation } from '../hooks/useBorderAnimation';
import {
  getBottomBarWith,
  getLeftBarHeight,
  getRightBarHeight,
  getTopBarWith,
} from '../utils/animation/animation';

// Mock the utility functions
vi.mock('../utils/animation/animation', () => ({
  getBottomBarWith: vi.fn(),
  getLeftBarHeight: vi.fn(),
  getRightBarHeight: vi.fn(),
  getTopBarWith: vi.fn(),
}));

describe('useBorderAnimation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize refs correctly', () => {
    const { result } = renderHook(() => useBorderAnimation({ percentage: 0 }));

    expect(result.current.topRef).toBeDefined();
    expect(result.current.rightRef).toBeDefined();
    expect(result.current.bottomRef).toBeDefined();
    expect(result.current.leftRef).toBeDefined();
  });

  it('should update topRef width based on percentage', () => {
    (getTopBarWith as Mock).mockReturnValue(50);

    const { rerender, result } = renderHook(
      ({ percentage }) => useBorderAnimation({ percentage }),
      {
        initialProps: { percentage: 10 },
      },
    );

    rerender({ percentage: 20 });

    const ref = (
      result.current.topRef as React.MutableRefObject<HTMLDivElement>
    )?.current;

    waitFor(() => {
      expect(ref?.style.width).toBe('50%');
    });
  });

  it('should update rightRef height based on percentage', () => {
    (getRightBarHeight as Mock).mockReturnValue(60);

    const { rerender, result } = renderHook(
      ({ percentage }) => useBorderAnimation({ percentage }),
      {
        initialProps: { percentage: 30 },
      },
    );

    rerender({ percentage: 40 });

    const ref = (
      result.current.rightRef as React.MutableRefObject<HTMLDivElement>
    )?.current;

    waitFor(() => {
      expect(ref?.style.height).toBe('60%');
    });
  });

  it('should update bottomRef width based on percentage', () => {
    (getBottomBarWith as Mock).mockReturnValue(50);

    const { rerender, result } = renderHook(
      ({ percentage }) => useBorderAnimation({ percentage }),
      {
        initialProps: { percentage: 60 },
      },
    );

    rerender({ percentage: 70 });

    const ref = (
      result.current.bottomRef as React.MutableRefObject<HTMLDivElement>
    )?.current;

    waitFor(() => {
      expect(ref?.style.width).toBe('50%');
    });
  });

  it('should update leftRef height based on percentage', () => {
    (getLeftBarHeight as Mock).mockReturnValue(50);

    const { rerender, result } = renderHook(
      ({ percentage }) => useBorderAnimation({ percentage }),
      {
        initialProps: { percentage: 80 },
      },
    );

    rerender({ percentage: 90 });

    const ref = (
      result.current.leftRef as React.MutableRefObject<HTMLDivElement>
    )?.current;
    waitFor(() => {
      expect(ref?.style.height).toBe('50%');
    });
  });
});
