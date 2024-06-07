import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { InputState, InputTypeType } from '@/components/input/types';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import * as stylesHook from '../../../hooks/useStyles/useStyles';
import { InputCounter } from '../inputCounter';

const mockProps = {
  maxLength: 10,
  screenReaderTextCount: 'reader',
  variant: 'DEFAULT',
  name: 'name',
  type: InputTypeType.TEXT,
  label: { content: 'counter' },
  onChange: jest.fn(),
  value: 'value',
};

const mockStyles = {
  [InputState.EMPTY]: {},
};

describe('New Input Counter Component', () => {
  it('Should render InputCounter component', async () => {
    const { container } = renderProvider(<InputCounter {...mockProps} type={undefined} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should render InputCounter component without type', async () => {
    const { container } = renderProvider(<InputCounter {...mockProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should return null, when the textCountVariant do not exist', () => {
    jest.spyOn(stylesHook, 'useStyles').mockImplementation(() => mockStyles);
    const dataTestId = 'counter';

    const { queryByTestId } = renderProvider(
      <InputCounter {...mockProps} dataTestId={dataTestId} />
    );

    expect(queryByTestId(`${dataTestId}TextCount`)).toBeNull();
  });
});
