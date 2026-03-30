import userEvent from '@testing-library/user-event';

import { render } from '@/lib/tests/render/render';

import { SliderStandAlone } from '../sliderStandAlone';

const mockSliderStandAlone = {
  activePointer: { current: '' },
  containerRef: { current: null },
  disabled: false,
  hover: false,
  max: 100,
  min: 0,
  offset: 50,
  offsetLeft: 0,
  offsetRight: 0,
  onChange: vi.fn(),
  onKeyPress: vi.fn(),
  // Modifier functions
  onMouseDown: vi.fn(),
  onTouchStart: vi.fn(),
  pressed: false,
  // Original props
  range: false,
  scaleOffsets: [],
  // Scale
  showScale: false,
  step: 1,

  // Generated props
  value: 50,
};

describe('Slider - Mouse interactions', () => {
  it('Slider - Simple - when user hover slider, component controls the interaction', async () => {
    const setHover = vi.fn();
    const { getByRole } = render(
      <SliderStandAlone {...mockSliderStandAlone} setHover={setHover} />,
    );
    const slider = getByRole('slider');
    await userEvent.hover(slider);
    expect(setHover).toHaveBeenCalledWith(true);
    await userEvent.unhover(slider);
    expect(setHover).toHaveBeenCalledWith(false);
  });
  it('Slider - Range - when user hover left slider, component controls the interaction', async () => {
    const setHover = vi.fn();
    const { getAllByRole } = render(
      <SliderStandAlone
        {...mockSliderStandAlone}
        range
        setHover={setHover}
      />,
    );
    const slider = getAllByRole('slider');
    await userEvent.hover(slider[0]);
    expect(setHover).toHaveBeenCalledWith(true);
    await userEvent.unhover(slider[0]);
    expect(setHover).toHaveBeenCalledWith(false);
  });
  it('Slider - Range - when user hover right slider, component controls the interaction', async () => {
    const setHover = vi.fn();
    const { getAllByRole } = render(
      <SliderStandAlone
        {...mockSliderStandAlone}
        range
        setHover={setHover}
      />,
    );
    const slider = getAllByRole('slider');
    await userEvent.hover(slider[1]);
    expect(setHover).toHaveBeenCalledWith(true);
    await userEvent.unhover(slider[1]);
    expect(setHover).toHaveBeenCalledWith(false);
  });
});
