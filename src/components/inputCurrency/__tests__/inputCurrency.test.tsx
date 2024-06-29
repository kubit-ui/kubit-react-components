import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { FormatNumber, InputContentPosition, InputState } from '@/components/input/types';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { POSITIONS } from '@/types/positions';

import * as stylesHook from '../../../hooks/useStyles/useStyles';
import { InputCurrency } from '../inputCurrency';

const mockProps = {
  variant: 'DEFAULT',
  name: 'username',
  label: { content: 'Currency' },
  currencyName: { content: 'EUR' },
  currencyPosition: POSITIONS.LEFT,
};

const mockStyles = {
  [InputState.EMPTY]: {
    currencyNameContainerPosition: InputContentPosition.OUT,
  },
};

const format = {
  style: 'decimal',
  maximumFractionDigits: 3,
  minimumFractionDigits: 1,
} as FormatNumber;

describe('New Input Currency Component', () => {
  test('Should render InputCurrency component', async () => {
    const { container } = renderProvider(<InputCurrency {...mockProps} formatNumber={format} />);

    const currencyBox = screen.getByText('EUR');
    expect(currencyBox).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Should render InputCurrency component with altTextCurrency and currencyPosition RIGHT', async () => {
    jest.spyOn(stylesHook, 'useStyles').mockImplementation(() => mockStyles);
    const { container } = renderProvider(
      <InputCurrency
        {...mockProps}
        currencyPosition={POSITIONS.RIGHT}
        extraAriaLabelledBy={'string'}
        screenReaderCurrencyName={'altTextCurrency'}
      />
    );

    const currencyBox = screen.getByText('EUR');
    expect(currencyBox).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
