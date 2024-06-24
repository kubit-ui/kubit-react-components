import userEvent from '@testing-library/user-event';

import { fireEvent, screen, waitFor } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';
import { renderProvider } from 'tests/renderProvider/renderProvider.utility';

import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { ROLES } from '@/types';

import { Slider } from '../slider';
import { SliderButtonType } from '../types';
import * as SliderUtils from '../utils/slider.utils';

window.matchMedia = windowMatchMedia();

const mockSimpleSliderProps = {
  variant: 'PRIMARY',
  max: 100,
  min: 0,
  step: 1,
  value: 66,
  ariaLabel: 'Mock aria label',
  thumbIcon: { icon: 'ICON' },
};

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

describe('Slider without range', () => {
  it('should render a simple slider without props', async () => {
    const { container, getByRole } = renderProvider(
      <Slider label={{ content: 'Mock label' }} variant="PRIMARY" />
    );
    expect(getByRole(ROLES.SLIDER)).toBeInTheDocument();

    const results = await axe(container);
    // Disable style in line
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('if thumb exceed props should be specify thought variant, by default is true', async () => {
    const { container, getByRole } = renderProvider(
      <Slider label={{ content: 'Mock label' }} variant="TEST_NO_THUMB_EXCEEDS_TRACK" />
    );
    expect(getByRole(ROLES.SLIDER)).toBeInTheDocument();

    const results = await axe(container);
    // Disable style in line
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('should render a tooltip if configured and it is not been grabbed on desktop device', () => {
    renderProvider(<Slider {...mockSimpleSliderProps} tooltip={{ title: 'tooltip' }} />);
    const thumb = screen.getByTestId('sliderThumb');
    fireEvent.mouseEnter(thumb);

    const tooltipTitle = screen.getByText('tooltip');

    expect(tooltipTitle).toBeVisible();
  });

  it('when the user sets a value, the slider position must match that value', () => {
    const { getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} />);
    expect(getByRole(ROLES.SLIDER).style.left).toContain(`${mockSimpleSliderProps.value}%`);
  });

  it('when the user sets a value, the slider position must match a value according to the nearlest defined step (round max)', () => {
    const step = 25;
    const value = 45;
    const left = 50;
    const { getByRole } = renderProvider(
      <Slider {...mockSimpleSliderProps} step={step} value={value} />
    );
    expect(getByRole(ROLES.SLIDER).style.left).toContain(`${left}%`);
  });

  it('when the user sets a value, the slider position must match a value according to the nearlest defined step (round min)', () => {
    const step = 25;
    const value = 55;
    const left = 50;
    const { getByRole } = renderProvider(
      <Slider {...mockSimpleSliderProps} step={step} value={value} />
    );
    expect(getByRole(ROLES.SLIDER).style.left).toContain(`${left}%`);
  });

  it('when the user sets a step that does not fix max min, the slilder positions matches the scale value and max (round scale value)', () => {
    const step = 30;
    const value = 91;
    const left = 90;
    const { getByRole } = renderProvider(
      <Slider {...mockSimpleSliderProps} step={step} value={value} />
    );
    expect(getByRole(ROLES.SLIDER).style.left).toContain(`${left}%`);
  });

  it('when the user sets a step that does not fix max min, the slilder positions matches the scale value and max (round max)', () => {
    const step = 30;
    const value = 97;
    const left = 100;
    const { getByRole } = renderProvider(
      <Slider {...mockSimpleSliderProps} step={step} value={value} />
    );
    expect(getByRole(ROLES.SLIDER).style.left).toContain(`${left}%`);
  });

  it('when the user sets a value less or greater than max, the slider position must match min', () => {
    const value = -15;
    const { getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} value={value} />);
    expect(getByRole(ROLES.SLIDER).style.left).toContain(`${mockSimpleSliderProps.min}%`);
  });

  it('when the user changes a set value, the slider position must match that new value', () => {
    const { rerender, getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} />);
    expect(getByRole(ROLES.SLIDER).style.left).toContain(`${mockSimpleSliderProps.value}%`);
    const newValue = 33;
    rerender(<Slider {...mockSimpleSliderProps} value={newValue} />);
    expect(getByRole(ROLES.SLIDER).style.left).toContain(`${newValue}%`);
  });

  it('when user makes a change, onChange function should be called', async () => {
    const onChange = jest.fn();
    renderProvider(<Slider {...mockSimpleSliderProps} onChange={onChange} />);

    // Change using keyboard
    await userEvent.tab();
    await userEvent.keyboard('[ArrowLeft]');

    await waitFor(
      () =>
        expect(onChange).toHaveBeenCalledWith(
          mockSimpleSliderProps.value - mockSimpleSliderProps.step
        ),
      { timeout: 150 }
    );
  });

  it('when user pressed track, onChange function should be called', async () => {
    const onChange = jest.fn();
    jest.spyOn(SliderUtils, 'calculateChange').mockImplementation(() => 50);
    const { getByTestId } = renderProvider(
      <Slider {...mockSimpleSliderProps} onChange={onChange} />
    );
    await userEvent.click(getByTestId('sliderContainer'));
    await waitFor(() => expect(onChange).toHaveBeenCalled(), { timeout: 150 });
  });

  it('when user start touching the container, onChange function should be called', async () => {
    const onChange = jest.fn();
    jest.spyOn(SliderUtils, 'calculateChange').mockImplementation(() => 50);
    const { getByTestId } = renderProvider(
      <Slider {...mockSimpleSliderProps} onChange={onChange} />
    );
    fireEvent.touchStart(getByTestId('sliderContainer'));
    await waitFor(() => expect(onChange).toHaveBeenCalled(), { timeout: 150 });
  });

  it('when user start touching the container, onChange function should not be called if disabled', async () => {
    const onChange = jest.fn();
    jest.spyOn(SliderUtils, 'calculateChange').mockImplementation(() => 50);
    const { getByTestId } = renderProvider(
      <Slider {...mockSimpleSliderProps} disabled onChange={onChange} />
    );
    fireEvent.touchStart(getByTestId('sliderContainer'));
    await waitFor(() => expect(onChange).not.toHaveBeenCalled(), { timeout: 150 });
  });

  it('Can have increment button, when pressed, slider value should be increased', async () => {
    const incrementButton: SliderButtonType = {
      size: 'LARGE',
      variant: 'PRIMARY',
      content: '+',
    };
    const onChange = jest.fn();
    renderProvider(
      <Slider {...mockSimpleSliderProps} incrementButton={incrementButton} onChange={onChange} />
    );
    fireEvent.click(screen.getByText(incrementButton.content as string));
    await waitFor(
      () =>
        expect(onChange).toHaveBeenCalledWith(
          mockSimpleSliderProps.value + mockSimpleSliderProps.step
        ),
      { timeout: 150 }
    );
  });

  it('Can have decrement button, when pressed, slider value should be decreased', async () => {
    const decrementButton: SliderButtonType = {
      size: 'LARGE',
      variant: 'PRIMARY',
      content: '-',
    };
    const onChange = jest.fn();
    renderProvider(
      <Slider {...mockSimpleSliderProps} decrementButton={decrementButton} onChange={onChange} />
    );
    fireEvent.click(screen.getByText(decrementButton.content as string));
    await waitFor(
      () =>
        expect(onChange).toHaveBeenCalledWith(
          mockSimpleSliderProps.value - mockSimpleSliderProps.step
        ),
      { timeout: 150 }
    );
  });

  it('Accesibility - when pressed tab, slider should be focus', async () => {
    const { getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} />);
    const slider = getByRole(ROLES.SLIDER);

    await userEvent.tab();
    expect(slider).toHaveFocus();
  });

  it('Accesibility - when pressed left arrow, slider should be move to left', async () => {
    const { getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} />);
    const slider = getByRole(ROLES.SLIDER);

    await userEvent.tab();
    await userEvent.keyboard('[ArrowLeft]');
    expect(slider.style.left).toContain(
      `${mockSimpleSliderProps.value - mockSimpleSliderProps.step}%`
    );
  });

  it('Accesibility - when pressed down arrow, slider should be move to left', async () => {
    const { getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} />);
    const slider = getByRole(ROLES.SLIDER);

    await userEvent.tab();
    await userEvent.keyboard('[ArrowDown]');
    expect(slider.style.left).toContain(
      `${mockSimpleSliderProps.value - mockSimpleSliderProps.step}%`
    );
  });

  it('Accesibility - when pressed left/down arrow and slider value is min, value should not change', async () => {
    const mockValue = mockSimpleSliderProps.min;
    const { getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} value={mockValue} />);
    const slider = getByRole(ROLES.SLIDER);

    await userEvent.tab();
    await userEvent.keyboard('[ArrowLeft]');
    expect(slider.style.left).toContain(`${mockValue}%`);
  });
  it('Accesibility - when pressed right arrow, slider should be move to right', async () => {
    const { getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} />);
    const slider = getByRole(ROLES.SLIDER);

    await userEvent.tab();
    await userEvent.keyboard('[ArrowRight]');
    expect(slider.style.left).toContain(
      `${mockSimpleSliderProps.value + mockSimpleSliderProps.step}%`
    );
  });
  it('Accesibility - when pressed up arrow, slider should be move to right', async () => {
    const { getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} />);
    const slider = getByRole(ROLES.SLIDER);

    await userEvent.tab();
    await userEvent.keyboard('[ArrowUp]');
    expect(slider.style.left).toContain(
      `${mockSimpleSliderProps.value + mockSimpleSliderProps.step}%`
    );
  });
  it('Accesibility - when pressed right/up arrow and slider value is max, value should not change', async () => {
    const mockValue = mockSimpleSliderProps.max;
    const { getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} value={mockValue} />);
    const slider = getByRole(ROLES.SLIDER);

    await userEvent.tab();
    await userEvent.keyboard('[ArrowRight]');
    expect(slider.style.left).toContain(`${mockValue}%`);
  });
  it('Accesibility - when pressed home, slider should be move to min', async () => {
    const { getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} />);
    const slider = getByRole(ROLES.SLIDER);

    await userEvent.tab();
    await userEvent.keyboard('[Home]');
    expect(slider.style.left).toContain(`${mockSimpleSliderProps.min}%`);
  });
  it('Accesibility - when pressed end, slider should be move to max', async () => {
    const { getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} />);
    const slider = getByRole(ROLES.SLIDER);

    await userEvent.tab();
    await userEvent.keyboard('[End]');
    expect(slider.style.left).toContain(`${mockSimpleSliderProps.max}%`);
  });
  it('Accesibility - when disabled and pressed any key to move, slider should not move', async () => {
    const { getByRole } = renderProvider(<Slider {...mockSimpleSliderProps} disabled />);
    const slider = getByRole(ROLES.SLIDER);

    await userEvent.tab();
    await userEvent.keyboard('[ArrowLeft]');
    expect(slider.style.left).toContain(`${mockSimpleSliderProps.value}%`);
  });
  it('Accesibility - when aria label is set, slider should be accesible by that aria label', () => {
    const ariaLabel = 'aria label';
    const { getByRole } = renderProvider(
      <Slider {...mockSimpleSliderProps} ariaLabel={ariaLabel} />
    );
    const slider = getByRole(ROLES.SLIDER, { name: ariaLabel });
    expect(slider).toBeInTheDocument();
  });
  it('Accesibility - when aria label by is set, slider should be accesible by that aria label', () => {
    const ariaLabel = 'aria label';
    const ariaLabelId = 'aria-label-id';
    const { getByRole } = renderProvider(
      <div>
        <label id={ariaLabelId}>{ariaLabel}</label>
        <Slider {...mockSimpleSliderProps} ariaLabelBy={ariaLabelId} />
      </div>
    );
    const slider = getByRole(ROLES.SLIDER, { name: ariaLabel });
    expect(slider).toBeInTheDocument();
  });
  it('Accesibility - when helper texts are defined, slider should be accesible by that aria description', () => {
    const leftHelperText = 'left';
    const { getByRole } = renderProvider(
      <Slider {...mockSimpleSliderProps} leftHelperText={leftHelperText} />
    );
    const slider = getByRole(ROLES.SLIDER, { description: leftHelperText });
    expect(slider).toBeInTheDocument();
  });
});

const mockRangeSliderProps = {
  variant: 'PRIMARY',
  max: 100,
  min: 0,
  step: 1,
  value: [25, 75],
  range: true,
  ariaLabel: 'Mock ariaLabel',
  rightAriaLabel: 'Mock right Aria Label',
  thumbIcon: { icon: 'ICON' },
  rightThumbIcon: { icon: 'ICON' },
};

describe('Slider with range', () => {
  it('should render a right tooltip if configured and it is not been grabbed on desktop device', () => {
    renderProvider(<Slider {...mockRangeSliderProps} rightTooltip={{ title: 'tooltip' }} />);
    const rightThumb = screen.getByTestId('sliderRightThumb');
    fireEvent.mouseEnter(rightThumb);

    const tooltipTitle = screen.getByText('tooltip');

    expect(tooltipTitle).toBeVisible();
  });

  it('when the user sets a value, the slider position must match that value', async () => {
    const { container, getAllByRole } = renderProvider(<Slider {...mockRangeSliderProps} />);
    expect(getAllByRole(ROLES.SLIDER)).toHaveLength(2);
    expect(getAllByRole(ROLES.SLIDER)[0].style.left).toContain(`${mockRangeSliderProps.value[0]}%`);
    expect(getAllByRole(ROLES.SLIDER)[1].style.right).toContain(
      `${100 - mockRangeSliderProps.value[1]}%`
    );
    const results = await axe(container);
    // Disable style in line
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('when the user sets a value not in the range, the slider position must match min max', () => {
    const { getAllByRole } = renderProvider(
      <Slider {...mockRangeSliderProps} value={[-15, 150]} />
    );
    expect(getAllByRole(ROLES.SLIDER)[0].style.left).toContain('0%');
    expect(getAllByRole(ROLES.SLIDER)[1].style.right).toContain('0%');
  });
  it('when user makes a change, onChange function should be called', async () => {
    const onChange = jest.fn();
    renderProvider(<Slider {...mockRangeSliderProps} onChange={onChange} />);
    // Change using keyboard
    await userEvent.tab();
    await userEvent.keyboard('[ArrowLeft]');
    await waitFor(
      () =>
        expect(onChange).toHaveBeenCalledWith([
          mockRangeSliderProps.value[0] - mockSimpleSliderProps.step,
          mockRangeSliderProps.value[1],
        ]),
      { timeout: 150 }
    );
  });

  it('when user presses track, onChange function should be called to move left thumb', async () => {
    const onChange = jest.fn();
    jest.spyOn(SliderUtils, 'calculateChange').mockImplementation(() => 50);
    const { getByTestId, getAllByRole } = renderProvider(
      <Slider {...mockRangeSliderProps} onChange={onChange} />
    );
    // Make active left thumb
    await userEvent.click(getAllByRole(ROLES.SLIDER)[0]);
    await userEvent.click(getByTestId('sliderContainer'));
    await waitFor(() => expect(onChange).toHaveBeenCalled(), { timeout: 150 });
  });

  it('when user presses track, onChange function should be called to move right thumb', async () => {
    const onChange = jest.fn();
    jest.spyOn(SliderUtils, 'calculateChange').mockImplementation(() => 50);
    const { getByTestId, getAllByRole } = renderProvider(
      <Slider {...mockRangeSliderProps} onChange={onChange} />
    );
    // Make active right thumb
    await userEvent.click(getAllByRole(ROLES.SLIDER)[1]);
    await userEvent.click(getByTestId('sliderContainer'));
    await waitFor(() => expect(onChange).toHaveBeenCalled(), { timeout: 150 });
  });

  it('when user start touching the left thumb, onChange function should be called', async () => {
    const onChange = jest.fn();
    jest.spyOn(SliderUtils, 'calculateChange').mockImplementation(() => 50);
    renderProvider(<Slider {...mockRangeSliderProps} disabled onChange={onChange} />);
    fireEvent.touchStart(screen.getAllByRole(ROLES.SLIDER)[0]);
    await waitFor(() => expect(onChange).not.toHaveBeenCalled(), { timeout: 150 });
  });

  it('when user start touching the right thumb, onChange function should be called', async () => {
    const onChange = jest.fn();
    jest.spyOn(SliderUtils, 'calculateChange').mockImplementation(() => 50);
    renderProvider(<Slider {...mockRangeSliderProps} disabled onChange={onChange} />);
    fireEvent.touchStart(screen.getAllByRole(ROLES.SLIDER)[1]);
    await waitFor(() => expect(onChange).not.toHaveBeenCalled(), { timeout: 150 });
  });

  it('Accesibility - when pressed tab slider should be focus', async () => {
    const { getAllByRole } = renderProvider(<Slider {...mockRangeSliderProps} />);
    const sliders = getAllByRole(ROLES.SLIDER);
    await userEvent.tab();
    expect(sliders[0]).toHaveFocus();
    await userEvent.tab();
    expect(sliders[1]).toHaveFocus();
  });

  it('Accesibility - when pressed left arrow, slider should be moved to left', async () => {
    const { getAllByRole } = renderProvider(<Slider {...mockRangeSliderProps} />);
    const sliders = getAllByRole(ROLES.SLIDER);
    await userEvent.tab();
    await userEvent.keyboard('[ArrowLeft]');
    expect(sliders[0].style.left).toContain(
      `${mockRangeSliderProps.value[0] - mockRangeSliderProps.step}%`
    );
    await userEvent.tab();
    await userEvent.keyboard('[ArrowLeft]');
    expect(sliders[1].style.right).toContain(
      `${100 - (mockRangeSliderProps.value[1] - mockRangeSliderProps.step)}%`
    );
  });

  it('Accesibility - when pressed down arrow, slider should be moved to left', async () => {
    const { getAllByRole } = renderProvider(<Slider {...mockRangeSliderProps} />);
    const sliders = getAllByRole(ROLES.SLIDER);
    await userEvent.tab();
    await userEvent.keyboard('[ArrowDown]');
    expect(sliders[0].style.left).toContain(
      `${mockRangeSliderProps.value[0] - mockRangeSliderProps.step}%`
    );
    await userEvent.tab();
    await userEvent.keyboard('[ArrowDown]');
    expect(sliders[1].style.right).toContain(
      `${100 - (mockRangeSliderProps.value[1] - mockRangeSliderProps.step)}%`
    );
  });

  it('Accesibility - when pressed left/down arrow and slider value is min, value should not change', async () => {
    const mockValue = [
      mockRangeSliderProps.min,
      mockRangeSliderProps.min + mockRangeSliderProps.step,
    ];
    const { getAllByRole } = renderProvider(<Slider {...mockRangeSliderProps} value={mockValue} />);
    const sliders = getAllByRole(ROLES.SLIDER);
    await userEvent.tab();
    await userEvent.keyboard('[ArrowLeft]');
    expect(sliders[0].style.left).toContain(`${mockValue[0]}%`);
    await userEvent.tab();
    await userEvent.keyboard('[ArrowLeft]');
    expect(sliders[1].style.right).toContain(`${100 - mockValue[1]}%`);
  });

  it('Accesibility - when pressed right arrow, slider should be moved to right', async () => {
    const { getAllByRole } = renderProvider(<Slider {...mockRangeSliderProps} />);
    const sliders = getAllByRole(ROLES.SLIDER);
    await userEvent.tab();
    await userEvent.keyboard('[ArrowRight]');
    expect(sliders[0].style.left).toContain(
      `${mockRangeSliderProps.value[0] + mockRangeSliderProps.step}%`
    );
    await userEvent.tab();
    await userEvent.keyboard('[ArrowRight]');
    expect(sliders[1].style.right).toContain(
      `${100 - (mockRangeSliderProps.value[1] + mockRangeSliderProps.step)}%`
    );
  });

  it('Accesibility - when pressed up arrow, slider should be moved to right', async () => {
    const { getAllByRole } = renderProvider(<Slider {...mockRangeSliderProps} />);
    const sliders = getAllByRole(ROLES.SLIDER);
    await userEvent.tab();
    await userEvent.keyboard('[ArrowUp]');
    expect(sliders[0].style.left).toContain(
      `${mockRangeSliderProps.value[0] + mockRangeSliderProps.step}%`
    );
    await userEvent.tab();
    await userEvent.keyboard('[ArrowRight]');
    expect(sliders[1].style.right).toContain(
      `${100 - (mockRangeSliderProps.value[1] + mockRangeSliderProps.step)}%`
    );
  });

  it('Accesibility - when pressed right/up arrow and slider value is max, value should not change', async () => {
    const mockValue = [
      mockRangeSliderProps.max - mockRangeSliderProps.step,
      mockRangeSliderProps.max,
    ];
    const { getAllByRole } = renderProvider(<Slider {...mockRangeSliderProps} value={mockValue} />);
    const sliders = getAllByRole(ROLES.SLIDER);
    await userEvent.tab();
    await userEvent.keyboard('[ArrowRight]');
    expect(sliders[0].style.left).toContain(`${mockValue[0]}%`);
    await userEvent.tab();
    await userEvent.keyboard('[ArrowRight]');
    expect(sliders[1].style.right).toContain(`${100 - mockValue[1]}%`);
  });

  it('Accesibility - when pressed home, slider should be moved to min', async () => {
    const { getAllByRole } = renderProvider(<Slider {...mockRangeSliderProps} />);
    const sliders = getAllByRole(ROLES.SLIDER);
    await userEvent.tab();
    await userEvent.keyboard('[Home]');
    expect(sliders[0].style.left).toContain(`${mockRangeSliderProps.min}%`);
    await userEvent.tab();
    await userEvent.keyboard('[Home]');
    expect(sliders[1].style.right).toContain(
      `${100 - (mockRangeSliderProps.min + mockRangeSliderProps.step)}%`
    );
  });

  it('Accesibility - when pressed end, slider should be moved to max', async () => {
    const { getAllByRole } = renderProvider(<Slider {...mockRangeSliderProps} />);
    const sliders = getAllByRole(ROLES.SLIDER);
    await userEvent.tab();
    await userEvent.keyboard('[End]');
    expect(sliders[0].style.left).toContain(
      `${mockRangeSliderProps.value[1] - mockRangeSliderProps.step}%`
    );
    await userEvent.tab();
    await userEvent.keyboard('[End]');
    expect(sliders[1].style.right).toContain(`${100 - mockRangeSliderProps.max}%`);
  });

  it('Accesibility - when helper texts are defined, sliders should be accesible by that aria description', () => {
    const leftHelperText = 'left';
    const rightHelperText = 'right';
    const { getAllByRole } = renderProvider(
      <Slider
        {...mockRangeSliderProps}
        leftHelperText={leftHelperText}
        rightHelperText={rightHelperText}
      />
    );
    const [leftSlider, rightSlider] = getAllByRole(ROLES.SLIDER, {
      description: `${leftHelperText} ${rightHelperText}`,
    });
    expect(leftSlider).toBeInTheDocument();
    expect(rightSlider).toBeInTheDocument();
  });
});
