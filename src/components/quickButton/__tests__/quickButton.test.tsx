import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { ButtonType } from '@/components/button';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { QuickButton } from '../quickButton';

const mockProps = {
  variant: 'PRIMARY',
  onClick: jest.fn,
  dataTestId: 'button-component',
  buttonId: 'labelId',
  icon: { icon: 'ARROW_RIGHT', altText: 'altText' },
  ['aria-label']: 'quickButton',
  type: ButtonType.BUTTON,
};

describe('QuickButton component', () => {
  it('Should render a label when provided', async () => {
    const { container } = renderProvider(
      <QuickButton {...mockProps} label={{ content: 'label' }} />
    );

    const quickButton = screen.getByRole('button');
    const label = screen.getByText('label');

    expect(quickButton).toBeDefined();
    expect(label).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
  it('Should have a correct html structure, when a role us provided', async () => {
    const { container } = renderProvider(
      <QuickButton {...mockProps} label={{ content: 'label' }} role="link" />
    );

    const quickButton = screen.getByRole('link');
    const label = screen.getByText('label');

    expect(quickButton).toBeDefined();
    expect(label).toBeDefined();

    const results = await axe(container);
    // This is because the role is conditional
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Variant is optional', async () => {
    const { container } = renderProvider(<QuickButton {...mockProps} variant={undefined} />);

    const quickButton = screen.getByRole('button', { name: 'quickButton' });

    expect(quickButton).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Type is optional', async () => {
    const { container } = renderProvider(<QuickButton {...mockProps} type={undefined} />);

    const button = screen.getByRole('button', { name: 'quickButton' });

    expect(button).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
