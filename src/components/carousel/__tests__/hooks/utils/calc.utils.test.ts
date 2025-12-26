import { describe, expect, it, vi } from 'vitest';

import {
  calcAdjustedNumElementsToSlide,
  calcContentContainerLeftPosition,
  calcFirstAndLastIndexInCarouselView,
  calcGapBetweenContentContainerElements,
  calcHorizontalElementPadding,
  calcNumElementsPerPage,
  calcNumPages,
  calcSliceWidth,
  calcViewerWidth,
  calcXDistanceBetween2Elements,
} from '../../../hooks/utils/calc.utils';

describe('calc.utils', () => {
  // Mock dom helpers
  const DOMRectBuilder = (props: Partial<DOMRect>): DOMRect => {
    return {
      left: props.left ?? 0,
      right: props.right ?? 0,
      top: props.top ?? 0,
      bottom: props.bottom ?? 0,
      width: props.width ?? 0,
      height: props.height ?? 0,
      x: props.x ?? 0,
      y: props.y ?? 0,
      toJSON: () => ({}),
    };
  };

  const createElement = ({
    offsetLeft,
    offsetWidth,
    children = [],
    getBoundingClientRect,
  }: {
    offsetLeft?: number;
    offsetWidth?: number;
    children?: HTMLElement[];
    getBoundingClientRect?: () => DOMRect;
  }) => {
    const element = document.createElement('div');
    Object.defineProperty(element, 'offsetLeft', {
      get: () => offsetLeft ?? 0,
    });
    Object.defineProperty(element, 'offsetWidth', {
      get: () => offsetWidth ?? 0,
    });
    Object.defineProperty(element, 'getBoundingClientRect', {
      value: getBoundingClientRect ?? (() => DOMRectBuilder({})),
    });
    for (const child of children) {
      element.appendChild(child);
    }
    return element;
  };

  describe('calcHorizontalElementPadding', () => {
    it('should calculate the horizontal padding of an element, that is the left and right padding combined', () => {
      const element = createElement({});
      element.style.paddingLeft = '15px';
      element.style.paddingRight = '25px';
      const horizontalPadding = calcHorizontalElementPadding({ element });
      expect(horizontalPadding).toBe(40);
    });

    it('should return 0 when no padding is set', () => {
      const element = createElement({});
      const horizontalPadding = calcHorizontalElementPadding({ element });
      expect(horizontalPadding).toBe(0);
    });
  });

  describe('calcXDistanceBetween2Elements', () => {
    it('should return 0 when either element is null', () => {
      const el1 = document.createElement('div');
      expect(calcXDistanceBetween2Elements(null, el1)).toBe(0);
      expect(calcXDistanceBetween2Elements(el1, null)).toBe(0);
      expect(calcXDistanceBetween2Elements(null, null)).toBe(0);
    });

    it('should calculate the absolute distance between two elements', () => {
      const el1 = createElement({ offsetLeft: 10, offsetWidth: 20 });
      const el2 = createElement({ offsetLeft: 50, offsetWidth: 20 });

      expect(calcXDistanceBetween2Elements(el1, el2)).toBe(40);
      expect(calcXDistanceBetween2Elements(el2, el1)).toBe(40);
    });

    it('should return 0 when elements have the same offsetLeft', () => {
      const el1 = createElement({ offsetLeft: 25 });
      const el2 = createElement({ offsetLeft: 25 });

      expect(calcXDistanceBetween2Elements(el1, el2)).toBe(0);
    });
  });

  describe('calcAdjustedNumElementsToSlide', () => {
    it('should return numElementsPerPage when numElementsToSlide is not provided', () => {
      expect(calcAdjustedNumElementsToSlide({ numElementsPerPage: 5 })).toBe(5);
    });

    it('should return numElementsPerPage when numElementsToSlide exceeds it', () => {
      expect(
        calcAdjustedNumElementsToSlide({
          numElementsPerPage: 3,
          numElementsToSlide: 5,
        }),
      ).toBe(3);
    });

    it('should return numElementsToSlide when numElementsToSlide is less than or equal to numElementsPerPage', () => {
      expect(
        calcAdjustedNumElementsToSlide({
          numElementsPerPage: 3,
          numElementsToSlide: 2,
        }),
      ).toBe(2);
    });

    it('should return 1 when numElementsToSlide is less than 1', () => {
      expect(
        calcAdjustedNumElementsToSlide({
          numElementsPerPage: -1,
          numElementsToSlide: -1,
        }),
      ).toBe(1);
    });
  });

  describe('calcNumPages', () => {
    it('should return 1 when elementsLength is less than or equal to numElementsPerPage', () => {
      expect(
        calcNumPages({
          elementsLength: 3,
          numElementsPerPage: 5,
        }),
      ).toBe(1);

      expect(
        calcNumPages({
          elementsLength: 5,
          numElementsPerPage: 5,
        }),
      ).toBe(1);
    });

    it('should calculate correct number of pages with default sliding (numElementsPerPage)', () => {
      expect(
        calcNumPages({
          elementsLength: 10,
          numElementsPerPage: 3,
        }),
      ).toBe(4);
    });

    it('should calculate correct number of pages with custom sliding', () => {
      expect(
        calcNumPages({
          elementsLength: 10,
          numElementsPerPage: 3,
          numElementsToSlide: 2,
        }),
      ).toBe(5);
    });

    it('should handle edge cases correctly', () => {
      expect(
        calcNumPages({
          elementsLength: 7,
          numElementsPerPage: 3,
          numElementsToSlide: 1,
        }),
      ).toBe(5);
    });
  });

  describe('calcFirstAndLastIndexInCarouselView', () => {
    it('should return all elements when elementsLength <= numElementsPerPage', () => {
      const result = calcFirstAndLastIndexInCarouselView({
        elementsLength: 2,
        numElementsPerPage: 3,
        currentPage: 0,
        isCircular: false,
      });

      expect(result).toEqual({
        firstIndexInView: 0,
        lastIndexInView: 1,
      });
    });

    it('should calculate correct indices for non-circular carousel', () => {
      const result = calcFirstAndLastIndexInCarouselView({
        elementsLength: 10,
        numElementsPerPage: 3,
        isCircular: false,
        currentPage: 1,
      });

      expect(result).toEqual({
        firstIndexInView: 3,
        lastIndexInView: 5,
      });
    });

    it('should handle circular carousel with cloned elements', () => {
      const result = calcFirstAndLastIndexInCarouselView({
        elementsLength: 10,
        numElementsPerPage: 3,
        isCircular: true,
        currentPage: 1,
      });

      // Cloned elements are numElementsPerPage + 1
      expect(result).toEqual({
        firstIndexInView: 7,
        lastIndexInView: 9,
      });
    });

    it('should handle negative currentPage in circular mode', () => {
      const result = calcFirstAndLastIndexInCarouselView({
        elementsLength: 10,
        numElementsPerPage: 3,
        isCircular: true,
        currentPage: -1,
      });

      // Cloned elements are numElementsPerPage + 1
      expect(result).toEqual({
        firstIndexInView: 1,
        lastIndexInView: 3,
      });
    });
  });

  describe('calcNumElementsPerPage', () => {
    it('should return undefined when contentContainer has no children', () => {
      const mockContainers = {
        viewerContainer: createElement({ offsetWidth: 500 }),
        rootContainer: createElement({ offsetWidth: 500 }),
        contentContainer: createElement({}),
        elementsLength: 5,
        extraPadding: 10,
      };

      expect(calcNumElementsPerPage(mockContainers)).toBeUndefined();
    });

    it('should calculate number of elements that fit within container width', () => {
      const rootContainer = createElement({
        offsetWidth: 300,
      });

      const viewerContainer = createElement({});

      const contentContainer = createElement({
        children: [
          createElement({ offsetLeft: 0, offsetWidth: 100 }),
          createElement({ offsetLeft: 110, offsetWidth: 100 }),
          createElement({ offsetLeft: 220, offsetWidth: 100 }),
          createElement({ offsetLeft: 330, offsetWidth: 100 }),
          createElement({ offsetLeft: 440, offsetWidth: 100 }),
        ],
      });

      const mockContainers = {
        rootContainer,
        viewerContainer,
        contentContainer,
        elementsLength: 5,
        extraPadding: 0,
      };

      // Assuming each elements is 100px with a gap of 10px
      // And rootContainer width is 300px
      // We can fit only 2 elements
      const result = calcNumElementsPerPage(mockContainers);
      expect(result).toBe(2);
    });
  });

  describe('calcGapBetweenContentContainerElements', () => {
    it('should return 0 when there are less than 2 child nodes', () => {
      const contentContainer = createElement({
        children: [createElement({})],
      });

      const result = calcGapBetweenContentContainerElements({
        contentContainer,
        centerMode: false,
      });

      expect(result).toBe(0);
    });

    it('should calculate gap between first two elements', () => {
      const contentContainer = createElement({
        children: [
          createElement({
            getBoundingClientRect: () => DOMRectBuilder({ right: 100 }),
          }),
          createElement({
            getBoundingClientRect: () => DOMRectBuilder({ left: 110 }),
          }),
        ],
      });

      const result = calcGapBetweenContentContainerElements({
        contentContainer,
        centerMode: false,
      });

      expect(result).toBe(10);
    });

    it('should handle centerMode by temporarily removing transforms', () => {
      const firstElement = createElement({
        getBoundingClientRect: () => DOMRectBuilder({ right: 100 }),
      });
      const secondElement = createElement({
        getBoundingClientRect: () => DOMRectBuilder({ left: 110 }),
      });
      firstElement.style.removeProperty = vi.fn();
      secondElement.style.removeProperty = vi.fn();
      const contentContainer = createElement({
        children: [firstElement, secondElement],
      });

      const result = calcGapBetweenContentContainerElements({
        contentContainer,
        centerMode: true,
      });

      expect(result).toBe(10);
      expect(firstElement.style.removeProperty).toHaveBeenCalled();
      expect(secondElement.style.removeProperty).toHaveBeenCalled();
    });
  });

  describe('calcSliceWidth', () => {
    it('should calculate slice width correctly', () => {
      // Gap of 10
      const contentContainer = createElement({
        children: [
          createElement({
            getBoundingClientRect: () => DOMRectBuilder({ right: 100 }),
          }),
          createElement({
            getBoundingClientRect: () => DOMRectBuilder({ left: 110 }),
          }),
        ],
      });

      const viewerContainer = createElement({
        getBoundingClientRect: () => DOMRectBuilder({ width: 300 }),
      });

      const result = calcSliceWidth({
        viewerContainer,
        contentContainer,
        centerMode: false,
        numElementsPerPage: 3,
        extraPadding: 10,
      });

      // viewer width is 300
      // 3 elements per page
      // gapSpace = 10
      // extraPadding = 10 (to delete)
      // (viewerWidth - gapSpace - 2*extraPadding) / numElementsPerPage
      expect(result).toBeCloseTo(86.67, 1);
    });
  });

  describe('calcViewerWidth', () => {
    it('should calculate viewer width based on elements in view', () => {
      const viewerContainer = createElement({
        offsetWidth: 500,
      });
      const contentContainer = createElement({
        children: [
          createElement({
            offsetLeft: 0,
            offsetWidth: 100,
          }),
          createElement({
            offsetLeft: 100,
            offsetWidth: 100,
          }),
          createElement({
            offsetLeft: 200,
            offsetWidth: 100,
          }),
        ],
      });

      const result = calcViewerWidth({
        viewerContainer,
        contentContainer,
        firstIndexInView: 0,
        lastIndexInView: 2,
        extraPadding: 10,
      });

      // Plus extraPadding
      expect(result).toBe('320px');
    });

    it('should calculate viewer width without extra padding', () => {
      const viewerContainer = createElement({});
      const contentContainer = createElement({
        children: [
          createElement({
            offsetLeft: 0,
            offsetWidth: 100,
          }),
          createElement({
            offsetLeft: 100,
            offsetWidth: 100,
          }),
        ],
      });

      const result = calcViewerWidth({
        viewerContainer,
        contentContainer,
        firstIndexInView: 0,
        lastIndexInView: 1,
        extraPadding: 0,
      });

      expect(result).toBe('200px');
    });
  });

  describe('calcContentContainerLeftPosition', () => {
    it('should calculate left position for non-circular carousel', () => {
      const contentContainer = createElement({
        children: [
          createElement({ offsetLeft: 0 }),
          createElement({ offsetLeft: 100 }),
          createElement({ offsetLeft: 200 }),
        ],
      });

      const result = calcContentContainerLeftPosition({
        contentContainer,
        numPages: 3,
        currentPage: 1,
        firstIndexInView: 2,
        extraPadding: 10,
        centerExtremesWhenExtraPadding: false,
        circular: false,
      });

      // Distance from the first child to the child it's seen 200
      // extraPadding is 10, so we subtract it
      // Result should be negated to move the container left
      expect(result).toBe('-190px');
    });

    it('should handle first page without extra padding adjustment', () => {
      const contentContainer = createElement({
        children: [
          createElement({ offsetLeft: 0 }),
          createElement({ offsetLeft: 100 }),
          createElement({ offsetLeft: 200 }),
        ],
      });

      const result = calcContentContainerLeftPosition({
        contentContainer,
        numPages: 3,
        currentPage: 1,
        firstIndexInView: 2,
        extraPadding: 0,
        centerExtremesWhenExtraPadding: false,
        circular: false,
      });

      // Distance from the first child to the child it's seen 200
      // extraPadding is 0
      // Result should be negated to move the container left
      expect(result).toBe('-200px');
    });

    it('should handle last page with double padding adjustment', () => {
      const contentContainer = createElement({
        children: [
          createElement({ offsetLeft: 0 }),
          createElement({ offsetLeft: 100 }),
          createElement({ offsetLeft: 200 }),
          createElement({ offsetLeft: 300 }),
          createElement({ offsetLeft: 400 }),
        ],
      });

      const result = calcContentContainerLeftPosition({
        contentContainer,
        numPages: 3,
        currentPage: 2, // last page
        firstIndexInView: 4,
        extraPadding: 10,
        centerExtremesWhenExtraPadding: false,
        circular: false,
      });

      // Distance: 400 - 0 = 400, minus double padding: 20 (double because it's the last page), negated: -380
      expect(result).toBe('-380px');
    });

    it('should handle centerExtremesWhenExtraPadding mode', () => {
      const contentContainer = createElement({
        children: [
          createElement({ offsetLeft: 0 }),
          createElement({ offsetLeft: 100 }),
          createElement({ offsetLeft: 200 }),
        ],
      });
      const result = calcContentContainerLeftPosition({
        contentContainer,
        numPages: 3,
        currentPage: 1,
        firstIndexInView: 2,
        extraPadding: 10,
        centerExtremesWhenExtraPadding: true,
        circular: false,
      });

      // Distance: 200 - 0 = 200, minus padding: 10, negated: -190
      expect(result).toBe('-190px');
    });

    it('should handle circular carousel', () => {
      const contentContainer = createElement({
        children: [
          createElement({ offsetLeft: 0 }),
          createElement({ offsetLeft: 100 }),
          createElement({ offsetLeft: 200 }),
        ],
      });

      const result = calcContentContainerLeftPosition({
        contentContainer,
        numPages: 3,
        currentPage: 1,
        firstIndexInView: 2,
        extraPadding: 10,
        centerExtremesWhenExtraPadding: false,
        circular: true,
      });

      // Distance: 200 - 0 = 200, minus padding: 10, negated: -190
      expect(result).toBe('-190px');
    });
  });
});
