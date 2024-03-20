import { act, fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { CssAnimationTimingFunction, CssAnimationVariants } from '@/components/cssAnimation';
import { TAB } from '@/constants';
import { windowMatchMedia } from '@/tests/windowMatchMedia';
import { ROLES } from '@/types';
import * as Utils from '@/utils/focusHandlers/focusHandlers';

import { renderProvider } from '../../../tests/renderProvider/renderProvider.utility';
import { PopoverControlled } from '../popoverControlled';
import { PopoverUnControlled as Popover } from '../popoverUnControlled';

window.matchMedia = windowMatchMedia();

const mockProps = {
  open: true,
  blockBack: true,
  hasBackDrop: true,
  forwardedRef: jest.fn(),
  onHandleCloseInternally: jest.fn(),
};

describe('Popover component', () => {
  it('Render with a valid HTML structure', async () => {
    const { container } = renderProvider(<Popover {...mockProps}>content</Popover>);

    const popover = screen.getByRole(ROLES.DIALOG);

    expect(popover).toBeInTheDocument();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Render with a valid HTML structure when animation is configured', async () => {
    const { container } = renderProvider(
      <Popover
        {...mockProps}
        animation={{ type: CssAnimationVariants.SLIDE_IN }}
        animationOptions={{
          duration: 0.5,
          delay: 0,
          timingFunction: CssAnimationTimingFunction.EASE_IN,
          iterationCount: 1,
          animationDistanceInPx: 500,
          animationRotationInDeg: 500,
        }}
      >
        content
      </Popover>
    );

    const popover = screen.getByRole(ROLES.DIALOG);

    expect(popover).toBeInTheDocument();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('Close popover will no render the popover', async () => {
    const { container } = renderProvider(
      <Popover {...mockProps} open={false}>
        content
      </Popover>
    );

    const popover = screen.queryByRole(ROLES.DIALOG);

    expect(popover).not.toBeInTheDocument();
    const results = await axe(container);
    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
  });

  it('On press escape, popover will close', async () => {
    renderProvider(
      <Popover {...mockProps}>
        <button>toFocus</button>
      </Popover>
    );

    // Focus in an inner component
    fireEvent.focus(screen.getByRole(ROLES.BUTTON, { name: 'toFocus' }));
    await act(async () => {
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27,
      });
    });

    const popover = screen.queryByRole(ROLES.DIALOG);
    expect(popover).not.toBeInTheDocument();
  });

  it('When click outside, popover will close', async () => {
    renderProvider(
      <div>
        <button>external</button>
        <Popover {...mockProps}>
          <button>toFocus</button>
        </Popover>
      </div>
    );

    await act(async () => {
      fireEvent.mouseUp(screen.getByRole(ROLES.BUTTON, { name: 'external' }));
    });

    const popover = screen.queryByRole(ROLES.DIALOG);
    expect(popover).not.toBeInTheDocument();
  });

  it('When trapFocusInsideModal, popover will trap the focus when tab', () => {
    const mockTrapFocus = jest.fn();
    jest.spyOn(Utils, 'trapFocus').mockImplementation(mockTrapFocus);
    renderProvider(
      <Popover {...mockProps} trapFocusInsideModal>
        content
      </Popover>
    );

    const popover = screen.getByRole(ROLES.DIALOG);

    fireEvent.keyDown(popover, TAB);

    expect(mockTrapFocus).toHaveBeenCalled();
  });

  it('When popover opens, it is focus the first element inside the popover, and when closes it is retrieved to the previous focus (focusLastElementFocusedAfterClose true)', async () => {
    const TestCase = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <div>
          <button onClick={() => setOpen(true)}>external</button>
          <PopoverControlled open={open}>
            <button>internal</button>
          </PopoverControlled>
        </div>
      );
    };
    renderProvider(<TestCase />);

    const externalButton = screen.getByRole(ROLES.BUTTON, { name: 'external' });
    // fireEvent.focus(externalButton); is not changing document.ActiveEleemnt
    externalButton.focus();

    expect(externalButton).toHaveFocus();
    fireEvent.click(externalButton);

    const internalButton = screen.getByRole(ROLES.BUTTON, { name: 'internal' });
    expect(internalButton).toHaveFocus();

    // close
    await act(async () => {
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27,
      });
    });

    expect(externalButton).toHaveFocus();
  });

  it('When popover opens, it is focus the first element inside the popover, and when closes it is retrieved to the firt focusable element if focusLastElementFocusedAfterClose is false and focusScreenFirstDescendantAfterClose is true', async () => {
    renderProvider(
      <div>
        <button>external</button>
        <Popover
          {...mockProps}
          focusLastElementFocusedAfterClose={false}
          focusScreenFirstDescendantAfterClose={true}
        >
          <button>internal</button>
        </Popover>
      </div>
    );

    const externalButton = screen.getByRole(ROLES.BUTTON, { name: 'external' });
    const internalButton = screen.getByRole(ROLES.BUTTON, { name: 'internal' });

    expect(internalButton).toHaveFocus();

    // close
    await act(async () => {
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27,
      });
    });

    expect(externalButton).toHaveFocus();
  });

  it('Should open and close with animations', async () => {
    jest.useFakeTimers();
    const TestCase = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <div>
          <button onClick={() => setOpen(true)}>external</button>
          <PopoverControlled
            animation={{ type: CssAnimationVariants.SLIDE_IN }}
            animationOptions={{
              duration: 0.5,
              delay: 0,
              timingFunction: CssAnimationTimingFunction.EASE_IN,
              iterationCount: 1,
              animationDistanceInPx: 500,
              animationRotationInDeg: 500,
            }}
            open={open}
          >
            <button>internal</button>
          </PopoverControlled>
        </div>
      );
    };
    renderProvider(<TestCase />);

    const externalButton = screen.getByRole(ROLES.BUTTON, { name: 'external' });
    fireEvent.click(externalButton);
    await act(async () => {
      await jest.runAllTimers();
    });

    const popover = screen.getByRole(ROLES.DIALOG);
    expect(popover).toBeInTheDocument();

    // close
    await act(async () => {
      fireEvent.keyDown(window, {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27,
      });
    });

    await act(async () => {
      await jest.runAllTimers();
    });
    jest.useRealTimers();

    expect(popover).not.toBeInTheDocument();
  });
});
