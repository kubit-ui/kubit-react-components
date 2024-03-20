import userEvent from '@testing-library/user-event';

import { act, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { ARROW_DOWN, ARROW_UP, TAB } from '@/constants';
import * as mediaHooks from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType, ROLES } from '@/types';

import { InputSearch } from '../inputSearch';

const mockProps = {
  variant: 'DEFAULT',
  name: 'name',
  value: 'string',
  open: true,
  optionList: [
    {
      options: ['string'],
    },
  ],
  icon: { icon: 'UNICORN', altText: 'Open Info', onClick: jest.fn() },
  label: { content: 'input search' },
  closeIcon: { icon: 'CLOSE_ICON' },
  dataTestId: 'testid',
  handleOpenOptions: jest.fn(),
  handleValueSelected: jest.fn(),
  handleClickInputSearch: jest.fn(),
  onClick: jest.fn(),
  onIconClick: jest.fn(),
  onInputPopoverIconClick: jest.fn(),
};

window.matchMedia = windowMatchMedia();

global.structuredClone = jest.fn(val => {
  return JSON.parse(JSON.stringify(val));
});

describe('New Input Search Component', () => {
  it('Should render InputSearch component', async () => {
    const { container } = renderProvider(<InputSearch {...mockProps} open={true} />);
    const input = screen.getByRole(ROLES.COMBOBOX);
    expect(input).toBeDefined();
    const results = await axe(container, {
      rules: {
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
        'aria-input-field-name': { enabled: false },
      },
    });
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Call onOpenOptions when key tab is pressed', async () => {
    const mockOnPopoverOpen = jest.fn();
    const { container, getByTestId } = renderProvider(
      <InputSearch {...mockProps} onPopoverOpen={mockOnPopoverOpen} />
    );

    const inputContainer = getByTestId('testidInputSearch');
    expect(inputContainer).toBeDefined();
    fireEvent.keyDown(inputContainer, TAB);

    expect(mockOnPopoverOpen).toHaveBeenCalled();

    const results = await axe(container, {
      rules: {
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
        'aria-input-field-name': { enabled: false },
      },
    });
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should render InputSearchComponent', async () => {
    const { container } = renderProvider(<InputSearch {...mockProps} open={true} />);

    const input = screen.getByRole(ROLES.COMBOBOX);
    expect(input).toBeDefined();

    const results = await axe(container, {
      rules: {
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
        'aria-input-field-name': { enabled: false },
      },
    });
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should render InputSearch component with value selected', () => {
    renderProvider(<InputSearch {...mockProps} value="string" />);

    expect(screen.getByRole(ROLES.COMBOBOX)).toHaveValue('string');
  });

  it('InputSearch by default is close', () => {
    renderProvider(<InputSearch {...mockProps} open={undefined} />);

    const inputOption = screen.queryByText('string');

    expect(inputOption).not.toBeInTheDocument();
  });

  it('Should focus input', async () => {
    const onFocus = jest.fn();
    renderProvider(<InputSearch {...mockProps} onFocus={onFocus} />);

    const inputSearch = screen.getByRole(ROLES.COMBOBOX);
    inputSearch.focus();
    fireEvent.click(inputSearch);

    expect(mockProps.onClick).toHaveBeenCalled();
    expect(inputSearch).toHaveFocus();
  });

  it('Should click input icon', async () => {
    const onFocus = jest.fn();
    renderProvider(<InputSearch {...mockProps} onFocus={onFocus} />);

    const triggerButton = screen.getByRole('button', { name: 'Open Info' });
    fireEvent.click(triggerButton);
    fireEvent.click(triggerButton);
    expect(mockProps.icon.onClick).toHaveBeenCalledTimes(2);
  });

  it('Should render loading and valueSelected', async () => {
    renderProvider(
      <InputSearch
        {...mockProps}
        loader={{ altText: 'loading' }}
        loadingList={true}
        optionList={[]}
      />
    );

    const inputSearchLoading = screen.getByLabelText('loading');
    expect(inputSearchLoading).toBeInTheDocument();
  });

  it('Should allow select an option', () => {
    renderProvider(
      <InputSearch
        {...mockProps}
        optionList={[
          {
            options: ['option1'],
          },
        ]}
        value=""
      />
    );

    const inputOption = screen.getByText('option1');
    fireEvent.click(inputOption);

    const input = screen.getByRole(ROLES.COMBOBOX);
    expect(input.getAttribute('value')).toBe('option1');
  });

  it('Should allow select an option with highlightedOption', () => {
    renderProvider(
      <InputSearch
        {...mockProps}
        highlightedOption="option1"
        optionList={[
          {
            options: ['option1'],
          },
        ]}
        value=""
      />
    );

    const inputOption = screen.getAllByText('option1')[0];
    fireEvent.click(inputOption);

    const input = screen.getByRole(ROLES.COMBOBOX);
    expect(input.getAttribute('value')).toBe('option1');
  });

  it('Should focus second option with arrow down', async () => {
    renderProvider(
      <InputSearch
        {...mockProps}
        optionList={[
          {
            options: ['option1', 'option'],
          },
        ]}
        value=""
      />
    );

    const inputSearch = screen.getByRole(ROLES.COMBOBOX);
    inputSearch.focus();
    fireEvent.click(inputSearch);
    await userEvent.type(inputSearch, 'option');

    fireEvent.keyDown(inputSearch, ARROW_DOWN);

    const listOptions = screen.getByRole(ROLES.LISTBOX);
    expect(listOptions).toBeInTheDocument();

    const inputOption1 = screen.getByTestId('testidOptionsList0Option1');
    const inputOption2 = screen.getByTestId('testidOptionsList0Option2');

    fireEvent.keyDown(inputOption1, ARROW_DOWN);
    fireEvent.keyUp(inputOption2, ARROW_DOWN);
    fireEvent.keyDown(inputOption1, ARROW_DOWN);

    expect(inputOption2).toHaveFocus();

    fireEvent.keyDown(inputOption2, ARROW_UP);
    expect(inputOption1).toHaveFocus();
  });

  it('Should render empty results message when no options and no hasResultTextWrittenByUser', async () => {
    renderProvider(
      <InputSearch
        {...mockProps}
        hasResultTextWrittenByUser={false}
        noResultsText={{ content: 'empty' }}
        optionList={[]}
      />
    );

    const inputSearchNoResultsText = screen.getByText('empty');
    expect(inputSearchNoResultsText).toBeInTheDocument();
  });

  it('Should render a node with empty results message when no options and no hasResultTextWrittenByUser', async () => {
    renderProvider(
      <InputSearch
        {...mockProps}
        hasResultTextWrittenByUser={false}
        noResultsText={{ content: <span>empty</span> }}
        optionList={[]}
      />
    );

    const inputSearchNoResultsText = screen.getByText('empty');
    expect(inputSearchNoResultsText).toBeInTheDocument();
  });

  it('With no options and and without pass noResultsText and loading, should return nothing', async () => {
    renderProvider(
      <InputSearch
        {...mockProps}
        hasResultTextWrittenByUser={false}
        loader={{ altText: 'loading' }}
        loading={false}
        noResultsText={undefined}
        optionList={[]}
      />
    );

    const noResultText = screen.queryByText('empty');
    const loading = screen.queryByText('loading');

    expect(noResultText).toBeNull();
    expect(loading).toBeNull();
  });

  it('Call popover onCloseInternally function', async () => {
    const mockOnPopoverOpen = jest.fn();
    renderProvider(
      <InputSearch
        {...mockProps}
        hasResultTextWrittenByUser={false}
        noResultsText={undefined}
        onPopoverOpen={mockOnPopoverOpen}
      />
    );
    const inputSearch = screen.getByRole(ROLES.COMBOBOX);
    inputSearch.focus();
    fireEvent.keyDown(inputSearch, ARROW_DOWN);

    const option = screen.getByText('string');

    expect(option).toBeInTheDocument();

    await act(async () => {
      fireEvent.keyDown(option, {
        key: 'Escape',
        code: 'Escape',
      });
    });

    expect(option).not.toBeInTheDocument();
  });

  it('Call onCloseIconClick in tablet', async () => {
    window.matchMedia = windowMatchMedia('onlyTablet');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.TABLET);
    const mockOnPopoverOpen = jest.fn();
    renderProvider(
      <InputSearch
        {...mockProps}
        closeIcon={{ ...mockProps.closeIcon, ['aria-label']: 'closeButton' }}
        hasResultTextWrittenByUser={false}
        noResultsText={undefined}
        onPopoverOpen={mockOnPopoverOpen}
      />
    );
    const closeButton = screen.getByLabelText('closeButton');

    fireEvent.click(closeButton);

    expect(mockOnPopoverOpen).toHaveBeenCalled();
  });

  it('get the text written by user in the popover with noResultText as a string', async () => {
    renderProvider(
      <InputSearch
        {...mockProps}
        hasResultTextWrittenByUser={true}
        noResultsText={{ content: 'No results' }}
        optionList={[]}
        value="example"
      />
    );

    const userText = screen.getByText('example');
    const noResultText = screen.getByText('No results');
    expect(userText).toBeInTheDocument();
    expect(noResultText).toBeInTheDocument();
  });

  it('get the text written by user in the popover with noResultText as a Node', async () => {
    renderProvider(
      <InputSearch
        {...mockProps}
        hasResultTextWrittenByUser={true}
        noResultsText={{ content: <div>No results</div> }}
        optionList={[]}
        value="example"
      />
    );

    const userText = screen.getByText('example');
    const noResultText = screen.getByText('No results');
    expect(userText).toBeInTheDocument();
    expect(noResultText).toBeInTheDocument();
  });
});
