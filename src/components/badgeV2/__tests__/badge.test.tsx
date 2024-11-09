import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { BadgeV2 as Badge } from '../badge';
import { IBadge } from '../types/badge';

// Mocks
const mockProps: IBadge = {
  dataTestId: 'badge-component',
  variant: 'PRIMARY',
  size: 'DEFAULT',
  dot: {
    variant: 'WITH_BORDER',
    size: 'MEDIUM',
    number: 23,
    maxNumber: 99,
  },
  icon: { icon: 'CONTACTS' },
  label: { content: 'Notifications' },
  labelIcon: { icon: 'CHEVRON_DOWN' },
  ariaLiveText: 'New notification',
  ['aria-label']: 'Open menu',
};

describe('Badge component', () => {
  it('Should be displayed correctly', async () => {
    const ref = jest.fn();
    const { container } = renderProvider(<Badge ref={ref} {...mockProps} />);

    const badge = screen.getByTestId(mockProps.dataTestId as string);
    expect(badge).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When it has a dot, the dot position is custompizable using customDotTranslate', () => {
    const ref = jest.fn();
    renderProvider(<Badge ref={ref} {...mockProps} customDotTranslate="translate(2px, 2px)" />);

    const badge = screen.getByTestId(mockProps.dataTestId as string);
    expect(badge).toBeInTheDocument();
  });

  it('CustomDotTranslate can also be defined via styles', () => {
    const ref = jest.fn();
    renderProvider(
      <Badge ref={ref} {...mockProps} cts={{ customDotNumberTranslate: '"translate(2px, 2px)' }} />
    );

    const badge = screen.getByTestId(mockProps.dataTestId as string);
    expect(badge).toBeInTheDocument();
  });

  it('Should be displayed correctly without label', async () => {
    const { container } = renderProvider(<Badge {...mockProps} label={undefined} />);

    const badge = screen.getByTestId(mockProps.dataTestId as string);
    expect(badge).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should be displayed correctly with simulate onClick', () => {
    renderProvider(<Badge {...mockProps} label={undefined} />);

    const triggerButton = screen.getByLabelText('Open menu');
    fireEvent.click(triggerButton);

    const badge = screen.getByTestId(mockProps.dataTestId as string);
    expect(badge).toBeInTheDocument();
  });

  it('Should call onClick if defined when open', async () => {
    const onClick = jest.fn();
    const { container, getByLabelText } = renderProvider(
      <Badge {...mockProps} onClick={onClick} />
    );

    const triggerButton = getByLabelText('Open menu');
    fireEvent.click(triggerButton);

    expect(onClick).toHaveBeenCalled();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should be displayed correctly when simulate onBlur', () => {
    renderProvider(<Badge {...mockProps} />);

    const triggerButton = screen.getByLabelText('Open menu');
    fireEvent.blur(triggerButton);

    const badge = screen.getByTestId(mockProps.dataTestId as string);
    expect(badge).toBeInTheDocument();
  });
});
