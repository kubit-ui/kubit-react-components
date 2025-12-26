import type { CarouselOnePageAlignType } from '../../types/carousel';
import calcUtils from './calc.utils';

/**
 * Updates the width of each child element (slice) within the content container
 * based on the calculated slice width. The slice width is determined by the
 * provided viewer container, content container, center mode, number of elements
 * per page, and optional extra padding.
 *
 * @param params - The parameters for updating slice widths.
 * @param params.viewerContainer - The HTMLElement representing the viewer container.
 * @param params.contentContainer - The HTMLElement containing the child elements (slices).
 * @param params.centerMode - A boolean indicating whether center mode is enabled.
 * @param params.numElementsPerPage - The number of elements to display per page.
 * @param params.extraPadding - Additional padding to include in the slice width calculation.
 *
 * @returns void
 */
export const updateSlicesWidth = ({
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
}): void => {
  const sliceWidth = calcUtils.calcSliceWidth({
    viewerContainer,
    contentContainer,
    centerMode,
    numElementsPerPage,
    extraPadding,
  });
  for (let i = 0; i < contentContainer.childNodes.length; i++) {
    const child = contentContainer.childNodes[i];
    if (child instanceof HTMLElement) {
      child.style.width = `${sliceWidth}px`;
    }
  }
};

/**
 * Updates the `aria-visibility` of child elements within a content container
 * by adding or removing the `inert` attribute based on their visibility range.
 *
 * @param params - An object containing the parameters for the function.
 * @param params.contentContainer - The HTML element containing the child elements to update.
 * @param params.firstIndexInView - The index of the first child element that should be visible.
 * @param params.lastIndexInView - The index of the last child element that should be visible.
 *
 * @remarks
 * - Child elements outside the range defined by `firstIndexInView` and `lastIndexInView`
 *   will have the `inert` attribute added, making them inaccessible to assistive technologies
 *   and preventing user interaction.
 * - Child elements within the range will have the `inert` attribute removed, restoring
 *   their accessibility and interactivity.
 */
export const updateContentElementsAriaVisibility = ({
  contentContainer,
  firstIndexInView,
  lastIndexInView,
}: {
  contentContainer: HTMLElement;
  firstIndexInView: number;
  lastIndexInView: number;
}): void => {
  for (let i = 0; i < contentContainer.children.length; i++) {
    if (i < firstIndexInView || i > lastIndexInView) {
      contentContainer.children[i].setAttribute('inert', '');
    } else {
      contentContainer.children[i].removeAttribute('inert');
    }
  }
};

/**
 * Updates the width of the viewer container based on the calculated width
 * of the content container and the indices of the items currently in view.
 *
 * @param params - An object containing the parameters for updating the viewer width.
 * @param params.viewerContainer - The HTMLElement representing the viewer container
 * where the width will be updated.
 * @param params.contentContainer - The HTMLElement representing the content container
 * whose width is used for calculation.
 * @param params.firstIndexInView - The index of the first item currently in view.
 * @param params.lastIndexInView - The index of the last item currently in view.
 * @param params.extraPadding - Additional padding to be added to the calculated width.
 *
 * @returns void
 */
export const updateViewerWidth = ({
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
}): void => {
  const newWidth = calcUtils.calcViewerWidth({
    viewerContainer,
    contentContainer,
    firstIndexInView,
    lastIndexInView,
    extraPadding,
  });
  viewerContainer.style.width = newWidth;
};

/**
 * Applies a "center mode" highlighting effect to an element within a container.
 * This function is designed to work with a carousel-like structure where elements
 * are displayed in a paginated view. It highlights the center element of the current
 * view if the number of elements per page is odd.
 *
 * @param contentContainer - The HTML container element that holds the child elements.
 * @param firstIndexInView - The index of the first element currently in view.
 * @param lastIndexInView - The index of the last element currently in view.
 * @param numElementsPerPage - The number of elements displayed per page. Must be an odd number
 *                              for the center highlighting to be applied.
 *
 * @remarks
 * If `numElementsPerPage` is even, the function does nothing as there is no clear center element.
 * The function assumes that `contentContainer.children` contains enough elements to safely access
 * the calculated highlight index.
 *
 * @throws {Error} If the calculated highlight index is out of bounds of the `contentContainer.children` array.
 */
export const applyCenterMode = ({
  contentContainer,
  firstIndexInView,
  lastIndexInView,
  numElementsPerPage,
}: {
  contentContainer: HTMLElement;
  firstIndexInView: number;
  lastIndexInView: number;
  numElementsPerPage: number;
}): void => {
  if (numElementsPerPage % 2 !== 0) {
    const hightlightIndex =
      firstIndexInView + (lastIndexInView - firstIndexInView) / 2;
    contentContainer.children[hightlightIndex].setAttribute(
      'data-highlighted',
      'true',
    );
  }
};

/**
 * Removes the 'highlight' class from all child elements of the specified content container.
 *
 * @param {Object} params - The parameters object.
 * @param {HTMLElement} params.contentContainer - The container element whose children will have the 'data-highlighted' attribute removed.
 * @returns {void} This function does not return a value.
 */
export const deleteCenterMode = ({
  contentContainer,
}: {
  contentContainer: HTMLElement;
}): void => {
  for (let i = 0; i < contentContainer.children.length; i++) {
    contentContainer.children[i].removeAttribute('data-highlighted');
  }
};

/**
 * Manages the circular clones of elements within a content container for a carousel-like component.
 * This function ensures that the content container has the correct number of cloned elements
 * on both sides to enable circular scrolling behavior, if required.
 *
 * @param {Object} params - The parameters for managing circular clones.
 * @param {HTMLElement} params.contentContainer - The container element holding the content.
 * @param {number} params.elementsLength - The original number of elements in the container.
 * @param {number} params.numElementsPerPage - The number of elements visible per page.
 * @param {boolean} params.circular - A flag indicating whether circular scrolling is enabled.
 *
 * @remarks
 * - If the container already has more elements than the original length, it removes the extra cloned elements.
 * - If circular scrolling is enabled and the number of elements exceeds the number of elements per page,
 *   it clones elements from the start and end of the container to create a seamless circular effect.
 */
export const manageCircularClones = ({
  contentContainer,
  elementsLength,
  numElementsPerPage,
  circular,
}: {
  contentContainer: HTMLElement;
  elementsLength: number;
  numElementsPerPage: number;
  circular: boolean;
}): void => {
  if (contentContainer.children.length > elementsLength) {
    const elementsClonedToEachSide =
      (contentContainer.children.length - elementsLength) / 2;
    for (let i = 0; i < elementsClonedToEachSide; i++) {
      if (contentContainer.firstElementChild) {
        contentContainer.removeChild(contentContainer.firstElementChild);
      }
      if (contentContainer.lastElementChild) {
        contentContainer.removeChild(contentContainer.lastElementChild);
      }
    }
  }
  if (circular && elementsLength > numElementsPerPage) {
    const listCloneFirst: Node[] = [];
    const listCloneLast: Node[] = [];
    const numElements = contentContainer.children.length;
    // +1 in case of extra padding
    const numElementsToClone = numElementsPerPage + 1;
    for (let i = 0; i < numElementsToClone; i++) {
      const nodeFirst = contentContainer.children[i];
      if (nodeFirst) {
        listCloneFirst.push(nodeFirst.cloneNode(true));
      }
      const nodeLast = contentContainer.children[numElements - 1 - i];
      if (nodeLast) {
        listCloneLast.push(nodeLast.cloneNode(true));
      }
    }
    // Add list clone first to the children array (at the back)
    listCloneFirst.forEach((node) => contentContainer.appendChild(node));
    // Add list clone last to the children array (at the front)
    listCloneLast.forEach((node) =>
      contentContainer.insertBefore(node, contentContainer.firstChild),
    );
  }
};

const OnePageAlignMap: Record<CarouselOnePageAlignType, string> = {
  center: 'center',
  left: 'flex-start',
  right: 'flex-end',
};

/**
 * Aligns a one-page carousel by setting the alignment style on either the root container
 * or the content container, depending on the configuration.
 *
 * @param rootContainer - The root HTML container element of the carousel.
 * @param contentContainer - The content HTML container element of the carousel.
 * @param onePageAlign - The alignment type for the carousel when there is only one page.
 * @param allowModifySliceWidth - A flag indicating whether the slice width can be modified.
 *                                If `true`, alignment is applied to the content container.
 *                                If `false`, alignment is applied to the root container.
 */
export const alignOnePageCarousel = ({
  rootContainer,
  contentContainer,
  onePageAlign,
  allowModifySliceWidth,
}: {
  rootContainer: HTMLElement;
  contentContainer: HTMLElement;
  onePageAlign: CarouselOnePageAlignType;
  allowModifySliceWidth: boolean;
}): void => {
  // Set items align
  if (allowModifySliceWidth) {
    // When allowModifySliceWidth, viewer width will be set to 100%, and the align should be over the content
    contentContainer.style.justifyContent = OnePageAlignMap[onePageAlign];
  } else {
    // When !allowModifySliceWidth, align should be over the root since viewer width is not 100%
    rootContainer.style.justifyContent = OnePageAlignMap[onePageAlign];
  }
};

/**
 * Updates the carousel position when the current page is at the edge (either before the first page or after the last page).
 * Adjusts the `left` style of the content container to reposition the carousel and returns the new page index.
 *
 * @param contentContainer - The HTML container element that holds the carousel content.
 * @param currentPage - The current page index of the carousel.
 * @param numPages - The total number of pages in the carousel.
 * @param numElementsPerPage - The number of elements displayed per page.
 * @param elementsLength - The total number of elements in the carousel.
 * @param extraPadding - Additional padding to adjust the carousel position.
 * @returns An object containing the updated page index (`newPage`).
 */
export const udpateCarouselPositionOnEdge = ({
  contentContainer,
  currentPage,
  numPages,
  numElementsPerPage,
  elementsLength,
  extraPadding,
}: {
  contentContainer: HTMLElement;
  currentPage: number;
  numPages: number;
  numElementsPerPage: number;
  elementsLength: number;
  extraPadding: number;
}): { newPage: number } => {
  const isAfterLastPage = currentPage === numPages;
  const isBeforeFirstPage = currentPage === -1;
  if (isAfterLastPage || isBeforeFirstPage) {
    // If afterLastPage return to page 0, if beforeFirstPage return to last page
    const firstIndexInView = isAfterLastPage
      ? numElementsPerPage + 1
      : elementsLength + 1;
    let distance = calcUtils.calcXDistanceBetween2Elements(
      contentContainer.firstChild as HTMLElement,
      contentContainer.children[firstIndexInView] as HTMLElement,
    );
    distance -= extraPadding;
    contentContainer.style.left = `${-distance}px`;
    return { newPage: isAfterLastPage ? 0 : numPages - 1 };
  }
  return { newPage: currentPage };
};

export default {
  updateSlicesWidth,
  updateContentElementsAriaVisibility,
  updateViewerWidth,
  applyCenterMode,
  deleteCenterMode,
  manageCircularClones,
  alignOnePageCarousel,
  udpateCarouselPositionOnEdge,
};
