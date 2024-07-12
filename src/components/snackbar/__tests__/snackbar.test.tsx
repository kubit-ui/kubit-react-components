import { act, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { ROLES } from '@/types';

import { Snackbar, SnackbarMessageType } from '../index';

const MOCK = {
  variant: 'DEFAULT',
  ref: jest.fn(),
  onSecondaryActionClick: jest.fn(),
  open: true,
  closeIcon: {
    icon: 'UNICORN',
    altText: 'Aria label',
  },
  icon: {
    icon: 'ADD',
    altText: 'alt icon',
  },
  secondaryActionContent: 'Link',
  title: { content: 'title' },
  type: SnackbarMessageType.INFORMATIVE,
  dataTestId: 'Snackbar',
};

const mockWithDescription = {
  ...MOCK,
  description: { content: 'description' },
};

const mockWithActionButtonVariant = {
  ...MOCK,
  variant: 'TESTING_WITH_ACTION_BUTTON_VARIANT',
};

window.matchMedia = windowMatchMedia();

describe('Snackbar component', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('Should render Snackbar', async () => {
    const { container } = renderProvider(<Snackbar {...MOCK} />);

    expect(screen.getByText('title')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Default isOpen prop is false', () => {
    renderProvider(<Snackbar {...MOCK} open={undefined} />);

    expect(screen.queryByText('title')).not.toBeInTheDocument();
  });

  it('Should render icon, link and button when passed props', async () => {
    const { container } = renderProvider(<Snackbar {...MOCK}>Snackbar Content</Snackbar>);

    expect(screen.getByText('alt icon')).toBeInTheDocument();
    expect(screen.getByText('title')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should toggle visibility of Snackbar panel content correctly', () => {
    renderProvider(<Snackbar {...MOCK} closeIcon={{ icon: 'UNICORN' }} />);
    const triggerButton = screen.getByTestId(`${MOCK.dataTestId}Icon`);

    fireEvent.click(triggerButton);

    expect(screen.queryAllByText('button')).toHaveLength(0);
  });

  const MockSnackbarFocusLastElement = () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <button data-testid="firstPageElement">First Page Element</button>
        <button data-testid="openSnackbar" onClick={() => setOpen(true)}>
          Open Snackbar
        </button>
        <Snackbar {...MOCK} closeIcon={{ icon: 'UNICORN' }} open={open} />
      </div>
    );
  };
  it('after closing manually, if the element foucsed before the snackbar is open exist, this element will be focused', () => {
    renderProvider(<MockSnackbarFocusLastElement />);

    act(() => {
      // Focus the button
      screen.getByTestId('openSnackbar').focus();
    });

    act(() => {
      // Open snackbar bar
      fireEvent.click(screen.getByTestId('openSnackbar'));
    });

    act(() => {
      // Close snackbar bar
      fireEvent.click(screen.getByTestId(`${MOCK.dataTestId}Icon`));
    });
    // open snackbar should have the focus back
    expect(screen.getByTestId('openSnackbar')).toHaveFocus();
  });

  const MockSnackbarCloseManuallyFocusFirstDescentand = () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <button data-testid="firstPageElement">First Page Element</button>
        {!open && (
          <button data-testid="openSnackbar" onClick={() => setOpen(true)}>
            Open Snackbar
          </button>
        )}
        <Snackbar {...MOCK} closeIcon={{ icon: 'UNICORN' }} open={open} />
      </div>
    );
  };
  it('after closing manually, if the element that opens the snackbar does not exist, first element of the page should have the focus', () => {
    renderProvider(<MockSnackbarCloseManuallyFocusFirstDescentand />);

    act(() => {
      // Focus the button
      screen.getByTestId('openSnackbar').focus();
    });

    act(() => {
      // Open snackbar bar
      fireEvent.click(screen.getByTestId('openSnackbar'));
    });

    act(() => {
      // Close snackbar bar
      fireEvent.click(screen.getByTestId(`${MOCK.dataTestId}Icon`));
    });

    // first element of the page should have the focus
    expect(screen.getByTestId('firstPageElement')).toHaveFocus();
  });

  it('Should render icon, link, button and description when passed props', async () => {
    const { container } = renderProvider(
      <Snackbar {...mockWithDescription}>Snackbar Content</Snackbar>
    );
    expect(screen.getByText('alt icon')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('Link')).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('When secondaryActionName and styles has  actionButton.variant a button with its action should be rendered', async () => {
    const { container } = renderProvider(
      <Snackbar {...mockWithActionButtonVariant}>Snackbar Content</Snackbar>
    );
    expect(
      screen.getByRole(ROLES.BUTTON, { name: mockWithActionButtonVariant.secondaryActionContent })
    ).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Snackbar call the onOpenClose function, when the functions is provider and the snackbar closes automatically due to the closeTimeOut if neither focus or hovering', () => {
    jest.useFakeTimers();
    const mockOpenClose = jest.fn();
    renderProvider(<Snackbar {...MOCK} closeTimeout={3000} onOpenClose={mockOpenClose} />);

    expect(mockOpenClose).not.toHaveBeenCalled();
    // Delete the snackbar focus
    fireEvent.blur(screen.getByRole(ROLES.ALERT));

    jest.runAllTimers();
    expect(mockOpenClose).toHaveBeenCalled();
  });

  it('Snackbar will not call the onOpenClose function if the closeTimeOut set, but the user is hovering the snackbar', () => {
    jest.useFakeTimers();
    const mockOpenClose = jest.fn();
    renderProvider(<Snackbar {...MOCK} closeTimeout={3000} onOpenClose={mockOpenClose} />);
    // Delete the snackbar focus
    fireEvent.blur(screen.getByRole(ROLES.ALERT));
    fireEvent.mouseEnter(screen.getByRole(ROLES.ALERT));
    jest.runAllTimers();
    expect(mockOpenClose).not.toHaveBeenCalled();
    fireEvent.mouseLeave(screen.getByRole(ROLES.ALERT));
    jest.runAllTimers();
    expect(mockOpenClose).toHaveBeenCalled();
  });

  it('Snackbar will not call the onOpenClose function if the closeTimeOut set, but the user is focusing the snackbar', () => {
    jest.useFakeTimers();
    const mockOpenClose = jest.fn();
    renderProvider(<Snackbar {...MOCK} closeTimeout={3000} onOpenClose={mockOpenClose} />);
    // Focus inner snackbar button
    const link = screen.getByRole(ROLES.LINK);
    fireEvent.focus(link);
    jest.runAllTimers();
    expect(mockOpenClose).not.toHaveBeenCalled();
    fireEvent.blur(link);
    jest.runAllTimers();
    expect(mockOpenClose).toHaveBeenCalled();
  });
});
