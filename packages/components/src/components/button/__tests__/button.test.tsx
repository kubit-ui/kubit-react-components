import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { render } from '@/lib/tests/render/render';

import type { ButtonProps } from '../types/button';

import { Button } from '../button';

const mockBase: ButtonProps = {
  ['aria-label']: 'Click on me!',
  'data-testid': 'button-component',
  fullWidth: false,
  onClick: vi.fn(),
  size: 'LARGE',
  type: 'button',
  variant: 'PRIMARY',
};

const mockProps = {
  ...mockBase,
  icon: { altText: 'altIcon', icon: 'icon' },
  variant: 'PRIMARY',
};

const mockPropsNoVariantNorState = {
  ...mockBase,
  state: undefined,
  variant: undefined,
};

const mockPropsNoTypeNorSize = {
  ...mockBase,
  size: undefined,
  type: undefined,
};

const mockWithoutIcon = {
  ...mockBase,
  variant: 'PRIMARY',
};

const children = 'Click me!';

describe('Button component', () => {
  it('Should render Button component', async () => {
    const { container } = render(<Button {...mockProps}>{children}</Button>);

    const button = screen.getByRole('button', { name: /click/i });

    expect(button).toBeDefined();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Button component without variant nor state', async () => {
    const { container } = render(
      <Button {...mockPropsNoVariantNorState}>{children}</Button>,
    );

    const button = screen.getByRole('button', { name: /click/i });

    expect(button).toBeDefined();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Button component without type nor size', async () => {
    const { container } = render(
      <Button {...mockPropsNoTypeNorSize}>{children}</Button>,
    );

    const button = screen.getByRole('button', { name: /click/i });

    expect(button).toBeDefined();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Button component without icon', async () => {
    const { container, queryByRole } = render(
      <Button {...mockWithoutIcon}>{children}</Button>,
    );

    expect(queryByRole('img')).toBeNull();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Button component without children and icon', async () => {
    const { container } = render(<Button {...mockWithoutIcon} />);

    expect(container).toBeEmptyDOMElement();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Button component with an SVG if icon prop is provided', async () => {
    const { container } = render(
      <Button
        icon={{ altText: 'altIcon', icon: 'icon' }}
        size="LARGE"
        variant="PRIMARY"
      />,
    );

    const svg = screen.getByRole('img', { name: /altIcon/i });

    expect(svg).not.toBeNull();
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Button with loading state', async () => {
    const { container } = render(
      <Button {...mockProps} loading loader={<div>Loading...</div>}>
        {children}
      </Button>,
    );

    const button = screen.getByTestId('button-component');
    expect(button).toBeDefined();
    expect(button.getAttribute('data-loading')).toBe('true');

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Button without loading when loading is false', async () => {
    const { container } = render(
      <Button {...mockProps} loader={<div>Loading...</div>} loading={false}>
        {children}
      </Button>,
    );

    const button = screen.getByTestId('button-component');
    expect(button).toBeDefined();
    expect(button.getAttribute('data-loading')).toBe('false');

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Button with fullWidth', async () => {
    const { container } = render(
      <Button {...mockProps} fullWidth>
        {children}
      </Button>,
    );

    const button = screen.getByTestId('button-component');
    expect(button).toBeDefined();
    expect(button.getAttribute('data-full-width')).toBe('true');

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Button with iconPosition RIGHT', async () => {
    const { container } = render(
      <Button {...mockProps} iconPosition="right">
        {children}
      </Button>,
    );

    const button = screen.getByTestId('button-component');
    expect(button).toBeDefined();
    expect(button.getAttribute('data-position')).toBe('right');

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Button with custom alignText', async () => {
    const { container } = render(
      <Button {...mockProps} alignText="center">
        {children}
      </Button>,
    );

    const button = screen.getByTestId('button-component');
    expect(button).toBeDefined();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Button with disabled state', async () => {
    const { container } = render(
      <Button {...mockProps} disabled>
        {children}
      </Button>,
    );

    const button = screen.getByTestId('button-component');
    expect(button).toBeDefined();
    expect(button).toBeDisabled();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Should render Button with form attribute', async () => {
    const { container } = render(
      <Button {...mockProps} form="my-form">
        {children}
      </Button>,
    );

    const button = screen.getByTestId('button-component');
    expect(button).toBeDefined();
    expect(button.getAttribute('form')).toBe('my-form');

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
