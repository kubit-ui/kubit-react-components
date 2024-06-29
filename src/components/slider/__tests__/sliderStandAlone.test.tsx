import userEvent from '@testing-library/user-event';

import * as React from 'react';

import { renderProvider } from 'tests/renderProvider/renderProvider.utility';

import { ROLES } from '@/types';

import { SliderStandAlone } from '../sliderStandAlone';
import { SliderBaseStylesType } from '../types';

const mockSliderStandAlone = {
  // Original props
  range: false,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  // Scale
  showScale: false,
  scaleArray: [],
  scaleCount: 0,
  // Generated props
  value: 50,
  offset: 50,
  offsetLeft: 0,
  offsetRight: 0,
  hover: false,
  pressed: false,
  activePointer: { current: '' },
  containerRef: { current: null },
  // Modifier functions
  onMouseDown: jest.fn(),
  onChange: jest.fn(),
  onTouchStart: jest.fn(),
  onKeyPress: jest.fn(),
  // Styles
  styles: { states: {} } as SliderBaseStylesType,
};

describe('Slider - Mouse interactions', () => {
  it('Slider - Simple - when user hover slider, component controls the interaction', async () => {
    const setHover = jest.fn();
    const { getByRole } = renderProvider(
      <SliderStandAlone {...mockSliderStandAlone} setHover={setHover} />
    );
    const slider = getByRole(ROLES.SLIDER);
    await userEvent.hover(slider);
    expect(setHover).toHaveBeenCalledWith(true);
    await userEvent.unhover(slider);
    expect(setHover).toHaveBeenCalledWith(false);
  });
  it('Slider - Range - when user hover left slider, component controls the interaction', async () => {
    const setHover = jest.fn();
    const { getAllByRole } = renderProvider(
      <SliderStandAlone {...mockSliderStandAlone} range={true} setHover={setHover} />
    );
    const slider = getAllByRole(ROLES.SLIDER);
    await userEvent.hover(slider[0]);
    expect(setHover).toHaveBeenCalledWith(true);
    await userEvent.unhover(slider[0]);
    expect(setHover).toHaveBeenCalledWith(false);
  });
  it('Slider - Range - when user hover right slider, component controls the interaction', async () => {
    const setHover = jest.fn();
    const { getAllByRole } = renderProvider(
      <SliderStandAlone {...mockSliderStandAlone} range={true} setHover={setHover} />
    );
    const slider = getAllByRole(ROLES.SLIDER);
    await userEvent.hover(slider[1]);
    expect(setHover).toHaveBeenCalledWith(true);
    await userEvent.unhover(slider[1]);
    expect(setHover).toHaveBeenCalledWith(false);
  });
});
