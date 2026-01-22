import { render } from '@/lib/tests/render/render';

import { SliderHelperTextStandAlone } from '../components/sliderHelperTextStandAlone';

const mockHelperTextProps = {};

describe('<sliderHelperTextStandAlone />', () => {
  it('when no text, nothing should be render', () => {
    const { container } = render(
      <SliderHelperTextStandAlone {...mockHelperTextProps} />,
    );
    expect(container).toBeEmptyDOMElement();
  });
  it('should render left and right helper text', () => {
    const { getByText } = render(
      <SliderHelperTextStandAlone
        {...mockHelperTextProps}
        leftHelperText="left"
        rightHelperText="right"
      />,
    );
    expect(getByText('left')).not.toBeNull();
    expect(getByText('right')).not.toBeNull();
  });
});
