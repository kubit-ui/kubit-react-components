import { act, fireEvent } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { ListOptionsType } from '@/components/listOptions';
import { TAB } from '@/constants/keyboardKeys';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { DropdownSelected } from '../index';

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
});
