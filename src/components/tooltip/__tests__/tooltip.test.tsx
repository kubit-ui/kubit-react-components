import { fireEvent, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import { ENTER } from '@/lib/constants/keyboardKeys/keyboardKeys';
import * as mediaHooks from '@/lib/hooks/useMediaDevice/useMediaDevice';
import { render } from '@/lib/tests/render/render';
import { windowMatchMedia } from '@/lib/tests/windowMatchMedia/windowMatchMedia';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';
import { POSITIONS } from '@/lib/types/positions/positions';

import { TooltipUnControlled as Tooltip } from '../tooltipUnControlled';

// Mock ResizeObserver for floating-ui - must match popover test pattern
const mockResizeObserver = vi.fn(function (this: ResizeObserver) {
  this.observe = vi.fn();
  this.disconnect = vi.fn();
  this.unobserve = vi.fn();
}) as unknown as typeof ResizeObserver;

const mockProps = {
  children: 'text',
  content: { content: 'content' },
  triggerAsButton: {
    'aria-label': 'Tooltip trigger',
  },
  variant: 'DEFAULT',
};

describe('Tooltip', () => {
  beforeEach(() => {
    global.ResizeObserver = mockResizeObserver;
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  it('Tooltip - Desktop - it shows label', async () => {
    const { container } = render(
      <Tooltip {...mockProps} ref={vi.fn() as never} tooltipAsModal={false} />,
    );
    const label = screen.getByText(mockProps.children as string);

    expect(label).not.toBeNull();

    const results = await axe(container);
    // Tooltip may have inline styles
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  it('Tooltip - will not open if disabled', () => {
    render(<Tooltip {...mockProps} disabled={true} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const content = screen.queryByText(mockProps.content?.content as string);

    expect(content).toBeNull();
  });

  it('Tooltip - trigger will be a button when not childrenAsButton (default true)', () => {
    render(<Tooltip {...mockProps} />);
    const tooltipTrigger = screen.getByText(mockProps.children as string);

    expect(tooltipTrigger.tagName.toLocaleLowerCase()).toBe('button');
  });

  it('Tooltip - trigger will not be a button when childrenAsButton is false', () => {
    render(<Tooltip {...mockProps} childrenAsButton={false} />);
    const tooltipTrigger = screen.getByText(mockProps.children as string);

    expect(tooltipTrigger.tagName.toLocaleLowerCase()).not.toBe('button');
  });

  it('Tooltip - it shows tooltip on mouse enter label', async () => {
    render(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const content = screen.getByText(mockProps.content?.content as string);

    expect(content).toBeVisible();
  });

  it('Tooltip - it can have differents align - RIGHT', () => {
    render(
      <Tooltip {...mockProps} align={POSITIONS.RIGHT} tooltipAsModal={false} />,
    );
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const content = screen.getByText(mockProps.content?.content as string);

    expect(content).toBeVisible();
  });

  it('Tooltip - it can have differents align - BOTTOM', () => {
    render(
      <Tooltip
        {...mockProps}
        align={POSITIONS.BOTTOM}
        tooltipAsModal={false}
      />,
    );
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const content = screen.getByText(mockProps.content?.content as string);

    expect(content).toBeVisible();
  });

  it('Tooltip - it can have differents align - LEFT', () => {
    render(
      <Tooltip {...mockProps} align={POSITIONS.LEFT} tooltipAsModal={false} />,
    );
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const content = screen.getByText(mockProps.content?.content as string);

    expect(content).toBeVisible();
  });

  // it('Tooltip - it hides tooltip on mouse leave label', async () => {
  //   window.innerWidth = 9999;
  //   render(<Tooltip {...mockProps} tooltipAsModal={false} />);
  //   const label = screen.getByText(mockProps.children as string);

  //   fireEvent.mouseEnter(label);

  //   const title = screen.getByText(mockProps.title?.content as string);
  //   const content = screen.getByText(mockProps.content?.content as string);

  //   fireEvent.mouseLeave(label);

  //   expect(title).not.toBeVisible();
  //   expect(content).not.toBeVisible();
  // });

  // it('Tooltip - it shows tooltip on focus label', () => {
  //   render(<Tooltip {...mockProps} tooltipAsModal={false} />);
  //   const label = screen.getByText(mockProps.children as string);
  //   fireEvent.focus(label);

  //   const title = screen.getByText(mockProps.title?.content as string);
  //   const content = screen.getByText(mockProps.content?.content as string);
  //   const closeIcon = screen.getByLabelText('close icon');

  //   expect(title).toBeVisible();
  //   expect(content).toBeVisible();
  //   expect(closeIcon).toBeVisible();
  // });

  // it('Tooltip - it does not show tooltip on focus label if its being clicked at the same time', () => {
  //   render(<Tooltip {...mockProps} tooltipAsModal={false} />);
  //   const label = screen.getByText(mockProps.children as string);

  //   act(() => {
  //     // Open and close the tooltip first in order the inline styles to be applied
  //     fireEvent.mouseEnter(label);
  //     fireEvent.mouseLeave(label);
  //     fireEvent.mouseDown(label);
  //     fireEvent.focus(label);
  //     fireEvent.mouseUp(label);
  //   });

  //   const title = screen.getByText(mockProps.title?.content as string);
  //   expect(title).not.toBeVisible();
  // });

  // it('Tooltip - it hides tooltip on blur tooltip', () => {
  //   render(<Tooltip {...mockProps} tooltipAsModal={false} />);
  //   const label = screen.getByText(mockProps.children as string);

  //   fireEvent.focus(label);

  //   const title = screen.getByText(mockProps.title?.content as string);
  //   const content = screen.getByText(mockProps.content?.content as string);

  //   fireEvent.blur(screen.getByRole('tooltip'));

  //   expect(title).not.toBeVisible();
  //   expect(content).not.toBeVisible();
  // });

  // it('Tooltip - it hides tooltip on close icon click', () => {
  //   render(<Tooltip {...mockProps} tooltipAsModal={false} />);
  //   const label = screen.getByText(mockProps.children as string);
  //   fireEvent.focus(label);

  //   const title = screen.getByText(mockProps.title?.content as string);
  //   const content = screen.getByText(mockProps.content?.content as string);
  //   const closeIcon = screen.getByLabelText('close icon');

  //   expect(title).toBeVisible();
  //   expect(content).toBeVisible();
  //   expect(closeIcon).toBeVisible();

  //   fireEvent.click(closeIcon);

  //   expect(title).not.toBeVisible();
  //   expect(content).not.toBeVisible();
  //   expect(closeIcon).not.toBeVisible();
  // });

  // it('Tooltip - onBlur will not produce any effect after on close icon click', () => {
  //   render(<Tooltip {...mockProps} tooltipAsModal={false} />);
  //   const label = screen.getByText(mockProps.children as string);
  //   fireEvent.focus(label);

  //   const title = screen.getByText(mockProps.title?.content as string);
  //   const content = screen.getByText(mockProps.content?.content as string);
  //   const closeIcon = screen.getByLabelText('close icon');
  //   const tooltip = screen.getByRole('tooltip');

  //   fireEvent.click(closeIcon);
  //   fireEvent.blur(tooltip);

  //   expect(title).not.toBeVisible();
  //   expect(content).not.toBeVisible();
  //   expect(closeIcon).not.toBeVisible();
  // });

  // it('Tooltip - onClick will not produce any effect if desktop and tooltip is not a modal', () => {
  //   render(<Tooltip {...mockProps} tooltipAsModal={false} />);
  //   const label = screen.getByText(mockProps.children as string);
  //   // Have to show and hide the tooltip first because it does not detect the tooltip as invisible when starting due to styled-component
  //   // Only desktop, in mobile if not visible the component is not rendered
  //   fireEvent.focus(label);
  //   const tooltip = screen.getByRole('tooltip');
  //   fireEvent.blur(tooltip);
  //   fireEvent.click(label);

  //   const title = screen.getByText(mockProps.title?.content as string);
  //   const content = screen.getByText(mockProps.content?.content as string);

  //   expect(title).not.toBeVisible();
  //   expect(content).not.toBeVisible();
  // });

  it('Tooltip - onClick in the label will open / close the tooltip in desktop if configured as modal', () => {
    render(<Tooltip {...mockProps} tooltipAsModal={true} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.click(label);

    const content = screen.getByText(mockProps.content?.content as string);

    expect(content).toBeVisible();

    fireEvent.click(label);

    expect(content).not.toBeVisible();
  });

  it('Tooltip - it shows content as JSX.Element on mouse enter label', () => {
    render(
      <Tooltip
        {...mockProps}
        content={{ content: <h1>ELEMENT</h1> }}
        tooltipAsModal={false}
      />,
    );
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const content = screen.getByText('ELEMENT');

    expect(content).not.toBeNull();
  });

  // it('Tooltip - mobile - it shows label and tooltip in mobile on click', async () => {
  //   window.matchMedia = windowMatchMedia('onlyMobile');
  //   vi.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(
  //     () => DEVICE_BREAKPOINTS.MOBILE,
  //   );
  //   const { container } = render(
  //     <Tooltip {...mockProps} tooltipAsModal={false} />,
  //   );
  //   const label = screen.getByText(mockProps.children as string);

  //   fireEvent.click(label);

  //   const title = screen.getByText(mockProps.title?.content as string);
  //   const content = screen.getByText(mockProps.content?.content as string);
  //   const closeIcon = screen.getByLabelText('close icon');

  //   expect(title).not.toBeNull();
  //   expect(content).not.toBeNull();
  //   expect(closeIcon).not.toBeNull();

  //   const results = await axe(container);
  //   // Tooltip may have inline styles
  //   expect(container).toHTMLValidate({
  //     rules: {
  //       'no-inline-style': 'off',
  //     },
  //   });
  //   expect(results.violations).toHaveLength(0);
  // });

  it('Tooltip - mobile - the tooltip is not displayed onMouseDown', () => {
    // This test allow to increase the coverage, when onMouseDown is called to prevent default
    // Can be improved to test the expected behaviour
    window.matchMedia = windowMatchMedia('onlyMobile');
    vi.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.MOBILE,
    );
    render(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);
    fireEvent.mouseDown(label);

    const content = screen.queryByText(mockProps.content?.content as string);

    expect(content).toBeNull();
  });

  // it('Tooltip - mobile - it shows tooltip when clicked and not on focus', () => {
  //   window.matchMedia = windowMatchMedia('onlyMobile');
  //   vi.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DEVICE_BREAKPOINTS.MOBILE);
  //   render(<Tooltip {...mockProps} tooltipAsModal={false} />);
  //   const label = screen.getByText(mockProps.children as string);

  //   fireEvent.focus(label);
  // const title = screen.queryByText(mockProps.title?.content as string);
  // expect(title).not.toBeInTheDocument();

  // fireEvent.click(label);
  // const titleAfterClick = screen.getByText(mockProps.title?.content as string);
  //   const content = screen.getByText(mockProps.content?.content as string);
  //   const closeIcon = screen.getByLabelText('close icon');

  //   expect(titleAfterClick).not.toBeNull();
  //   expect(content).not.toBeNull();
  //   expect(closeIcon).not.toBeNull();
  // });

  // it('Tooltip - mobile - it hides tooltip on close icon click', () => {
  //   window.matchMedia = windowMatchMedia('onlyMobile');
  //   vi.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DEVICE_BREAKPOINTS.MOBILE);
  //   render(<Tooltip {...mockProps} tooltipAsModal={false} />);
  //   const label = screen.getByText(mockProps.children as string);

  //   fireEvent.click(label);

  //   const title = screen.getByText(mockProps.title?.content as string);
  //   const content = screen.getByText(mockProps.content?.content as string);
  //   const closeIcon = screen.getByLabelText('close icon');

  //   fireEvent.click(closeIcon);

  //   expect(title).toBeNull();
  //   expect(content).toBeNull();
  //   expect(closeIcon).toBeNull();
  // });

  it('Tooltip - mobile - the tooltip is not displayed onMouseEnter (or Leave)', () => {
    window.matchMedia = windowMatchMedia('onlyMobile');
    vi.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.MOBILE,
    );
    render(<Tooltip {...mockProps} tooltipAsModal={false} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.mouseEnter(label);

    const content = screen.queryByText(mockProps.content?.content as string);

    expect(content).toBeNull();

    fireEvent.mouseLeave(label);

    expect(content).toBeNull();
  });

  // it('Tooltip - mobile - close on press escape', () => {
  //   window.matchMedia = windowMatchMedia('onlyMobile');
  //   vi.spyOn(mediaHooks, 'useMediaDevice').mockImplementation(() => DEVICE_BREAKPOINTS.MOBILE);
  //   render(<Tooltip {...mockProps} tooltipAsModal={false} />);

  //   const label = screen.getByText(mockProps.children as string);

  //   fireEvent.focus(label);

  //   const title = screen.getByText(mockProps.title?.content as string);
  //   expect(title).not.toBeNull();

  //   // Internal popover element fire the escape keydown
  //   fireEvent.keyDown(title, {
  //     code: 'Escape',
  //     key: 'Escape',
  //   });

  //   expect(title).toBeNull();
  // });

  it('Tooltip as modal - it shows tooltip on click label', async () => {
    render(<Tooltip {...mockProps} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.click(label);

    const content = screen.getByText(mockProps.content?.content as string);

    expect(content).toBeVisible();
  });

  it('Tooltip as modal - it shows tooltip on enter key', async () => {
    render(<Tooltip {...mockProps} />);
    const label = screen.getByText(mockProps.children as string);

    fireEvent.keyDown(label, ENTER);

    const content = screen.getByText(mockProps.content?.content as string);

    expect(content).toBeVisible();
  });

  it('Tooltip as modal - it should have the external aria-label when it set', () => {
    const externalArialLabel = 'external aria label';
    render(
      <Tooltip
        {...mockProps}
        tooltipAriaLabel={externalArialLabel}
        tooltipAsModal={true}
      />,
    );
    const label = screen.getByText(mockProps.children as string);

    fireEvent.keyDown(label, ENTER);

    const tooltip = screen.getByLabelText(externalArialLabel);

    expect(tooltip).not.toBeNull();
  });
});
