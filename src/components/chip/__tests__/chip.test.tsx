import { screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { IconBasic as Icon } from '@/components/icon/icon';
import { render } from '@/lib/tests/render/render';
import { STATES } from '@/lib/types/states/states';

import { Chip } from '../chip';

const mockProps = {
  'data-testid': 'chip-component',
  label: { content: 'Label' },
  variant: 'DEFAULT',
};

const mockPropsRange = {
  'data-testid': 'chipComponent',
  label: { content: 'Label' },
  range: [{ label: 'one' }, { label: 'two' }],
  variant: 'DEFAULT',
};

const mockCloseAndRangeIcon = {
  ...mockPropsRange,
  closeIcon: {
    altText: 'closeIconLabel',
    icon: <Icon altText="close_icon" icon="UNICORN" />,
  },
  rangeIcon: { icon: <Icon altText="range_icon" icon="UNICORN" /> },
  variant: 'DEFAULT',
};

describe('Chip Component', () => {
  it('Chip component render', async () => {
    const { container } = render(<Chip {...mockCloseAndRangeIcon} />);

    const chip = screen.getByTestId('chipComponent');
    expect(chip).not.toBeNull();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Chip component - range', async () => {
    const { container } = render(<Chip {...mockPropsRange} />);

    const chip = screen.getByTestId('chipComponent');

    expect(chip).not.toBeNull();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Chip component - range with key', async () => {
    const { container } = render(
      <Chip
        {...mockPropsRange}
        range={[
          { key: 'one', label: 'one' },
          { key: 'two', label: 'two' },
        ]}
      />,
    );

    const chip = screen.getByTestId('chipComponent');

    expect(chip).not.toBeNull();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Chip component - custom icons', async () => {
    const { container } = render(<Chip {...mockCloseAndRangeIcon} />);

    const closeIcon = screen.getByRole('img', { name: 'close_icon' });
    const rangesIcon = screen.getAllByRole('img', { name: 'range_icon' });

    expect(closeIcon).not.toBeNull();
    expect(rangesIcon).toHaveLength(mockCloseAndRangeIcon.range.length - 1);

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Chip component - Error message', async () => {
    const { container } = render(
      <Chip
        {...mockProps}
        closeIcon={{ icon: <Icon altText="close_icon" icon="UNICORN" /> }}
        errorIcon={{ altText: 'alt text error', icon: 'icono' }}
        errorMessage={{ content: 'error' }}
        state={STATES.ERROR}
      />,
    );

    const errorMessage = screen.getByText('error');

    expect(errorMessage).not.toBeNull();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });

  it('Chip component - Left icon without range', async () => {
    const { container } = render(
      <Chip
        {...mockProps}
        leftIcon={{ icon: <Icon altText="close_icon" icon="UNICORN" /> }}
        state={STATES.DEFAULT}
      />,
    );

    const leftIcon = screen.getByRole('img', { name: 'close_icon' });

    expect(leftIcon).not.toBeNull();

    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
