import {
  adjustNumElementsToSlide,
  calcNumElementsPerPage,
  calcNumPages,
  calcXDistanceBetween2Elements,
  getFirstAndLastIndexInCarouselView,
} from '../carousel.utils';

describe('CarouselUtils - calcXDistanceBetween2Elements', () => {
  it('If no left element, return 0', () => {
    const res = calcXDistanceBetween2Elements(null, {} as HTMLElement);
    expect(res).toBe(0);
  });
  it('If no right element, return 0', () => {
    const res = calcXDistanceBetween2Elements({} as HTMLElement, null);
    expect(res).toBe(0);
  });
  it('If elements, return offset left abs diff', () => {
    const res = calcXDistanceBetween2Elements(
      { offsetLeft: 50 } as HTMLElement,
      { offsetLeft: 150 } as HTMLElement
    );
    expect(res).toBe(100);
  });
});

describe('CarouselUtils - adjustNumElementsToSlide', () => {
  it('When no numElementsToSlide return numElementsPerPage', () => {
    const res = adjustNumElementsToSlide({ numElementsPerPage: 3, numElementsToSlide: undefined });
    expect(res).toBe(3);
  });
  it('When numElementsToSlide, min value for numElementsToSlide is -1', () => {
    const res = adjustNumElementsToSlide({ numElementsPerPage: 3, numElementsToSlide: -1 });
    expect(res).toBe(1);
  });
  it('When numElementsToSlide, max value for numElementsToSlide is numElementsPerPage', () => {
    const res = adjustNumElementsToSlide({ numElementsPerPage: 3, numElementsToSlide: 4 });
    expect(res).toBe(3);
  });
  it('If elements, return offset left abs diff', () => {
    const res = calcXDistanceBetween2Elements(
      { offsetLeft: 50 } as HTMLElement,
      { offsetLeft: 150 } as HTMLElement
    );
    expect(res).toBe(100);
  });
});

describe('CarouselUtils - calcNumPages', () => {
  it('returns 1 when elementsLength is less than or equal to numElementsPerPage', () => {
    const numPages = calcNumPages({ elementsLength: 2, numElementsPerPage: 3 });
    expect(numPages).toBe(1);
  });

  it('returns correct number of pages when numElementsToSlide is not provided', () => {
    const numPages = calcNumPages({ elementsLength: 6, numElementsPerPage: 3 });
    expect(numPages).toBe(2);
  });

  it('returns correct number of pages when numElementsToSlide is provided', () => {
    const numPages = calcNumPages({
      elementsLength: 6,
      numElementsPerPage: 3,
      numElementsToSlide: 2,
    });
    expect(numPages).toBe(3);
  });

  it('returns correct number of pages when elementsLength is a multiple of numElementsToSlide', () => {
    const numPages = calcNumPages({
      elementsLength: 6,
      numElementsPerPage: 3,
      numElementsToSlide: 1,
    });
    expect(numPages).toBe(4);
  });

  it('returns correct number of pages when elementsLength is not a multiple of numElementsToSlide', () => {
    const numPages = calcNumPages({
      elementsLength: 7,
      numElementsPerPage: 3,
      numElementsToSlide: 2,
    });
    expect(numPages).toBe(3);
  });
});

describe('CarouselUtils - getFirstAndLastIndexInCarouselView', () => {
  const mockProps = {
    elementsLength: 10,
    numElementsPerPage: 3,
    currentPage: 0,
    isCircular: true,
  };
  it('When is linear no extra elements are added', () => {
    const { firstIndexInView, lastIndexInView } = getFirstAndLastIndexInCarouselView({
      ...mockProps,
      isCircular: false,
    });
    expect(firstIndexInView).toBe(0);
    expect(lastIndexInView).toBe(2);
  });
  it('When is circular, elementsLength + 1 elements are cloned after and before the carousel', () => {
    const { firstIndexInView, lastIndexInView } = getFirstAndLastIndexInCarouselView({
      ...mockProps,
    });
    expect(firstIndexInView).toBe(4);
    expect(lastIndexInView).toBe(6);
  });
  // overflowLastIndex = last index is greather than the number of available index
  it('When is linear and overflowLastIndex, last index is the last element', () => {
    const { firstIndexInView, lastIndexInView } = getFirstAndLastIndexInCarouselView({
      ...mockProps,
      isCircular: false,
      currentPage: 3,
    });
    expect(firstIndexInView).toBe(7);
    expect(lastIndexInView).toBe(9);
  });
  it('When is circular and overflowLastIndex, last index is the last element, having in mind the extra elements added to simulate the infinite scroll', () => {
    const { firstIndexInView, lastIndexInView } = getFirstAndLastIndexInCarouselView({
      ...mockProps,
      currentPage: 3,
    });
    expect(firstIndexInView).toBe(11);
    expect(lastIndexInView).toBe(13);
  });
  it('When is circular and page is extra one (the one created to allow infinite scroll) last index is the last child less 1 (because of the extra element added)', () => {
    const { firstIndexInView, lastIndexInView } = getFirstAndLastIndexInCarouselView({
      ...mockProps,
      currentPage: 4,
    });
    expect(firstIndexInView).toBe(14);
    expect(lastIndexInView).toBe(16);
  });
});

describe('CarouselUtils - calcNumElementsPerPage', () => {
  it('returns undefined when firstElementChild or carouselRoot is not available', () => {
    const carouselContainer = document.createElement('div');
    const carouselContent = document.createElement('div');
    const result = calcNumElementsPerPage({
      carouselContainer,
      carouselContent,
      elementsLength: 5,
    });
    expect(result).toBeUndefined();
  });
});
