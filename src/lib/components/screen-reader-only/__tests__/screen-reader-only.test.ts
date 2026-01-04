import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ScreenReaderOnly } from '../screen-reader-only';

describe('ScreenReaderOnly', () => {
  let element: ScreenReaderOnly;

  beforeEach(() => {
    element = document.createElement('screen-reader-only') as ScreenReaderOnly;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should create an instance of ScreenReaderOnly', () => {
    expect(element).toBeInstanceOf(ScreenReaderOnly);
  });

  it('should have shadow DOM attached', () => {
    expect(element.shadowRoot).not.toBeNull();
  });

  it('should have default attributes on the span', () => {
    const span = element.shadowRoot?.querySelector(
      '.kbt-screen-reader-only',
    ) as HTMLSpanElement;

    expect(span).not.toBeNull();
    expect(span.getAttribute('aria-live')).toBe('off');
    expect(span.getAttribute('data-testid')).toBe('screen-reader');
  });

  it('should apply custom id attribute', () => {
    element.setAttribute('id', 'custom-id');

    const span = element.shadowRoot?.querySelector(
      '.kbt-screen-reader-only',
    ) as HTMLSpanElement;

    expect(span.id).toBe('custom-id');
  });

  it('should apply custom aria-live attribute', () => {
    element.setAttribute('aria-live', 'polite');

    const span = element.shadowRoot?.querySelector(
      '.kbt-screen-reader-only',
    ) as HTMLSpanElement;

    expect(span.getAttribute('aria-live')).toBe('polite');
  });

  it('should apply custom data-testid attribute', () => {
    element.setAttribute('data-testid', 'custom-testid');

    const span = element.shadowRoot?.querySelector(
      '.kbt-screen-reader-only',
    ) as HTMLSpanElement;

    expect(span.getAttribute('data-testid')).toBe('custom-testid');
  });

  it('should update attributes dynamically', () => {
    const span = element.shadowRoot?.querySelector(
      '.kbt-screen-reader-only',
    ) as HTMLSpanElement;

    element.setAttribute('aria-live', 'assertive');
    expect(span.getAttribute('aria-live')).toBe('assertive');

    element.setAttribute('id', 'new-id');
    expect(span.id).toBe('new-id');

    element.setAttribute('data-testid', 'new-testid');
    expect(span.getAttribute('data-testid')).toBe('new-testid');
  });

  it('should not allow invalid attributes', () => {
    const setAttributeSpy = vi.spyOn(HTMLElement.prototype, 'setAttribute');

    element.setAttribute('invalid-attribute', 'value');

    // Should not call super.setAttribute for invalid attributes
    expect(element.hasAttribute('invalid-attribute')).toBe(false);

    setAttributeSpy.mockRestore();
  });

  it('should move text content to span', () => {
    const textNode = document.createTextNode('Screen reader text');
    element.appendChild(textNode);

    // Trigger connectedCallback again
    document.body.removeChild(element);
    document.body.appendChild(element);

    const span = element.shadowRoot?.querySelector(
      '.kbt-screen-reader-only',
    ) as HTMLSpanElement;

    expect(span.textContent).toBe('Screen reader text');
    expect(element.childNodes.length).toBe(0);
  });

  it('should move multiple children to span', () => {
    const textNode1 = document.createTextNode('Text 1 ');
    const textNode2 = document.createTextNode('Text 2');
    element.appendChild(textNode1);
    element.appendChild(textNode2);

    // Trigger connectedCallback again
    document.body.removeChild(element);
    document.body.appendChild(element);

    const span = element.shadowRoot?.querySelector(
      '.kbt-screen-reader-only',
    ) as HTMLSpanElement;

    expect(span.textContent).toBe('Text 1 Text 2');
    expect(element.childNodes.length).toBe(0);
  });

  it('should handle attributeChangedCallback with null values', () => {
    element.setAttribute('aria-live', 'polite');

    const span = element.shadowRoot?.querySelector(
      '.kbt-screen-reader-only',
    ) as HTMLSpanElement;

    // Simulate attribute change to null
    element.attributeChangedCallback('aria-live', 'polite', null);

    expect(span.getAttribute('aria-live')).toBe('');
  });

  it('should not update attribute if old and new values are the same', () => {
    const span = element.shadowRoot?.querySelector(
      '.kbt-screen-reader-only',
    ) as HTMLSpanElement;
    const setAttributeSpy = vi.spyOn(span, 'setAttribute');

    element.attributeChangedCallback('aria-live', 'off', 'off');

    expect(setAttributeSpy).not.toHaveBeenCalled();

    setAttributeSpy.mockRestore();
  });

  it('should register custom element only once', () => {
    const defineCallCount = customElements.get('screen-reader-only');
    expect(defineCallCount).toBeDefined();
  });

  it('should have correct CSS styles', () => {
    const style = element.shadowRoot?.querySelector('style')?.textContent || '';

    expect(style).toContain('position: absolute');
    expect(style).toContain('width: 1px');
    expect(style).toContain('height: 1px');
    expect(style).toContain('clip: rect(0, 0, 0, 0)');
  });

  it('should handle connectedCallback when span is not found', () => {
    const elementWithNoSpan = new ScreenReaderOnly();

    // Mock shadowRoot to return null for querySelector
    vi.spyOn(elementWithNoSpan, 'shadowRoot', 'get').mockReturnValue({
      querySelector: () => null,
    } as unknown as ShadowRoot);

    // Should not throw error
    expect(() => elementWithNoSpan.connectedCallback()).not.toThrow();
  });

  it('should handle applyAttributes when span is null', () => {
    const elementWithNoSpan = new ScreenReaderOnly();

    vi.spyOn(elementWithNoSpan, 'shadowRoot', 'get').mockReturnValue({
      querySelector: () => null,
    } as unknown as ShadowRoot);

    elementWithNoSpan.connectedCallback();

    // Should not throw error
    expect(() => elementWithNoSpan.setAttribute('id', 'test')).not.toThrow();
  });

  it('should handle moveContentToSpan when span is null', () => {
    const elementWithNoSpan = new ScreenReaderOnly();

    vi.spyOn(elementWithNoSpan, 'shadowRoot', 'get').mockReturnValue({
      querySelector: () => null,
    } as unknown as ShadowRoot);

    const textNode = document.createTextNode('test');
    elementWithNoSpan.appendChild(textNode);

    elementWithNoSpan.connectedCallback();

    // Should not throw error and content should remain
    expect(elementWithNoSpan.childNodes.length).toBe(1);
  });

  it('should have observedAttributes defined', () => {
    expect(ScreenReaderOnly.observedAttributes).toEqual([
      'id',
      'aria-live',
      'data-testid',
    ]);
  });
});
