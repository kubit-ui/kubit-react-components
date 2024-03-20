import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { LabelStandAlone } from '../labelStandAlone';

// mocks
const mockProps = {
  children: 'labelText',
  required: true,
  requiredSymbol: '',
  inputId: 'value',
};

test('Label component', async () => {
  const { getByText, container } = renderProvider(<LabelStandAlone {...mockProps} />);

  expect(getByText('labelText')).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});
