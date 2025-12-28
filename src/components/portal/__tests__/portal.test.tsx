import { render, screen, waitFor } from '@testing-library/react';

import { Portal } from '../portal';

describe('Portal', () => {
  afterEach(() => {
    // Clean up any portal wrappers created during tests
    document.querySelectorAll('[id*="wrapper"]').forEach((el) => el.remove());
  });

  it('renders children inside the body element', () => {
    render(
      <Portal>
        <div data-testid="portal-content">Test Content</div>
      </Portal>,
    );

    const content = screen.getByTestId('portal-content');
    expect(content).toBeInTheDocument();
    expect(document.body).toContainElement(content);
  });

  it('renders children inside a custom wrapper element', async () => {
    const wrapperId = 'custom-wrapper';

    render(
      <Portal wrapperId={wrapperId}>
        <div data-testid="portal-content">Test Content</div>
      </Portal>,
    );

    await waitFor(() => {
      const wrapperElement = document.getElementById(wrapperId);
      expect(wrapperElement).toBeTruthy();
    });

    const content = screen.getByTestId('portal-content');
    const wrapperElement = document.getElementById(wrapperId);
    expect(wrapperElement).toContainElement(content);
  });

  it('creates a new wrapper element if the custom wrapper element does not exist', async () => {
    const wrapperId = 'non-existent-wrapper';

    render(
      <Portal wrapperId={wrapperId}>
        <div data-testid="portal-content">Test Content</div>
      </Portal>,
    );

    await waitFor(() => {
      const wrapperElement = document.getElementById(wrapperId);
      expect(wrapperElement).toBeTruthy();
    });

    const content = screen.getByTestId('portal-content');
    const wrapperElement = document.getElementById(wrapperId);
    expect(wrapperElement).toContainElement(content);
  });
});
