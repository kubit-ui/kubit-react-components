import { fireEvent, screen } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { PageControl } from '../pageControl';

describe('PageControl tests', () => {
  const defaultMaxDots = 5;
  const dataTestId = 'PageControlComponet';
  it('Should render the correct dot number in LINE variant', async () => {
    const { container } = renderProvider(
      <PageControl
        arrowsControlVariant="DEFAULT"
        currentPosition={0}
        dataTestId={dataTestId}
        pages={4}
        variant="DEFAULT"
      />
    );
    const controller = screen.getByTestId(dataTestId);
    const results = await axe(container);

    expect(container).toHTMLValidate();
    expect(results).toHaveNoViolations();
    expect(controller.children[0].childElementCount).toBe(4);
  });

  it('When bullet, should render a additional dot when there is next/prev content', async () => {
    const commonProps = {
      arrowsControlVariant: 'DEFAULT',
      dataTestId,
      pages: 6,
      variant: 'BULLETS',
    };
    const { rerender } = renderProvider(<PageControl {...commonProps} currentPosition={0} />);

    const controller = screen.getByTestId(dataTestId);

    expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
    rerender(<PageControl {...commonProps} currentPosition={1} />);
    expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
    rerender(<PageControl {...commonProps} currentPosition={2} />);
    expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
    rerender(<PageControl {...commonProps} currentPosition={3} />);
    expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
    rerender(<PageControl {...commonProps} currentPosition={4} />);
    expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
    rerender(<PageControl {...commonProps} currentPosition={5} />);
    expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
    rerender(<PageControl {...commonProps} currentPosition={4} />);
    expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
    rerender(<PageControl {...commonProps} currentPosition={3} />);
    expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
    rerender(<PageControl {...commonProps} currentPosition={2} />);
    expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
    rerender(<PageControl {...commonProps} currentPosition={1} />);
    expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
    rerender(<PageControl {...commonProps} currentPosition={0} />);
    expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 1);
  });

  it('When bullet, should render both additional dots to indicate prev and next content', () => {
    renderProvider(
      <PageControl
        arrowsControlVariant="DEFAULT"
        currentPosition={6}
        dataTestId={dataTestId}
        pages={10}
        variant="BULLETS"
      />
    );
    const controller = screen.getByTestId(dataTestId);

    expect(controller.children[0].childElementCount).toBe(defaultMaxDots + 2);
  });

  it('Should render pagination when provided', async () => {
    const handleLeftArrowControlClick = jest.fn();
    const handleRightArrowControlClick = jest.fn();
    renderProvider(
      <PageControl
        arrowsControlVariant="DEFAULT"
        currentPosition={4}
        dataTestId={dataTestId}
        leftArrowControl={{
          icon: 'UNICORN',
          ['aria-label']: 'LEFT ARROW',
          onClick: handleLeftArrowControlClick,
        }}
        pages={7}
        rightArrowControl={{
          icon: 'UNICORN',
          ['aria-label']: 'RIGHT ARROW',
          onClick: handleRightArrowControlClick,
        }}
        variant="BULLETS"
      />
    );

    const leftArrow = screen.getByRole('button', { name: 'LEFT ARROW' });
    const rightArrow = screen.getByRole('button', { name: 'RIGHT ARROW' });

    await fireEvent.click(leftArrow);
    expect(handleLeftArrowControlClick).toHaveBeenCalled();
    await fireEvent.click(rightArrow);
    expect(handleRightArrowControlClick).toHaveBeenCalled();
  });

  it('When left or right arrows are disabled, onClick will not be called', async () => {
    const handleLeftArrowControlClick = jest.fn();
    const handleRightArrowControlClick = jest.fn();
    renderProvider(
      <PageControl
        arrowsControlVariant="DEFAULT"
        currentPosition={4}
        dataTestId={dataTestId}
        leftArrowControl={{
          icon: 'UNICORN',
          ['aria-label']: 'LEFT ARROW',
          disabled: true,
          onClick: handleLeftArrowControlClick,
        }}
        pages={7}
        rightArrowControl={{
          icon: 'UNICORN',
          ['aria-label']: 'RIGHT ARROW',
          disabled: true,
          onClick: handleRightArrowControlClick,
        }}
        variant="BULLETS"
      />
    );

    const leftArrow = screen.getByRole('button', { name: 'LEFT ARROW' });
    const rightArrow = screen.getByRole('button', { name: 'RIGHT ARROW' });

    await fireEvent.click(leftArrow);
    expect(handleLeftArrowControlClick).not.toHaveBeenCalledTimes(1);
    await fireEvent.click(rightArrow);
    expect(handleRightArrowControlClick).not.toHaveBeenCalledTimes(1);
  });
});
