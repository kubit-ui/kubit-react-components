import { renderHook } from '@testing-library/react-hooks';

import { useTooltipAsModal } from '../hooks';

describe('useTooltipAsModal', () => {
  it('should return propTooltipAsModal when both propTooltipAsModal and styleTooltipAsModal are provided', () => {
    const { result } = renderHook(() =>
      useTooltipAsModal({
        propTooltipAsModal: true,
        styleTooltipAsModal: false,
      })
    );

    expect(result.current).toBe(true);
  });

  it('should return propTooltipAsModal when only propTooltipAsModal is provided', () => {
    const { result } = renderHook(() =>
      useTooltipAsModal({
        propTooltipAsModal: true,
      })
    );

    expect(result.current).toBe(true);
  });

  it('should return styleTooltipAsModal when only styleTooltipAsModal is provided', () => {
    const { result } = renderHook(() =>
      useTooltipAsModal({
        styleTooltipAsModal: true,
      })
    );

    expect(result.current).toBe(true);
  });

  it('should return false when neither propTooltipAsModal nor styleTooltipAsModal is provided', () => {
    const { result } = renderHook(() => useTooltipAsModal({}));

    expect(result.current).toBe(false);
  });
});
