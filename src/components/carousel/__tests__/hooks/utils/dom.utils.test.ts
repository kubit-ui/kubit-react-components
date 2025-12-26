import { beforeEach, describe, expect, it, vi } from 'vitest';

import calcUtils from '../../../hooks/utils/calc.utils';
import domUtils from '../../../hooks/utils/dom.utils';

// Mock calc utils
vi.mock('../../../hooks/utils/calc.utils', () => ({
  default: {
    calcSliceWidth: vi.fn(),
    calcViewerWidth: vi.fn(),
    calcXDistanceBetween2Elements: vi.fn(),
  },
}));

describe('dom.utils', () => {
  // Mock dom helpers (copied from calc.utils.test.ts)
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
    tagName = 'div',
  }: {
    offsetLeft?: number;
    offsetWidth?: number;
    children?: HTMLElement[];
    getBoundingClientRect?: () => DOMRect;
    tagName?: string;
  } = {}) => {
    const element = document.createElement(tagName);
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

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('updateSlicesWidth', () => {
    it('should update width of all child elements in content container', () => {
      const viewerContainer = createElement();
      const child1 = createElement();
      const child2 = createElement();
      const child3 = createElement();
      const contentContainer = createElement({
        children: [child1, child2, child3],
      });

      vi.mocked(calcUtils.calcSliceWidth).mockReturnValue(150);

      domUtils.updateSlicesWidth({
        viewerContainer,
        contentContainer,
        centerMode: false,
        numElementsPerPage: 3,
        extraPadding: 10,
      });

      expect(child1.style.width).toBe('150px');
      expect(child2.style.width).toBe('150px');
      expect(child3.style.width).toBe('150px');
    });
  });

  describe('updateContentElementsAriaVisibility', () => {
    it('should add inert attribute to elements outside view range', () => {
      const child1 = createElement();
      const child2 = createElement();
      const child3 = createElement();
      const child4 = createElement();
      const child5 = createElement();
      const contentContainer = createElement({
        children: [child1, child2, child3, child4, child5],
      });

      domUtils.updateContentElementsAriaVisibility({
        contentContainer,
        firstIndexInView: 1,
        lastIndexInView: 3,
      });

      expect(child1.hasAttribute('inert')).toBe(true);
      expect(child2.hasAttribute('inert')).toBe(false);
      expect(child3.hasAttribute('inert')).toBe(false);
      expect(child4.hasAttribute('inert')).toBe(false);
      expect(child5.hasAttribute('inert')).toBe(true);
    });

    it('should remove inert attribute from elements within view range', () => {
      const child1 = createElement();
      const child2 = createElement();
      const child3 = createElement();
      const contentContainer = createElement({
        children: [child1, child2, child3],
      });

      // Pre-set inert attributes
      child1.setAttribute('inert', '');
      child2.setAttribute('inert', '');
      child3.setAttribute('inert', '');

      domUtils.updateContentElementsAriaVisibility({
        contentContainer,
        firstIndexInView: 0,
        lastIndexInView: 2,
      });

      expect(child1.hasAttribute('inert')).toBe(false);
      expect(child2.hasAttribute('inert')).toBe(false);
      expect(child3.hasAttribute('inert')).toBe(false);
    });
  });

  describe('updateViewerWidth', () => {
    it('should update viewer container width based on calculated value', () => {
      const viewerContainer = createElement();
      const contentContainer = createElement();

      vi.mocked(calcUtils.calcViewerWidth).mockReturnValue('300px');

      domUtils.updateViewerWidth({
        viewerContainer,
        contentContainer,
        firstIndexInView: 0,
        lastIndexInView: 2,
        extraPadding: 20,
      });

      expect(viewerContainer.style.width).toBe('300px');
    });
  });

  describe('applyCenterMode', () => {
    it('should add data-highlighted attribute to center element when numElementsPerPage is odd', () => {
      const child1 = createElement();
      const child2 = createElement();
      const child3 = createElement();
      const child4 = createElement();
      const child5 = createElement();
      const contentContainer = createElement({
        children: [child1, child2, child3, child4, child5],
      });

      domUtils.applyCenterMode({
        contentContainer,
        firstIndexInView: 1,
        lastIndexInView: 3,
        numElementsPerPage: 3,
      });

      // Center index: 1 + (3 - 1) / 2 = 1 + 1 = 2, which is child3 (0-indexed: child1, child2, child3)
      expect(child1.hasAttribute('data-highlighted')).toBe(false);
      expect(child2.hasAttribute('data-highlighted')).toBe(false);
      expect(child3.hasAttribute('data-highlighted')).toBe(true);
      expect(child4.hasAttribute('data-highlighted')).toBe(false);
      expect(child5.hasAttribute('data-highlighted')).toBe(false);
    });

    it('should not add data-highlighted attribute when numElementsPerPage is even', () => {
      const child1 = createElement();
      const child2 = createElement();
      const child3 = createElement();
      const child4 = createElement();
      const contentContainer = createElement({
        children: [child1, child2, child3, child4],
      });

      domUtils.applyCenterMode({
        contentContainer,
        firstIndexInView: 0,
        lastIndexInView: 3,
        numElementsPerPage: 4,
      });

      expect(child1.hasAttribute('data-highlighted')).toBe(false);
      expect(child2.hasAttribute('data-highlighted')).toBe(false);
      expect(child3.hasAttribute('data-highlighted')).toBe(false);
      expect(child4.hasAttribute('data-highlighted')).toBe(false);
    });

    it('should handle single element case', () => {
      const child1 = createElement();
      const contentContainer = createElement({
        children: [child1],
      });

      domUtils.applyCenterMode({
        contentContainer,
        firstIndexInView: 0,
        lastIndexInView: 0,
        numElementsPerPage: 1,
      });

      expect(child1.hasAttribute('data-highlighted')).toBe(true);
    });
  });

  describe('deleteCenterMode', () => {
    it('should remove data-highlighted attribute from all children', () => {
      const child1 = createElement();
      const child2 = createElement();
      const child3 = createElement();
      const contentContainer = createElement({
        children: [child1, child2, child3],
      });

      // Pre-set data-highlighted attributes
      child1.setAttribute('data-highlighted', 'true');
      child2.setAttribute('data-highlighted', 'true');
      child3.setAttribute('data-highlighted', 'true');

      domUtils.deleteCenterMode({ contentContainer });

      expect(child1.hasAttribute('data-highlighted')).toBe(false);
      expect(child2.hasAttribute('data-highlighted')).toBe(false);
      expect(child3.hasAttribute('data-highlighted')).toBe(false);
    });
  });

  describe('manageCircularClones', () => {
    it('should remove existing cloned elements when container has more children than original length', () => {
      const child1 = createElement();
      const child2 = createElement();
      const child3 = createElement();
      const clone1 = createElement();
      const clone2 = createElement();
      const contentContainer = createElement({
        children: [clone1, child1, child2, child3, clone2],
      });

      const removeChildSpy = vi.spyOn(contentContainer, 'removeChild');

      domUtils.manageCircularClones({
        contentContainer,
        elementsLength: 3,
        numElementsPerPage: 2,
        circular: false,
      });

      expect(removeChildSpy).toHaveBeenCalledTimes(2);
    });

    it('should add cloned elements when circular is true and elementsLength > numElementsPerPage', () => {
      const child1 = createElement();
      const child2 = createElement();
      const child3 = createElement();
      const child4 = createElement();
      const contentContainer = createElement({
        children: [child1, child2, child3, child4],
      });

      const appendChildSpy = vi.spyOn(contentContainer, 'appendChild');
      const insertBeforeSpy = vi.spyOn(contentContainer, 'insertBefore');

      domUtils.manageCircularClones({
        contentContainer,
        elementsLength: 4,
        numElementsPerPage: 2,
        circular: true,
      });

      // Should clone numElementsPerPage + 1 = 3 elements to each side
      expect(appendChildSpy).toHaveBeenCalledTimes(3);
      expect(insertBeforeSpy).toHaveBeenCalledTimes(3);
    });

    it('should not add clones when circular is false', () => {
      const child1 = createElement();
      const child2 = createElement();
      const child3 = createElement();
      const contentContainer = createElement({
        children: [child1, child2, child3],
      });

      const appendChildSpy = vi.spyOn(contentContainer, 'appendChild');
      const insertBeforeSpy = vi.spyOn(contentContainer, 'insertBefore');

      domUtils.manageCircularClones({
        contentContainer,
        elementsLength: 3,
        numElementsPerPage: 2,
        circular: false,
      });

      expect(appendChildSpy).not.toHaveBeenCalled();
      expect(insertBeforeSpy).not.toHaveBeenCalled();
    });

    it('should not add clones when elementsLength <= numElementsPerPage', () => {
      const child1 = createElement();
      const child2 = createElement();
      const contentContainer = createElement({
        children: [child1, child2],
      });

      const appendChildSpy = vi.spyOn(contentContainer, 'appendChild');
      const insertBeforeSpy = vi.spyOn(contentContainer, 'insertBefore');

      domUtils.manageCircularClones({
        contentContainer,
        elementsLength: 2,
        numElementsPerPage: 3,
        circular: true,
      });

      expect(appendChildSpy).not.toHaveBeenCalled();
      expect(insertBeforeSpy).not.toHaveBeenCalled();
    });
  });

  describe('alignOnePageCarousel', () => {
    it('should set justifyContent on content container when allowModifySliceWidth is true', () => {
      const rootContainer = createElement();
      const contentContainer = createElement();

      domUtils.alignOnePageCarousel({
        rootContainer,
        contentContainer,
        onePageAlign: 'center',
        allowModifySliceWidth: true,
      });

      expect(contentContainer.style.justifyContent).toBe('center');
      expect(rootContainer.style.justifyContent).toBe('');
    });

    it('should set justifyContent on root container when allowModifySliceWidth is false', () => {
      const rootContainer = createElement();
      const contentContainer = createElement();

      domUtils.alignOnePageCarousel({
        rootContainer,
        contentContainer,
        onePageAlign: 'left',
        allowModifySliceWidth: false,
      });

      expect(rootContainer.style.justifyContent).toBe('flex-start');
      expect(contentContainer.style.justifyContent).toBe('');
    });

    it('should handle all alignment types', () => {
      const rootContainer = createElement();
      const contentContainer = createElement();

      // Test RIGHT alignment
      domUtils.alignOnePageCarousel({
        rootContainer,
        contentContainer,
        onePageAlign: 'right',
        allowModifySliceWidth: true,
      });

      expect(contentContainer.style.justifyContent).toBe('flex-end');
    });
  });

  describe('udpateCarouselPositionOnEdge', () => {
    it('should return to page 0 when currentPage is after last page', () => {
      const firstChild = createElement();
      const child2 = createElement();
      const child3 = createElement();
      const targetChild = createElement(); // This will be at index 3 (numElementsPerPage + 1)
      const contentContainer = createElement({
        children: [firstChild, child2, child3, targetChild],
      });

      vi.mocked(calcUtils.calcXDistanceBetween2Elements).mockReturnValue(150);

      const result = domUtils.udpateCarouselPositionOnEdge({
        contentContainer,
        currentPage: 3, // numPages = 3, so this is after last page
        numPages: 3,
        numElementsPerPage: 2,
        elementsLength: 5,
        extraPadding: 10,
      });

      expect(calcUtils.calcXDistanceBetween2Elements).toHaveBeenCalledWith(
        firstChild,
        targetChild,
      );
      expect(contentContainer.style.left).toBe('-140px'); // 150 - 10
      expect(result.newPage).toBe(0);
    });

    it('should return to last page when currentPage is before first page', () => {
      const firstChild = createElement();
      const targetChild = createElement();
      const contentContainer = createElement({
        children: [
          firstChild,
          targetChild,
          createElement(),
          createElement(),
          createElement(),
          createElement(),
          createElement(),
        ],
      });

      vi.mocked(calcUtils.calcXDistanceBetween2Elements).mockReturnValue(200);

      const result = domUtils.udpateCarouselPositionOnEdge({
        contentContainer,
        currentPage: -1,
        numPages: 3,
        numElementsPerPage: 2,
        elementsLength: 5,
        extraPadding: 20,
      });

      expect(calcUtils.calcXDistanceBetween2Elements).toHaveBeenCalledWith(
        firstChild,
        contentContainer.children[6], // elementsLength + 1 = 6
      );
      expect(contentContainer.style.left).toBe('-180px'); // 200 - 20
      expect(result.newPage).toBe(2); // numPages - 1
    });

    it('should return current page when not at edge', () => {
      const contentContainer = createElement();

      const result = domUtils.udpateCarouselPositionOnEdge({
        contentContainer,
        currentPage: 1,
        numPages: 3,
        numElementsPerPage: 2,
        elementsLength: 5,
        extraPadding: 0,
      });

      expect(calcUtils.calcXDistanceBetween2Elements).not.toHaveBeenCalled();
      expect(result.newPage).toBe(1);
    });

    it('should handle edge case where elements do not exist', () => {
      const contentContainer = createElement();

      vi.mocked(calcUtils.calcXDistanceBetween2Elements).mockReturnValue(0);

      const result = domUtils.udpateCarouselPositionOnEdge({
        contentContainer,
        currentPage: 2, // After last page
        numPages: 2,
        numElementsPerPage: 1,
        elementsLength: 2,
        extraPadding: 0,
      });

      expect(result.newPage).toBe(0);
      expect(contentContainer.style.left).toBe('0px');
    });
  });
});
