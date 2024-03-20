import {
  getClientRectFromClippingAncestor,
  getInnerBoundingClientRect,
  hasFixedPositionAncestor,
} from '../../positioning/utils/getClippinRect';
import * as IsUtils from '../../positioning/utils/is.utils';

describe('Tooltip Positioning - getClippinRect - getInnerBoundingClientRect', () => {
  it('Return width, height, x and y values', () => {
    const element = document.createElement('div');
    const strategy = 'fixed';
    const { width, height, x, y } = getInnerBoundingClientRect(element, strategy);
    expect(typeof width).toBe('number');
    expect(typeof height).toBe('number');
    expect(typeof x).toBe('number');
    expect(typeof y).toBe('number');
  });
});

describe('Tooltip Positioning - getClippinRect - getClientRectFromClippingAncestor', () => {
  it('returns viewport rect when clippingAncestor is "viewport"', () => {
    const result = getClientRectFromClippingAncestor('viewport', 'absolute');
    // replace with your expected result
    expect(result.width).toBeDefined();
  });

  it('returns document rect when clippingAncestor is "document"', () => {
    const result = getClientRectFromClippingAncestor('document', 'absolute');
    // replace with your expected result
    expect(result.width).toBeDefined();
  });

  it('returns inner bounding client rect when clippingAncestor is an Element', () => {
    const element = document.createElement('div');
    const result = getClientRectFromClippingAncestor(element, 'absolute');
    // replace with your expected result
    expect(result.width).toBeDefined();
  });

  it('returns mutable rect when clippingAncestor is a Rect', () => {
    jest.spyOn(IsUtils, 'isClientRectVisualViewportBased').mockReturnValue(true);
    const rect = { top: 0, left: 0, right: 100, bottom: 100, width: 100, height: 100 };
    const result = getClientRectFromClippingAncestor(rect as unknown as Element, 'absolute');
    // replace with your expected result
    expect(result.width).toBeDefined();
  });
});

describe('Tooltip Positioning - getClippinRect - hasFixedPositionAncestor', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('returns false when parentNode is the stopNode', () => {
    const stopNode = document.createElement('div');
    const element = stopNode.appendChild(document.createElement('div'));

    expect(hasFixedPositionAncestor(element, stopNode)).toBe(false);
  });

  it('returns false when parentNode is not an Element', () => {
    const stopNode = document.createElement('div');
    const element = stopNode.appendChild(document.createTextNode(''));

    expect(hasFixedPositionAncestor(element as unknown as Element, stopNode)).toBe(false);
  });

  it('returns false when parentNode is the last traversable node', () => {
    const stopNode = document.createElement('div');
    const element = stopNode.appendChild(document.createElement('div'));

    jest.spyOn(IsUtils, 'isLastTraversableNode').mockReturnValue(true);

    expect(hasFixedPositionAncestor(element, stopNode)).toBe(false);
  });

  it('returns true when parentNode has fixed position', () => {
    const stopNode = document.createElement('div');
    const parentNode = stopNode.appendChild(document.createElement('div'));
    jest
      .spyOn(window, 'getComputedStyle')
      .mockReturnValueOnce({ position: 'fixed' } as CSSStyleDeclaration);
    const element = parentNode.appendChild(document.createElement('div'));

    expect(hasFixedPositionAncestor(element, stopNode)).toBe(true);
  });

  it('returns true when an ancestor has fixed position', () => {
    const stopNode = document.createElement('div');
    const fixedNode = stopNode.appendChild(document.createElement('div'));
    jest
      .spyOn(window, 'getComputedStyle')
      /// the element is not fixed
      .mockReturnValueOnce({ position: 'absolute' } as CSSStyleDeclaration)
      // the parent is fixed
      .mockReturnValueOnce({ position: 'fixed' } as CSSStyleDeclaration);
    const parentNode = fixedNode.appendChild(document.createElement('div'));
    const element = parentNode.appendChild(document.createElement('div'));

    expect(hasFixedPositionAncestor(element, stopNode)).toBe(true);
  });
});
