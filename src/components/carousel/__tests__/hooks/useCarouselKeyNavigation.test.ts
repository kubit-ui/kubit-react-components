import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { IUseCarouselKeyNavigationParams } from '../../hooks/types/useCarouselKeyNavigation';
import { useCarouselKeyNavigation } from '../../hooks/useCarouselKeyNavigation';

describe('useCarouselKeyNavigation', () => {
  let rootContainer: HTMLDivElement;
  let rootContainerRef: React.RefObject<HTMLDivElement>;
  let allowShiftRef: React.MutableRefObject<boolean>;
  let currentPageRef: React.MutableRefObject<number>;
  let numPagesRef: React.MutableRefObject<number>;
  let changePage: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    rootContainer = document.createElement('div');
    document.body.appendChild(rootContainer);

    rootContainerRef = { current: rootContainer };
    allowShiftRef = { current: true };
    currentPageRef = { current: 0 };
    numPagesRef = { current: 3 };
    changePage = vi.fn();
  });

  afterEach(() => {
    rootContainer.remove();
    vi.clearAllMocks();
  });

  const renderUseCarouselKeyNavigation = (props = {}) => {
    const defaultProps = {
      rootContainerRef,
      allowShiftRef,
      circular: false,
      currentPageRef,
      numPagesRef,
      disabled: false,
      changePage,
    };

    return renderHook(() =>
      useCarouselKeyNavigation({
        ...defaultProps,
        ...props,
      } as IUseCarouselKeyNavigationParams),
    );
  };

  const dispatchKeyboardEvent = (key: string) => {
    const event = new KeyboardEvent('keydown', { key });
    rootContainer.dispatchEvent(event);
  };

  describe('event listeners setup', () => {
    it('should add keydown event listener to root container', () => {
      const addEventListenerSpy = vi.spyOn(rootContainer, 'addEventListener');

      renderUseCarouselKeyNavigation();

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function),
      );
    });

    it('should remove keydown event listener when unmounted', () => {
      const removeEventListenerSpy = vi.spyOn(
        rootContainer,
        'removeEventListener',
      );

      const { unmount } = renderUseCarouselKeyNavigation();
      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function),
      );
    });

    it('should not add event listeners when disabled', () => {
      const addEventListenerSpy = vi.spyOn(rootContainer, 'addEventListener');

      renderUseCarouselKeyNavigation({ disabled: true });

      expect(addEventListenerSpy).not.toHaveBeenCalled();
    });
  });

  describe('arrow left navigation', () => {
    it('should go to previous page when arrow left is pressed and current page is not first', () => {
      currentPageRef.current = 1;
      renderUseCarouselKeyNavigation();

      dispatchKeyboardEvent('ArrowLeft');

      expect(changePage).toHaveBeenCalledWith({ newPage: 0 });
    });

    it('should not go to previous page when arrow left is pressed and current page is first (non-circular)', () => {
      currentPageRef.current = 0;
      renderUseCarouselKeyNavigation({ circular: false });

      dispatchKeyboardEvent('ArrowLeft');

      expect(changePage).not.toHaveBeenCalled();
    });

    it('should go to last page when arrow left is pressed and current page is first (circular)', () => {
      currentPageRef.current = 0;
      renderUseCarouselKeyNavigation({ circular: true });

      dispatchKeyboardEvent('ArrowLeft');

      expect(changePage).toHaveBeenCalledWith({ newPage: -1 });
    });

    it('should not navigate when allowShiftRef is false', () => {
      allowShiftRef.current = false;
      currentPageRef.current = 1;
      renderUseCarouselKeyNavigation();

      dispatchKeyboardEvent('ArrowLeft');

      expect(changePage).not.toHaveBeenCalled();
    });
  });

  describe('arrow right navigation', () => {
    it('should go to next page when arrow right is pressed and current page is not last', () => {
      currentPageRef.current = 1;
      renderUseCarouselKeyNavigation();

      dispatchKeyboardEvent('ArrowRight');

      expect(changePage).toHaveBeenCalledWith({ newPage: 2 });
    });

    it('should not go to next page when arrow right is pressed and current page is last (non-circular)', () => {
      currentPageRef.current = 2; // last page (numPages = 3)
      renderUseCarouselKeyNavigation({ circular: false });

      dispatchKeyboardEvent('ArrowRight');

      expect(changePage).not.toHaveBeenCalled();
    });

    it('should go to first page when arrow right is pressed and current page is last (circular)', () => {
      currentPageRef.current = 2; // last page (numPages = 3)
      renderUseCarouselKeyNavigation({ circular: true });

      dispatchKeyboardEvent('ArrowRight');

      expect(changePage).toHaveBeenCalledWith({ newPage: 3 });
    });

    it('should not navigate when allowShiftRef is false', () => {
      allowShiftRef.current = false;
      currentPageRef.current = 1;
      renderUseCarouselKeyNavigation();

      dispatchKeyboardEvent('ArrowRight');

      expect(changePage).not.toHaveBeenCalled();
    });
  });

  describe('edge cases', () => {
    it('should not navigate when there is one or less pages', () => {
      numPagesRef.current = 1;
      renderUseCarouselKeyNavigation();

      dispatchKeyboardEvent('ArrowLeft');
      dispatchKeyboardEvent('ArrowRight');

      expect(changePage).not.toHaveBeenCalled();
    });

    it('should handle when rootContainerRef is null', () => {
      const nullRootContainerRef = { current: null };

      expect(() =>
        renderUseCarouselKeyNavigation({
          rootContainerRef: nullRootContainerRef,
        }),
      ).not.toThrow();
    });
  });
});
