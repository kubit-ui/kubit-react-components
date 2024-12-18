import { act, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { axe } from 'jest-axe';

import { ENTER } from '@/constants/keyboardKeys/keyboardKeys';
import * as mediaHooks from '@/hooks/useMediaDevice/useMediaDevice';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';
import { DeviceBreakpointsType } from '@/types/breakpoints/breakpoints';
import { ROLES } from '@/types/role/role';

import { windowMatchMedia } from '../../../tests/windowMatchMedia/windowMatchMedia';
import { CssAnimationTimingFunction } from '../../cssAnimation/types/cssAnimation';
import { CssAnimationVariants } from '../../cssAnimation/types/variant';
import { TooltipUnControlled as Tooltip } from '../tooltipUnControlled';
import { ITooltipUnControlled } from '../types/tooltip';
import { TooltipAlignType } from '../types/tooltipAlign';

const mockProps: ITooltipUnControlled = {
  children: 'text',
  variant: 'DEFAULT',
  title: { content: 'title' },
  content: { content: 'content' },
  triggerAsButton: {
    'aria-label': 'Tooltip trigger',
  },
  closeIcon: { icon: 'UNICORN', altText: 'close icon' },
};

describe('Tooltip', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('Tooltip - Desktop - it shows label', async () => {
    const { container } = renderProvider(
      <Tooltip {...mockProps} ref={jest.fn()} tooltipAsModal={false} />
    );
    const label = screen.getByText(mockProps.children as string);

    expect(label).toBeInTheDocument();

    const results = await axe(container);
    // Tooltip may have inline styles
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Tooltip - will not open if disabled', () => {
    renderProvider(<Tooltip {...mockProps} disabled={true} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const title = screen.queryByText(mockProps.title?.content as string);
    const content = screen.queryByText(mockProps.content?.content as string);

    expect(title).not.toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
  });

  it('Tooltip - trigger will be a button when not childrenAsButton (default true)', () => {
    renderProvider(<Tooltip {...mockProps} />);
    const tooltipTrigger = screen.getByText(mockProps.children as string);

    expect(tooltipTrigger.tagName.toLocaleLowerCase()).toBe('button');
  });

  it('Tooltip - trigger will not be a button when childrenAsButton is false', () => {
    renderProvider(<Tooltip {...mockProps} childrenAsButton={false} />);
    const tooltipTrigger = screen.getByText(mockProps.children as string);

    expect(tooltipTrigger.tagName.toLocaleLowerCase()).not.toBe('button');
  });

  it('Tooltip - it shows tooltip on mouse enter label', async () => {
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);

    expect(title).toBeVisible();
    expect(content).toBeVisible();
  });

  it('Tooltip - it can have differents align - RIGHT', () => {
    renderProvider(
      <Tooltip {...mockProps} align={TooltipAlignType.RIGHT} tooltipAsModal={false} />
    );
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);

    expect(title).toBeVisible();
    expect(content).toBeVisible();
  });

  it('Tooltip - it can have differents align - BOTTOM', () => {
    renderProvider(
      <Tooltip {...mockProps} align={TooltipAlignType.BOTTOM} tooltipAsModal={false} />
    );
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);

    expect(title).toBeVisible();
    expect(content).toBeVisible();
  });

  it('Tooltip - it can have differents align - LEFT', () => {
    renderProvider(<Tooltip {...mockProps} align={TooltipAlignType.LEFT} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);

    expect(title).toBeVisible();
    expect(content).toBeVisible();
  });

  it('Tooltip - it hides tooltip on mouse leave label', async () => {
    window.innerWidth = 9999;
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);

    fireEvent.mouseLeave(label);

    expect(title).not.toBeVisible();
    expect(content).not.toBeVisible();
  });

  it('Tooltip - it shows tooltip on focus label', () => {
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);
    fireEvent.focus(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);
    const closeIcon = screen.getByLabelText('close icon');

    expect(title).toBeVisible();
    expect(content).toBeVisible();
    expect(closeIcon).toBeVisible();
  });

  it('Tooltip - it does not show tooltip on focus label if its being clicked at the same time', () => {
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    act(() => {
      // Open and close the tooltip first in order the inline styles to be applied
      fireEvent.mouseEnter(label);
      fireEvent.mouseLeave(label);
      fireEvent.mouseDown(label);
      fireEvent.focus(label);
      fireEvent.mouseUp(label);
    });

    const title = screen.getByText(mockProps.title?.content as string);
    expect(title).not.toBeVisible();
  });

  it('Tooltip - it hides tooltip on blur tooltip', () => {
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.focus(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);

    fireEvent.blur(screen.getByRole(ROLES.TOOLTIP));

    expect(title).not.toBeVisible();
    expect(content).not.toBeVisible();
  });

  it('Tooltip - it hides tooltip on close icon click', () => {
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);
    fireEvent.focus(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);
    const closeIcon = screen.getByLabelText('close icon');

    expect(title).toBeVisible();
    expect(content).toBeVisible();
    expect(closeIcon).toBeVisible();

    fireEvent.click(closeIcon);

    expect(title).not.toBeVisible();
    expect(content).not.toBeVisible();
    expect(closeIcon).not.toBeVisible();
  });

  it('Tooltip - onBlur will not produce any effect after on close icon click', () => {
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);
    fireEvent.focus(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);
    const closeIcon = screen.getByLabelText('close icon');
    const tooltip = screen.getByRole(ROLES.TOOLTIP);

    fireEvent.click(closeIcon);
    fireEvent.blur(tooltip);

    expect(title).not.toBeVisible();
    expect(content).not.toBeVisible();
    expect(closeIcon).not.toBeVisible();
  });

  it('Tooltip - onClick will not produce any effect if desktop and tooltip is not a modal', () => {
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);
    // Have to show and hide the tooltip first because it does not detect the tooltip as invisible when starting due to styled-component
    // Only desktop, in mobile if not visible the component is not rendered
    fireEvent.focus(label);
    const tooltip = screen.getByRole(ROLES.TOOLTIP);
    fireEvent.blur(tooltip);
    fireEvent.click(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);

    expect(title).not.toBeVisible();
    expect(content).not.toBeVisible();
  });

  it('Tooltip - onClick in the label will open / close the tooltip in desktop if configured as modal', () => {
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={true} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.click(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);

    expect(title).toBeVisible();
    expect(content).toBeVisible();

    fireEvent.click(label);

    expect(title).not.toBeVisible();
    expect(content).not.toBeVisible();
  });

  it('Tooltip - it shows content as JSX.Element on mouse enter label', () => {
    renderProvider(
      <Tooltip {...mockProps} content={{ content: <h1>ELEMENT</h1> }} tooltipAsModal={false} />
    );
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const content = screen.getByText('ELEMENT');

    expect(content).toBeInTheDocument();
  });

  it('Tooltip - it allows animation', () => {
    renderProvider(
      <Tooltip
        {...mockProps}
        popover={{
          animation: { type: CssAnimationVariants.SLIDE_IN },
          animationOptions: {
            duration: 0.2,
            delay: 0,
            timingFunction: CssAnimationTimingFunction.EASE_IN,
            iterationCount: 1,
            animationRotationInDeg: 500,
            animationYStartPosition: '-48%',
            animationXStartPosition: '0%',
            animationYEndPosition: '-50%',
            animationXEndPosition: '0%',
          },
        }}
      />
    );
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);
    const closeIcon = screen.getByLabelText('close icon');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();
  });

  it('Tooltip - mobile - it shows label and tooltip in mobile on click', async () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    const { container } = renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.click(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);
    const closeIcon = screen.getByLabelText('close icon');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();

    const results = await axe(container);
    // Tooltip may have inline styles
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Tooltip - mobile - it close the tooltip after clicking twice', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.click(label);
    fireEvent.click(label);

    const title = screen.queryByText(mockProps.title?.content as string);
    const content = screen.queryByText(mockProps.content?.content as string);
    const closeIcon = screen.queryByRole(ROLES.BUTTON, {
      name: mockProps.closeIcon?.altText,
    });

    expect(title).not.toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
    expect(closeIcon).not.toBeInTheDocument();
  });

  it('Tooltip - mobile - the tooltip is not displayed onMouseDown', () => {
    // This test allow to increase the coverage, when onMouseDown is called to prevent default
    // Can be improved to test the expected behaviour
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);
    fireEvent.mouseDown(label);

    const title = screen.queryByText(mockProps.title?.content as string);
    const content = screen.queryByText(mockProps.content?.content as string);
    const closeIcon = screen.queryByRole(ROLES.BUTTON, {
      name: mockProps.closeIcon?.altText,
    });

    expect(title).not.toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
    expect(closeIcon).not.toBeInTheDocument();
  });

  it('Tooltip - mobile - it shows tooltip on focus', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.focus(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);
    const closeIcon = screen.getByLabelText('close icon');

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(closeIcon).toBeInTheDocument();
  });

  it('Tooltip - mobile - it hides tooltip on close icon click', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.focus(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);
    const closeIcon = screen.getByLabelText('close icon');

    fireEvent.click(closeIcon);

    expect(title).not.toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
    expect(closeIcon).not.toBeInTheDocument();
  });

  it('Tooltip - mobile - the tooltip is not displayed onMouseEnter (or Leave)', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const title = screen.queryByText(mockProps.title?.content as string);
    const content = screen.queryByText(mockProps.content?.content as string);
    const closeIcon = screen.queryByRole(ROLES.BUTTON, {
      name: mockProps.closeIcon?.altText,
    });

    expect(title).not.toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
    expect(closeIcon).not.toBeInTheDocument();

    fireEvent.mouseLeave(label);

    expect(title).not.toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
    expect(closeIcon).not.toBeInTheDocument();
  });

  it('Tooltip - mobile - close on press escape', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    jest.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DeviceBreakpointsType.MOBILE);
    renderProvider(<Tooltip {...mockProps} tooltipAsModal={false} />);

    const label = screen.getByText(mockProps.children as string);

    fireEvent.focus(label);

    const title = screen.getByText(mockProps.title?.content as string);
    expect(title).toBeInTheDocument();

    // Internal popover element fire the escape keydown
    fireEvent.keyDown(title, {
      key: 'Escape',
      code: 'Escape',
    });

    expect(title).not.toBeInTheDocument();
  });

  it('Tooltip as modal - it shows tooltip on click label', async () => {
    renderProvider(<Tooltip {...mockProps} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.click(label);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);

    expect(title).toBeVisible();
    expect(content).toBeVisible();
  });

  it('Tooltip as modal - it shows tooltip on enter key', async () => {
    renderProvider(<Tooltip {...mockProps} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.keyDown(label, ENTER);

    const title = screen.getByText(mockProps.title?.content as string);
    const content = screen.getByText(mockProps.content?.content as string);

    expect(title).toBeVisible();
    expect(content).toBeVisible();
  });

  it('Tooltip as modal - it should have the external aria-label when it set', () => {
    const externalArialLabel = 'external aria label';
    renderProvider(<Tooltip {...mockProps} tooltipAsModal tooltipAriaLabel={externalArialLabel} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.keyDown(label, ENTER);

    const tooltip = screen.getByLabelText(externalArialLabel);

    expect(tooltip).toBeInTheDocument();
  });
});
