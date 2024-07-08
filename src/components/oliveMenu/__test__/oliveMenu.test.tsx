import { act, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

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
  it('Should render OliveMenu', async () => {
    const { container } = renderProvider(<OliveMenu {...mockProps} />);

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

    const menu = screen.getByText(
      (content, element) => element?.tagName.toLowerCase() === 'dialog'
    );
    expect(menu).toBeInTheDocument();

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

    const menu = screen.getByText(
      (_content, element) => element?.tagName.toLowerCase() === 'dialog'
    );

    const closeButton = screen.getByLabelText(
      mockProps.actionBottomSheetStructure?.closeIcon?.altText as string
    );
    fireEvent.click(closeButton);

    expect(menu).not.toBeInTheDocument();
  });

  it('Should close the menu when the popover is closed automatically', async () => {
    renderProvider(
      <div>
        <button>external</button>
        <OliveMenu {...mockProps} />
      </div>
    );

    const openButton = screen.getAllByText('Options');
    fireEvent.click(openButton[0]);

    const menu = screen.getByText(
      (_content, element) => element?.tagName.toLowerCase() === 'dialog'
    );

    const external = screen.getByText('external');
    await act(async () => {
      fireEvent.mouseUp(external);
    });

    expect(menu).not.toBeInTheDocument();
  });
});
