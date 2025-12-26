import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Portal } from '../portal';

describe('Portal', () => {
  let container: HTMLElement | null = null;

  beforeEach(() => {
    // Set up a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Clean up on exiting
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
    }
    container = null;
  });

  it('renders children inside the body element', () => {
    act(() => {
      render(
        <Portal>
          <div>Test Content</div>
        </Portal>,
        container,
      );
    });

    expect(document.body.innerHTML).toContain('<div>Test Content</div>');
  });

  it('renders children inside a custom wrapper element', () => {
    const wrapperId = 'custom-wrapper';

    act(() => {
      render(
        <Portal wrapperId={wrapperId}>
          <div>Test Content</div>
        </Portal>,
        container,
      );
    });

    const wrapperElement = document.getElementById(wrapperId);
    expect(wrapperElement).toBeTruthy();
    expect(wrapperElement?.innerHTML).toContain('<div>Test Content</div>');
  });

  it('creates a new wrapper element if the custom wrapper element does not exist', () => {
    const wrapperId = 'non-existent-wrapper';

    act(() => {
      render(
        <Portal wrapperId={wrapperId}>
          <div>Test Content</div>
        </Portal>,
        container,
      );
    });

    const wrapperElement = document.getElementById(wrapperId);
    expect(wrapperElement).toBeTruthy();
    expect(wrapperElement?.innerHTML).toContain('<div>Test Content</div>');
  });
});
