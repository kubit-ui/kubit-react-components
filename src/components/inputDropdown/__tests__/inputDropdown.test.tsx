import userEvent from '@testing-library/user-event';

import { act, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { ARROW_DOWN, ENTER, SPACE, TAB } from '@/constants';
import * as mediaHooks from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType, ROLES } from '@/types';

import { InputDropdown } from '../inputDropdown';

const mockProps = {
  variant: 'TEST',
  name: 'name',
  value: 'string',
  open: true,
  optionList: {
    options: [
      {
        label: 'string',
        value: 'string',
      },
    ],
  },
  label: { content: 'input search' },
  closeIcon: { icon: 'CLOSE_ICON', ['aria-label']: 'Close icon' },
  dataTestId: 'testid',
  handleOpenOptions: jest.fn(),
  handleValueSelected: jest.fn(),
  handleClickInputSearch: jest.fn(),
  handleClickInputDropdown: jest.fn(),
  onClick: jest.fn(),
};

window.matchMedia = windowMatchMedia();

describe('New Input Dropdown Component', () => {
  it('Should render InputDropdown component', async () => {
    const { container } = renderProvider(<InputDropdown {...mockProps} open={true} />);

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

  it('Should not render the dropdown options', async () => {
    const { container, queryByText } = renderProvider(
      <InputDropdown {...mockProps} optionList={{ options: [] }} />
    );

    const input = screen.getByRole(ROLES.COMBOBOX);
    await act(async () => {
      fireEvent.click(input);
    });
    const inputContainer = queryByText('testidInputDropdown');
    expect(inputContainer).toBeNull();
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

  it('Call onOpenCloseOptions when key tab is pressed', async () => {
    const mockOnOpenCloseOptions = jest.fn();
    const { container, getByTestId } = renderProvider(
      <InputDropdown {...mockProps} open={true} onOpenCloseOptions={mockOnOpenCloseOptions} />
    );

    const inputContainer = getByTestId('testidInputDropdown');
    expect(inputContainer).toBeDefined();
    await act(async () => {
      fireEvent.keyDown(inputContainer, TAB);
    });

    expect(mockOnOpenCloseOptions).toHaveBeenCalled();

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

  it('Should render InputDropdown component with value selected', () => {
    renderProvider(<InputDropdown {...mockProps} value="string" />);

    expect(screen.getByRole(ROLES.COMBOBOX)).toHaveValue('string');
  });

  it('Should render InputDropdown component shown input in searchList', () => {
    renderProvider(<InputDropdown {...mockProps} hasInputInSearchList value="string" />);

    expect(screen.getByRole(ROLES.COMBOBOX)).toHaveValue('string');
  });

  it('InputDropdown by default is close', () => {
    renderProvider(<InputDropdown {...mockProps} open={undefined} />);

    const inputOption = screen.queryByText('string');

    expect(inputOption).not.toBeInTheDocument();
  });

  it('Should focus input', async () => {
    const onFocus = jest.fn();
    renderProvider(<InputDropdown {...mockProps} onFocus={onFocus} />);

    const inputDropdown = screen.getByRole(ROLES.COMBOBOX);
    inputDropdown.focus();
    await act(async () => {
      fireEvent.click(inputDropdown);
    });
    expect(mockProps.onClick).toHaveBeenCalled();
    expect(inputDropdown).toHaveFocus();
  });

  it('Should render loading and valueSelected', async () => {
    renderProvider(
      <InputDropdown {...mockProps} loader={{ altText: 'loading' }} loadingList={true} />
    );

    const inputDropdownLoading = screen.getByText('loading');
    expect(inputDropdownLoading).toBeInTheDocument();
  });

  it('Should render loading text and loading icon when options list is empty', async () => {
    renderProvider(
      <InputDropdown
        {...mockProps}
        loadingList={true}
        loadingText={{ content: 'loading' }}
        optionList={{ options: [] }}
      />
    );

    const inputSearchLoading = screen.getByText('loading');
    expect(inputSearchLoading).toBeInTheDocument();
  });

  it('Should allow select an option', async () => {
    renderProvider(
      <InputDropdown
        {...mockProps}
        optionList={{
          options: [
            {
              label: 'option1',
              value: 'option1',
            },
          ],
        }}
      />
    );

    const inputOption = screen.getByText('option1');
    await act(async () => {
      fireEvent.click(inputOption);
    });

    const input = screen.getByRole(ROLES.COMBOBOX);
    expect(input.getAttribute('value')).toBe('option1');
  });

  it('Should focus first option with arrow down', async () => {
    renderProvider(
      <InputDropdown
        {...mockProps}
        optionList={{
          options: [
            {
              label: 'option1',
              value: 'option1',
            },
          ],
        }}
      />
    );

    const inputDropdown = screen.getByRole(ROLES.COMBOBOX);
    inputDropdown.focus();
    await act(async () => {
      fireEvent.click(inputDropdown);
    });
    await userEvent.type(inputDropdown, 'option1');
    await act(async () => {
      fireEvent.keyDown(inputDropdown, ARROW_DOWN);
    });
    const listOptions = screen.getByRole(ROLES.LISTBOX);
    expect(listOptions).toBeInTheDocument();

    const inputOption = screen.getByTestId('testidOptionsListOption0');
    expect(inputOption).toHaveFocus();
  });

  it('Call popover onCloseInternally function', async () => {
    const mockOnOpenCloseOptions = jest.fn();
    renderProvider(
      <InputDropdown
        {...mockProps}
        optionList={{
          options: [
            {
              label: 'option1',
              value: 'option1',
            },
          ],
        }}
        onOpenCloseOptions={mockOnOpenCloseOptions}
      />
    );

    const inputDropdown = screen.getByRole(ROLES.COMBOBOX);
    inputDropdown.focus();
    await act(async () => {
      fireEvent.click(inputDropdown);
    });
    await userEvent.type(inputDropdown, 'option1');

    await act(async () => {
      fireEvent.keyDown(inputDropdown, ARROW_DOWN);
    });

    const inputOption = screen.getByTestId('testidOptionsListOption0');

    await act(async () => {
      fireEvent.keyDown(inputOption, {
        key: 'Escape',
        code: 'Escape',
      });
    });
    expect(mockOnOpenCloseOptions).toHaveBeenCalled();
  });

  it('Should close list options with enter or space key', async () => {
    renderProvider(
      <InputDropdown
        {...mockProps}
        optionList={{
          options: [
            {
              label: 'option1',
              value: 'option1',
            },
          ],
        }}
      />
    );

    const inputDropdown = screen.getByRole(ROLES.COMBOBOX);
    inputDropdown.focus();
    await act(async () => {
      fireEvent.click(inputDropdown);
    });
    await act(async () => {
      fireEvent.keyDown(inputDropdown, ENTER);
    });

    const listOptions = screen.getByRole(ROLES.LISTBOX);
    expect(listOptions).toBeInTheDocument();

    await act(async () => {
      fireEvent.keyDown(inputDropdown, SPACE);
    });
    expect(listOptions).not.toBeInTheDocument();
  });

  it('Should render empty results message', async () => {
    renderProvider(
      <InputDropdown
        {...mockProps}
        noResultsText={{ content: 'empty' }}
        optionList={{ options: [] }}
      />
    );

    const inputSearchNoResultsText = screen.getByText('empty');
    expect(inputSearchNoResultsText).toBeInTheDocument();
  });

  it('Should call onIconClick when user click on icon', async () => {
    const onIconClick = jest.fn();
    const { container, getByRole } = renderProvider(
      <InputDropdown
        {...mockProps}
        optionList={{
          options: [
            {
              label: 'option1',
              value: 'option1',
            },
          ],
        }}
        placeholder={'placeholder'}
        rightIcon={{
          icon: 'UNICORN',
          altText: 'Open Info',
          onClick: onIconClick,
        }}
      />
    );

    const triggerButton = getByRole('button', { name: 'Open Info' });

    fireEvent.click(triggerButton);
    expect(onIconClick).toHaveBeenCalled();

    // A11Y and w3c validator
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Call onClose by actionBottomSheetComponent', async () => {
    window.matchMedia = windowMatchMedia('onlyTablet');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.TABLET);
    const mockOnOpenCloseOptions = jest.fn();
    renderProvider(
      <InputDropdown
        {...mockProps}
        optionList={{
          options: [
            {
              label: 'option1',
              value: 'option1',
            },
          ],
        }}
        onOpenCloseOptions={mockOnOpenCloseOptions}
      />
    );

    const inputDropdown = screen.getByRole(ROLES.COMBOBOX);
    inputDropdown.focus();
    await act(async () => {
      fireEvent.click(inputDropdown);
    });
    const closeButton = screen.getByLabelText(mockProps.closeIcon['aria-label']);
    await act(async () => {
      fireEvent.click(closeButton);
    });

    expect(mockOnOpenCloseOptions).toHaveBeenCalled();
  });

  it('Should render InputDropdown component in mobile', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    renderProvider(
      <InputDropdown
        {...mockProps}
        hasInputInSearchList
        noResultsText={{ content: 'empty' }}
        optionList={{ options: [] }}
        value="string"
      />
    );

    const inputSearchNoResultsText = screen.getByText('empty');
    expect(inputSearchNoResultsText).toBeInTheDocument();
  });

  it('Should call the onClickCloseIconTabletMobile function in mobile device', async () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    const mockOnClickCloseIconTabletMobile = jest.fn();
    renderProvider(
      <InputDropdown
        {...mockProps}
        onCloseIconTabletMobileClick={mockOnClickCloseIconTabletMobile}
      />
    );

    const inputDropdown = screen.getByRole(ROLES.COMBOBOX);
    inputDropdown.focus();
    await act(async () => {
      fireEvent.click(inputDropdown);
    });
    const closeButton = screen.getByLabelText(mockProps.closeIcon['aria-label']);
    await act(async () => {
      fireEvent.click(closeButton);
    });

    expect(mockOnClickCloseIconTabletMobile).toHaveBeenCalled();
  });
});
