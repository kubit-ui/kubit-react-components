import { CarouselAlignType } from '../types';

export const calcXDistanceBetween2Elements = (
  el1: HTMLElement | null,
  el2: HTMLElement | null
): number => {
  if (!el1 || !el2) {
    return 0;
  }
  const x0 = el1.offsetLeft;
  const x1 = el2.offsetLeft;
  return Math.abs(x1 - x0);
};

export const adjustNumElementsToSlide = ({
  numElementsPerPage,
  numElementsToSlide,
}: {
  numElementsPerPage: number;
  numElementsToSlide?: number;
}): number => {
  if (!numElementsToSlide) {
    return numElementsPerPage;
  }
  return Math.max(1, Math.min(numElementsToSlide, numElementsPerPage));
};

export const calcNumPages = ({
  elementsLength,
  numElementsPerPage,
  numElementsToSlide,
}: {
  elementsLength: number;
  numElementsPerPage: number;
  numElementsToSlide?: number;
}): number => {
  if (elementsLength <= numElementsPerPage) {
    return 1;
  }
  const _numElementsToSlide = adjustNumElementsToSlide({ numElementsToSlide, numElementsPerPage });
  const numPages = Math.ceil(
    (elementsLength - numElementsPerPage + _numElementsToSlide) / _numElementsToSlide
  );
  return numPages;
};

// eslint-disable-next-line complexity
export const getFirstAndLastIndexInCarouselView = ({
  elementsLength,
  numElementsPerPage,
  numElementsToSlide,
  currentPage,
  isCircular,
}: {
  elementsLength: number;
  numElementsPerPage: number;
  numElementsToSlide?: number;
  currentPage: number;
  isCircular: boolean;
}): {
  firstIndexInView: number;
  lastIndexInView: number;
} => {
  // When there less elements than numElementsPerPage, return the first and last element index
  if (elementsLength <= numElementsPerPage) {
    return { firstIndexInView: 0, lastIndexInView: elementsLength - 1 };
  }
  const _numElementsToSlide = adjustNumElementsToSlide({ numElementsToSlide, numElementsPerPage });
  const numPages = calcNumPages({
    elementsLength,
    numElementsPerPage,
    numElementsToSlide: _numElementsToSlide,
  });
  // Calc last index in the carousel view
  let lastIndexInView = currentPage * _numElementsToSlide + numElementsPerPage - 1;
  // If isCircular, and we have more than one page, we added elements to the left and right of the carousel to avoid empty spaces
  const _isCircular = isCircular && elementsLength > numElementsPerPage;
  let numElementsCloned = 0;
  // Add extra items previously cloned when circular
  if (_isCircular) {
    numElementsCloned = numElementsPerPage + 1;
    lastIndexInView += numElementsCloned;
  }

  // Fix last index
  if (currentPage === numPages) {
    // currentPage === numPages -> Only happens when it is circular
    // When overpass last page, go to the first page, taking in mind that the first page has been added to the right of the carousel cloning some elements
    // Elements have been cloned at the left and right of the initial elements
    lastIndexInView = numElementsCloned + elementsLength + numElementsPerPage - 1;
  } else if (currentPage < 0) {
    // When page is less than 0, go to the last page, taking in mind that the last page has been added to the left of the carousel cloning some elements
    lastIndexInView = numElementsCloned - 1;
  } else if (lastIndexInView - numElementsCloned > elementsLength - 1) {
    // The calculated last index is greather than the number of available index
    // At the moment we are not going to let the carousel take this shape. Ex: [8, 9, 0]
    // This would break the pagination
    lastIndexInView = numElementsCloned + elementsLength - 1;
  }

  // Calc first index using the lastIndexInView
  const firstIndexInView = lastIndexInView - numElementsPerPage + 1;
  return { firstIndexInView, lastIndexInView };
};

// eslint-disable-next-line complexity
export const calcNumElementsPerPage = ({
  carouselContainer,
  carouselContent,
  elementsLength,
  extraPadding,
}: {
  carouselContainer: HTMLElement;
  carouselContent: HTMLElement;
  elementsLength: number;
  extraPadding?: number;
}): number | undefined => {
  const carouselRoot = carouselContainer.parentElement?.parentElement;
  const firstElementChild = carouselContent.firstElementChild as HTMLElement;
  if (!firstElementChild || !carouselRoot) {
    return;
  }
  // Max width
  let maxWidth = carouselRoot.offsetWidth;

  // Max width less extra padding for each size
  if (extraPadding) {
    maxWidth -= 2 * extraPadding;
  }

  // Max width less left arrow (and gap) width
  const leftArrow = carouselContainer.previousElementSibling as HTMLElement;
  if (leftArrow) {
    const leftArrowWidth =
      carouselContainer.getBoundingClientRect().left - leftArrow.getBoundingClientRect().left;

    maxWidth -= leftArrowWidth;
  }

  // Max width less right arrow (and gap) width
  const rightArrow = carouselContainer.nextElementSibling as HTMLElement;
  if (rightArrow) {
    const rightArrowWidth =
      rightArrow.getBoundingClientRect().right - carouselContainer.getBoundingClientRect().right;
    maxWidth -= rightArrowWidth;
  }

  // Calc numElementsPerPage
  let _numElementsPerPage = 0;
  const offsetLeftFirstChild = firstElementChild.offsetLeft;
  for (let i = 0; i < carouselContent.children.length; i++) {
    const element = carouselContent.children[i] as HTMLElement;
    if (offsetLeftFirstChild + element.offsetLeft + element.offsetWidth > maxWidth) {
      break;
    }
    _numElementsPerPage++;
  }
  return Math.max(Math.min(elementsLength, _numElementsPerPage), 1);
};

export const showArrowsAndPagination = ({
  carouselContainer,
  carouselContent,
}: {
  carouselContainer: HTMLDivElement;
  carouselContent: HTMLDivElement;
}): void => {
  const rootCarousel = carouselContainer.parentElement?.parentElement as HTMLElement | null;
  const leftArrow = carouselContainer.previousElementSibling as HTMLElement | null;
  const rightArrow = carouselContainer.nextElementSibling as HTMLElement | null;
  const pagination = carouselContainer.parentElement?.nextSibling as HTMLElement | null;
  rootCarousel?.style.removeProperty('align-items');
  carouselContent?.style.removeProperty('justify-content');
  leftArrow?.style.removeProperty('display');
  rightArrow?.style.removeProperty('display');
  pagination?.style.removeProperty('display');
};

export const hideArrowsAndPagination = ({
  carouselContainer,
  carouselContent,
  onePageAlign,
  allowModifySliceWidth,
}: {
  carouselContainer: HTMLDivElement;
  carouselContent: HTMLDivElement;
  onePageAlign: CarouselAlignType;
  allowModifySliceWidth: boolean;
}): void => {
  const leftArrow = carouselContainer.previousElementSibling as HTMLElement | null;
  const rightArrow = carouselContainer.nextElementSibling as HTMLElement | null;
  const pagination = carouselContainer.parentElement?.nextSibling as HTMLElement | null;
  // Set items align
  if (allowModifySliceWidth) {
    // When allowModifySliceWidth, container width will be set to 100%, and the align should be over the content
    carouselContent.style.justifyContent = onePageAlign;
  } else {
    // When !allowModifySliceWidth, align should be over the root
    const rootCarousel = carouselContainer.parentElement?.parentElement as HTMLElement | null;
    if (rootCarousel) {
      rootCarousel.style.alignItems = onePageAlign;
    }
  }

  if (leftArrow) {
    leftArrow.style.display = 'none';
  }
  if (rightArrow) {
    rightArrow.style.display = 'none';
  }
  if (pagination) {
    pagination.style.display = 'none';
  }
};
