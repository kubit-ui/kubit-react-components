import { act, fireEvent } from '@testing-library/react';

import * as useMediaDevice from '@/lib/hooks/useMediaDevice/useMediaDevice';
import { renderHook } from '@/lib/tests/render/renderHook';
import { windowMatchMedia } from '@/lib/tests/windowMatchMedia/windowMatchMedia';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { useTooltip } from '../hooks/useTooltip';
import * as computePositionUtils from '../positioning/computePosition';

const variant = 'DEFAULT';
const labelRef: { current: HTMLDivElement } = {
  current: document.createElement('div'),
};
const tooltipRef: { current: HTMLDivElement | null } = {
  current: document.createElement('div'),
};

describe('useTooltip', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });
  beforeEach(() => {
    labelRef.current = document.createElement('div');
    tooltipRef.current = document.createElement('div');
    const arrow = document.createElement('div');
    tooltipRef.current.appendChild(arrow);
  });

  it('Use Tooltip - onOpenClose should not be called twice if the tooltip was already opened', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.DESKTOP,
    );

    const onOpenClose = vi.fn();

    const { result } = renderHook(() =>
      useTooltip({ labelRef, onOpenClose, tooltipRef, variant }),
    );

    act(() => {
      result.current.showTooltip();
    });
    act(() => {
      result.current.showTooltip();
    });

    expect(onOpenClose).toHaveBeenCalledWith(true);
    expect(onOpenClose).toHaveBeenCalledTimes(1);
    expect(document.body).toHTMLValidate();
  });

  it('Use Tooltip - onOpenClose should not be called twice if the tooltip was already closed', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.DESKTOP,
    );

    const onOpenClose = vi.fn();

    const { result } = renderHook(() =>
      useTooltip({ labelRef, onOpenClose, tooltipRef, variant }),
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
    expect(document.body).toHTMLValidate();
  });

  it('Use Tooltip - onOpenClose should not be called on showTooltip if not tooltip ref', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.DESKTOP,
    );

    const onOpenClose = vi.fn();

    const { result } = renderHook(() =>
      useTooltip({
        labelRef,
        onOpenClose,
        tooltipRef: { current: null },
        variant,
      }),
    );

    act(() => {
      result.current.showTooltip();
    });

    expect(onOpenClose).not.toHaveBeenCalled();
    expect(document.body).toHTMLValidate();
  });

  it('Use Tooltip - onOpenClose should not be called on hideTooltip if not tooltip ref', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.DESKTOP,
    );

    const onOpenClose = vi.fn();

    const { result } = renderHook(() =>
      useTooltip({ labelRef, onOpenClose, tooltipRef, variant }),
    );

    act(() => {
      // Call to onOpenClose
      result.current.showTooltip();
    });
    act(() => {
      tooltipRef.current = null;
      // Not call to onOpenClose
      result.current.showTooltip();
    });

    expect(onOpenClose).toHaveBeenCalledTimes(1);
    expect(document.body).toHTMLValidate();
  });

  it('Use Tooltip - computePosition should be called if labelRef and tooltipRef', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.DESKTOP,
    );

    const computePositionMock = vi.fn(
      () =>
        ({
          middlewareData: { arrow: { x: null, y: null } },
          placement: 'top',
          strategy: 'fixed',
          x: 1,
          y: 1,
        }) as unknown as computePositionUtils.ComputePositionReturn,
    );

    vi.spyOn(computePositionUtils, 'computePosition').mockImplementation(
      computePositionMock as unknown as typeof computePositionUtils.computePosition,
    );
    const { result } = renderHook(() =>
      useTooltip({ labelRef, tooltipRef, variant }),
    );

    act(() => {
      result.current.showTooltip();
    });

    expect(computePositionMock).toHaveBeenCalled();
    expect(document.body).toHTMLValidate();
  });

  it('Use Tooltip - computePosition should not be called if not labelRef or tooltipRef', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.DESKTOP,
    );

    const computePositionMock = vi.fn();
    vi.spyOn(computePositionUtils, 'computePosition').mockImplementation(
      computePositionMock,
    );
    const { result } = renderHook(() =>
      useTooltip({
        labelRef: { current: null },
        tooltipRef,
        variant,
      }),
    );

    act(() => {
      result.current.showTooltip();
    });

    expect(computePositionMock).not.toHaveBeenCalled();
    expect(document.body).toHTMLValidate();
  });

  // it('Use Tooltip - will be hidden when scroll on an element is not contained by the tooltip ref', () => {
  //   window.matchMedia = windowMatchMedia('onlyDesktop');
  //   vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
  //     () => DEVICE_BREAKPOINTS.DESKTOP
  //   );

  //   tooltipRef.current && vi.spyOn(tooltipRef.current, 'contains').mockReturnValueOnce(false);
  //   tooltipRef.current &&
  //     vi.spyOn(tooltipRef.current, 'style', 'get').mockReturnValueOnce({} as CSSStyleDeclaration);

  //   const { result } = renderHook(() => useTooltip({ labelRef, tooltipRef, variant }));

  //   act(() => {
  //     result.current.showTooltip();
  //   });
  //   act(() => {
  //     window.dispatchEvent(new Event('scroll'));
  //   });

  //   expect(tooltipRef.current?.style).not.toEqual({});
  //   expect(document.body).toHTMLValidate();
  // });

  // it('Use Tooltip - will be hidden when esc is pressed ', () => {
  //   window.matchMedia = windowMatchMedia('onlyDesktop');
  //   vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
  //     () => DEVICE_BREAKPOINTS.DESKTOP
  //   );

  //   tooltipRef.current && vi.spyOn(tooltipRef.current, 'contains').mockReturnValueOnce(false);
  //   tooltipRef.current &&
  //     vi.spyOn(tooltipRef.current, 'style', 'get').mockReturnValueOnce({} as CSSStyleDeclaration);

  //   const { result } = renderHook(() => useTooltip({ labelRef, tooltipRef, variant }));

  //   act(() => {
  //     result.current.showTooltip();
  //   });
  //   act(() => {
  //     fireEvent.keyDown(labelRef.current, { key: 'Escape', code: 'Escape' });
  //   });

  //   expect(tooltipRef.current?.style).not.toEqual({});
  //   expect(document.body).toHTMLValidate();
  // });

  it('Use Tooltip - if press esc, but already hidden, onOpenClose wont be called', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.DESKTOP,
    );

    const onOpenClose = vi.fn();

    if (tooltipRef.current) {
      vi.spyOn(tooltipRef.current, 'contains').mockReturnValueOnce(false);
    }
    if (tooltipRef.current) {
      vi.spyOn(tooltipRef.current, 'style', 'get').mockReturnValueOnce(
        {} as CSSStyleDeclaration,
      );
    }

    act(() => {
      fireEvent.keyDown(labelRef.current, { code: 'Escape', key: 'Escape' });
    });

    expect(onOpenClose).not.toHaveBeenCalled();
    expect(document.body).toHTMLValidate();
  });

  it('Use Tooltip - when tooltip is a modal, when hiding focus in the last focusable element before opening the modal', () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.DESKTOP,
    );

    const { result } = renderHook(() =>
      useTooltip({ labelRef, tooltipAsModal: true, tooltipRef, variant }),
    );

    const focusableElement1 = document.createElement('button');
    focusableElement1.type = 'button';
    focusableElement1.innerHTML = 'button';
    document.body.appendChild(focusableElement1);
    focusableElement1.focus();
    const focusSpy = vi.spyOn(focusableElement1, 'focus');

    act(() => {
      result.current.showTooltip();
    });
    act(() => {
      result.current.hideTooltip();
    });

    expect(focusSpy).toHaveBeenCalled();
    expect(document.body).toHTMLValidate();
  });
});
