import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { Dot } from '../index';

const mockProps = {
  number: 0,
  maxNumber: 25,
  dataTestId: 'dataTestId',
  variant: 'ALTERNATIVE',
  size: 'SMALL',
  styles: {
    background_color: '',
    border_color: '',
    border_width: '',
  },
  sizeStyles: {
    container_size_height: '',
    container_size_width: '',
  },
};

const mockMaxNumberProps = {
  number: 100,
  maxNumber: 99,
  variant: 'WITH_BORDER',
  size: 'BIG',
  styles: {
    background_color: '',
    border_color: '',
    border_width: '',
  },
  sizeStyles: {
    container_size_height: '',
    container_size_width: '',
  },
};

test('Should render Dot component', async () => {
  const { getByTestId, container } = renderProvider(<Dot {...mockProps} />);
  const dot = getByTestId(mockProps.dataTestId);

  expect(dot).toBeDefined();
  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('Should render Dot with plus simbol', async () => {
  const { getByText, container } = renderProvider(<Dot {...mockMaxNumberProps} />);

  const dot = getByText('+99');

  expect(dot).toBeInTheDocument();
  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});
