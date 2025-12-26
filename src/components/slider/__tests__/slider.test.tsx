// TO DO: RESOLVE THE TESTS
// import { fireEvent, screen } from '@testing-library/react';
import { render } from '@/lib/tests/render/render';

import { Slider } from '../slider';

const mockSimpleSliderProps = {
  ariaLabel: 'Mock aria label',
  max: 100,
  min: 0,
  step: 1,
  thumbIcon: { icon: 'ICON' },
  value: 66,
  variant: 'PRIMARY',
};

afterEach(() => {
  // restore the spy created with spyOn
  vi.restoreAllMocks();
});

describe('Slider without range', () => {
  // it('should render a tooltip if configured and it is not been grabbed on desktop device', () => {
  //   render(
  //     <Slider {...mockSimpleSliderProps} tooltip={{ title: 'tooltip' }} />,
  //   );
  //   const thumb = screen.getByTestId('slider-thumb');
  //   fireEvent.mouseEnter(thumb);

  //   const tooltipTitle = screen.getByText('tooltip');

  //   expect(tooltipTitle).toBeVisible();
  // });

  it('when the user sets a value, the slider position must match that value', () => {
    const { getByRole } = render(<Slider {...mockSimpleSliderProps} />);
    expect(getByRole('slider').style.left).toContain(
      `${mockSimpleSliderProps.value}%`,
    );
  });
});
