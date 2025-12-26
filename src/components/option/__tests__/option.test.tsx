// TO DO: RESOLVE THE TESTS
import { fireEvent, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import { ToggleControlled } from '../../toggle/toggleControlled';
import { Option } from '../option';
import * as OptionUtils from '../utils/option.utils';

const mockProps = {
  label: 'label',
  ref: vi.fn(),
  sublabel: { content: 'sublabel' },
  variant: 'SIDE_MENU_LEVEL_1',
};

describe('Option component', () => {
  it('Render with a valid HTML structure', async () => {
    const { container } = render(<Option {...mockProps} />);
    const label = screen.getByText(mockProps.label);
    const sublabel = screen.getByText(mockProps.sublabel.content);

    expect(label).not.toBeNull();
    expect(sublabel).not.toBeNull();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
  });

  it('When it has a url, an anchor tag will be rendered', () => {
    render(<Option {...mockProps} url="testURL" />);
    const anchor = screen.getByRole('link');
    expect(anchor).not.toBeNull();
  });

  // it('When focus prop, component should be focused', () => {
  //   render(<Option {...mockProps} focus={true} url="testURL" />);
  //   const anchor = screen.getByRole('link');
  //   screen.debug(); // Inspecciona el DOM renderizado
  //   expect(anchor).toHaveFocus();
  // });

  it('Should call onClick when click the option', () => {
    const onClick = vi.fn();
    render(<Option {...mockProps} onClick={onClick} />);
    const option = screen.getByText(mockProps.label);
    fireEvent.click(option);
    expect(onClick).toHaveBeenCalled();
  });

  it('Should call onClick when pressing space', () => {
    const onClick = vi.fn();
    render(<Option {...mockProps} onClick={onClick} />);
    const option = screen.getByText(mockProps.label);
    fireEvent.keyDown(option, { code: 'Space', key: ' ' });
    expect(onClick).toHaveBeenCalled();
  });

  it('Should call onClick when pressing enter', () => {
    const onClick = vi.fn();
    render(<Option {...mockProps} onClick={onClick} />);
    const option = screen.getByText(mockProps.label);
    fireEvent.keyDown(option, { code: 'Enter', key: 'Enter' });
    expect(onClick).toHaveBeenCalled();
  });

  it('When labelCharsHighlighted, getHighlightedIndexes will be called to calc the selected indexes', () => {
    const getHighlightedIndexesSpy = vi.spyOn(
      OptionUtils,
      'getHighlightedIndexes',
    );
    render(<Option {...mockProps} labelCharsHighlighted="ab" />);
    expect(getHighlightedIndexesSpy).toHaveBeenCalledWith(
      mockProps.label,
      'ab',
    );
  });

  it('When hover, it will be used to calc the state', () => {
    const getStateSpy = vi.spyOn(OptionUtils, 'getState');
    render(<Option {...mockProps} />);
    const option = screen.getByText(mockProps.label);

    const disabled = undefined;
    const focused = false;
    const selected = undefined;
    const multiSelected = undefined;
    let hover = false;
    const filling = false;
    expect(getStateSpy).toHaveBeenCalledWith(
      disabled,
      focused,
      selected,
      multiSelected,
      hover,
      filling,
    );

    fireEvent.mouseEnter(option);
    hover = true;
    expect(getStateSpy).toHaveBeenCalledWith(
      disabled,
      focused,
      selected,
      multiSelected,
      hover,
      filling,
    );

    fireEvent.mouseLeave(option);
    hover = false;
    expect(getStateSpy).toHaveBeenCalledWith(
      disabled,
      focused,
      selected,
      multiSelected,
      hover,
      filling,
    );
  });

  it('A checked icon could be shown when its multiselect and its selected', () => {
    render(
      <Option
        {...mockProps}
        checkedIcon={{ icon: 'CHECK' }}
        data-testid="optionTestId"
        multiSelect={true}
        selected={true}
      />,
    );
    const iconChecked = screen.getByTestId('icon');
    expect(iconChecked).not.toBeNull();
  });

  it('Should render the content with ToggleControlled component', () => {
    const extraContent = <ToggleControlled variant="DEFAULT" />;
    render(<Option {...mockProps} extraContent={extraContent} />);
    const toggles = screen.getAllByRole('switch');
    expect(toggles.length).toBeGreaterThan(0);
  });
});
