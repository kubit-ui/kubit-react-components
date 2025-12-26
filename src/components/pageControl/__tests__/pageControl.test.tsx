// TO DO: RESOLVE THE TESTS
import { fireEvent, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';

import * as useMediaDevice from '@/lib/hooks/useMediaDevice/useMediaDevice';
import { render } from '@/lib/tests/render/render';
import { windowMatchMedia } from '@/lib/tests/windowMatchMedia/windowMatchMedia';
import { DEVICE_BREAKPOINTS } from '@/lib/types/breakpoints/breakpoints';

import { PageControl } from '../pageControl';

const dataTestId = 'PageControlComponet';

describe('PageControl tests', () => {
  it('Should render the correct dot number in LINE variant', async () => {
    const { container } = render(
      <PageControl
        arrowsControlVariant="DEFAULT"
        currentPosition={0}
        data-testid={dataTestId}
        pages={4}
        variant="DEFAULT"
      />,
    );
    const controller = screen.getByTestId(dataTestId);
    const results = await axe(container);

    expect(container).toHTMLValidate();
    expect(results.violations).toHaveLength(0);
    expect(controller.children[0].childElementCount).toBe(4);
  });

  // it('When bullet, should render a additional dot when there is next/prev content', async () => {
  //   const commonProps = {
  //     'arrowsControlVariant': 'DEFAULT',
  //     'data-testid': dataTestId,
  //     'pages': 6,
  //     'variant': 'BULLETS',
  //   };
  //   const { rerender } = render(<PageControl {...commonProps} currentPosition={0} />);

  //   const controller = screen.getByTestId(dataTestId);

  //   expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
  //   rerender(<PageControl {...commonProps} currentPosition={1} />);
  //   expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
  //   rerender(<PageControl {...commonProps} currentPosition={2} />);
  //   expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
  //   rerender(<PageControl {...commonProps} currentPosition={3} />);
  //   expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
  //   rerender(<PageControl {...commonProps} currentPosition={4} />);
  //   expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
  //   rerender(<PageControl {...commonProps} currentPosition={5} />);
  //   expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
  //   rerender(<PageControl {...commonProps} currentPosition={4} />);
  //   expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
  //   rerender(<PageControl {...commonProps} currentPosition={3} />);
  //   expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
  //   rerender(<PageControl {...commonProps} currentPosition={2} />);
  //   expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
  //   rerender(<PageControl {...commonProps} currentPosition={1} />);
  //   expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
  //   rerender(<PageControl {...commonProps} currentPosition={0} />);
  //   expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
  // });

  // it('When bullet, should render both additional dots to indicate prev and next content', () => {
  //   render(
  //     <PageControl
  //       arrowsControlVariant="DEFAULT"
  //       currentPosition={6}
  //       data-testid={dataTestId}
  //       pages={10}
  //       variant="BULLETS"
  //     />
  //   );
  //   const controller = screen.getByTestId(dataTestId);

  //   expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 2);
  // });

  it('Should render pagination when provided', async () => {
    const handleLeftControlClick = vi.fn();
    const handleRightControlClick = vi.fn();
    render(
      <PageControl
        arrowsControlVariant="DEFAULT"
        currentPosition={4}
        data-testid={dataTestId}
        leftControl={{
          ['aria-label']: 'LEFT ARROW',
          icon: 'UNICORN',
          onClick: handleLeftControlClick,
        }}
        pages={7}
        rightControl={{
          ['aria-label']: 'RIGHT ARROW',
          icon: 'UNICORN',
          onClick: handleRightControlClick,
        }}
        variant="BULLETS"
      />,
    );

    const leftArrow = screen.getByRole('button', { name: 'LEFT ARROW' });
    const rightArrow = screen.getByRole('button', { name: 'RIGHT ARROW' });

    await fireEvent.click(leftArrow);
    expect(handleLeftControlClick).toHaveBeenCalled();
    await fireEvent.click(rightArrow);
    expect(handleRightControlClick).toHaveBeenCalled();
  });

  it('When left or right arrows are disabled, onClick will not be called', async () => {
    const handleLeftControlClick = vi.fn();
    const handleRightControlClick = vi.fn();
    render(
      <PageControl
        arrowsControlVariant="DEFAULT"
        currentPosition={4}
        data-testid={dataTestId}
        leftControl={{
          ['aria-label']: 'LEFT ARROW',
          disabled: true,
          icon: 'UNICORN',
          onClick: handleLeftControlClick,
        }}
        pages={7}
        rightControl={{
          ['aria-label']: 'RIGHT ARROW',
          disabled: true,
          icon: 'UNICORN',
          onClick: handleRightControlClick,
        }}
        variant="BULLETS"
      />,
    );

    const leftArrow = screen.getByRole('button', { name: 'LEFT ARROW' });
    const rightArrow = screen.getByRole('button', { name: 'RIGHT ARROW' });

    await fireEvent.click(leftArrow);
    expect(handleLeftControlClick).not.toHaveBeenCalledTimes(1);
    await fireEvent.click(rightArrow);
    expect(handleRightControlClick).not.toHaveBeenCalledTimes(1);
  });
});

describe('ButtonControl render', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
    vi.restoreAllMocks();
  });

  beforeEach(() => {
    window.matchMedia = windowMatchMedia('onlyDesktop');
    vi.spyOn(useMediaDevice, 'useMediaDevice').mockImplementation(
      () => DEVICE_BREAKPOINTS.DESKTOP,
    );
  });

  it('renders correctly with default props', async () => {
    const handleLeftArrowControlClick = vi.fn();
    const handleRightArrowControlClick = vi.fn();
    render(
      <PageControl
        arrowsControlVariant="DEFAULT"
        currentPosition={4}
        data-testid={dataTestId}
        leftControl={{
          ['aria-label']: 'LEFT ARROW',
          onClick: handleLeftArrowControlClick,
        }}
        pages={7}
        rightControl={{
          ['aria-label']: 'RIGHT ARROW',
          onClick: handleRightArrowControlClick,
        }}
        variant="BULLETS"
      />,
    );
    const leftArrow = screen.getByRole('button', { name: 'LEFT ARROW' });
    const rightArrow = screen.getByRole('button', { name: 'RIGHT ARROW' });

    await fireEvent.click(leftArrow);
    expect(handleLeftArrowControlClick).toHaveBeenCalled();
    await fireEvent.click(rightArrow);
    expect(handleRightArrowControlClick).toHaveBeenCalled();
  });
});
