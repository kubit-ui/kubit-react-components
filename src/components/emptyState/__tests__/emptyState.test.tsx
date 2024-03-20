import React from 'react';

import { axe } from 'jest-axe';

import { TextComponentType } from '@/components/text/types';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { ROLES } from '@/types';

import { EmptyState } from '../index';

const MOCK = {
  title: { content: 'title' },
  subtitle: { content: 'subtitle' },
  variant: 'DEFAULT',
  state: 'DEFAULT',
  link: {
    variant: 'PRIMARY',
    content: 'Link',
    url: 'wwww',
    onClick: jest.fn(),
  },
  button: {
    variant: 'PRIMARY',
    content: 'Click me!',
    onClick: jest.fn(),
  },
  icon: { icon: 'PROFILE_ICON' },
};

test('Should render EmptyState', async () => {
  const { getByText, container } = renderProvider(<EmptyState {...MOCK} />);

  expect(getByText('title')).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('EmptyState - should render image, title, subtitle, link and button when passed props', async () => {
  const MOCK_WITH_TEXT_COMPONENTS = {
    ...MOCK,
    title: { content: 'title', component: TextComponentType.H1, variant: 'FONT_HEADING_60' },
    subtitle: { content: 'subtitle', variant: 'FONT_HEADING_60' },
  };
  const { getByRole, container, getByText } = renderProvider(
    <EmptyState {...MOCK_WITH_TEXT_COMPONENTS} />
  );

  expect(getByRole(ROLES.HEADING, { name: 'title', level: 1 })).toBeInTheDocument();
  expect(getByText('subtitle')).toBeInTheDocument();
  expect(getByRole(ROLES.BUTTON, { name: 'Click me!' })).toBeInTheDocument();
  expect(getByText('Link')).toBeInTheDocument();

  const results = await axe(container);
  expect(container).toHTMLValidate();
  expect(results).toHaveNoViolations();
});

test('EmptyState - should render a ReactNode for subtitle when received', () => {
  const MOCK_WITH_REACT_NODE = {
    ...MOCK,
    subtitle: {
      content: (
        <span data-testid="EmptyStateReactNode">
          <p>I am a string</p>
          <p>I am too</p>
        </span>
      ),
    },
    icon: undefined,
  };
  const { getByTestId } = renderProvider(<EmptyState {...MOCK_WITH_REACT_NODE} />);

  expect(getByTestId('EmptyStateReactNode')).toBeInTheDocument();
});

test('EmptyState - should render an illustration', () => {
  const { getByAltText } = renderProvider(
    <EmptyState
      {...MOCK}
      illustration={{ illustration: 'illustration', altText: 'alt text illustration' }}
    />
  );

  expect(getByAltText('alt text illustration')).toBeInTheDocument();
});
