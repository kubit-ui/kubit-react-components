import { fireEvent, screen } from '@testing-library/react';

import { render } from '@/lib/tests/render/render';

import { Badge } from '../badge';
import type { BadgeProps } from '../types/badge';

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
});
