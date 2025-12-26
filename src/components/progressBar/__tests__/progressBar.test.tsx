// TO DO: RESOLVE THE TESTS
import { screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import { ProgressBar } from '../progressBar';

const MOCK_PROPS = {
  barAriaLabel: 'aria-label-0',
  barProgressDuration: 2000,
  'data-testid': 'progress-bar',
  size: 'SMALL',
  useAsSlider: false,
  variant: 'DEFAULT',
};

describe('ProgressBar', () => {
  it('Should render ProgressBar component', async () => {
    render(<ProgressBar {...MOCK_PROPS} />);
    const bar = screen.getByTestId(`${MOCK_PROPS['data-testid']}`);
    expect(bar).toBeDefined();
  });
});
