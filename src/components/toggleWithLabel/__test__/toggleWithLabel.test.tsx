import userEvent from '@testing-library/user-event';

import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types/role/role';

import { InputTypeType } from '../../input/types/inputType';
import { ToggleWithLabelUncontrolled as ToggleWithLabel } from '../toggleWithLabelUncontrolled';

const mockProps = {
  variant: 'DEFAULT',
  ['aria-label']: 'toggle',
  name: 'switch',
  label: { content: 'accesible Label' },
  offText: { content: 'OFF' },
  onText: { content: 'ON' },
  onIcon: { icon: 'WARNING' },
  offIcon: { icon: 'CLOSE' },
  required: false,
  toggleVariant: 'DEFAULT',
  onClick: jest.fn(),
};

describe('Toggle with label component', () => {
  it('Should always have an accessible label', async () => {
    const { container } = renderProvider(
      <ToggleWithLabel
        {...mockProps}
        required
        id={'id'}
        requiredSymbol={{ content: <span>*</span> }}
      />
    );

    const toggle = screen.getByRole(ROLES.GROUP);

    expect(toggle).toBeInTheDocument();
    expect(toggle).not.toBeChecked();

    // The error is due to the fact that the label does not have a visible text, but this is in the design.
    // At the development level this has been covered by putting an alternative text (aria-label) in the svg
    // that is inside the label and that is It did this to keep the <label> tag.
    const results = await axe(container, {
      rules: {
        'label-title-only': { enabled: false },
      },
    });
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('ThreePositions - should display the toggle with three position', async () => {
    const user = userEvent.setup();
    const { container } = renderProvider(
      <ToggleWithLabel {...mockProps} hasThreePositions={true} />
    );
    const toggle = screen.getAllByRole(InputTypeType.RADIO)[0];

    expect(toggle).not.toBeChecked();

    await user.click(toggle);

    //We have 3 inputs acting like 1. If left is selected, it shouldn't be marked as checked
    expect(toggle).toBeChecked();

    const results = await axe(container, {
      rules: {
        'label-title-only': { enabled: false },
        'label': { enabled: false },
      },
    });
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should call onFieldSetClick when fieldset is clicked', () => {
    const onFieldSetClick = jest.fn();
    renderProvider(<ToggleWithLabel {...mockProps} onFieldSetClick={onFieldSetClick} />);
    const fieldset = screen.getByTestId('toggle-with-label');
    fireEvent.click(fieldset);

    expect(onFieldSetClick).toHaveBeenCalled();
  });

  it('ThreePositions - should call onFieldSetClick when fieldset is clicked', () => {
    const onFieldSetClick = jest.fn();
    const { container, debug } = renderProvider(
      <ToggleWithLabel {...mockProps} hasThreePositions onFieldSetClick={onFieldSetClick} />
    );
    debug(container);
    const fieldset = screen.getByTestId('toggle-with-label');
    fireEvent.click(fieldset);

    expect(onFieldSetClick).toHaveBeenCalled();
  });
});
