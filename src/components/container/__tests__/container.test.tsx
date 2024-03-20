import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { Container } from '../index';

const mockProps = {
  variant: 'DEFAULT',
  title: { content: 'title' },
  children: 'children',
};

test('Should render Container', async () => {
  const { getByText, container } = renderProvider(<Container {...mockProps} />);

  expect(getByText('children')).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('Should render title prop as h4 by default', async () => {
  const { getByRole, container } = renderProvider(<Container {...mockProps} />);

  expect(getByRole(ROLES.HEADING, { name: 'title', level: 4 })).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});
