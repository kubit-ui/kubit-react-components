import { act, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { windowMatchMedia } from '@/tests/windowMatchMedia';

import { DrawerUnControlled as Drawer } from '../drawerUnControlled';
import { DrawerLevelPositionTypes, IDrawerUncontrolled } from '../types/';

window.matchMedia = windowMatchMedia();

const mockProps: IDrawerUncontrolled = {
  title: { content: 'drawer' },
  level: DrawerLevelPositionTypes.FIRST_LEVEL,
  variant: 'DEFAULT',
  footer: { content: [<div key={0}>footer</div>] },
  children: 'Hello',
  closeIcon: { icon: 'close', ['aria-label']: 'Close icon' },
  dataTestId: 'drawer',
};

describe('Drawer component', () => {
  it('Should render Drawer component', async () => {
    const { container } = renderProvider(<Drawer {...mockProps} />);

    const popover = screen.getByText('Hello');

    expect(popover).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should render Drawer component with second level', async () => {
    const newMockProps = {
      ...mockProps,
      level: DrawerLevelPositionTypes.SECOND_LEVEL,
    };

    const { container } = renderProvider(<Drawer {...newMockProps} />);

    const popover = screen.getByText('Hello');

    expect(popover).toBeDefined();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should simulate icon onClick', async () => {
    const newMockProps = {
      ...mockProps,
      rightIcon: 'UNICORN',
    };
    const onOpenCloseMock = jest.fn();

    const { container } = renderProvider(
      <Drawer {...newMockProps} onOpenClose={onOpenCloseMock} />
    );

    const icon = screen.getByLabelText(mockProps.closeIcon?.['aria-label'] as string);

    await act(async () => {
      fireEvent.click(icon);
    });

    expect(onOpenCloseMock).toHaveBeenCalledWith(false);
    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Simulate onClickBackFirstLevel', async () => {
    const mockHandleCloseIconClick = jest.fn();
    const newMockProps = {
      ...mockProps,
      leftIcon: 'UNICORN',
      level: DrawerLevelPositionTypes.SECOND_LEVEL,
    };

    const { container } = renderProvider(
      <Drawer
        {...newMockProps}
        closeIcon={{ ...newMockProps.closeIcon, onClick: mockHandleCloseIconClick }}
      />
    );

    const icon = screen.getByLabelText(mockProps.closeIcon?.['aria-label'] as string);
    await act(async () => {
      fireEvent.click(icon);
    });

    expect(mockHandleCloseIconClick).toHaveBeenCalled();
    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Should execute onCloseInternally when Esc key is pressed', async () => {
    const { container } = renderProvider(
      <Drawer {...mockProps} popover={{ pressEscapeClose: true }} variant={'TESTING_NO_ANIMATION'}>
        <button type="button">testButton</button>
      </Drawer>
    );
    const popover = screen.getByTestId('drawerPopover');

    const closeButton = screen.getByLabelText(mockProps.closeIcon?.['aria-label'] as string);
    expect(closeButton).toHaveFocus();

    const testButton = screen.getByText('testButton');
    expect(testButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.keyDown(popover, {
        key: 'Escape',
        code: 'Escape',
      });
    });

    expect(testButton).not.toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('OnClick close button should call onOpenClose and closeModal', async () => {
    const mockHandleOpenClose = jest.fn();
    const { container } = renderProvider(
      <Drawer
        {...mockProps}
        popover={{ pressEscapeClose: true }}
        variant={'TESTING_NO_ANIMATION'}
        onOpenClose={mockHandleOpenClose}
      />
    );

    const closeButton = screen.getByLabelText(mockProps.closeIcon?.['aria-label'] as string);
    expect(closeButton).toHaveFocus();

    await act(async () => {
      fireEvent.click(closeButton);
    });

    expect(mockHandleOpenClose).toHaveBeenCalledTimes(1);
    expect(closeButton).not.toBeInTheDocument();

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
        'prefer-native-element': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });
});
