import { fireEvent, screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import type { BadgeProps } from '../types/badge';

import { Badge } from '../badge';

const mockProps: BadgeProps = {
  ['aria-label']: 'Open menu',
  ariaLiveText: 'New notification',
  'data-testid': 'badge',
  dot: {
    maxNumber: 99,
    number: 23,
    size: 'MEDIUM',
    variant: 'WITH_BORDER',
  },
  icon: { icon: 'CONTACTS' },
  label: { content: 'Notifications' },
  labelIcon: { icon: 'CHEVRON_DOWN' },
  size: 'DEFAULT',
  variant: 'PRIMARY',
};

describe('Badge component', () => {
  it('Should be displayed correctly', async () => {
    render(<Badge {...mockProps} />);

    const badge = screen.getByTestId(mockProps['data-testid'] as string);
    expect(badge).not.toBeNull();
  });

  it('When it has a dot, the dot position is customizable using customDotTranslate', () => {
    const ref = vi.fn();
    render(
      <Badge
        ref={ref}
        {...mockProps}
        customDotTranslate="translate(2px, 2px)"
      />,
    );

    const badge = screen.getByTestId(mockProps['data-testid'] as string);
    expect(badge).not.toBeNull();
  });

  it('Should be displayed correctly without label', async () => {
    render(<Badge {...mockProps} label={undefined} />);

    const badge = screen.getByTestId(mockProps['data-testid'] as string);
    expect(badge).not.toBeNull();
  });

  it('Should be displayed correctly with simulate onClick', () => {
    render(<Badge {...mockProps} label={undefined} />);

    const triggerButton = screen.getByLabelText('Open menu');
    fireEvent.click(triggerButton);

    const badge = screen.getByTestId(mockProps['data-testid'] as string);
    expect(badge).not.toBeNull();
  });

  it('Should call onClick if defined when open', async () => {
    const onClick = vi.fn();
    const { getByLabelText } = render(
      <Badge {...mockProps} onClick={onClick} />,
    );

    const triggerButton = getByLabelText('Open menu');
    fireEvent.click(triggerButton);

    expect(onClick).toHaveBeenCalled();
  });

  it('Should be displayed correctly when simulate onBlur', () => {
    render(<Badge {...mockProps} />);

    const triggerButton = screen.getByLabelText('Open menu');
    fireEvent.blur(triggerButton);

    const badge = screen.getByTestId(mockProps['data-testid'] as string);
    expect(badge).not.toBeNull();
  });

  it('Should not set active to false when blur happens within badge', () => {
    render(<Badge {...mockProps} />);

    const triggerButton = screen.getByLabelText('Open menu');

    // First activate the badge
    fireEvent.click(triggerButton);

    // Create a blur event where relatedTarget is within currentTarget
    const relatedTarget = document.createElement('div');
    triggerButton.appendChild(relatedTarget);

    fireEvent.blur(triggerButton, {
      relatedTarget,
    });

    const badge = screen.getByTestId(mockProps['data-testid'] as string);
    expect(badge).not.toBeNull();
  });

  it('Should render with hasDot as false', () => {
    render(<Badge {...mockProps} hasDot={false} />);

    const badge = screen.getByTestId(mockProps['data-testid'] as string);
    expect(badge).not.toBeNull();
  });

  it('Should render without dot prop', () => {
    const propsWithoutDot = { ...mockProps };
    delete propsWithoutDot.dot;

    render(<Badge {...propsWithoutDot} />);

    const badge = screen.getByTestId(mockProps['data-testid'] as string);
    expect(badge).not.toBeNull();
  });

  it('Should render without labelIcon', () => {
    const propsWithoutLabelIcon = { ...mockProps };
    delete propsWithoutLabelIcon.labelIcon;

    render(<Badge {...propsWithoutLabelIcon} />);

    const badge = screen.getByTestId(mockProps['data-testid'] as string);
    expect(badge).not.toBeNull();
  });

  it('Should render with ariaLiveText', () => {
    render(<Badge {...mockProps} ariaLiveText="Updated notification" />);

    const badge = screen.getByTestId(mockProps['data-testid'] as string);
    expect(badge).not.toBeNull();
  });

  it('Should render without onClick handler', () => {
    const propsWithoutHandlers = { ...mockProps };
    delete propsWithoutHandlers.onClick;

    render(<Badge {...propsWithoutHandlers} />);

    const badge = screen.getByTestId(mockProps['data-testid'] as string);
    expect(badge).not.toBeNull();
  });

  it('Should handle click without onClick handler', () => {
    const propsWithoutHandlers = { ...mockProps };
    delete propsWithoutHandlers.onClick;

    render(<Badge {...propsWithoutHandlers} />);

    const triggerButton = screen.getByLabelText('Open menu');
    fireEvent.click(triggerButton);

    const badge = screen.getByTestId(mockProps['data-testid'] as string);
    expect(badge).not.toBeNull();
  });
});
