import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { useScrollBlock } from '../useScrollBlock';
import * as useScrollBlockUtils from '../utils/useScrollBlock.utils';

describe('useScrollBlock', () => {
  const preventDefaultMock = jest.fn();

  beforeEach(() => {
    preventDefaultMock.mockReset();
  });

  beforeAll(() => {
    Object.defineProperty(global.Event.prototype, 'preventDefault', {
      value: preventDefaultMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('body has overflow clip when call to blockScroll', () => {
    const { result } = renderHook(() => useScrollBlock());
    result.current.blockScroll();
    expect(document.body.style.overflow).toBe('clip');
    result.current.allowScroll();
    expect(document.body.style.overflow).not.toBe('clip');
  });

  it('preventScrollOnUnomittedElements - touchevent will prevent default when call to blockScroll without elementsToOmit', () => {
    const { result } = renderHook(() => useScrollBlock());

    const div = document.createElement('div');
    const event = {
      target: div,
    };
    result.current.blockScroll();
    fireEvent.touchMove(document.body, event);

    expect(preventDefaultMock).toHaveBeenCalled();

    // Delete listeners
    result.current.allowScroll();
  });

  it('preventScrollOnUnomittedElements - touchevent will prevent default when call to blockScroll when elementsToOmit do not containt the target element', () => {
    const { result } = renderHook(() => useScrollBlock());

    const div = document.createElement('div');
    const event = {
      target: div,
    };
    result.current.blockScroll({ elementsToOmit: [document.createElement('div')] });
    fireEvent.touchMove(document.body, event);

    expect(preventDefaultMock).toHaveBeenCalled();

    result.current.allowScroll();
  });

  it('preventScrollOnOmittedElements - touchevent will preventDefault when call to blockScroll fot elementsToOmit if not scrollable', () => {
    const { result } = renderHook(() => useScrollBlock());

    const elementToOmit = document.createElement('div');

    const event = {
      target: elementToOmit,
    };
    result.current.blockScroll({ elementsToOmit: [elementToOmit] });
    jest.spyOn(useScrollBlockUtils, 'getFirstScrollableElement').mockReturnValueOnce(null);
    fireEvent.touchMove(elementToOmit, event);

    expect(preventDefaultMock).toHaveBeenCalled();

    result.current.allowScroll();
  });

  it('preventScrollOnOmittedElements - touchevent on elementsToOmit will not prevent default when scrollable', () => {
    const { result } = renderHook(() => useScrollBlock());

    const elementToOmit = document.createElement('div');

    const event = {
      target: elementToOmit,
    };
    result.current.blockScroll({ elementsToOmit: [elementToOmit] });
    jest.spyOn(useScrollBlockUtils, 'getFirstScrollableElement').mockReturnValueOnce(elementToOmit);
    fireEvent.touchMove(elementToOmit, event);

    expect(preventDefaultMock).not.toHaveBeenCalled();

    result.current.allowScroll();
  });

  it('preventScrollBackgroundOnOmittedElements - touchstart on elementsToOmit will not do anything if target does not have a scrollableElement', () => {
    const { result } = renderHook(() => useScrollBlock());

    const elementToOmit = document.createElement('div');
    const mockScroll = jest.fn();
    elementToOmit.scrollTo = mockScroll;

    const event = {
      target: elementToOmit,
    };
    result.current.blockScroll({ elementsToOmit: [elementToOmit] });

    jest.spyOn(useScrollBlockUtils, 'getFirstScrollableElement').mockReturnValueOnce(null);
    fireEvent.touchStart(elementToOmit, event);

    expect(mockScroll).not.toHaveBeenCalled();

    result.current.allowScroll();
  });

  it('preventScrollBackgroundOnOmittedElements - touchstart on elementsToOmit will call to scrollTo (1px) if it is scrollable and it is at the top', () => {
    const { result } = renderHook(() => useScrollBlock());

    const elementToOmit = document.createElement('div');
    const mockScrollTo = jest.fn();
    elementToOmit.scrollTo = mockScrollTo;
    elementToOmit.scrollTop = 0;
    const event = {
      target: elementToOmit,
    };
    result.current.blockScroll({ elementsToOmit: [elementToOmit] });

    jest.spyOn(useScrollBlockUtils, 'getFirstScrollableElement').mockReturnValueOnce(elementToOmit);
    fireEvent.touchStart(elementToOmit, event);

    expect(mockScrollTo).toHaveBeenCalled();

    result.current.allowScroll();
  });

  it('preventScrollBackgroundOnOmittedElements - touchstart on elementsToOmit will call to scrollTo (1px) if it is scrollable and it is at the bottom', () => {
    const { result } = renderHook(() => useScrollBlock());

    const elementToOmit = document.createElement('div');
    const mockScroll = jest.fn();
    elementToOmit.scrollTo = mockScroll;

    Object.defineProperty(elementToOmit, 'scrollTop', { writable: true, value: 50 });
    Object.defineProperty(elementToOmit, 'offsetHeight', { writable: true, value: 50 });
    Object.defineProperty(elementToOmit, 'scrollHeight', { writable: true, value: 100 });

    const event = {
      target: elementToOmit,
    };
    result.current.blockScroll({ elementsToOmit: [elementToOmit] });

    jest.spyOn(useScrollBlockUtils, 'getFirstScrollableElement').mockReturnValueOnce(elementToOmit);
    fireEvent.touchStart(elementToOmit, event);

    expect(mockScroll).toHaveBeenCalled();

    result.current.allowScroll();
  });
});
