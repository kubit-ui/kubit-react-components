import { act, fireEvent } from '@testing-library/react';
import * as React from 'react';

import { axe } from 'jest-axe';

import { ARROW_LEFT, ARROW_RIGHT } from '@/constants';
import { renderProvider } from '@/tests/renderProvider/renderProvider.utility';

import { CarouselUnControlled } from '../carouselUnControlled';
import * as CarouselHooks from '../hooks/useCarousel';
import { ICarouselUnControlled } from '../types';

const mockProps: ICarouselUnControlled = {
  variant: 'DEFAULT',
  elements: [
    <div key="0" aria-label="1 of 10" aria-roledescription="slide" role="group">
      0
    </div>,
    <div key="1" aria-label="2 of 10" aria-roledescription="slide" role="group">
      1
    </div>,
    <div key="2" aria-label="3 of 10" aria-roledescription="slide" role="group">
      2
    </div>,
    <div key="3" aria-label="4 of 10" aria-roledescription="slide" role="group">
      3
    </div>,
    <div key="4" aria-label="5 of 10" aria-roledescription="slide" role="group">
      4
    </div>,
    <div key="5" aria-label="6 of 10" aria-roledescription="slide" role="group">
      5
    </div>,
    <div key="6" aria-label="7 of 10" aria-roledescription="slide" role="group">
      6
    </div>,
    <div key="7" aria-label="8 of 10" aria-roledescription="slide" role="group">
      7
    </div>,
    <div key="8" aria-label="9 of 10" aria-roledescription="slide" role="group">
      8
    </div>,
    <div key="9" aria-label="10 of 10" aria-roledescription="slide" role="group">
      9
    </div>,
  ],
  numElementsPerPage: 3,
  leftArrow: {
    icon: 'ARROW_LEFT',
    ['aria-label']: 'Left arrow aria label',
  },
  rightArrow: {
    icon: 'ARROW_RIGHT',
    ['aria-label']: 'Right arrow aria label',
  },
  pageControlVariant: 'BULLETS',
  pageControlArrowsControlVariant: 'DEFAULT',
};

const numPages = Math.ceil(mockProps.elements.length / (mockProps.numElementsPerPage as number));

describe('Carousel component', () => {
  it('Carousel', async () => {
    const { container, getByTestId } = renderProvider(<CarouselUnControlled {...mockProps} />);

    const carousel = getByTestId('dataTestIdCarouselWrapper');
    expect(carousel).toBeInTheDocument();

    const results = await axe(container);
    // Disable style in line
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Carousel with numPages 1', async () => {
    const elements = [
      <div key="0" aria-label="1 of 10" aria-roledescription="slide" role="group">
        0
      </div>,
      <div key="1" aria-label="2 of 10" aria-roledescription="slide" role="group">
        1
      </div>,
    ];
    const { container, getByTestId } = renderProvider(
      <CarouselUnControlled {...mockProps} elements={elements} numElementsPerPage={2} />
    );

    const carousel = getByTestId('dataTestIdCarouselWrapper');
    fireEvent.keyDown(carousel, ARROW_LEFT);
    expect(carousel).toBeInTheDocument();
    const results = await axe(container);
    // Disable style in line
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Carousel, when linear an  arrows, if page is 0, left arrow is disabled', async () => {
    const { container, getByRole } = renderProvider(
      <CarouselUnControlled {...mockProps} circular={false} />
    );
    const leftArrow = getByRole('button', { name: mockProps.leftArrow?.['aria-label'] });
    expect(leftArrow).toBeDisabled();

    const results = await axe(container);
    // Disable style in line
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Carousel, when linear an  arrows, if page is last, right arrow is disabled', async () => {
    const { container, getByRole } = renderProvider(
      <CarouselUnControlled
        {...mockProps}
        circular={false}
        defaultPage={
          Math.ceil(mockProps.elements.length / (mockProps.numElementsPerPage as number)) - 1
        }
      />
    );
    const rightArrow = getByRole('button', { name: mockProps.rightArrow?.['aria-label'] });
    expect(rightArrow).toBeDisabled();

    const results = await axe(container);
    // Disable style in line
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Carousel, can navigate using arrows', () => {
    const mockHandlePageChange = jest.fn();
    const mockMockUseCarousel = () => ({
      handlePageChange: mockHandlePageChange,
      allowShift: {
        current: true,
      },
      numPages: Math.ceil(mockProps.elements.length / (mockProps.numElementsPerPage as number)),
      innerCurrentPage: { current: 0 },
    });
    jest.spyOn(CarouselHooks, 'useCarousel').mockImplementation(mockMockUseCarousel);
    const { getByRole } = renderProvider(<CarouselUnControlled {...mockProps} />);
    // Right arrow click
    const rightArrow = getByRole('button', { name: mockProps.rightArrow?.['aria-label'] });
    fireEvent.click(rightArrow);
    expect(mockHandlePageChange).toHaveBeenCalledWith(1);
    // Left arrow click
    const leftArrow = getByRole('button', { name: mockProps.leftArrow?.['aria-label'] });
    fireEvent.click(leftArrow);
    expect(mockHandlePageChange).toHaveBeenCalledWith(-1);
  });

  it('Carousel, if is circular, can press left arrow even in the first page', () => {
    const mockHandlePageChange = jest.fn();
    const mockMockUseCarousel = () => ({
      handlePageChange: mockHandlePageChange,
      allowShift: {
        current: true,
      },
      numPages: Math.ceil(mockProps.elements.length / (mockProps.numElementsPerPage as number)),
      innerCurrentPage: { current: 0 },
    });
    jest.spyOn(CarouselHooks, 'useCarousel').mockImplementation(mockMockUseCarousel);
    const { getByRole } = renderProvider(<CarouselUnControlled {...mockProps} />);
    // Left arrow click
    const leftArrow = getByRole('button', { name: mockProps.leftArrow?.['aria-label'] });
    fireEvent.click(leftArrow);
    expect(mockHandlePageChange).toHaveBeenCalledWith(-1);
  });

  it('Carousel, if carousel is not ready, when arrow click, navigation will not work', () => {
    const mockHandlePageChange = jest.fn();
    const mockMockUseCarousel = () => ({
      handlePageChange: mockHandlePageChange,
      allowShift: {
        current: false,
      },
      numPages: Math.ceil(mockProps.elements.length / (mockProps.numElementsPerPage as number)),
      innerCurrentPage: { current: 0 },
    });
    jest.spyOn(CarouselHooks, 'useCarousel').mockImplementation(mockMockUseCarousel);
    const { getByRole } = renderProvider(<CarouselUnControlled {...mockProps} />);
    // Right arrow click
    const rightArrow = getByRole('button', { name: mockProps.rightArrow?.['aria-label'] });
    fireEvent.click(rightArrow);
    expect(mockHandlePageChange).not.toHaveBeenCalledWith(1);
    // Left arrow click
    const leftArrow = getByRole('button', { name: mockProps.leftArrow?.['aria-label'] });
    fireEvent.click(leftArrow);
    expect(mockHandlePageChange).not.toHaveBeenCalledWith(-1);
  });

  it('Carousel, can navigate using keys', () => {
    const mockHandlePageChange = jest.fn();
    const mockMockUseCarousel = () => ({
      handlePageChange: mockHandlePageChange,
      allowShift: {
        current: true,
      },
      numPages: Math.ceil(mockProps.elements.length / (mockProps.numElementsPerPage as number)),
      innerCurrentPage: { current: 0 },
    });
    jest.spyOn(CarouselHooks, 'useCarousel').mockImplementation(mockMockUseCarousel);
    const { getByTestId } = renderProvider(<CarouselUnControlled {...mockProps} />);
    const carousel = getByTestId('dataTestIdCarouselWrapper');
    // key press right arrow
    fireEvent.keyDown(carousel, ARROW_RIGHT);
    expect(mockHandlePageChange).toHaveBeenCalledWith(1);
    // key press left arrow
    fireEvent.keyDown(carousel, ARROW_LEFT);
    expect(mockHandlePageChange).toHaveBeenCalledWith(-1);
  });

  it('Carousel, swipe will call to handlePageChange', () => {
    const mockHandlePageChange = jest.fn();
    let _onRightSwipe: () => void;
    let _onLeftSwipe: () => void;
    const mockMockUseCarousel = ({ onRightSwipe, onLeftSwipe }) => {
      _onRightSwipe = onRightSwipe;
      _onLeftSwipe = onLeftSwipe;
      const res = {
        handlePageChange: mockHandlePageChange,
        allowShift: {
          current: true,
        },
        numPages: Math.ceil(mockProps.elements.length / (mockProps.numElementsPerPage as number)),
        innerCurrentPage: { current: 0 },
      };
      return res;
    };
    jest.spyOn(CarouselHooks, 'useCarousel').mockImplementation(mockMockUseCarousel);
    renderProvider(<CarouselUnControlled {...mockProps} />);

    // simultate onRightSwipe
    act(() => {
      _onRightSwipe?.();
    });
    expect(mockHandlePageChange).toHaveBeenCalledWith(1);
    // simultate onLeftSwipe
    act(() => {
      _onLeftSwipe?.();
    });
    expect(mockHandlePageChange).toHaveBeenCalledWith(-1);
  });

  it('Carousel, if is circular, can swipe left arrow even in the first page', () => {
    const mockHandlePageChange = jest.fn();

    let _onLeftSwipe: () => void;
    const mockMockUseCarousel = ({ onLeftSwipe }) => {
      _onLeftSwipe = onLeftSwipe;
      const res = {
        handlePageChange: mockHandlePageChange,
        allowShift: {
          current: true,
        },
        numPages: Math.ceil(mockProps.elements.length / (mockProps.numElementsPerPage as number)),
        innerCurrentPage: { current: 0 },
      };
      return res;
    };
    jest.spyOn(CarouselHooks, 'useCarousel').mockImplementation(mockMockUseCarousel);
    renderProvider(<CarouselUnControlled {...mockProps} />);
    // simultate onLeftSwipe
    act(() => {
      _onLeftSwipe?.();
    });
    expect(mockHandlePageChange).toHaveBeenCalledWith(-1);
  });

  it('Carousel, if is linear and page 0, swipe left will not call to change page', () => {
    const mockHandlePageChange = jest.fn();
    let _onLeftSwipe: () => void;
    const mockMockUseCarousel = ({ onLeftSwipe }) => {
      _onLeftSwipe = onLeftSwipe;
      const res = {
        handlePageChange: mockHandlePageChange,
        allowShift: {
          current: true,
        },
        numPages: Math.ceil(mockProps.elements.length / (mockProps.numElementsPerPage as number)),
        innerCurrentPage: { current: 0 },
      };
      return res;
    };
    jest.spyOn(CarouselHooks, 'useCarousel').mockImplementation(mockMockUseCarousel);
    renderProvider(<CarouselUnControlled {...mockProps} circular={false} />);
    // simultate onLeftSwipe
    act(() => {
      _onLeftSwipe?.();
    });
    expect(mockHandlePageChange).not.toHaveBeenCalledWith(-1);
  });

  it('Carousel, if is linear and page last page, swipe right will not call to change page', () => {
    const mockHandlePageChange = jest.fn();

    let _onRightSwipe: () => void;
    const mockMockUseCarousel = ({ onRightSwipe }) => {
      _onRightSwipe = onRightSwipe;
      const numPages = Math.ceil(
        mockProps.elements.length / (mockProps.numElementsPerPage as number)
      );
      const res = {
        handlePageChange: mockHandlePageChange,
        allowShift: {
          current: true,
        },
        numPages,
        innerCurrentPage: { current: numPages - 1 },
      };
      return res;
    };
    jest.spyOn(CarouselHooks, 'useCarousel').mockImplementation(mockMockUseCarousel);
    renderProvider(
      <CarouselUnControlled
        {...mockProps}
        circular={false}
        defaultPage={
          Math.ceil(mockProps.elements.length / (mockProps.numElementsPerPage as number)) - 1
        }
      />
    );
    // simultate onRightSwipe
    act(() => {
      _onRightSwipe?.();
    });
    expect(mockHandlePageChange).not.toHaveBeenCalledWith(1);
  });

  it('Carousel can have extra padding as invisible arrows buttons', async () => {
    const { container, getByRole } = renderProvider(
      <CarouselUnControlled
        {...mockProps}
        extraPadding={100}
        extraPaddingAsArrow={true}
        leftArrow={{ ...mockProps.leftArrow, icon: undefined }}
        rightArrow={{ ...mockProps.rightArrow, icon: undefined }}
      />
    );
    const leftArrow = getByRole('button', { name: mockProps.leftArrow?.['aria-label'] });
    expect(leftArrow).toBeInTheDocument();
    const rightArrow = getByRole('button', { name: mockProps.rightArrow?.['aria-label'] });
    expect(rightArrow).toBeInTheDocument();

    const results = await axe(container);
    // Disable style in line
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results).toHaveNoViolations();
  });

  it('Carousel with PageControlAutomate', async () => {
    const pageControlAutomateConfig = {
      variant: 'DEFAULT',
      playStop: {
        icon: { icon: 'PLAY_BUTTON', altText: 'alt text play' },
        twistedIcon: { icon: 'STOP_BUTTON', altText: 'alt text stop' },
      },
      leftArrow: {
        icon: { icon: 'ARROW_LEFT', altText: 'alt text left arrow' },
      },
      rightArrow: {
        icon: { icon: 'ARROW_RIGHT', altText: 'alt text right arrow' },
      },
      mediaProgressBar: {
        barsAriaLabels: ['aria-label-0', 'aria-label-1', 'aria-label-2', 'aria-label-3'],
        barProgressDuration: 2000,
      },
    };

    const mockHandlePageChange = jest.fn();
    const mockMockUseCarousel = () => ({
      handlePageChange: mockHandlePageChange,
      allowShift: {
        current: true,
      },
      numPages,
      innerCurrentPage: { current: 0 },
    });
    jest.spyOn(CarouselHooks, 'useCarousel').mockImplementation(mockMockUseCarousel);

    const { getByLabelText } = renderProvider(
      <CarouselUnControlled {...mockProps} pageControlAutomateConfig={pageControlAutomateConfig} />
    );

    const rightArrow = getByLabelText(pageControlAutomateConfig.rightArrow.icon.altText);
    const leftArrow = getByLabelText(pageControlAutomateConfig.leftArrow.icon.altText);

    fireEvent.click(rightArrow);
    expect(mockHandlePageChange).toHaveBeenCalledWith(1);

    fireEvent.click(leftArrow);
    expect(mockHandlePageChange).toHaveBeenCalledWith(-1);
  });

  it('Carousel with PageControlAutomate can be used along circular mode', async () => {
    const pageControlAutomateConfig = {
      variant: 'DEFAULT',
      playStop: {
        icon: { icon: 'PLAY_BUTTON', altText: 'alt text play' },
        twistedIcon: { icon: 'STOP_BUTTON', altText: 'alt text stop' },
      },
      leftArrow: {
        icon: { icon: 'ARROW_LEFT', altText: 'alt text left arrow' },
      },
      rightArrow: {
        icon: { icon: 'ARROW_RIGHT', altText: 'alt text right arrow' },
      },
      mediaProgressBar: {
        barsAriaLabels: ['aria-label-0', 'aria-label-1', 'aria-label-2', 'aria-label-3'],
        barProgressDuration: 2000,
      },
    };

    const mockHandlePageChange = jest.fn();
    const mockMockUseCarousel = () => ({
      handlePageChange: mockHandlePageChange,
      allowShift: {
        current: true,
      },
      numPages,
      innerCurrentPage: { current: 0 },
    });
    jest.spyOn(CarouselHooks, 'useCarousel').mockImplementation(mockMockUseCarousel);

    const { getByLabelText } = renderProvider(
      <CarouselUnControlled
        {...mockProps}
        circular
        pageControlAutomateConfig={pageControlAutomateConfig}
      />
    );

    const rightArrow = getByLabelText(pageControlAutomateConfig.rightArrow.icon.altText);
    const leftArrow = getByLabelText(pageControlAutomateConfig.leftArrow.icon.altText);
    const indicator1 = getByLabelText(`Bar 1 of ${numPages}`);

    fireEvent.click(rightArrow);
    expect(mockHandlePageChange).toHaveBeenCalledWith(1);

    fireEvent.click(leftArrow);
    expect(mockHandlePageChange).toHaveBeenCalledWith(-1);

    expect(indicator1).toBeInTheDocument();
  });
});
