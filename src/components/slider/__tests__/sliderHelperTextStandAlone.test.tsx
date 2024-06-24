import * as React from 'react';

import { renderProvider } from 'tests/renderProvider/renderProvider.utility';

import { SliderHelperTextStandAlone } from '../components/sliderHelperTextStandAlone';
import { SliderBaseStylesType, SliderStateType } from '../types';

const mockHelperTextProps = {
  styles: {} as SliderBaseStylesType,
  state: SliderStateType.DEFAULT,
};

describe('<sliderHelperTextStandAlone />', () => {
  it('when no text, nothing should be render', () => {
    const { container } = renderProvider(<SliderHelperTextStandAlone {...mockHelperTextProps} />);
    expect(container).toBeEmptyDOMElement();
  });
  it('should render left and right helper text', () => {
    const { getByText } = renderProvider(
      <SliderHelperTextStandAlone
        {...mockHelperTextProps}
        leftHelperText="left"
        rightHelperText="right"
      />
    );
    expect(getByText('left')).toBeInTheDocument();
    expect(getByText('right')).toBeInTheDocument();
  });
});
