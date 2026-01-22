import { describe, expect, it } from 'vitest';

import {
  getFirstScrollableElement,
  isElementScrollable,
} from '../useScrollBlock.utils';

describe('isElementScrollable', () => {
  it('should return true when element has scrollable content', () => {
    const div = document.createElement('div');
    Object.defineProperty(div, 'scrollHeight', { value: 200 });
    Object.defineProperty(div, 'clientHeight', { value: 100 });

    const result = isElementScrollable(div);

    expect(result).toBe(true);
  });

  it('should return false when element does not have scrollable content', () => {
    const div = document.createElement('div');
    Object.defineProperty(div, 'scrollHeight', { value: 100 });
    Object.defineProperty(div, 'clientHeight', { value: 100 });

    const result = isElementScrollable(div);

    expect(result).toBe(false);
  });

  it('should return false when scrollHeight is less than clientHeight', () => {
    const div = document.createElement('div');
    Object.defineProperty(div, 'scrollHeight', { value: 80 });
    Object.defineProperty(div, 'clientHeight', { value: 100 });

    const result = isElementScrollable(div);

    expect(result).toBe(false);
  });
});

describe('getFirstScrollableElement', () => {
  it('should return element when it is scrollable and contained in parentsToStop', () => {
    const parent = document.createElement('div');
    const child = document.createElement('div');
    parent.appendChild(child);

    Object.defineProperty(child, 'scrollHeight', { value: 200 });
    Object.defineProperty(child, 'clientHeight', { value: 100 });

    const result = getFirstScrollableElement({
      element: child,
      parentsToStop: [parent],
    });

    expect(result).toBe(child);
  });

  it('should return null when element is null', () => {
    const parent = document.createElement('div');

    const result = getFirstScrollableElement({
      element: null,
      parentsToStop: [parent],
    });

    expect(result).toBeNull();
  });

  it('should return null when parentsToStop does not contain element', () => {
    const parent = document.createElement('div');
    const child = document.createElement('div');

    const result = getFirstScrollableElement({
      element: child,
      parentsToStop: [parent],
    });

    expect(result).toBeNull();
  });

  it('should recursively check parent elements', () => {
    const grandparent = document.createElement('div');
    const parent = document.createElement('div');
    const child = document.createElement('div');

    grandparent.appendChild(parent);
    parent.appendChild(child);

    Object.defineProperty(child, 'scrollHeight', { value: 100 });
    Object.defineProperty(child, 'clientHeight', { value: 100 });
    Object.defineProperty(parent, 'scrollHeight', { value: 200 });
    Object.defineProperty(parent, 'clientHeight', { value: 100 });

    const result = getFirstScrollableElement({
      element: child,
      parentsToStop: [grandparent],
    });

    expect(result).toBe(parent);
  });

  it('should return null when no scrollable element found before parentsToStop', () => {
    const grandparent = document.createElement('div');
    const parent = document.createElement('div');
    const child = document.createElement('div');

    grandparent.appendChild(parent);
    parent.appendChild(child);

    Object.defineProperty(child, 'scrollHeight', { value: 100 });
    Object.defineProperty(child, 'clientHeight', { value: 100 });
    Object.defineProperty(parent, 'scrollHeight', { value: 100 });
    Object.defineProperty(parent, 'clientHeight', { value: 100 });
    Object.defineProperty(grandparent, 'scrollHeight', { value: 100 });
    Object.defineProperty(grandparent, 'clientHeight', { value: 100 });

    const result = getFirstScrollableElement({
      element: child,
      parentsToStop: [grandparent],
    });

    expect(result).toBeNull();
  });

  it('should stop at parentsToStop boundary', () => {
    const outsideParent = document.createElement('div');
    const stopParent = document.createElement('div');
    const child = document.createElement('div');

    outsideParent.appendChild(stopParent);
    stopParent.appendChild(child);

    Object.defineProperty(child, 'scrollHeight', { value: 100 });
    Object.defineProperty(child, 'clientHeight', { value: 100 });
    Object.defineProperty(stopParent, 'scrollHeight', { value: 100 });
    Object.defineProperty(stopParent, 'clientHeight', { value: 100 });

    const result = getFirstScrollableElement({
      element: child,
      parentsToStop: [stopParent],
    });

    expect(result).toBeNull();
  });

  it('should handle multiple parentsToStop', () => {
    const parent1 = document.createElement('div');
    const parent2 = document.createElement('div');
    const child = document.createElement('div');

    parent1.appendChild(child);

    Object.defineProperty(child, 'scrollHeight', { value: 200 });
    Object.defineProperty(child, 'clientHeight', { value: 100 });

    const result = getFirstScrollableElement({
      element: child,
      parentsToStop: [parent1, parent2],
    });

    expect(result).toBe(child);
  });

  it('should return element when contained in one of multiple parentsToStop', () => {
    const parent1 = document.createElement('div');
    const parent2 = document.createElement('div');
    const child = document.createElement('div');

    parent2.appendChild(child);

    Object.defineProperty(child, 'scrollHeight', { value: 200 });
    Object.defineProperty(child, 'clientHeight', { value: 100 });

    const result = getFirstScrollableElement({
      element: child,
      parentsToStop: [parent1, parent2],
    });

    expect(result).toBe(child);
  });

  it('should handle null values in parentsToStop array', () => {
    const parent = document.createElement('div');
    const child = document.createElement('div');

    parent.appendChild(child);

    Object.defineProperty(child, 'scrollHeight', { value: 200 });
    Object.defineProperty(child, 'clientHeight', { value: 100 });

    const result = getFirstScrollableElement({
      element: child,
      parentsToStop: [null, parent, null],
    });

    expect(result).toBe(child);
  });

  it('should find scrollable grandparent when child and parent are not scrollable', () => {
    const grandparent = document.createElement('div');
    const parent = document.createElement('div');
    const child = document.createElement('div');
    const greatGrandparent = document.createElement('div');

    greatGrandparent.appendChild(grandparent);
    grandparent.appendChild(parent);
    parent.appendChild(child);

    Object.defineProperty(child, 'scrollHeight', { value: 100 });
    Object.defineProperty(child, 'clientHeight', { value: 100 });
    Object.defineProperty(parent, 'scrollHeight', { value: 100 });
    Object.defineProperty(parent, 'clientHeight', { value: 100 });
    Object.defineProperty(grandparent, 'scrollHeight', { value: 200 });
    Object.defineProperty(grandparent, 'clientHeight', { value: 100 });

    const result = getFirstScrollableElement({
      element: child,
      parentsToStop: [greatGrandparent],
    });

    expect(result).toBe(grandparent);
  });
});
