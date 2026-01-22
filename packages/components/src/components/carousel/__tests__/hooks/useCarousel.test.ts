import { act, renderHook } from '@testing-library/react';
import { type RefObject, createElement } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { IUseCarouselParams } from '../../hooks/types/useCarousel';

import { useCarousel } from '../../hooks/useCarousel';
import { useCarouselKeyNavigation } from '../../hooks/useCarouselKeyNavigation';
import { useCarouselSwipe } from '../../hooks/useCarouselSwipe';
import calcUtils from '../../hooks/utils/calc.utils';
import domUtils from '../../hooks/utils/dom.utils';

// Mock the utility modules
vi.mock('../../hooks/utils/calc.utils', () => ({
  default: {
    calcContentContainerLeftPosition: vi.fn(() => '-100px'),
    calcFirstAndLastIndexInCarouselView: vi.fn(() => ({
      firstIndexInView: 0,
      lastIndexInView: 1,
    })),
    calcNumElementsPerPage: vi.fn(() => 2),
    calcNumPages: vi.fn(() => 3),
  },
}));

vi.mock('../../hooks/utils/dom.utils', () => ({
  default: {
    alignOnePageCarousel: vi.fn(),
    applyCenterMode: vi.fn(),
    deleteCenterMode: vi.fn(),
    manageCircularClones: vi.fn(),
    udpateCarouselPositionOnEdge: vi.fn(() => ({ newPage: 0 })),
    updateContentElementsAriaVisibility: vi.fn(),
    updateSlicesWidth: vi.fn(),
    updateViewerWidth: vi.fn(),
  },
}));

// Mock the hooks that are already tested
vi.mock('../../hooks/useCarouselSwipe', () => ({
  useCarouselSwipe: vi.fn(),
}));

vi.mock('../../hooks/useCarouselKeyNavigation', () => ({
  useCarouselKeyNavigation: vi.fn(),
}));

// Get typed versions of the mocks
const mockCalcUtils = vi.mocked(calcUtils);
const mockDomUtils = vi.mocked(domUtils);
const mockUseCarouselSwipe = vi.mocked(useCarouselSwipe);
const mockUseCarouselKeyNavigation = vi.mocked(useCarouselKeyNavigation);

const createTransitionEvent = (propertyName: string) => {
  // Simulate transition end event
  const transitionEvent = new Event('transitionend');
  // @ts-expect-error new TranstionEvent does not exist in all environments
  transitionEvent.propertyName = propertyName;
  return transitionEvent;
};

describe('useCarousel', () => {
  let rootContainer: HTMLDivElement;
  let viewerContainer: HTMLDivElement;
  let contentContainer: HTMLDivElement;
  let rootContainerRef: RefObject<HTMLDivElement>;
  let viewerContainerRef: RefObject<HTMLDivElement>;
  let contentContainerRef: RefObject<HTMLDivElement>;
  const numElements = 6;
  const elementWidth = 300;
  let mockElements: JSX.Element[];
  let onNumPagesChange: ReturnType<typeof vi.fn>;
  let onNumElementsPerPageChange: ReturnType<typeof vi.fn>;
  let onPageChange: ReturnType<typeof vi.fn>;

  // Mock ResizeObserver and window.addEventListener
  class MockResizeObserver {
    callback;
    disconnect = vi.fn();
    observe = vi.fn((target) => {
      // Trigger callback immediately when observe is called
      if (this.callback) {
        this.callback([{ target }], this);
      }
    });
    unobserve = vi.fn();
    constructor(callback) {
      this.callback = callback;
    }
  }

  beforeEach(() => {
    // Create DOM elements
    rootContainer = document.createElement('div');
    viewerContainer = document.createElement('div');
    contentContainer = document.createElement('div');

    // Create a hierarchy
    rootContainer.appendChild(viewerContainer);
    viewerContainer.appendChild(contentContainer);
    document.body.appendChild(rootContainer);

    // Set up refs
    rootContainerRef = { current: rootContainer };
    viewerContainerRef = { current: viewerContainer };
    contentContainerRef = { current: contentContainer };

    // Mock functions
    onNumPagesChange = vi.fn();
    onNumElementsPerPageChange = vi.fn();
    onPageChange = vi.fn();

    // Mock window methods
    vi.stubGlobal('ResizeObserver', MockResizeObserver);
    global.addEventListener = vi.fn();
    global.removeEventListener = vi.fn();

    // Mock DOM properties
    Object.defineProperty(rootContainer, 'offsetWidth', {
      configurable: true,
      get: () => 700,
    });

    // Mock the style.width since JSDOM does not support fit-content
    let mockWidth = '';
    Object.defineProperty(rootContainer.style, 'width', {
      configurable: true,
      get: () => mockWidth,
      set: (value) => {
        mockWidth = value;
      },
    });

    Object.defineProperty(viewerContainer, 'offsetWidth', {
      configurable: true,
      get: () => 700,
    });

    Object.defineProperty(contentContainer, 'offsetWidth', {
      configurable: true,
      get: () => numElements * elementWidth,
    });

    // Mock content container style and classList
    contentContainer.style.left = '0px';
    contentContainer.classList.add = vi.fn();
    contentContainer.classList.remove = vi.fn();
    contentContainer.setAttribute = vi.fn();
    contentContainer.removeAttribute = vi.fn();

    // Add mock children to contentContainer
    mockElements = Array.from({ length: numElements }, (_, i) =>
      createElement('div', { 'data-testid': `element-${i}`, key: i }),
    );

    for (let i = 0; i < numElements; i++) {
      const child = document.createElement('div');
      child.style.width = `${elementWidth}px`;
      contentContainer.appendChild(child);
    }

    // Reset all mocks to their default behavior before each test
    mockCalcUtils.calcFirstAndLastIndexInCarouselView.mockReturnValue({
      firstIndexInView: 0,
      lastIndexInView: 1,
    });
    mockCalcUtils.calcNumElementsPerPage.mockReturnValue(2);
    mockCalcUtils.calcNumPages.mockReturnValue(3);
    mockCalcUtils.calcContentContainerLeftPosition.mockReturnValue('-100px');

    mockDomUtils.udpateCarouselPositionOnEdge.mockReturnValue({ newPage: 0 });
  });

  afterEach(() => {
    rootContainer.remove();
    vi.clearAllMocks();
  });

  const renderUseCarousel = (props = {}) => {
    const defaultProps = {
      contentContainerRef,
      defaultPage: 0,
      elements: mockElements,
      onNumElementsPerPageChange,
      onNumPagesChange,
      onPageChange,
      rootContainerRef,
      viewerContainerRef,
    };

    return renderHook(() =>
      useCarousel({ ...defaultProps, ...props } as IUseCarouselParams),
    );
  };

  describe('initialization', () => {
    it('should initialize with default values', () => {
      const { result } = renderUseCarousel();

      expect(result.current).toHaveProperty('changePage');
      expect(result.current).toHaveProperty('allowShiftRef');
      expect(result.current.allowShiftRef.current).toBe(true);
    });

    it('should autocalc the numElementsPerPage if not provided', () => {
      renderUseCarousel();

      // Since width is 700 and element width is 300, should calculate 2 elements per page
      expect(onNumElementsPerPageChange).toHaveBeenCalledWith(2);
    });

    it('should NOT autocalc the numElementsPerPage if  provided', () => {
      renderUseCarousel({ numElementsPerPage: 3 });

      expect(mockCalcUtils.calcNumElementsPerPage).not.toHaveBeenCalled();
      expect(onNumElementsPerPageChange).not.toHaveBeenCalled();
    });
  });

  describe('changePage function', () => {
    it('should change page when conditions are met', () => {
      const { result } = renderUseCarousel();

      act(() => {
        // Animated false to simulate transition end
        result.current.changePage({ newPage: 1 });
      });

      // When change page is called
      // data-shifting attribute should be added to contentContainer (this would make the carousel animate)
      // Delete center mode should be called, in order to redo the animation "centerMode" after transition ends
      // calcFirstAndLastIndexInCarouselView in order to calculate the new first and last index in view attenting to the new page
      // calcContentContainerLeftPosition in order to calc the new left position
      expect(contentContainer.setAttribute).toHaveBeenCalledWith(
        'data-shifting',
        'true',
      );
      expect(mockDomUtils.deleteCenterMode).toHaveBeenCalled();
      expect(
        mockCalcUtils.calcFirstAndLastIndexInCarouselView,
      ).toHaveBeenCalledWith(expect.objectContaining({ currentPage: 1 }));
      expect(
        mockCalcUtils.calcContentContainerLeftPosition,
      ).toHaveBeenCalledWith(
        expect.objectContaining({
          currentPage: 1,
        }),
      );
    });

    it('should change page without animation when animated is false', () => {
      const { result } = renderUseCarousel();

      act(() => {
        result.current.changePage({ animated: false, newPage: 1 });
      });

      // When change page is called with animated false
      // data-shifting attribute should not be added to contentContainer
      expect(contentContainer.setAttribute).not.toHaveBeenCalledWith(
        'data-shifting',
        'true',
      );
    });

    it('should not change page when allowShiftRef is false', () => {
      const { result } = renderUseCarousel();

      // Set allowShiftRef to false
      act(() => {
        result.current.allowShiftRef.current = false;
      });

      act(() => {
        result.current.changePage({ newPage: 1 });
      });

      expect(contentContainer.setAttribute).not.toHaveBeenCalledWith(
        'data-shifting',
        'true',
      );
    });

    it('should not change page when containers are not available', () => {
      const { result } = renderUseCarousel({
        contentContainerRef: { current: null },
        rootContainerRef: { current: null },
        viewerContainerRef: { current: null },
      });

      act(() => {
        result.current.changePage({ newPage: 1 });
      });

      // Should not throw and not call any DOM methods
      expect(contentContainer.setAttribute).not.toHaveBeenCalledWith(
        'data-shifting',
        'true',
      );
    });

    it('should not change page when elements array is empty', () => {
      const { result } = renderUseCarousel({ elements: [] });

      act(() => {
        result.current.changePage({ newPage: 1 });
      });

      expect(contentContainer.setAttribute).not.toHaveBeenCalledWith(
        'data-shifting',
        'true',
      );
    });

    it('should validate page bounds and reject invalid pages', () => {
      const { result } = renderUseCarousel({ circular: false });

      // Try to change to negative page (not circular)
      act(() => {
        result.current.changePage({ newPage: -1 });
      });

      expect(contentContainer.setAttribute).not.toHaveBeenCalledWith(
        'data-shifting',
        'true',
      );

      // Try to change to page beyond bounds
      act(() => {
        result.current.changePage({ newPage: 3 });
      });

      expect(contentContainer.setAttribute).not.toHaveBeenCalledWith(
        'data-shifting',
        'true',
      );
    });

    it('should allow changing to edge pages in circular mode', () => {
      const { result } = renderUseCarousel({ circular: true });

      // Should allow changing to -1 (circular)
      act(() => {
        result.current.changePage({ newPage: -1 });
      });

      expect(contentContainer.setAttribute).toHaveBeenCalledWith(
        'data-shifting',
        'true',
      );
    });
  });

  describe('transition handling', () => {
    it('should handle transitionend event correctly', async () => {
      renderUseCarousel();

      // Simulate transition end event
      const transitionEvent = createTransitionEvent('left');

      act(() => {
        contentContainer.dispatchEvent(transitionEvent);
      });

      expect(contentContainer.setAttribute).toHaveBeenCalledWith(
        'data-shifting',
        'false',
      );
    });

    it('should ignore transitionend event for non-left properties', () => {
      renderUseCarousel();

      // To times initially because of:
      // 1 - init carousel
      // 2 - mock of the ResizeObserver
      expect(contentContainer.setAttribute).toHaveBeenCalledTimes(2);

      // Simulate transition end event for different property
      const transitionEvent = createTransitionEvent('width');

      act(() => {
        contentContainer.dispatchEvent(transitionEvent);
      });

      // Non left transitions should be ignored in the transitionend handler
      expect(contentContainer.setAttribute).toHaveBeenCalledTimes(2);
    });

    it('should add and remove transitionend event listener', () => {
      const addEventListenerSpy = vi.spyOn(
        contentContainer,
        'addEventListener',
      );
      const removeEventListenerSpy = vi.spyOn(
        contentContainer,
        'removeEventListener',
      );

      const { unmount } = renderUseCarousel();

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'transitionend',
        expect.any(Function),
      );

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'transitionend',
        expect.any(Function),
      );
    });
  });

  describe('center mode', () => {
    it('should apply center mode after transition when enabled', () => {
      renderUseCarousel({ centerMode: true });

      // Simulate transition end to trigger center mode application
      const transitionEvent = createTransitionEvent('left');

      act(() => {
        contentContainer.dispatchEvent(transitionEvent);
      });

      expect(mockDomUtils.applyCenterMode).toHaveBeenCalled();
    });

    it('should delete center mode before changing page', () => {
      const { result } = renderUseCarousel({ centerMode: true });

      act(() => {
        result.current.changePage({ newPage: 1 });
      });

      expect(mockDomUtils.deleteCenterMode).toHaveBeenCalledWith({
        contentContainer,
      });
    });
  });

  describe('circular mode', () => {
    it('should manage circular clones when circular mode is enabled', () => {
      renderUseCarousel({ circular: true });
      expect(mockDomUtils.manageCircularClones).toHaveBeenCalledWith(
        expect.objectContaining({ circular: true }),
      );
    });
    it('should not manage circular clones when circular mode is disabled', () => {
      renderUseCarousel({ circular: false });
      expect(mockDomUtils.manageCircularClones).toHaveBeenCalledWith(
        expect.objectContaining({ circular: false }),
      );
    });
  });

  describe('extra padding', () => {
    it('should handle extra padding in calculations', () => {
      renderUseCarousel({ extraPadding: 20 });

      expect(
        mockCalcUtils.calcContentContainerLeftPosition,
      ).toHaveBeenCalledWith(
        expect.objectContaining({
          extraPadding: 20,
        }),
      );
    });

    it('should handle centerExtremesWhenExtraPadding option', () => {
      renderUseCarousel({
        centerExtremesWhenExtraPadding: true,
        extraPadding: 20,
      });

      expect(
        mockCalcUtils.calcContentContainerLeftPosition,
      ).toHaveBeenCalledWith(
        expect.objectContaining({
          centerExtremesWhenExtraPadding: true,
        }),
      );
    });
  });

  describe('slice width modification', () => {
    it('should update slice width when allowModifySliceWidth is true', () => {
      renderUseCarousel({ allowModifySliceWidth: true });

      expect(mockDomUtils.updateSlicesWidth).toHaveBeenCalled();
    });

    it('should update viewer width when allowModifySliceWidth is false', () => {
      const { result } = renderUseCarousel({ allowModifySliceWidth: false });

      act(() => {
        result.current.changePage({ newPage: 1 });
      });

      expect(mockDomUtils.updateViewerWidth).toHaveBeenCalled();
    });
  });

  describe('autoFitContainer', () => {
    it('should set root container width to fit-content when autoFitContainer is true', () => {
      renderUseCarousel({ autoFitContainer: true });

      expect(rootContainer.style.width).toBe('fit-content');
    });

    it('should keep root container width as 100% when autoFitContainer is false', () => {
      renderUseCarousel({ autoFitContainer: false });

      expect(rootContainer.style.width).toBe('100%');
    });
  });

  describe('onePageAlign', () => {
    it('should align carousel when there is only one page', () => {
      // Mock calcNumPages to return 1
      mockCalcUtils.calcNumPages.mockReturnValue(1);

      renderUseCarousel({ onePageAlign: 'left' });

      expect(mockDomUtils.alignOnePageCarousel).toHaveBeenCalledWith({
        allowModifySliceWidth: false,
        contentContainer,
        onePageAlign: 'left',
        rootContainer,
      });
    });
  });

  describe('disabled state', () => {
    it('should pass disabled state to child hooks', () => {
      renderUseCarousel({ disabled: true });

      expect(mockUseCarouselSwipe).toHaveBeenCalledWith(
        expect.objectContaining({ disabled: true }),
      );

      expect(mockUseCarouselKeyNavigation).toHaveBeenCalledWith(
        expect.objectContaining({ disabled: true }),
      );
    });
  });

  describe('callback functions', () => {
    it('should call onPageChange when page changes after transition', () => {
      renderUseCarousel({ defaultPage: 0 });

      // Simulate page change by setting refs
      mockDomUtils.udpateCarouselPositionOnEdge.mockReturnValue({ newPage: 1 });

      // Simulate transition end event
      const transitionEvent = createTransitionEvent('left');

      act(() => {
        contentContainer.dispatchEvent(transitionEvent);
      });

      expect(onPageChange).toHaveBeenCalledWith(1);
    });

    it('should not call onPageChange when page has not actually changed', () => {
      renderUseCarousel({ defaultPage: 0 });

      // Mock udpateCarouselPositionOnEdge to return same page
      mockDomUtils.udpateCarouselPositionOnEdge.mockReturnValue({ newPage: 0 });

      // Simulate transition end event
      const transitionEvent = createTransitionEvent('left');

      act(() => {
        contentContainer.dispatchEvent(transitionEvent);
      });

      expect(onPageChange).not.toHaveBeenCalled();
    });
  });

  describe('edge cases', () => {
    it('should handle missing containers gracefully', () => {
      const { result } = renderUseCarousel({
        contentContainerRef: { current: null },
        rootContainerRef: { current: null },
        viewerContainerRef: { current: null },
      });

      // Should not throw when trying to use the hook
      expect(result.current.changePage).toBeDefined();
      expect(result.current.allowShiftRef.current).toBe(true);
    });
  });
});
