import userEvent from '@testing-library/user-event';

import { screen, waitFor } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import * as SliderUtils from '../../slider/utils/slider.utils';
import { ProgressBar } from '../progressBar';

const MOCK_PROPS = {
  variant: 'DEFAULT',
  size: 'SMALL',
  barProgressDuration: 2000,
  dataTestIdBar: 'testIdBar',
  dataTestIdProgressBar: 'testIdProgressBar',
  dataTestIdBullet: 'testIdBullet',
  barAriaLabel: 'aria-label-0',
};

describe('ProgressBar', () => {
  it('Should render ProgressBar component with no slider variant', async () => {
    const { container } = renderProvider(<ProgressBar {...MOCK_PROPS} />);

    const bar = screen.getByTestId(`${MOCK_PROPS.dataTestIdBar}`);
    const progressBar = screen.getByTestId(`${MOCK_PROPS.dataTestIdProgressBar}`);

    expect(bar).toBeDefined();
    expect(progressBar).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });
  it('Should render ProgressBar component with slider variant', async () => {
    const { container } = renderProvider(
      <ProgressBar {...MOCK_PROPS} percentProgressCompleted={50} variant="INTERACTIVE" />
    );

    const slider = screen.getByRole(ROLES.SLIDER);

    expect(slider).not.toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('When INTERACTIVE, When change slider value, onChange should be called', async () => {
    const onChange = jest.fn();
    jest.spyOn(SliderUtils, 'calculateChange').mockImplementation(() => 50);
    renderProvider(<ProgressBar {...MOCK_PROPS} variant="INTERACTIVE" onChange={onChange} />);

    await userEvent.click(screen.getByTestId('sliderContainer'));
    await waitFor(() => expect(onChange).toHaveBeenCalled(), { timeout: 150 });
  });
});
