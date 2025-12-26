import { fireEvent, renderHook } from '@testing-library/react';

import { useScrollBlock } from '../useScrollBlock';
import * as useScrollBlockUtils from '../utils/useScrollBlock.utils';

describe('useScrollBlock', () => {
  const preventDefaultMock = vi.fn();

  beforeEach(() => {
    preventDefaultMock.mockReset();
  });

  beforeAll(() => {
    Object.defineProperty(global.Event.prototype, 'preventDefault', {
      value: preventDefaultMock,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  it('body has overflow hidden when call to blockScroll', () => {
    const { result } = renderHook(() => useScrollBlock());
    result.current.blockScroll();
    expect(document.body.style.overflow).toBe('hidden');
    result.current.allowScroll();
    expect(document.body.style.overflow).not.toBe('hidden');
    expect(document.body).toHTMLValidate();
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
    expect(document.body).toHTMLValidate();
  });

  it('preventScrollOnUnomittedElements - touchevent will prevent default when call to blockScroll when elementsToOmit do not containt the target element', () => {
    const { result } = renderHook(() => useScrollBlock());

    const div = document.createElement('div');
    const event = {
      target: div,
    };
    result.current.blockScroll({
      elementsToOmit: [document.createElement('div')],
    });
    fireEvent.touchMove(document.body, event);

    expect(preventDefaultMock).toHaveBeenCalled();

    result.current.allowScroll();
    expect(document.body).toHTMLValidate();
  });

  it('preventScrollOnOmittedElements - touchevent will preventDefault when call to blockScroll fot elementsToOmit if not scrollable', () => {
    const { result } = renderHook(() => useScrollBlock());

    const elementToOmit = document.createElement('div');

    const event = {
      target: elementToOmit,
    };
    result.current.blockScroll({ elementsToOmit: [elementToOmit] });
    vi.spyOn(
      useScrollBlockUtils,
      'getFirstScrollableElement',
    ).mockReturnValueOnce(null);
    fireEvent.touchMove(elementToOmit, event);

    expect(preventDefaultMock).toHaveBeenCalled();

    result.current.allowScroll();
    expect(document.body).toHTMLValidate();
  });

  it('preventScrollOnOmittedElements - touchevent on elementsToOmit will not prevent default when scrollable', () => {
    const { result } = renderHook(() => useScrollBlock());

    const elementToOmit = document.createElement('div');

    const event = {
      target: elementToOmit,
    };
    result.current.blockScroll({ elementsToOmit: [elementToOmit] });
    vi.spyOn(
      useScrollBlockUtils,
      'getFirstScrollableElement',
    ).mockReturnValueOnce(elementToOmit);
    fireEvent.touchMove(elementToOmit, event);

    expect(preventDefaultMock).not.toHaveBeenCalled();

    result.current.allowScroll();
    expect(document.body).toHTMLValidate();
  });

  it('preventScrollBackgroundOnOmittedElements - touchstart on elementsToOmit will not do anything if target does not have a scrollableElement', () => {
    const { result } = renderHook(() => useScrollBlock());

    const elementToOmit = document.createElement('div');
    const mockScroll = vi.fn();
    elementToOmit.scrollTo = mockScroll;

    const event = {
      target: elementToOmit,
    };
    result.current.blockScroll({ elementsToOmit: [elementToOmit] });

    vi.spyOn(
      useScrollBlockUtils,
      'getFirstScrollableElement',
    ).mockReturnValueOnce(null);
    fireEvent.touchStart(elementToOmit, event);

    expect(mockScroll).not.toHaveBeenCalled();

    result.current.allowScroll();
    expect(document.body).toHTMLValidate();
  });

  it('preventScrollBackgroundOnOmittedElements - touchstart on elementsToOmit will call to scrollTo (1px) if it is scrollable and it is at the top', () => {
    const { result } = renderHook(() => useScrollBlock());

    const elementToOmit = document.createElement('div');
    const mockScrollTo = vi.fn();
    elementToOmit.scrollTo = mockScrollTo;
    elementToOmit.scrollTop = 0;
    const event = {
      target: elementToOmit,
    };
    result.current.blockScroll({ elementsToOmit: [elementToOmit] });

    vi.spyOn(
      useScrollBlockUtils,
      'getFirstScrollableElement',
    ).mockReturnValueOnce(elementToOmit);
    fireEvent.touchStart(elementToOmit, event);

    expect(mockScrollTo).toHaveBeenCalled();

    result.current.allowScroll();
    expect(document.body).toHTMLValidate();
  });

  it('preventScrollBackgroundOnOmittedElements - touchstart on elementsToOmit will call to scrollTo (1px) if it is scrollable and it is at the bottom', () => {
    const { result } = renderHook(() => useScrollBlock());

    const elementToOmit = document.createElement('div');
    const mockScroll = vi.fn();
    elementToOmit.scrollTo = mockScroll;

    Object.defineProperty(elementToOmit, 'scrollTop', {
      value: 50,
      writable: true,
    });
    Object.defineProperty(elementToOmit, 'offsetHeight', {
      value: 50,
      writable: true,
    });
    Object.defineProperty(elementToOmit, 'scrollHeight', {
      value: 100,
      writable: true,
    });

    const event = {
      target: elementToOmit,
    };
    result.current.blockScroll({ elementsToOmit: [elementToOmit] });

    vi.spyOn(
      useScrollBlockUtils,
      'getFirstScrollableElement',
    ).mockReturnValueOnce(elementToOmit);
    fireEvent.touchStart(elementToOmit, event);

    expect(mockScroll).toHaveBeenCalled();

    result.current.allowScroll();
    expect(document.body).toHTMLValidate();
  });
});
