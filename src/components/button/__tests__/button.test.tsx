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
});
