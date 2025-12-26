/**
 * Calculates the total horizontal padding (left + right) of an element.
 *
 * @param params - The parameters object
 * @param params.element - The HTML element to calculate padding for
 * @returns The sum of left and right padding values in pixels
 */
export const calcHorizontalElementPadding = ({
  element,
}: {
  element: HTMLElement;
}): number => {
  const computedStyle = window.getComputedStyle(element);
  const leftPadding = parseFloat(
    computedStyle.getPropertyValue('padding-left') || '0',
  );
  const rightPadding = parseFloat(
    computedStyle.getPropertyValue('padding-right') || '0',
  );
  return leftPadding + rightPadding;
};

/**
 * Calculates the horizontal distance (in pixels) between the left edges of two HTML elements.
 *
 * @param el1 - The first HTML element. If null, the function returns 0.
 * @param el2 - The second HTML element. If null, the function returns 0.
 * @returns The absolute horizontal distance between the two elements' left edges. Returns 0 if either element is null.
 */
export const calcXDistanceBetween2Elements = (
  el1: HTMLElement | null,
  el2: HTMLElement | null,
): number => {
  if (!el1 || !el2) {
    return 0;
  }
  const x0 = el1.offsetLeft;
  const x1 = el2.offsetLeft;
  return Math.abs(x1 - x0);
};

/**
 * Calculates the adjusted number of elements to slide in a carousel.
 *
 * This function ensures that the number of elements to slide is within
 * a valid range, which is between 1 and the number of elements per page.
 * If the `numElementsToSlide` parameter is not provided, it defaults to
 * the value of `numElementsPerPage`.
 *
 * @param params - The parameters for the calculation.
 * @param params.numElementsPerPage - The number of elements displayed per page.
 * @param params.numElementsToSlide - The desired number of elements to slide (optional).
 * @returns The adjusted number of elements to slide, ensuring it is at least 1
 *          and no more than the number of elements per page.
 */
export const calcAdjustedNumElementsToSlide = ({
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

/**
 * Calculates the number of pages required to display a given number of elements,
 * considering the number of elements per page and the number of elements to slide.
 *
 * @param elementsLength - The total number of elements to be displayed.
 * @param numElementsPerPage - The number of elements that can fit on a single page.
 * @param numElementsToSlide - (Optional) The number of elements to slide when navigating between pages.
 *                              If not provided, a default value will be calculated.
 * @returns The total number of pages required.
 */
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
  const _numElementsToSlide = calcAdjustedNumElementsToSlide({
    numElementsToSlide,
    numElementsPerPage,
  });
  const numPages = Math.ceil(
    (elementsLength - numElementsPerPage + _numElementsToSlide) /
      _numElementsToSlide,
  );
  return numPages;
};

/**
 * Calculates the first and last indices of elements visible in a carousel view
 * based on the provided configuration.
 *
 * @param elementsLength - The total number of elements in the carousel.
 * @param numElementsPerPage - The number of elements visible per page in the carousel.
 * @param numElementsToSlide - The number of elements to slide when navigating the carousel.
 *                              If not provided, a default value will be calculated.
 * @param currentPage - The current page index of the carousel.
 * @param isCircular - A boolean indicating whether the carousel is circular.
 *                     If true, elements are cloned to create a seamless circular effect.
 *
 * @returns An object containing:
 * - `firstIndexInView`: The index of the first element visible in the current carousel view.
 * - `lastIndexInView`: The index of the last element visible in the current carousel view.
 *
 * @remarks
 * - If the total number of elements is less than or equal to `numElementsPerPage`,
 *   the function returns indices for all elements.
 * - For circular carousels, additional cloned elements are considered to avoid empty spaces.
 * - Handles edge cases where the current page index is out of bounds (e.g., negative or exceeding the total pages).
 * - Ensures the calculated indices do not exceed the bounds of the available elements.
 */
export const calcFirstAndLastIndexInCarouselView = ({
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
  const _numElementsToSlide = calcAdjustedNumElementsToSlide({
    numElementsToSlide,
    numElementsPerPage,
  });
  const numPages = calcNumPages({
    elementsLength,
    numElementsPerPage,
    numElementsToSlide: _numElementsToSlide,
  });
  // Calc last index in the carousel view
  let lastIndexInView =
    currentPage * _numElementsToSlide + numElementsPerPage - 1;
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
    lastIndexInView =
      numElementsCloned + elementsLength + numElementsPerPage - 1;
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

/**
 * Calculates the number of elements that can fit per page within a carousel-like component,
 *
 * @param params - An object containing the necessary parameters for the calculation.
 * @param params.rootContainer - The root container element of the carousel.
 * @param params.viewerContainer - The container element that holds the carousel viewer.
 * @param params.contentContainer - The container element holding all the carousel items.
 * @param params.elementsLength - The total number of elements in the carousel.
 * @param params.extraPadding - Extra padding to subtract from the available width.
 * @returns The number of elements that can fit per page, or `undefined` if the content container has no children.
 */
export const calcNumElementsPerPage = ({
  rootContainer,
  viewerContainer,
  contentContainer,
  elementsLength,
  extraPadding,
}: {
  rootContainer: HTMLElement;
  viewerContainer: HTMLElement;
  contentContainer: HTMLElement;
  elementsLength: number;
  extraPadding: number;
}): number | undefined => {
  // If no elements return undefined
  const firstElementChild = contentContainer.firstElementChild as HTMLElement;
  if (!firstElementChild) {
    return;
  }
  // Max width
  let maxWidth = rootContainer.offsetWidth;

  // Max width less extra padding for each size
  maxWidth -= 2 * extraPadding;
  // Max width less viewer container horizontal padding
  const horizontalViewerPadding = calcHorizontalElementPadding({
    element: viewerContainer,
  });
  maxWidth -= horizontalViewerPadding;

  // Calc numElementsPerPage
  let _numElementsPerPage = 0;
  const offsetLeftFirstChild = firstElementChild.offsetLeft;
  for (let i = 0; i < contentContainer.children.length; i++) {
    const element = contentContainer.children[i] as HTMLElement;
    if (
      offsetLeftFirstChild + element.offsetLeft + element.offsetWidth >
      maxWidth
    ) {
      break;
    }
    _numElementsPerPage++;
  }
  // eslint-disable-next-line consistent-return
  return Math.max(Math.min(elementsLength, _numElementsPerPage), 1);
};

/**
 * Calculates the gap between the elements inside a content container.
 * This function determines the horizontal space between the first two child elements
 * of a given `contentContainer` element. If `centerMode` is enabled, it temporarily
 * removes scaling transformations to ensure accurate gap calculation.
 *
 * @param params - The parameters for the calculation.
 * @param params.contentContainer - The HTMLElement containing the child elements.
 * @param params.centerMode - A boolean indicating whether the center mode is enabled.
 *                            When enabled, scaling transformations are temporarily removed
 *                            to calculate the gap accurately.
 * @returns The calculated gap (in pixels) between the first two child elements of the content container.
 */
export const calcGapBetweenContentContainerElements = ({
  contentContainer,
  centerMode,
}: {
  contentContainer: HTMLElement;
  centerMode: boolean;
}): number => {
  // Calc slice width having in mind the gap between the slices and the extraPadding
  let gap = 0;
  if (contentContainer.childNodes.length < 2) {
    return gap;
  }

  const firstElement = contentContainer.childNodes[0] as HTMLEmbedElement;
  const secondElement = contentContainer.childNodes[1] as HTMLEmbedElement;
  // Delete scale when center mode to calc the gap between elements
  if (centerMode && firstElement.style && secondElement.style) {
    firstElement.style.transition = 'none';
    secondElement.style.transition = 'none';
    firstElement.style.transform = 'scale(1)';
    secondElement.style.transform = 'scale(1)';
  }
  const right = firstElement?.getBoundingClientRect()?.right as
    | number
    | undefined;
  const left = secondElement?.getBoundingClientRect()?.left as
    | number
    | undefined;
  if (centerMode && firstElement.style && secondElement.style) {
    firstElement.style.removeProperty('transform');
    secondElement.style.removeProperty('transform');
    // Trigger a reflow, flushing the CSS changes, avoiding transition effect
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    firstElement.offsetHeight;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    secondElement.offsetHeight;
    firstElement.style.removeProperty('transition');
    secondElement.style.removeProperty('transition');
  }
  if (right !== undefined && left !== undefined) {
    gap = Math.abs(right - left);
  }

  return gap;
};

/**
 * Calculates the width of a single slice in a carousel based on the viewer container,
 * content container, and other configuration parameters.
 *
 * @param params - An object containing the parameters for the calculation.
 * @param params.viewerContainer - The HTMLElement representing the container that displays the carousel.
 * @param params.contentContainer - The HTMLElement representing the container holding the carousel content.
 * @param params.centerMode - A boolean indicating whether the carousel is in center mode.
 * @param params.numElementsPerPage - The number of elements to display per page in the carousel.
 * @param params.extraPadding - Additional padding to account for on both sides of the viewer container.
 *
 * @returns The calculated width of a single slice in the carousel.
 */
export const calcSliceWidth = ({
  viewerContainer,
  contentContainer,
  centerMode,
  numElementsPerPage,
  extraPadding,
}: {
  viewerContainer: HTMLElement;
  contentContainer: HTMLElement;
  centerMode: boolean;
  numElementsPerPage: number;
  extraPadding: number;
}): number => {
  const gap = calcGapBetweenContentContainerElements({
    contentContainer,
    centerMode,
  });
  const gapSpace = (numElementsPerPage - 1) * gap;
  const horizontalViewerPadding = calcHorizontalElementPadding({
    element: viewerContainer,
  });
  const sliceWidth =
    (viewerContainer.getBoundingClientRect().width -
      gapSpace -
      2 * extraPadding -
      horizontalViewerPadding) /
    numElementsPerPage;
  return sliceWidth;
};

/**
 * Calculates the width of the carousel viewer based on the elements currently in view.
 *
 * @param params - The parameters for the calculation.
 * @param params.viewerContainer - The container element that holds the carousel viewer.
 * @param params.contentContainer - The container element that holds the carousel content.
 * @param params.firstIndexInView - The index of the first element currently in view.
 * @param params.lastIndexInView - The index of the last element currently in view.
 * @param params.extraPadding - Additional padding to be added to the calculated width.
 * @returns The calculated width of the carousel viewer as a string with a `px` unit.
 */
export const calcViewerWidth = ({
  viewerContainer,
  contentContainer,
  firstIndexInView,
  lastIndexInView,
  extraPadding,
}: {
  viewerContainer: HTMLElement;
  contentContainer: HTMLElement;
  firstIndexInView: number;
  lastIndexInView: number;
  extraPadding: number;
}): string => {
  // Calc the new carousel viewer width
  const firstElementInView = contentContainer.children[
    firstIndexInView
  ] as HTMLElement;
  const lastElementInView = contentContainer.children[
    lastIndexInView
  ] as HTMLElement;
  const distanceBetweenElementsInView = calcXDistanceBetween2Elements(
    firstElementInView,
    lastElementInView,
  );
  const horizontalViewerPadding = calcHorizontalElementPadding({
    element: viewerContainer,
  });

  const resultWidth =
    distanceBetweenElementsInView +
    lastElementInView.offsetWidth +
    2 * extraPadding +
    horizontalViewerPadding;
  return `${resultWidth}px`;
};

/**
 * Given the state of the carousel, calculates the left position of the content container for a carousel component.
 *
 * @param params - The parameters for the calculation.
 * @param params.contentContainer - The HTML element representing the content container.
 * @param params.numPages - The total number of pages in the carousel.
 * @param params.currentPage - The current page index (0-based).
 * @param params.firstIndexInView - The index of the first element currently in view.
 * @param params.extraPadding - Extra padding to adjust the position (default is undefined).
 * @param params.centerExtremesWhenExtraPadding - A flag indicating whether to center the extremes when extra padding is applied.
 * @param params.circular - A flag indicating whether the carousel is circular (wraps around).
 * @returns The calculated left position as a string with a "px" unit.
 */
export const calcContentContainerLeftPosition = ({
  contentContainer,
  numPages,
  currentPage,
  firstIndexInView,
  extraPadding,
  centerExtremesWhenExtraPadding,
  circular,
}: {
  contentContainer: HTMLElement;
  numPages: number;
  currentPage: number;
  firstIndexInView: number;
  extraPadding: number;
  centerExtremesWhenExtraPadding: boolean;
  circular: boolean;
}): string => {
  let distance = calcXDistanceBetween2Elements(
    contentContainer.firstChild as HTMLElement,
    contentContainer.children[firstIndexInView] as HTMLElement,
  );
  if (extraPadding) {
    if (centerExtremesWhenExtraPadding) {
      distance -= extraPadding;
    } else {
      if (circular || (currentPage !== 0 && currentPage !== numPages - 1)) {
        distance -= extraPadding;
      } else if (!circular && currentPage === numPages - 1) {
        distance -= extraPadding * 2;
      }
    }
  }
  return `${-distance}px`;
};

export default {
  calcXDistanceBetween2Elements,
  calcAdjustedNumElementsToSlide,
  calcNumPages,
  calcFirstAndLastIndexInCarouselView,
  calcNumElementsPerPage,
  calcGapBetweenContentContainerElements,
  calcSliceWidth,
  calcViewerWidth,
  calcContentContainerLeftPosition,
};
