import { screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { Icon } from '@/components/icon';

import { renderProvider } from '../../../tests/renderProvider/renderProvider.utility';
import { Chip, ChipStateType } from '../index';

const mockProps = {
  variant: 'DEFAULT',
  label: { content: 'Label' },
  dataTestId: 'chip-component',
};

const mockPropsRange = {
  variant: 'DEFAULT',
  label: { content: 'Label' },
  dataTestId: 'chipComponent',
  range: [{ label: 'one' }, { label: 'two' }],
};

const mockCloseAndRangeIcon = {
  ...mockPropsRange,
  variant: 'DEFAULT',
  rangeIcon: { icon: <Icon altText="range_icon" icon="UNICORN" /> },
  closeIcon: { icon: <Icon altText="close_icon" icon="UNICORN" />, altText: 'closeIconLabel' },
};

describe('Chip Component', () => {
  test('Chip component render', async () => {
    const { container } = renderProvider(<Chip {...mockCloseAndRangeIcon} />);

    const chip = screen.getByTestId('chipComponent');
    expect(chip).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Chip component - range', async () => {
    const { container } = renderProvider(<Chip {...mockPropsRange} />);

    const chip = screen.getByTestId('chipComponent');

    expect(chip).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Chip component - range with key', async () => {
    const { container } = renderProvider(
      <Chip
        {...mockPropsRange}
        range={[
          { label: 'one', key: 'one' },
          { label: 'two', key: 'two' },
        ]}
      />
    );

    const chip = screen.getByTestId('chipComponent');

    expect(chip).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Chip component - custom icons', async () => {
    const { container } = renderProvider(<Chip {...mockCloseAndRangeIcon} />);

    const closeIcon = screen.getByRole('img', { name: 'close_icon' });
    const rangesIcon = screen.getAllByRole('img', { name: 'range_icon' });

    expect(closeIcon).toBeInTheDocument();
    expect(rangesIcon).toHaveLength(mockCloseAndRangeIcon.range.length - 1);

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Chip component - Error message', async () => {
    const { container } = renderProvider(
      <Chip
        {...mockProps}
        closeIcon={{ icon: <Icon altText="close_icon" icon="UNICORN" /> }}
        errorIcon={{ icon: 'icono', altText: 'alt text error' }}
        errorMessage={{ content: 'error' }}
        state={ChipStateType.ERROR}
      />
    );

    const errorMessage = screen.getByText('error');

    expect(errorMessage).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  test('Chip component - Left icon without range', async () => {
    const { container } = renderProvider(
      <Chip
        {...mockProps}
        leftIcon={{ icon: <Icon altText="close_icon" icon="UNICORN" /> }}
        state={ChipStateType.DEFAULT}
      />
    );

    const leftIcon = screen.getByRole('img', { name: 'close_icon' });

    expect(leftIcon).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });
});
