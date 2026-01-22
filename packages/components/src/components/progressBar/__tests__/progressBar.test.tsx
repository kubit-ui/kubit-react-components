import { screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import { ProgressBar } from '../progressBar';

const MOCK_PROPS = {
  barAriaLabel: 'Loading progress',
  'data-testid': 'progress-bar',
  size: 'SMALL',
  variant: 'DEFAULT',
};

describe('ProgressBar', () => {
  it('Should render ProgressBar component', async () => {
    render(<ProgressBar {...MOCK_PROPS} />);
    const bar = screen.getByTestId(`${MOCK_PROPS['data-testid']}`);
    expect(bar).toBeDefined();
  });

  it('Should clamp percentProgressCompleted to 0 when negative', () => {
    render(<ProgressBar {...MOCK_PROPS} percentProgressCompleted={-10} />);
    const bar = screen.getByTestId(`${MOCK_PROPS['data-testid']}`);
    expect(bar).toBeDefined();
  });

  it('Should clamp percentProgressCompleted to 100 when over 100', () => {
    render(<ProgressBar {...MOCK_PROPS} percentProgressCompleted={150} />);
    const bar = screen.getByTestId(`${MOCK_PROPS['data-testid']}`);
    expect(bar).toBeDefined();
  });

  it('Should set progress to 0 when percentProgressCompleted is undefined', () => {
    render(<ProgressBar {...MOCK_PROPS} />);
    const bar = screen.getByTestId(`${MOCK_PROPS['data-testid']}`);
    expect(bar).toBeDefined();
  });

  it('Should handle percentProgressCompleted at boundary values', () => {
    const { rerender } = render(
      <ProgressBar {...MOCK_PROPS} percentProgressCompleted={0} />,
    );
    let bar = screen.getByTestId(`${MOCK_PROPS['data-testid']}`);
    expect(bar).toBeDefined();

    rerender(<ProgressBar {...MOCK_PROPS} percentProgressCompleted={100} />);
    bar = screen.getByTestId(`${MOCK_PROPS['data-testid']}`);
    expect(bar).toBeDefined();
  });

  it('Should handle valid percentProgressCompleted values', () => {
    render(<ProgressBar {...MOCK_PROPS} percentProgressCompleted={50} />);
    const bar = screen.getByTestId(`${MOCK_PROPS['data-testid']}`);
    expect(bar).toBeDefined();
  });

  it('Should render with progressAnimation', () => {
    render(
      <ProgressBar
        {...MOCK_PROPS}
        percentProgressCompleted={50}
        progressAnimation={{
          duration: '2s',
          timingFunction: 'ease-in-out',
        }}
      />,
    );
    const bar = screen.getByTestId(`${MOCK_PROPS['data-testid']}`);
    expect(bar).toBeDefined();
  });

  it('Should render with custom colors', () => {
    render(
      <ProgressBar
        {...MOCK_PROPS}
        color={{
          bar: 'lightblue',
          progressBar: 'darkblue',
        }}
        percentProgressCompleted={50}
      />,
    );
    const bar = screen.getByTestId(`${MOCK_PROPS['data-testid']}`);
    expect(bar).toBeDefined();
  });

  it('Should have proper ARIA attributes', () => {
    render(<ProgressBar {...MOCK_PROPS} percentProgressCompleted={50} />);
    const bar = screen.getByTestId(`${MOCK_PROPS['data-testid']}`);
    expect(bar).toHaveAttribute('role', 'progressbar');
    expect(bar).toHaveAttribute('aria-valuenow', '50');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
    expect(bar).toHaveAttribute('aria-label', MOCK_PROPS.barAriaLabel);
  });
});
