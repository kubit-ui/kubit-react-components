import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '../../../tests/renderProvider/renderProvider.utility';
import { CheckboxWithLabelUncontrolled } from '../checkboxWithLabelUncontrolled';

describe('Checkbox with label', () => {
  it('Should always have an accessible label', async () => {
    const accessibleLabel = 'Legal conditions';

    const { container } = renderProvider(
      <CheckboxWithLabelUncontrolled
        label={{ content: accessibleLabel }}
        name="conditions"
        variant="DEFAULT"
      />
    );

    const checkboxWithLabel = screen.getByText(
      (content, element) => element?.tagName.toLowerCase() === 'input'
    );

    expect(checkboxWithLabel).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should toggle between checked and unchecked when clicked', async () => {
    const accessibleLabel = 'Legal conditions';

    const { container } = renderProvider(
      <CheckboxWithLabelUncontrolled
        label={{ content: accessibleLabel }}
        name="conditions"
        variant="DEFAULT"
      />
    );

    const checkboxWithLabel = screen.getByText(
      (content, element) => element?.tagName.toLowerCase() === 'input'
    );

    expect(checkboxWithLabel).not.toBeChecked();

    fireEvent.click(checkboxWithLabel);

    expect(checkboxWithLabel).toBeChecked();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should disallow user interaction when disabled', async () => {
    const accessibleLabel = 'Legal conditions';

    const { container } = renderProvider(
      <CheckboxWithLabelUncontrolled
        description={{ content: 'Description' }}
        disabled={true}
        label={{ content: accessibleLabel }}
        name="conditions"
        variant="DEFAULT"
      />
    );

    const checkboxWithLabel = screen.getByText(
      (content, element) => element?.tagName.toLowerCase() === 'input'
    );

    expect(checkboxWithLabel).toBeDisabled();

    fireEvent.click(checkboxWithLabel);

    expect(checkboxWithLabel).not.toBeChecked();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
