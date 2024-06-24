import * as React from 'react';

import { renderProvider } from 'tests/renderProvider/renderProvider.utility';

import { SliderScaleStandAlone } from '../components/sliderScaleStandAlone';
import { SliderBaseStylesType } from '../types';

const mockScaleProps = {
  showScale: true,
  scaleArray: [0, 1, 2, 3, 4, 5],
  max: 100,
  min: 1,
  step: 1,
  scaleCount: 100,
  style: undefined,
  styles: {} as SliderBaseStylesType,
};

describe('<SliderScaleStandAlone />', () => {
  it('when showScale is false, nothing should be render', () => {
    const { container } = renderProvider(
      <SliderScaleStandAlone {...mockScaleProps} showScale={false} />
    );
    expect(container).toBeEmptyDOMElement();
  });
  it('when showScale is true, should be render', () => {
    const { container } = renderProvider(<SliderScaleStandAlone {...mockScaleProps} />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
