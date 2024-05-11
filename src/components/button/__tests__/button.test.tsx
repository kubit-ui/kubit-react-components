// vendors
import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

// provider
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { Button } from '../button';
// constants
import { ButtonStateType, ButtonType } from '../types';

const mockBase = {
  onClick: jest.fn,
  type: ButtonType.BUTTON,
  size: 'LARGE',
  variant: 'PRIMARY',
  state: ButtonStateType.DEFAULT,
  fullWidth: false,
  dataTestId: 'button-component',
  ['aria-label']: 'Click on me!',
};

const mockProps = {
  ...mockBase,
  icon: { icon: 'icon', altText: 'altIcon' },
  variant: 'PRIMARY',
};

const mockPropsNoVariantNorState = { ...mockBase, variant: undefined, state: undefined };

const mockPropsNoTypeNorSize = { ...mockBase, type: undefined, size: undefined };

const mockPropsLoader = {
  ...mockBase,
  loader: <>loader</>,
  loading: true,
};

const mockPropsLoaderAsVariant = {
  ...mockBase,
  loader: { variant: 'PRIMARY_WHITE', altText: 'loaderAltText' },
  loading: true,
};

const mockWithoutIcon = {
  ...mockBase,
  variant: 'PRIMARY',
};

const children = 'Click me!';

describe('Button component', () => {
  test('Should render Button component', async () => {
    const { container } = renderProvider(<Button {...mockProps}>{children}</Button>);

    const button = screen.getByRole('button', { name: /click/i });

    expect(button).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Button without variant nor state', async () => {
    const { container } = renderProvider(
      <Button {...mockPropsNoVariantNorState}>{children}</Button>
    );

    const button = screen.getByRole('button', { name: /click/i });

    expect(button).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Button without type nor size', async () => {
    const { container } = renderProvider(<Button {...mockPropsNoTypeNorSize}>{children}</Button>);

    const button = screen.getByRole('button', { name: /click/i });

    expect(button).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Button with loader', async () => {
    const { container } = renderProvider(<Button {...mockPropsLoader}>{children}</Button>);

    const loader = screen.queryByText('loader');

    expect(loader).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Button with loader as variant', async () => {
    const { queryByText, getByTestId, container } = renderProvider(
      <Button {...mockPropsLoaderAsVariant}>{children}</Button>
    );

    // Should only render loader variant
    const loader = queryByText(mockPropsLoaderAsVariant.loader.variant);
    expect(loader).toBeNull();

    const loaderVariant = getByTestId('loaderStandaloneTestId');
    expect(loaderVariant).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Button without icon', async () => {
    const { queryByRole, container } = renderProvider(
      <Button {...mockWithoutIcon}>{children}</Button>
    );

    expect(queryByRole('img')).toBeNull();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Button without children and icon', async () => {
    const { container } = renderProvider(<Button {...mockWithoutIcon}></Button>);

    expect(container).toBeEmptyDOMElement();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('should render an SVG if icon prop is provided', async () => {
    const { container } = renderProvider(
      <Button icon={{ icon: 'icon', altText: 'altIcon' }} size="LARGE" variant="PRIMARY" />
    );

    const svg = screen.getByRole('img', { name: /altIcon/i });

    expect(svg).toBeInTheDocument();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
