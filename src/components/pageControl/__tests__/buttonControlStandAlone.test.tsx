import { fireEvent } from '@testing-library/react';

import * as useMediaDevice from '@/lib/hooks/useMediaDevice/useMediaDevice';
import { render } from '@/lib/tests/render/render';
import { windowMatchMedia } from '@/lib/tests/windowMatchMedia/windowMatchMedia';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { ButtonControlStandAlone } from '../components/buttonControlStandAlone';

describe('ButtonControlStandAlone', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  beforeEach(() => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.DESKTOP,
    );
  });

  it('renders correctly with default props', () => {
    const { getByRole } = render(<ButtonControlStandAlone />);
    const button = getByRole('button');
    expect(button).not.toBeNull();
    expect(button).toHaveAttribute('type', 'button');
    expect(button).not.toBeDisabled();
  });

  it('renders correctly with disabled prop', () => {
    const { getByRole } = render(<ButtonControlStandAlone disabled={true} />);
    const button = getByRole('button');
    expect(button).toBeDisabled();
  });

  it('passes aria props correctly', () => {
    const { getByRole } = render(
      <ButtonControlStandAlone aria-label="custom button" />,
    );
    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'custom button');
  });

  it('handles click events correctly', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <ButtonControlStandAlone onClick={handleClick} />,
    );
    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
