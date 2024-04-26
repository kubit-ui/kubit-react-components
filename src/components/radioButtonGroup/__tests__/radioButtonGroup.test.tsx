import userEvent from '@testing-library/user-event';

import { screen } from '@testing-library/react';
import * as React from 'react';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { RadioButtonGroupUnControlled } from '../radioButtonGroupUnControlled';
import { IRadioButtonGroupUncontrolled } from '../types';

const user = userEvent.setup();

const mockProps: IRadioButtonGroupUncontrolled = {
  variant: 'DEFAULT',
  required: true,
  legend: 'Fruits',
  name: 'fruits',
  options: [
    { label: 'Strawberry', value: 'S' },
    {
      label: 'Mangoes',
      value: 'M',
      description: 'Mangoes have a lot of potassium',
    },
    {
      label: 'Secret Fruit',
      value: '?',
      disabled: true,
    },
    {
      label: 'Kiwis',
      value: 'K',
      description: <div>Kiwis are green</div>,
    },
    {
      label: 'Orange',
      value: 'O',
      screenReader: true,
    },
    {
      label: 'Apple',
      value: 'A',
      description: 'An apple a day keeps the doctor await',
      errorMessage: 'Error text',
      error: true,
      screenReader: true,
    },
  ],
  infoIcon: { icon: 'CLOSE', altText: 'infoIconAltText' },
  screenReaderText: 'screenReaderText',
  dataTestId: 'radio',
};

describe('RadioButtonGroup component', () => {
  it('Should render a list of radio buttons', () => {
    renderProvider(<RadioButtonGroupUnControlled {...mockProps} />);

    const radioButtonGroup = screen.getByTestId(
      `${mockProps.dataTestId}RadioGroup`
    ) as HTMLFieldSetElement;
    const radioButtons = screen.getAllByRole('radio');

    expect(radioButtonGroup).toBeInTheDocument();

    expect(radioButtonGroup).toHaveFormValues({ [mockProps.name]: undefined });

    radioButtons.forEach((radioButton, i) => {
      expect(radioButton).toHaveAccessibleName(mockProps.options[i].label);
    });
  });

  it('Should render an accessible description for a radio button when provided as String', () => {
    renderProvider(<RadioButtonGroupUnControlled {...mockProps} />);

    const radioButtonWithDescription = screen.getByText('Mangoes have a lot of potassium');

    expect(radioButtonWithDescription).toBeInTheDocument();
  });

  it('Should render an accessible description for a radio button when provided as ReactNode', () => {
    renderProvider(<RadioButtonGroupUnControlled {...mockProps} />);

    const radioButtonWithDescription = screen.getByText('Kiwis are green');

    expect(radioButtonWithDescription).toBeInTheDocument();
  });

  it('When provided with the option with a screenReader prop, it should have the screenReaderText prop as part of the input description attribute', () => {
    renderProvider(<RadioButtonGroupUnControlled {...mockProps} />);

    const radioButtonWithScreenReader = screen.getByRole('radio', {
      description: mockProps.screenReaderText,
    });

    const radioButtonWithScreenReaderAndDescription = screen.getByRole('radio', {
      description: `${mockProps.options[5].description} ${mockProps.screenReaderText} Error text`,
    });

    expect(radioButtonWithScreenReader).toBeInTheDocument();
    expect(radioButtonWithScreenReaderAndDescription).toBeInTheDocument();
  });

  it('Should render options as disabled when they have a disabled state', () => {
    renderProvider(<RadioButtonGroupUnControlled {...mockProps} />);

    const disabledRadioButton = screen.getByRole('radio', { name: mockProps.options[2].label });

    expect(disabledRadioButton).toBeDisabled();
  });

  it('Should select an option when clicked', async () => {
    renderProvider(<RadioButtonGroupUnControlled {...mockProps} />);

    const radioButtonGroup = screen.getByTestId(`${mockProps.dataTestId}RadioGroup`);
    const [firstOption] = mockProps.options;
    const firstRadioButton = screen.getByRole('radio', { name: firstOption.label });

    await user.click(firstRadioButton);

    expect(radioButtonGroup).toHaveFormValues({ [mockProps.name]: firstOption.value });
    expect(firstRadioButton).toBeChecked();
  });

  it('Should allow selecting an option with the keyboard', async () => {
    renderProvider(<RadioButtonGroupUnControlled {...mockProps} infoIcon={undefined} />);

    const radioButtonGroup = screen.getByTestId(`${mockProps.dataTestId}RadioGroup`);
    const [, secondOption] = mockProps.options;
    const secondRadioButton = screen.getByRole('radio', { name: secondOption.label });

    // Focus on the first radio button
    await user.tab();
    // Select second radio button
    await user.keyboard('{ArrowDown}');

    expect(radioButtonGroup).toHaveFormValues({ [mockProps.name]: secondOption.value });
    expect(secondRadioButton).toBeChecked();
  });

  it('Should call an external onChange function when provided', async () => {
    const externalOnChange = jest.fn();
    renderProvider(<RadioButtonGroupUnControlled {...mockProps} onChange={externalOnChange} />);

    const [, secondOption] = mockProps.options;
    const secondRadioButton = screen.getByRole('radio', { name: secondOption.label });

    await user.click(secondRadioButton);

    expect(externalOnChange).toHaveBeenCalledTimes(1);
  });

  it('Should render a tooltip when provided', () => {
    renderProvider(
      <RadioButtonGroupUnControlled
        {...mockProps}
        tooltip={{
          closeIcon: { icon: 'CLOSE' },
          content: { content: 'tooltip content' },
          title: { content: 'tooltip title' },
        }}
      />
    );

    const tooltip = screen.getByRole(ROLES.DIALOG);

    expect(tooltip).toBeInTheDocument();
  });

  it('Should render a legend when provided', () => {
    renderProvider(<RadioButtonGroupUnControlled {...mockProps} legend="legend" />);

    const customLegend = screen.getByText(/legend/);
    expect(customLegend).toBeInTheDocument();
  });

  it('By default is not required', async () => {
    renderProvider(
      <RadioButtonGroupUnControlled
        {...mockProps}
        legend={'legend'}
        required={undefined}
        requiredSymbol="Z"
      />
    );

    const requiredSymbol = screen.queryByText(/Z/);
    expect(requiredSymbol).not.toBeInTheDocument();
  });

  it('DataTestId is optional, and its default value is the prefix radioButtonGroup', () => {
    renderProvider(<RadioButtonGroupUnControlled {...mockProps} dataTestId={undefined} />);

    const radioButtonGroup = screen.getByTestId('radioButtonGroupRadioGroup');
    expect(radioButtonGroup).toBeInTheDocument();
  });
});
