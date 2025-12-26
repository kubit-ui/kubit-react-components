import { render } from '@/lib/tests/render/render';

import { SliderScaleStandAlone } from '../components/sliderScaleStandAlone';

const mockScaleProps = {
  scaleOffsets: [0, 20, 40, 60, 80, 100],
  showScale: true,
  style: undefined,
};

describe('<SliderScaleStandAlone />', () => {
  it('when showScale is false, nothing should be render', () => {
    const { container } = render(
      <SliderScaleStandAlone {...mockScaleProps} showScale={false} />,
    );
    expect(container).toBeEmptyDOMElement();
  });
  it('when showScale is true, should be render', () => {
    const { container } = render(<SliderScaleStandAlone {...mockScaleProps} />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
