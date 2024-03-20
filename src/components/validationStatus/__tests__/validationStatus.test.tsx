import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

// fixture
import { items, stateIcons } from '../fixture';
import { IValidationStatus } from '../types';
import { ValidationStatus } from '../validationStatus';

const mockProps: IValidationStatus = {
  variant: 'DEFAULT',
  items,
  stateIcons,
  maxItemsAllowed: 6,
  dataTestId: 'VStatus',
};

const mockPropsNoMax: IValidationStatus = {
  variant: 'DEFAULT',
  items,
  stateIcons,
  dataTestId: 'VStatus',
};

describe('ValidationStatusc component', () => {
  it('Should displayed the max items allowed', async () => {
    const { container } = renderProvider(<ValidationStatus {...mockProps} />);
    const content = screen.getByTestId('VStatus');

    expect(content).toBeInTheDocument();
    expect(content.childElementCount).toBe(mockProps.maxItemsAllowed);
    // Axe test
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should displayed the max items allowed withoutmaxItem', () => {
    renderProvider(<ValidationStatus {...mockPropsNoMax} />);
    const content = screen.getByTestId('VStatus');

    expect(content).toBeInTheDocument();
    expect(content.childElementCount).toBe(6);
  });

  it('Should displayed the exact number of items if it does not exceed max', () => {
    renderProvider(<ValidationStatus {...mockPropsNoMax} items={items.slice(0, 3)} />);
    const content = screen.getByTestId('VStatus');

    expect(content).toBeInTheDocument();
    expect(content.childElementCount).toBe(3);
  });
});
