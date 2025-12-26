import { act, fireEvent, renderHook } from '@testing-library/react';

import * as useMediaDevice from '@/lib/hooks/useMediaDevice/useMediaDevice';
import { windowMatchMedia } from '@/lib/tests/windowMatchMedia/windowMatchMedia';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { useSwipeDown } from '../useSwipeDown';

let containerRefMock;
let dragRefMock;
let onCloseMock;
let containerRoot;

describe('useSwipeDown hook', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });
  beforeEach(() => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.MOBILE,
    );
    const container = document.createElement('div');
    const content = document.createElement('div');

    containerRoot?.remove();

    containerRoot = document.createElement('div');

    container.appendChild(content);

    containerRoot.appendChild(container);
    containerRefMock = {
      current: container,
    };
    dragRefMock = {
      current: content,
    };
    onCloseMock = vi.fn();

    document.body.appendChild(containerRoot);
    const { result } = renderHook(() => useSwipeDown(onCloseMock));

    act(() => {
      result.current.setPopoverRef?.(containerRefMock.current);
      result.current.setDragIconRef?.(dragRefMock.current);
    });
  });
  describe('useSwipeDown hook', () => {
    it('should set popover and drag icon refs', () => {
      const { result } = renderHook(() => useSwipeDown());

      act(() => {
        result.current.setPopoverRef?.(containerRefMock.current);
        result.current.setDragIconRef?.(dragRefMock.current);
      });

      expect(result.current.setPopoverRef).toBeDefined();
      expect(result.current.setDragIconRef).toBeDefined();
      expect(document.body).toHTMLValidate();
    });
    it('Should swipeDown', () => {
      // Simulate down swipe
      fireEvent.mouseDown(dragRefMock.current, { clientY: 100 }); // Start swipe
      fireEvent.mouseMove(dragRefMock.current, { clientY: 50 }); // Swipe down
      fireEvent.mouseUp(dragRefMock.current, { clientY: 0 }); // End swipe
      expect(containerRefMock.current.style.bottom).toBe('0px');
      expect(document.body).toHTMLValidate();
    });
    it('Should not swipeDown on desktop', () => {
      window.matchMedia = windowMatchMedia('onlyDesktop');
      vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
        () => DEVICE_BREAKPOINTS.DESKTOP,
      );
      expect(containerRefMock.current.style.bottom).toBe('');
      expect(document.body).toHTMLValidate();
    });
    it('Should not swipeDown if the ref is not ready', () => {
      containerRefMock.current = null;
      renderHook(() => useSwipeDown(onCloseMock));
      // Simulate down swipe
      fireEvent.mouseDown(dragRefMock.current, { clientY: 100 }); // Start swipe
      fireEvent.mouseMove(dragRefMock.current, { clientY: 50 }); // Swipe down
      fireEvent.mouseUp(dragRefMock.current, { clientY: 0 }); // End swipe
      expect(containerRefMock.current).toBe(null);
      expect(document.body).toHTMLValidate();
    });
    it('If event type is touchstart, should set the yStart.current with the first touch clientY', () => {
      fireEvent.touchStart(dragRefMock.current, {
        touches: [{ clientY: 100 }],
      });
      expect(containerRefMock.current.style.bottom).toBe('');
      expect(document.body).toHTMLValidate();
    });
    it('If event type is touchmove, should set the yEnd.current with the last touch clientY and swipe down', () => {
      fireEvent.touchStart(dragRefMock.current, {
        touches: [{ clientY: 100 }],
      });
      fireEvent.touchMove(dragRefMock.current, { touches: [{ clientY: 50 }] });
      fireEvent.touchEnd(dragRefMock.current, { touches: [{ clientY: 0 }] });
      expect(containerRefMock.current.style.bottom).toBe('0px');
      expect(document.body).toHTMLValidate();
    });
  });
});
