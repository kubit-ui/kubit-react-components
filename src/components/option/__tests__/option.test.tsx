import '@testing-library/jest-dom';

import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { ToggleControlled } from '@/components/toggle';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { Option } from '../option';
import * as OptionUtils from '../utils/option.utils';

const mockProps = {
  variant: 'SIDE_MENU_LEVEL_1',
  label: 'label',
  sublabel: { content: 'sublabel' },
  ref: jest.fn(),
};

describe('Option component', () => {
  it('Render with a valid HTML structure', async () => {
    const { container } = renderProvider(<Option {...mockProps} />);
    const label = screen.getByText(mockProps.label);
    const sublabel = screen.getByText(mockProps.sublabel.content);

    expect(label).toBeInTheDocument();
    expect(sublabel).toBeInTheDocument();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When it has a url, an anchor tag will be rendered', () => {
    renderProvider(<Option {...mockProps} url="testURL" />);
    const anchor = screen.getByRole('link');
    expect(anchor).toBeInTheDocument();
  });

  it('When focus prop, component should be focused', () => {
    renderProvider(<Option {...mockProps} focus={true} url="testURL" />);
    const anchor = screen.getByRole('link');
    expect(anchor).toHaveFocus();
  });

  it('Should call onClick when click the option', () => {
    const onClick = jest.fn();
    renderProvider(<Option {...mockProps} onClick={onClick} />);
    const option = screen.getByText(mockProps.label);
    fireEvent.click(option);
    expect(onClick).toHaveBeenCalled();
  });

  it('Should call onClick when pressing space', () => {
    const onClick = jest.fn();
    renderProvider(<Option {...mockProps} onClick={onClick} />);
    const option = screen.getByText(mockProps.label);
    fireEvent.keyDown(option, { key: ' ', code: 'Space' });
    expect(onClick).toHaveBeenCalled();
  });

  it('Should call onClick when pressing enter', () => {
    const onClick = jest.fn();
    renderProvider(<Option {...mockProps} onClick={onClick} />);
    const option = screen.getByText(mockProps.label);
    fireEvent.keyDown(option, { key: 'Enter', code: 'Enter' });
    expect(onClick).toHaveBeenCalled();
  });

  it('When labelCharsHighlighted, getHighlightedIndexes will be called to calc the selected indexes', () => {
    const getHighlightedIndexesSpy = jest.spyOn(OptionUtils, 'getHighlightedIndexes');
    renderProvider(<Option {...mockProps} labelCharsHighlighted={'ab'} />);
    expect(getHighlightedIndexesSpy).toHaveBeenCalledWith(mockProps.label, 'ab');
  });

  it('When hover, it will be used to calc the state', () => {
    const getStateSpy = jest.spyOn(OptionUtils, 'getState');
    renderProvider(<Option {...mockProps} />);
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
      filling
    );

    fireEvent.mouseEnter(option);
    hover = true;
    expect(getStateSpy).toHaveBeenCalledWith(
      disabled,
      focused,
      selected,
      multiSelected,
      hover,
      filling
    );

    fireEvent.mouseLeave(option);
    hover = false;
    expect(getStateSpy).toHaveBeenCalledWith(
      disabled,
      focused,
      selected,
      multiSelected,
      hover,
      filling
    );
  });

  it('A checked icon could be shown when its multiselect and its selected', () => {
    renderProvider(
      <Option
        {...mockProps}
        checkedIcon={{ icon: 'ICON_CHECK' }}
        dataTestId="optionTestId"
        multiSelect={true}
        selected={true}
      />
    );
    const iconChecked = screen.getByTestId('optionTestIdIconChecked');
    expect(iconChecked).toBeInTheDocument();
  });

  it('Should render a toggle when toogleConfig is defined', () => {
    renderProvider(
      <Option
        {...mockProps}
        toggle={{
          'variant': 'DEFAULT',
          'aria-label': 'toggle',
        }}
      />
    );
    const toggles = screen.getAllByRole(ROLES.SWITCH);
    expect(toggles.length).toBeGreaterThan(0);
  });
  it('Should render the content with ToggleControlled component', () => {
    const extraContent = <ToggleControlled variant="DEFAULT" />;
    renderProvider(<Option {...mockProps} extraContent={extraContent} />);
    const toggles = screen.getAllByRole(ROLES.SWITCH);
    expect(toggles.length).toBeGreaterThan(0);
  });
});
