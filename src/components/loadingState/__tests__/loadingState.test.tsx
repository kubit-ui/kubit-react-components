import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { LoadingState, LoadingStateState } from '../index';

const mockProps = {
  title: { content: 'title' },
  description: { content: 'description' },
  state: LoadingStateState.PRIMARY,
  ['aria-label']: 'loading',
  screenReaderText: 'loading',
  hideText: false,
  variant: 'DEFAULT',
};

const mockPropsWithoutTexts = {
  state: LoadingStateState.PRIMARY,
  ['aria-label']: 'loading state',
  screenReaderText: 'loading state',
  variant: 'DEFAULT',
};

const mockPropsWithoutVariant = {
  title: { content: 'title' },
  description: { content: 'description' },
  ['aria-label']: 'loading state',
  screenReaderText: 'loading state',
  state: LoadingStateState.PRIMARY,
  variant: 'DEFAULT',
};

test('Should render LoadingState', async () => {
  const { container } = renderProvider(<LoadingState {...mockProps} />);

  expect(screen.getByRole(ROLES.IMG, { name: 'loading' })).toBeInTheDocument();

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('Should render LoadingState without variants', async () => {
  const { container } = renderProvider(<LoadingState {...mockPropsWithoutVariant} />);

  expect(screen.getByText('title')).toBeInTheDocument();
  expect(screen.getByText('description')).toBeInTheDocument();

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('LoadingState - should render title and description when passed props and variant is primary', async () => {
  const { container } = renderProvider(<LoadingState {...mockProps} />);

  expect(screen.getByText('title')).toBeInTheDocument();
  expect(screen.getByText('description')).toBeInTheDocument();

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('LoadingState - should not render title and description when these props are not passed', async () => {
  const { container } = renderProvider(<LoadingState {...mockPropsWithoutTexts} />);

  expect(screen.queryByText('title')).not.toBeInTheDocument();
  expect(screen.queryByText('description')).not.toBeInTheDocument();

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
