import * as React from 'react';

import { renderProvider } from 'tests/renderProvider/renderProvider.utility';

import { SliderScaleStandAlone } from '../components/sliderScaleStandAlone';
import { SliderBaseStylesType } from '../types';

const mockScaleProps = {
  showScale: true,
  scaleOffsets: [0, 20, 40, 60, 80, 100],
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
