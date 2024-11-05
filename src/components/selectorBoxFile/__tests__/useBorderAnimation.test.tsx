import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useBorderAnimation } from '../hooks';
import { getBottomBarWith, getLeftBarHeight, getRightBarHeight, getTopBarWith } from '../utils';

// Mock the utility functions
jest.mock('../utils', () => ({
  getTopBarWith: jest.fn(),
  getRightBarHeight: jest.fn(),
  getBottomBarWith: jest.fn(),
  getLeftBarHeight: jest.fn(),
}));

describe('useBorderAnimation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize refs correctly', () => {
    const { result } = renderHook(() => useBorderAnimation({ percentage: 0 }));

    expect(result.current.topRef).toBeDefined();
    expect(result.current.rightRef).toBeDefined();
    expect(result.current.bottomRef).toBeDefined();
    expect(result.current.leftRef).toBeDefined();
  });

  it('should update topRef width based on percentage', () => {
    (getTopBarWith as jest.Mock).mockReturnValue(50);

    const { result, rerender } = renderHook(
      ({ percentage }) => useBorderAnimation({ percentage }),
      {
        initialProps: { percentage: 10 },
      }
    );

    rerender({ percentage: 20 });

    const ref = (result.current.topRef as React.MutableRefObject<HTMLDivElement>)?.current;

    waitFor(() => {
      expect(ref?.style.width).toBe('50%');
    });
  });

  it('should update rightRef height based on percentage', () => {
    (getRightBarHeight as jest.Mock).mockReturnValue(60);

    const { result, rerender } = renderHook(
      ({ percentage }) => useBorderAnimation({ percentage }),
      {
        initialProps: { percentage: 30 },
      }
    );

    rerender({ percentage: 40 });

    const ref = (result.current.rightRef as React.MutableRefObject<HTMLDivElement>)?.current;

    waitFor(() => {
      expect(ref?.style.height).toBe('60%');
    });
  });

  it('should update bottomRef width based on percentage', () => {
    (getBottomBarWith as jest.Mock).mockReturnValue(50);

    const { result, rerender } = renderHook(
      ({ percentage }) => useBorderAnimation({ percentage }),
      {
        initialProps: { percentage: 60 },
      }
    );

    rerender({ percentage: 70 });

    const ref = (result.current.bottomRef as React.MutableRefObject<HTMLDivElement>)?.current;

    waitFor(() => {
      expect(ref?.style.width).toBe('50%');
    });
  });

  it('should update leftRef height based on percentage', () => {
    (getLeftBarHeight as jest.Mock).mockReturnValue(50);

    const { result, rerender } = renderHook(
      ({ percentage }) => useBorderAnimation({ percentage }),
      {
        initialProps: { percentage: 80 },
      }
    );

    rerender({ percentage: 90 });

    const ref = (result.current.leftRef as React.MutableRefObject<HTMLDivElement>)?.current;
    waitFor(() => {
      expect(ref?.style.height).toBe('50%');
    });
  });
});
