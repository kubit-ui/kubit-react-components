import { act, fireEvent } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { TAB } from '@/constants/keyboardKeys/keyboardKeys';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { ListOptionsType } from '../../listOptions/types/type';
import { DropdownSelectedUnControlled as DropdownSelected } from '../dropdownSelectedUncontrolled';

const mockProps = {
  variant: 'DEFAULT',
  label: { content: 'Label' },
  icon: { icon: 'CLOSE', altText: 'Alt text icon' },
  listOptions: {
    type: ListOptionsType.SELECTION,
    options: [
      {
        label: 'option 1',
        value: 'option1',
      },
      {
        label: 'option 2',
        value: 'option2',
      },
    ],
  },
  dataTestIdComponent: 'dataTestIdComponent',
  dataTestIdListOptionsContainer: 'dataTestIdListOptionsContainer',
};

describe('DropdownSelected component', () => {
  it('Should render DropdownSelected component', async () => {
    const { getByTestId, container } = renderProvider(<DropdownSelected {...mockProps} />);
    const component = getByTestId(mockProps.dataTestIdComponent);

    expect(component).toBeInTheDocument();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('onClick button', async () => {
    const { getByTestId, getByRole, container } = renderProvider(
      <DropdownSelected {...mockProps} />
    );

    const button = getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const optionsAfterClick = getByTestId(mockProps.dataTestIdListOptionsContainer);
    expect(optionsAfterClick).toBeInTheDocument();

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

  it('onClick option', async () => {
    const mockOnClickOption = jest.fn();
    const { queryByText, getByRole, container } = renderProvider(
      <DropdownSelected {...mockProps} onOptionClick={mockOnClickOption} />
    );

    const button = getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    const option1 = queryByText('option 1') as HTMLElement;
    expect(option1).toBeInTheDocument();

    fireEvent.click(option1);
    expect(mockOnClickOption).toHaveBeenCalledTimes(1);

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

  it('Use key tab and check new focus', async () => {
    const mockOnClickOption = jest.fn();
    const { getByRole, getAllByRole, container } = renderProvider(
      <DropdownSelected {...mockProps} defaultOpen={true} onOptionClick={mockOnClickOption} />
    );

    const button = getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.keyDown(button, TAB);
    const optionsList = getAllByRole('option');

    expect(document.activeElement).toBe(optionsList[0]);

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

  it('Should execute onCloseInternally when Esc key is pressed', async () => {
    const { getAllByRole, container } = renderProvider(
      <DropdownSelected {...mockProps} defaultOpen={true} url="#" />
    );
    const option1 = getAllByRole('option')[0];
    option1.focus();

    expect(option1).toBeInTheDocument();

    await act(async () => {
      fireEvent.keyDown(option1, {
        key: 'Escape',
        code: 'Escape',
      });
    });

    expect(option1).not.toBeInTheDocument();

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

  it('Should listen to onMouseEnter and onMouseLeave when openAndCloseOnHover', async () => {
    const handleMouseEnter = jest.fn();
    const handleMouseLeave = jest.fn();
    const { getByRole } = renderProvider(
      <DropdownSelected
        {...mockProps}
        openAndCloseOnHover
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
    const button = getByRole('button');
    expect(button).toBeInTheDocument();

    await act(async () => {
      fireEvent.mouseEnter(button);
    });
    await act(async () => {
      fireEvent.mouseLeave(button);
    });

    expect(handleMouseEnter).toHaveBeenCalledTimes(1);
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
  });

  it('closes the dropdown when the visibility changes', async () => {
    // Mock the document.hidden property
    Object.defineProperty(document, 'hidden', {
      configurable: true,
      get: () => true,
    });

    const { getAllByRole } = renderProvider(<DropdownSelected {...mockProps} defaultOpen={true} />);

    const option1 = getAllByRole('option')[0];
    option1.focus();

    expect(option1).toBeInTheDocument();

    await act(async () => {
      // Simulate the visibilitychange event
      fireEvent(document, new Event('visibilitychange'));
    });

    expect(option1).not.toBeInTheDocument();
  });

  it('The container should open the dropdown on focus if openAndCloseOnHover', () => {
    const { getByTestId } = renderProvider(
      <DropdownSelected
        {...mockProps}
        openAndCloseOnHover
        dataTestIdComponent="container-test-id"
      />
    );

    const container = getByTestId('container-test-id');

    act(() => {
      fireEvent.focus(container);
    });

    const optionsAfterOpened = getByTestId(mockProps.dataTestIdListOptionsContainer);
    expect(optionsAfterOpened).toBeInTheDocument();
  });

  it('The container should close the dropdown on blur if openAndCloseOnHover', () => {
    const { queryByTestId, getByTestId } = renderProvider(
      <DropdownSelected
        {...mockProps}
        openAndCloseOnHover
        dataTestIdComponent="container-test-id"
        defaultOpen={true}
      />
    );

    const container = getByTestId('container-test-id');

    act(() => {
      fireEvent.blur(container);
    });

    const optionsAfterOpened = queryByTestId(mockProps.dataTestIdListOptionsContainer);
    expect(optionsAfterOpened).not.toBeInTheDocument();
  });

  it('The container should close the dropdown on escape keydown', () => {
    const { queryByTestId, getByTestId } = renderProvider(
      <DropdownSelected
        {...mockProps}
        openAndCloseOnHover
        dataTestIdComponent="container-test-id"
        defaultOpen={true}
      />
    );

    const container = getByTestId('container-test-id');

    act(() => {
      fireEvent.keyDown(container, { key: 'Escape' });
    });

    const optionsAfterOpened = queryByTestId(mockProps.dataTestIdListOptionsContainer);
    expect(optionsAfterOpened).not.toBeInTheDocument();
  });
});
