// TO DO: RESOLVE THE TESTS
import { render } from '@/lib/tests/render/render';

import type { SelectUnControlledProps } from '../types/select';

import { SelectUnControlled as Select } from '../selectUncontrolled';

const mockProps: SelectUnControlledProps = {
  closePopoverOnScroll: true,
  'data-testid': 'select',
  icon: { altText: 'Alt text icon', icon: 'CLOSE' },
  label: { content: 'Label' },
  listOptions: {
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
    optionVariant: 'CODE_VIEWER_SUBTHEME',
    type: 'selection',
    variant: 'CODE_VIEWER_SUBTHEME',
  },

  variant: 'DEFAULT',
};

describe('Select component', () => {
  it('Should render Select component', async () => {
    const { getByTestId } = render(<Select {...mockProps} />);
    const component = getByTestId('select');

    expect(component).not.toBeNull();
    // const results = await axe(container);
    // expect(container).toHTMLValidate();
    // expect(results.violations).toHaveLength(0);
  });

  // it('onClick button', async () => {
  //   const { container, getByRole, getByTestId } = render(<Select {...mockProps} />);

  //   const button = getByRole('button');
  //   expect(button).not.toBeNull();

  //   fireEvent.click(button);

  //   const optionsAfterClick = getByTestId('select-list');
  //   expect(optionsAfterClick).not.toBeNull();

  //   const results = await axe(container, {
  //     rules: {
  //       // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
  //       'aria-input-field-name': { enabled: false },
  //     },
  //   });
  //   expect(container).toHTMLValidate({
  //     rules: {
  //       'prefer-native-element': 'off',
  //     },
  //   });
  //   expect(results.violations).toHaveLength(0);
  // });

  // it('onClick option', async () => {
  //   const mockOnClickOption = vi.fn();
  //   const { container, getByRole, queryByText } = render(
  //     <Select {...mockProps} onOptionClick={mockOnClickOption} />
  //   );

  //   const button = getByRole('button');
  //   expect(button).not.toBeNull();

  //   fireEvent.click(button);
  //   const option1 = queryByText('option 1') as HTMLElement;
  //   expect(option1).not.toBeNull();

  //   fireEvent.click(option1);
  //   expect(mockOnClickOption).toHaveBeenCalledTimes(1);

  //   const results = await axe(container, {
  //     rules: {
  //       // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
  //       'aria-input-field-name': { enabled: false },
  //     },
  //   });
  //   expect(container).toHTMLValidate({
  //     rules: {
  //       'prefer-native-element': 'off',
  //     },
  //   });
  //   expect(results.violations).toHaveLength(0);
  // });

  // it('Use key tab and check new focus', async () => {
  //   const mockOnClickOption = vi.fn();
  //   const { container, getAllByRole, getByRole } = render(
  //     <DropdownSelected {...mockProps} defaultOpen={true} onOptionClick={mockOnClickOption} />
  //   );

  //   const button = getByRole('button');
  //   expect(button).not.toBeNull();

  //   fireEvent.keyDown(button, TAB);
  //   const optionsList = getAllByRole('option');

  //   expect(document.activeElement).toBe(optionsList[0]);

  //   const results = await axe(container, {
  //     rules: {
  //       // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
  //       'aria-input-field-name': { enabled: false },
  //     },
  //   });
  //   expect(container).toHTMLValidate({
  //     rules: {
  //       'prefer-native-element': 'off',
  //     },
  //   });
  //   expect(results.violations).toHaveLength(0);
  // });

  // it('Should execute onCloseInternally when Esc key is pressed', async () => {
  //   const { container, getAllByRole } = render(
  //     <DropdownSelected {...mockProps} defaultOpen={true} url="#" />
  //   );
  //   const option1 = getAllByRole('option')[0];
  //   option1.focus();

  //   expect(option1).not.toBeNull();

  //   await act(async () => {
  //     fireEvent.keyDown(option1, {
  //       code: 'Escape',
  //       key: 'Escape',
  //     });
  //   });

  //   expect(option1).toBeNull();

  //   const results = await axe(container, {
  //     rules: {
  //       // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role
  //       'aria-input-field-name': { enabled: false },
  //     },
  //   });
  //   expect(container).toHTMLValidate({
  //     rules: {
  //       'prefer-native-element': 'off',
  //     },
  //   });
  //   expect(results.violations).toHaveLength(0);
  // });

  // it('closes the dropdown when the visibility changes', async () => {
  //   // Mock the document.hidden property
  //   Object.defineProperty(document, 'hidden', {
  //     configurable: true,
  //     get: () => true,
  //   });

  //   const { getAllByRole } = render(<DropdownSelected {...mockProps} defaultOpen={true} />);

  //   const option1 = getAllByRole('option')[0];
  //   option1.focus();

  //   expect(option1).not.toBeNull();

  //   await act(async () => {
  //     // Simulate the visibilitychange event
  //     fireEvent(document, new Event('visibilitychange'));
  //   });

  //   expect(option1).toBeNull();
  // });

  // it('The container should open the dropdown on focus if openAndCloseOnHover', () => {
  //   const { getByTestId } = render(
  //     <DropdownSelected {...mockProps} data-testid="container-test-id" openAndCloseOnHover={true} />
  //   );

  //   const container = getByTestId('container-test-id');

  //   act(() => {
  //     fireEvent.focus(container);
  //   });

  //   const optionsAfterOpened = getByTestId('dropdown-selected-list');
  //   expect(optionsAfterOpened).not.toBeNull();
  // });

  // it('The container should close the dropdown on blur if openAndCloseOnHover', () => {
  //   const { getByTestId, queryByTestId } = render(
  //     <DropdownSelected
  //       {...mockProps}
  //       data-testid="container-test-id"
  //       defaultOpen={true}
  //       openAndCloseOnHover={true}
  //     />
  //   );

  //   const container = getByTestId('container-test-id');

  //   act(() => {
  //     fireEvent.blur(container);
  //   });

  //   const optionsAfterOpened = queryByTestId('dropdown-selected-list');
  //   expect(optionsAfterOpened).toBeNull();
  // });

  // it('The container should close the dropdown on escape keydown', () => {
  //   const { getByTestId, queryByTestId } = render(
  //     <DropdownSelected
  //       {...mockProps}
  //       data-testid="container-test-id"
  //       defaultOpen={true}
  //       openAndCloseOnHover={true}
  //     />
  //   );

  //   const container = getByTestId('container-test-id');

  //   act(() => {
  //     fireEvent.keyDown(container, { key: 'Escape' });
  //   });

  //   const optionsAfterOpened = queryByTestId('dropdown-selected-list');
  //   expect(optionsAfterOpened).toBeNull();
  // });
});
