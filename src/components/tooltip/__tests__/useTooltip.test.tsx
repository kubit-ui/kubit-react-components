import { act } from '@testing-library/react';

import { renderHookProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType } from '@/types';

import * as useMediaDevice from '../../../hooks/useMediaDevice/useMediaDevice';
import { useTooltip } from '../hooks';
import * as computePositionUtils from '../positioning/computePosition';

const variant = 'DEFAULT';
const labelRef: { current: HTMLDivElement } = { current: document.createElement('div') };
const tooltipRef: { current: HTMLDivElement | null } = { current: document.createElement('div') };

describe('useTooltip', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  beforeEach(() => {
    labelRef.current = document.createElement('div');
    tooltipRef.current = document.createElement('div');
    const arrow = document.createElement('div');
    tooltipRef.current.appendChild(arrow);
  });

  it('Use Tooltip - onOpenClose should not be called twice if the tooltip was already opened', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);

    const onOpenClose = jest.fn();

    const { result } = renderHookProvider(() =>
      useTooltip({ labelRef, tooltipRef, variant, onOpenClose })
    );

    act(() => {
      result.current.showTooltip();
    });
    act(() => {
      result.current.showTooltip();
    });

    expect(onOpenClose).toHaveBeenCalledWith(true);
    expect(onOpenClose).toHaveBeenCalledTimes(1);
  });

  it('Use Tooltip - onOpenClose should not be called twice if the tooltip was already closed', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);

    const onOpenClose = jest.fn();

    const { result } = renderHookProvider(() =>
      useTooltip({ labelRef, tooltipRef, variant, onOpenClose })
    );

    act(() => {
      result.current.showTooltip();
    });
    act(() => {
      result.current.hideTooltip();
    });
    act(() => {
      result.current.hideTooltip();
    });

    expect(onOpenClose).toHaveBeenCalledWith(false);
    // One time to open, other to close
    expect(onOpenClose).toHaveBeenCalledTimes(2);
  });

  it('Use Tooltip - onOpenClose should not be called on showTooltip if not tooltip ref', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);

    const onOpenClose = jest.fn();

    const { result } = renderHookProvider(() =>
      useTooltip({
        labelRef,
        tooltipRef: { current: null },
        variant,
        onOpenClose,
      })
    );

    act(() => {
      result.current.showTooltip();
    });

    expect(onOpenClose).not.toHaveBeenCalled();
  });

  it('Use Tooltip - onOpenClose should not be called on hideTooltip if not tooltip ref', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);

    const onOpenClose = jest.fn();

    const { result } = renderHookProvider(() =>
      useTooltip({ labelRef, tooltipRef, variant, onOpenClose })
    );

    act(() => {
      // Cal to onOpenClose
      result.current.showTooltip();
    });
    act(() => {
      tooltipRef.current = null;
      // Not call to onOpenClose
      result.current.showTooltip();
    });

    expect(onOpenClose).toHaveBeenCalledTimes(1);
  });

  it('Use Tooltip - computePosition should be called if labelRef and tooltipRef', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);

    const computePositionMock = jest.fn(
      () =>
        ({
          x: 1,
          y: 1,
          placement: 'top',
          strategy: 'fixed',
          middlewareData: { arrow: { x: null, y: null } },
        }) as unknown as computePositionUtils.ComputePositionReturn
    );

    jest.spyOn(computePositionUtils, 'computePosition').mockImplementation(computePositionMock);
    const { result } = renderHookProvider(() => useTooltip({ labelRef, tooltipRef, variant }));

    act(() => {
      result.current.showTooltip();
    });

    expect(computePositionMock).toHaveBeenCalled();
  });

  it('Use Tooltip - computePosition should not be called if not labelRef or tooltipRef', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);

    const computePositionMock = jest.fn();
    jest.spyOn(computePositionUtils, 'computePosition').mockImplementation(computePositionMock);
    const { result } = renderHookProvider(() =>
      useTooltip({
        labelRef: { current: null },
        tooltipRef,
        variant,
      })
    );

    act(() => {
      result.current.showTooltip();
    });

    expect(computePositionMock).not.toHaveBeenCalled();
  });

  it('Use Tooltip - will be hided when scroll on a element is not contained by the tooltip ref', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(useMediaDevice, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);

    const onOpenClose = jest.fn();
    tooltipRef.current && jest.spyOn(tooltipRef.current, 'contains').mockReturnValueOnce(false);

    const { result } = renderHookProvider(() =>
      useTooltip({ labelRef, tooltipRef, variant, onOpenClose })
    );

    act(() => {
      result.current.showTooltip();
    });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(onOpenClose).toHaveBeenCalledWith(false);
  });
});
