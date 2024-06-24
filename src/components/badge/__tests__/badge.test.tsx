import { act, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { BadgeUnControlled as Badge } from '../badgeUnControlled';
import { IBadgeUnControlled } from '../types';

window.matchMedia = windowMatchMedia();

// Mocks
const mockProps: IBadgeUnControlled = {
  dataTestId: 'badge-component',
  variant: 'PRIMARY',
  size: 'DEFAULT',
  dot: {
    variant: 'WITH_BORDER',
    size: 'MEDIUM',
    number: 23,
    maxNumber: 99,
  },
  popover: {
    variant: 'BADGE',
    content: (
      <div>
        <h1>Hello</h1>
      </div>
    ),
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

    const badge = screen.getByTestId(mockProps.dataTestId + 'Dot');
    expect(badge).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When it has a dot, the dot position is custompizable using customDotTranslate', async () => {
    const ref = jest.fn();
    const { container } = renderProvider(
      <Badge ref={ref} {...mockProps} customDotTranslate="translate(2px, 2px)" />
    );

    const badge = screen.getByTestId(mockProps.dataTestId + 'Dot');
    expect(badge).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should be displayed correctly without label', async () => {
    const { container } = renderProvider(<Badge {...mockProps} label={undefined} />);

    const badge = screen.getByTestId(mockProps.dataTestId + 'Dot');
    expect(badge).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should be displayed correctly with simulate onClick', async () => {
    const { container } = renderProvider(<Badge {...mockProps} label={undefined} />);

    const triggerButton = screen.getByLabelText('Open menu');
    fireEvent.click(triggerButton);

    const badge = screen.getByTestId(mockProps.dataTestId + 'Dot');
    expect(badge).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should display contentExpand when open', async () => {
    const { container, getByLabelText } = renderProvider(<Badge {...mockProps} />);

    const triggerButton = getByLabelText('Open menu');
    fireEvent.click(triggerButton);

    const contentExpand = screen.getByText('Hello');
    expect(contentExpand).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
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

  it('Popover can be closed automatically', async () => {
    const { getByLabelText } = renderProvider(<Badge {...mockProps} />);

    const triggerButton = getByLabelText('Open menu');
    fireEvent.click(triggerButton);

    const contentExpand = screen.getByText('Hello');
    expect(contentExpand).toBeInTheDocument();

    await act(async () => {
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
      });
    });

    expect(contentExpand).not.toBeInTheDocument();
  });

  it('When blur badge, it should close', () => {
    const { getByLabelText } = renderProvider(
      <>
        <div data-testid="button-test">test</div>
        <Badge {...mockProps} />
      </>
    );

    const triggerButton = getByLabelText('Open menu');
    fireEvent.click(triggerButton);

    const contentExpand = screen.getByText('Hello');
    expect(contentExpand).toBeInTheDocument();

    const badgeContainer = screen.getByTestId(mockProps.dataTestId + 'BadgeContainer');
    fireEvent.blur(badgeContainer);

    expect(contentExpand).not.toBeInTheDocument();
  });
});
