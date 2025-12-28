import { act } from 'react';
import { axe } from 'vitest-axe';

import { CarouselVariantType } from '@/lib/designSystem/kubit/components/carousel/variants';
import { render } from '@/lib/tests/render/render';

import type { ICarousel } from '../types/carousel';

import { Carousel } from '../carousel';
import { useCarousel } from '../hooks/useCarousel';

const mockProps: ICarousel = {
  elements: [
    <div key="e-1">Element 1</div>,
    <div key="e-2">Element 2</div>,
    <div key="e-3">Element 3</div>,
  ],
  variant: CarouselVariantType.DEFAULT,
};

// Mock the hooks that are already tested
vi.mock('../hooks/useCarousel', () => ({
  useCarousel: vi.fn(() => ({
    allowShiftRef: { current: true },
    changePage: vi.fn(),
  })),
}));
const mockUseCarousel = vi.mocked(useCarousel);

describe('Carousel component', () => {
  it('Should render carousel component', async () => {
    const { container } = render(<Carousel {...mockProps} ref={() => ({})} />);

    const results = await axe(container);
    expect(container).toHTMLValidate({
      rules: {
        'no-inline-style': 'off',
      },
    });
    expect(results.violations).toHaveLength(0);
  });

  it('uptates internally numElementsPerPage is defined but greater than the number of elements', () => {
    render(
      <Carousel
        {...mockProps}
        ref={() => ({})}
        numElementsPerPage={mockProps.elements.length + 2}
      />,
    );

    expect(mockUseCarousel).toHaveBeenCalledWith(
      expect.objectContaining({
        numElementsPerPage: mockProps.elements.length,
      }),
    );
  });

  it('sets internally allowModifySliceWidth to false if numElementsPerPage is 0 or undefined', () => {
    render(
      <Carousel
        {...mockProps}
        ref={() => ({})}
        allowModifySliceWidth={true}
        numElementsPerPage={0}
      />,
    );

    expect(mockUseCarousel).toHaveBeenCalledWith(
      expect.objectContaining({
        allowModifySliceWidth: false,
      }),
    );
  });

  it('sets internally allowModifySliceWidth to false if autoFitContainer', () => {
    render(
      <Carousel
        {...mockProps}
        ref={() => ({})}
        allowModifySliceWidth={true}
        autoFitContainer={true}
        numElementsPerPage={5}
      />,
    );

    expect(mockUseCarousel).toHaveBeenCalledWith(
      expect.objectContaining({
        allowModifySliceWidth: false,
      }),
    );
  });

  it('allows to set screenReaderOnly prop', () => {
    const { container } = render(
      <Carousel
        {...mockProps}
        defaultPage={0}
        screenReaderOnly={{ content: 'Pages {{currentPage}}' }}
      />,
    );

    const screenReaderElement = container.querySelector('screen-reader-only');
    expect(screenReaderElement).toBeInTheDocument();
  });

  it('calls onNumPagesChange when the number of pages changes', async () => {
    const onNumPagesChange = vi.fn();
    let capturedOnNumPagesChange: ((numPages: number) => void) | undefined;

    mockUseCarousel.mockImplementation((params) => {
      capturedOnNumPagesChange = params.onNumPagesChange;
      return {
        allowShiftRef: { current: true },
        changePage: vi.fn(),
        currentPageRef: { current: 0 },
        numElementsPerPageRef: { current: 1 },
        numPagesRef: { current: 3 },
      };
    });

    render(<Carousel {...mockProps} onNumPagesChange={onNumPagesChange} />);

    // Simulate the hook calling onNumPagesChange
    await act(async () => {
      capturedOnNumPagesChange?.(3);
    });

    expect(onNumPagesChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange when the page changes', async () => {
    const onPageChange = vi.fn();
    let capturedOnPageChange: ((page: number) => void) | undefined;

    mockUseCarousel.mockImplementation((params) => {
      capturedOnPageChange = params.onPageChange;
      return {
        allowShiftRef: { current: true },
        changePage: vi.fn(),
        currentPageRef: { current: 0 },
        numElementsPerPageRef: { current: 1 },
        numPagesRef: { current: 3 },
      };
    });

    render(<Carousel {...mockProps} onPageChange={onPageChange} />);

    // Simulate the hook calling onPageChange
    await act(async () => {
      capturedOnPageChange?.(3);
    });

    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onNumElementsPerPageChange when the number of elements per page changes', async () => {
    const onNumElementsPerPageChange = vi.fn();
    let capturedOnNumElementsPerPageChange:
      | ((numElementsPerPage: number) => void)
      | undefined;

    mockUseCarousel.mockImplementation((params) => {
      capturedOnNumElementsPerPageChange = params.onNumElementsPerPageChange;
      return {
        allowShiftRef: { current: true },
        changePage: vi.fn(),
        currentPageRef: { current: 0 },
        numElementsPerPageRef: { current: 1 },
        numPagesRef: { current: 3 },
      };
    });

    render(
      <Carousel
        {...mockProps}
        onNumElementsPerPageChange={onNumElementsPerPageChange}
      />,
    );

    // Simulate the hook calling onNumElementsPerPageChange
    capturedOnNumElementsPerPageChange?.(3);

    expect(onNumElementsPerPageChange).toHaveBeenCalledWith(3);
  });
});
