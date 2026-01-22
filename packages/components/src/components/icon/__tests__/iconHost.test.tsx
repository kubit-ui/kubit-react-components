import { screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { render } from '@/lib/tests/render/render';

import { IconHost } from '../iconHost';

global.fetch = vi.fn();

describe('IconHost component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Should render IconHost with a valid icon', () => {
    render(<IconHost height="24px" icon="test-icon" width="24px" />);

    const iconElement = screen.getByTestId('icon');

    expect(iconElement).toBeInTheDocument();
  });

  it('Should handle HTTP URL icons', () => {
    render(
      <IconHost
        height="24px"
        icon="https://example.com/icon.svg"
        width="24px"
      />,
    );

    const iconElement = screen.getByTestId('icon');

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle({
      'mask-image': 'url("https://example.com/icon.svg")',
    });
  });

  it('Should handle fallback icon when primary icon fails to load', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockRejectedValueOnce(
      new Error('Failed to fetch'),
    );

    render(
      <IconHost
        fallbackIcon="fallback.svg"
        height="24px"
        icon="primary.svg"
        width="24px"
      />,
    );

    const iconElement = screen.getByTestId('icon');

    expect(iconElement).toBeInTheDocument();
  });

  it('Should handle successful icon fetch', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
    });

    render(
      <IconHost
        fallbackIcon="fallback.svg"
        height="24px"
        icon="primary.svg"
        width="24px"
      />,
    );

    const iconElement = screen.getByTestId('icon');

    expect(iconElement).toBeInTheDocument();
  });

  it('Should handle non-ok response from fetch', async () => {
    (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
    });

    render(
      <IconHost
        fallbackIcon="fallback.svg"
        height="24px"
        icon="primary.svg"
        width="24px"
      />,
    );

    const iconElement = screen.getByTestId('icon');

    expect(iconElement).toBeInTheDocument();
  });

  it('Should pass all props to IconBasic', () => {
    render(<IconHost height="32px" icon="test" rotate="90" width="32px" />);

    const iconElement = screen.getByTestId('icon');

    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle({ height: '32px', width: '32px' });
  });

  it('Should forward ref correctly', () => {
    const ref = vi.fn();

    render(<IconHost ref={ref} height="24px" icon="test" width="24px" />);

    expect(ref).toHaveBeenCalled();
  });
});
