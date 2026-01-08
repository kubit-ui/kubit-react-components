import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { Alert } from '../alertControlled';

const MOCK = {
  content: { content: 'This is an alert message' },
  variant: 'ERROR',
};

describe('Alert component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Should render Alert', async () => {
    const { container } = render(<Alert {...MOCK} />);

    expect(screen.getByText('This is an alert message')).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should render with React Node content', async () => {
    const content = { content: <div>Custom React Node Content</div> };
    const { container } = render(<Alert {...MOCK} content={content} />);

    expect(screen.getByText('Custom React Node Content')).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should be always visible', async () => {
    const { container } = render(<Alert {...MOCK} />);

    const alertElement = screen.getByText('This is an alert message');
    expect(alertElement).toBeVisible();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should apply custom data-testid', async () => {
    const { container } = render(
      <Alert {...MOCK} data-testid="custom-alert" />,
    );

    expect(screen.getByTestId('custom-alert')).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should support different variants', async () => {
    const variants = ['ERROR', 'SUCCESS', 'WARNING', 'INFORMATIVE'];

    for (const variant of variants) {
      const { container, unmount } = render(
        <Alert {...MOCK} variant={variant} />,
      );

      expect(screen.getByText('This is an alert message')).not.toBeNull();

      const results = await axe(container);
      expect(container).toHTMLValidate();
      expect(results.violations).toHaveLength(0);

      unmount();
    }
  });

  it('Should handle aria-live attribute', async () => {
    const { container } = render(<Alert {...MOCK} ariaLive="polite" />);

    const alertContainer = container.querySelector('[aria-live="polite"]');
    expect(alertContainer).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should apply custom id', async () => {
    const { container } = render(<Alert {...MOCK} id="custom-id" />);

    const alertElement = container.querySelector('#custom-id');
    expect(alertElement).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('Should handle role attribute', async () => {
    const { container } = render(<Alert {...MOCK} role="status" />);

    const alertElement = container.querySelector('[role="status"]');
    expect(alertElement).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });
});
