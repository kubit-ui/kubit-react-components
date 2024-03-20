import userEvent from '@testing-library/user-event';

import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { CheckboxControlled as Checkbox } from '../checkboxControlled';
import { CheckboxUnControlled } from '../checkboxUnControlled';

const mockProps = {
  value: 'test value',
  name: 'name',
  label: { content: 'Accept terms and conditions', requiredSymbol: <span>*</span> },
  helperText: { content: 'Helper text' },
  errorMessage: { content: 'Error text' },
  variant: 'DEFAULT',
  onChange: jest.fn(),
};

const mockWithOutProps = {
  dataTestId: 'checkbox-component',
  onChange: jest.fn(),
  checked: false,
  variant: 'DEFAULT',
  label: { content: 'Accept terms and conditions' },
};

test('Checkbox component', async () => {
  const { container } = renderProvider(<Checkbox {...mockProps} />);

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('Checkbox component with label as Element', async () => {
  const labelElement = <label htmlFor="checkboxid">This is an element</label>;
  const { container, getByText } = renderProvider(
    <Checkbox {...mockProps} id="checkboxid" label={{ content: labelElement }} />
  );

  const labelAsElement = getByText('This is an element');

  expect(labelAsElement).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('Checkbox component uncontrolled', async () => {
  const { container } = renderProvider(<CheckboxUnControlled {...mockProps} />);

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('Checkbox component without props', async () => {
  const { container } = renderProvider(<Checkbox {...mockWithOutProps} />);

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

it('Should disallow user interaction when disabled', async () => {
  const { container } = renderProvider(
    <Checkbox
      {...mockProps}
      disabled={true}
      name="conditions"
      variant="DEFAULT"
      onChange={jest.fn()}
    />
  );

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).toBeDisabled();

  await userEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();

  const results = await axe(container);
  expect(container).toHTMLValidate({
    rules: {
      'attribute-boolean-style': 'off',
    },
  });
  expect(results).toHaveNoViolations();
});

it('Should allow user interaction when its not disabled', async () => {
  const { container } = renderProvider(
    <CheckboxUnControlled label={{ content: 'label' }} name="conditions" variant="DEFAULT" />
  );

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).toBeEnabled();

  await userEvent.click(checkbox);

  expect(checkbox).toBeChecked();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

it('When user interacts, on Change should be called', async () => {
  const onChange = jest.fn();
  const { container } = renderProvider(
    <CheckboxUnControlled
      label={{ content: 'label' }}
      name="conditions"
      variant="DEFAULT"
      onChange={onChange}
    />
  );

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).toBeEnabled();

  await userEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(onChange).toHaveBeenCalled();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

it('Should be required when required prop is true', async () => {
  const { container } = renderProvider(
    <Checkbox
      label={{ content: 'label' }}
      name="conditions"
      required={true}
      variant="DEFAULT"
      onChange={jest.fn()}
    />
  );
  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).toBeRequired();

  const results = await axe(container);
  expect(container).toHTMLValidate({
    rules: {
      'attribute-boolean-style': 'off',
    },
  });
  expect(results).toHaveNoViolations();
});

it('Should show message error when the status is error', async () => {
  const { container } = renderProvider(<Checkbox {...mockProps} error />);

  const textErrorMessage = screen.getByText(mockProps.errorMessage.content);

  expect(textErrorMessage).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

it('Should allow to be checked and disabled at the same time', async () => {
  const { container } = renderProvider(<Checkbox {...mockProps} checked disabled />);

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).toBeDisabled();
  expect(checkbox).toBeChecked();

  const results = await axe(container);
  expect(container).toHTMLValidate({
    rules: {
      'attribute-boolean-style': 'off',
    },
  });
  expect(results).toHaveNoViolations();
});

test('Checkbox component with helpContent as Element and without helperText', async () => {
  const helpContent = <div>This is an element</div>;
  const { container, getByText, queryByText } = renderProvider(
    <Checkbox {...mockProps} helperContent={{ content: helpContent }} id="checkboxid" />
  );

  const helpContentAsElement = getByText('This is an element');
  const helperTextAsString = queryByText(mockProps.helperText.content as string);

  expect(helpContentAsElement).toBeInTheDocument();
  expect(helperTextAsString).not.toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('Checkbox component with helperText', async () => {
  const helpContent = 'This is a description';
  const { container, getByText } = renderProvider(
    <Checkbox {...mockProps} helperContent={{ content: helpContent }} id="checkboxid" />
  );

  const helperTextAsString = getByText('Helper text');
  const helpContentAsElement = getByText('This is a description');

  expect(helperTextAsString).toBeInTheDocument();
  expect(helpContentAsElement).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});
