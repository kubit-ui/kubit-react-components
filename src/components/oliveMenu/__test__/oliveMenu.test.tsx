import { act, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import * as mediaHooks from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { DeviceBreakpointsType } from '@/types';

import { OliveMenu } from '../oliveMenu';
import { IOliveMenu, OliveMenuListOptions } from '../types';

const mockSections: OliveMenuListOptions[] = [
  {
    title: { content: 'list 1' },
    options: [
      {
        label: 'option 1',
        value: 1,
      },
      {
        label: 'option 2',
        value: 2,
      },
      {
        label: 'option 3',
        url: 'https://www.google.com/',
        ['aria-label']: 'link to google 1',
        value: 37,
      },
    ],
  },
  {
    title: { content: 'list 2' },
    options: [
      {
        label: 'option 1',
        value: 1,
      },
      {
        label: 'option 2',
        value: 2,
      },
      {
        label: 'option 3',
        url: 'https://www.google.com/',
        ['aria-label']: 'link to google 1',
        value: 37,
      },
    ],
  },
];

const mockProps: IOliveMenu = {
  actionBottomSheetStructure: {
    closeIcon: {
      icon: 'UNICORN',
      altText: 'Close Menu',
    },
  },
  trigger: {
    content: 'Options',
    icon: {
      icon: 'UNICORN',
    },
    variant: 'PRIMARY',
    ['aria-label']: 'Open menu',
  },
  variant: 'DEFAULT',
  screenReaderText: 'Menu openned',
  sections: mockSections,
  onOptionClick: jest.fn(),
};

window.matchMedia = windowMatchMedia();

describe('OliveMenu component', () => {
  afterEach(() => {
    window.matchMedia = windowMatchMedia();
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('Should render OliveMenu', async () => {
    const { container } = renderProvider(<OliveMenu {...mockProps} ref={jest.fn()} />);

    const oliveMenu = screen.getByText(
      (_content, element) => element?.tagName.toLowerCase() === 'button'
    );

    expect(oliveMenu).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Should open the menu when the trigger button is being clicked', async () => {
    const { container } = renderProvider(<OliveMenu {...mockProps} />);

    const openButton = screen.getAllByText('Options');
    fireEvent.click(openButton[0]);

    // Element in the popover
    const popoverElement = screen.getByText('list 1');
    expect(popoverElement).toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('When desktop popover will be a div', async () => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    jest
      .spyOn(mediaHooks, 'useMediaDevice')
      .mockImplementation(() => DeviceBreakpointsType.DESKTOP);

    const { container } = renderProvider(<OliveMenu {...mockProps} />);

    const openButton = screen.getAllByText('Options');
    fireEvent.click(openButton[0]);

    // Element in the popover
    const popover = container.querySelector('[data-popover]');
    expect(popover?.tagName).toBe('DIV');

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('When mobile or tablet, popover will be a dialog', async () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);

    const { container } = renderProvider(<OliveMenu {...mockProps} />);

    const openButton = screen.getAllByText('Options');
    fireEvent.click(openButton[0]);

    // Element in the popover
    const popover = container.querySelector('[data-popover]');
    expect(popover?.tagName).toBe('DIALOG');

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should call onOptionClick when clicking and option', () => {
    const onOptionClickMock = jest.fn();
    renderProvider(<OliveMenu {...mockProps} onOptionClick={onOptionClickMock} />);

    const openButton = screen.getAllByText('Options');
    fireEvent.click(openButton[0]);

    const option = screen.getAllByText('option 1')[0];
    fireEvent.click(option);

    expect(onOptionClickMock).toHaveBeenCalled();
  });

  it('Should close the menu when the close button is being clicked', () => {
    renderProvider(<OliveMenu {...mockProps} />);

    const openButton = screen.getAllByText('Options');
    fireEvent.click(openButton[0]);

    // Element in the popover
    const popoverElement = screen.getByText('list 1');

    const closeButton = screen.getByLabelText(
      mockProps.actionBottomSheetStructure?.closeIcon?.altText as string
    );
    fireEvent.click(closeButton);

    expect(popoverElement).not.toBeInTheDocument();
  });

  it('Should close the menu when lose the focus outside', async () => {
    const handleOpenClose = jest.fn();
    renderProvider(
      <OliveMenu {...mockProps} dataTestId="OliveMenu" onOpenClose={handleOpenClose} />
    );

    const container = screen.getByTestId('OliveMenuContainer');

    // Lossing the focus when the popover is closed
    act(() => {
      fireEvent.blur(container);
    });
    expect(handleOpenClose).not.toHaveBeenCalled();

    // Open the popover
    const openButton = screen.getAllByText('Options');
    act(() => {
      fireEvent.click(openButton[0]);
    });

    // Element in the popover
    const popoverElement = screen.getByText('list 1');
    expect(popoverElement).toBeInTheDocument();

    // Move focus to an element inside the popover
    // Do not close the popover
    const option = screen.getAllByText('option 1')[0];
    act(() => {
      fireEvent.blur(container, { relatedTarget: option });
    });
    expect(popoverElement).toBeInTheDocument();

    // Close the popover lossing the focus
    act(() => {
      fireEvent.blur(container);
    });

    expect(handleOpenClose).toHaveBeenCalledWith(false, expect.anything());

    expect(popoverElement).not.toBeInTheDocument();
  });

  it('Should close the menu when pressing Escape', async () => {
    const handleOpenClose = jest.fn();
    renderProvider(<OliveMenu {...mockProps} onOpenClose={handleOpenClose} />);

    // Open the popover
    const openButton = screen.getAllByText('Options');

    // Simulate a inner element has the focus
    openButton[0].focus();

    // Press escape when is already close
    await act(async () => {
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27,
      });
    });
    expect(handleOpenClose).not.toHaveBeenCalled();

    act(() => {
      fireEvent.click(openButton[0]);
    });

    // Element in the popover
    const popoverElement = screen.getByText('list 1');

    // Simulate a inner element has the focus
    openButton[0].focus();

    // Press escape
    await act(async () => {
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27,
      });
    });

    expect(handleOpenClose).toHaveBeenCalledWith(false);

    expect(popoverElement).not.toBeInTheDocument();
  });
});
