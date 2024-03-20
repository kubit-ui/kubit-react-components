import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { ENTER, SPACE } from '@/constants';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { MediaProgressBar } from '../mediaProgressBar';

const mockProps = {
  variant: 'DEFAULT',
  barProgressDuration: 2000,
  dataTestIdBar: 'testIdBar',
  dataTestIdProgressBar: 'testIdProgressBar',
  onBarChange: jest.fn(),
  barsAriaLabels: ['aria-label-0'],
};

describe('MediaProgressBar Component', () => {
  it('Render with a valid HTML structure', async () => {
    const { container, getByTestId } = renderProvider(<MediaProgressBar {...mockProps} />);

    const bar = getByTestId(`${mockProps.dataTestIdBar}-0`);
    const progressBar = getByTestId(`${mockProps.dataTestIdProgressBar}-0`);

    expect(bar).toBeDefined();
    expect(progressBar).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should call to onBarChange when click on the bar', () => {
    renderProvider(<MediaProgressBar {...mockProps} />);

    const barAsButton = screen.getByRole(ROLES.BUTTON);
    fireEvent.click(barAsButton);

    expect(barAsButton).toBeInTheDocument();
    expect(mockProps.onBarChange).toHaveBeenCalled();
  });

  it('Should call onBarChange when press space on the bar', () => {
    renderProvider(<MediaProgressBar {...mockProps} />);

    const barAsButton = screen.getByRole(ROLES.BUTTON);
    fireEvent.keyDown(barAsButton, SPACE);

    expect(barAsButton).toBeInTheDocument();
    expect(mockProps.onBarChange).toHaveBeenCalled();
  });

  it('Should call onBarChange when press enter on the bar', () => {
    renderProvider(<MediaProgressBar {...mockProps} />);

    const barAsButton = screen.getByRole(ROLES.BUTTON);
    fireEvent.keyDown(barAsButton, ENTER);

    expect(barAsButton).toBeInTheDocument();
    expect(mockProps.onBarChange).toHaveBeenCalled();
  });
});
