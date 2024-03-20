import React from 'react';
import { Root, createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import { Portal } from '../portal';

describe('Portal', () => {
  let container: HTMLElement | null = null;
  let root: Root | null = null;

  beforeEach(() => {
    // Set up a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container as HTMLElement);
  });

  afterEach(() => {
    // Clean up on exiting
    root?.unmount();
    container?.remove();
  });

  it('renders children inside the body element', () => {
    act(() => {
      root?.render(
        <Portal>
          <div>Test Content</div>
        </Portal>
      );
    });

    expect(document.body.innerHTML).toContain('<div>Test Content</div>');
  });

  it('renders children inside a custom wrapper element', () => {
    const wrapperId = 'custom-wrapper';

    act(() => {
      root?.render(
        <Portal wrapperId={wrapperId}>
          <div>Test Content</div>
        </Portal>
      );
    });

    const wrapperElement = document.getElementById(wrapperId);
    expect(wrapperElement).toBeTruthy();
    expect(wrapperElement?.innerHTML).toContain('<div>Test Content</div>');
  });

  it('creates a new wrapper element if the custom wrapper element does not exist', () => {
    const wrapperId = 'non-existent-wrapper';

    act(() => {
      root?.render(
        <Portal wrapperId={wrapperId}>
          <div>Test Content</div>
        </Portal>
      );
    });

    const wrapperElement = document.getElementById(wrapperId);
    expect(wrapperElement).toBeTruthy();
    expect(wrapperElement?.innerHTML).toContain('<div>Test Content</div>');
  });
});
