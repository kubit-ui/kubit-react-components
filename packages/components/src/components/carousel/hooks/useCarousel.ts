import { useCallback, useEffect, useRef } from 'react';

import type { IUseCarousel } from './types/useCarousel';

import { useCarouselKeyNavigation } from './useCarouselKeyNavigation';
import { useCarouselSwipe } from './useCarouselSwipe';
import calcUtils from './utils/calc.utils';
import CONSTANTS from './utils/constants';
import domUtils from './utils/dom.utils';

/**
 * Main carousel hook managing all carousel behavior and interactions.
 *
 * Handles pagination, scrolling, keyboard navigation, swipe gestures,
 * and element positioning for the carousel component.
 *
 * @param params - Carousel configuration object
 * @returns Object with carousel state and control methods
 */
export const useCarousel: IUseCarousel = ({
  allowModifySliceWidth = false,
  autoFitContainer = false,
  centerExtremesWhenExtraPadding = false,
  centerMode = false,
  circular = true,
  contentContainerRef,
  defaultPage = 0,
  disabled = false,
  elements,
  extraPadding = 0,
  numElementsPerPage: numElementsPerPageProp,
  numElementsToSlide,
  onePageAlign = 'center',
  onNumElementsPerPageChange,
  onNumPagesChange,
  onPageChange,
  rootContainerRef,
  viewerContainerRef,
}) => {
  const allowShiftRef = useRef(true);
  const previousInformedPageRef = useRef(defaultPage);
  const currentPageRef = useRef(defaultPage);
  const numElementsPerPageRef = useRef(numElementsPerPageProp);
  const numPagesRef = useRef<number>(0);

  // In circular carousel will create the effect of infinite
  const handleTransitionEnd = useCallback(
    (event: TransitionEvent) => {
      const contentContainer = contentContainerRef.current;
      // Do not continue if the transition ends due to another property that is not left
      if (
        !contentContainer ||
        !numElementsPerPageRef.current ||
        event.propertyName !== CONSTANTS.PROPERTY_TO_HANDLE_TRANSITION_END ||
        numPagesRef.current < 1
      ) {
        return;
      }

      // Fix carousel position on edge (when circular)
      // Delete transition effects, this will be added again when the transition starts
      // This is needed to avoid the transition effect when the carousel is fixed on edge
      contentContainer.setAttribute('data-shifting', 'false');
      const { newPage } = domUtils.udpateCarouselPositionOnEdge({
        contentContainer,
        currentPage: currentPageRef.current,
        elementsLength: elements.length,
        extraPadding,
        numElementsPerPage: numElementsPerPageRef.current,
        numPages: numPagesRef.current,
      });
      currentPageRef.current = newPage;
      // Checking only in this point if the currentPage has changed allows to call onPageChanged when the transition ends
      // And avoid to call it when the page is -1 or numPages (when circular)
      if (previousInformedPageRef.current !== currentPageRef.current) {
        previousInformedPageRef.current = currentPageRef.current;
        onPageChange?.(currentPageRef.current);
      }

      const { firstIndexInView, lastIndexInView } =
        calcUtils.calcFirstAndLastIndexInCarouselView({
          currentPage: currentPageRef.current,
          elementsLength: elements.length,
          isCircular: circular,
          numElementsPerPage: numElementsPerPageRef.current,
          numElementsToSlide,
        });

      // Only the show elements should be visible aria visible
      domUtils.updateContentElementsAriaVisibility({
        contentContainer,
        firstIndexInView,
        lastIndexInView,
      });

      // Apply center mode
      if (centerMode) {
        domUtils.applyCenterMode({
          contentContainer,
          firstIndexInView,
          lastIndexInView,
          numElementsPerPage: numElementsPerPageRef.current,
        });
      }

      allowShiftRef.current = true;
    },
    [
      elements,
      extraPadding,
      numElementsToSlide,
      circular,
      centerMode,
      onPageChange,
    ],
  );

  const changePage = useCallback(
    ({ animated = true, newPage }: { newPage: number; animated?: boolean }) => {
      const viewerContainer = viewerContainerRef.current;
      const contentContainer = contentContainerRef.current;
      if (
        !viewerContainer ||
        !contentContainer ||
        !allowShiftRef.current ||
        !numElementsPerPageRef.current ||
        !elements.length ||
        numPagesRef.current < 1 ||
        (circular ? newPage < -1 : newPage < 0) || // when circular, -1 is the first clone. So we can go to -1
        (circular
          ? newPage > numPagesRef.current
          : newPage > numPagesRef.current - 1) // when circular, numPages is the last clone. So we can go to numPages
      ) {
        return;
      }

      // Add transition effect
      if (animated) {
        contentContainer.setAttribute('data-shifting', 'true');
      }
      // Delete all the highlight elements, in order to do the animation when center mode
      domUtils.deleteCenterMode({ contentContainer });

      // Update current page
      currentPageRef.current = newPage;

      // Calc first and last index in the carousel view
      const { firstIndexInView, lastIndexInView } =
        calcUtils.calcFirstAndLastIndexInCarouselView({
          currentPage: currentPageRef.current,
          elementsLength: elements.length,
          isCircular: circular,
          numElementsPerPage: numElementsPerPageRef.current,
          numElementsToSlide,
        });

      // When isnt allow to modify the slice width, carousel contiainer width must be calculated
      if (!allowModifySliceWidth) {
        domUtils.updateViewerWidth({
          contentContainer,
          extraPadding,
          firstIndexInView,
          lastIndexInView,
          viewerContainer,
        });
      }

      // Calc new left translation
      const prevLeftStyle = contentContainer.style.left;
      const newLeftStyle = calcUtils.calcContentContainerLeftPosition({
        centerExtremesWhenExtraPadding,
        circular,
        contentContainer,
        currentPage: currentPageRef.current,
        extraPadding,
        firstIndexInView,
        numPages: numPagesRef.current,
      });
      contentContainer.style.left = newLeftStyle;
      if (animated && prevLeftStyle !== newLeftStyle) {
        allowShiftRef.current = false;
      } else {
        // Call manually to handleTransitionEnd because transitionend listener will be not executed
        handleTransitionEnd({
          propertyName: CONSTANTS.PROPERTY_TO_HANDLE_TRANSITION_END,
        } as TransitionEvent);
      }
    },
    [
      elements,
      numElementsToSlide,
      circular,
      allowModifySliceWidth,
      extraPadding,
      centerExtremesWhenExtraPadding,
      handleTransitionEnd,
    ],
  );

  // Initialize carousel position
  const initializeCarousel = useCallback(() => {
    const viewerContainer = viewerContainerRef.current;
    const contentContainer = contentContainerRef.current;
    if (
      !viewerContainer ||
      !contentContainer ||
      !numElementsPerPageRef.current
    ) {
      return;
    }

    // When allow update slides width, the viewer will be 100%, and the slides width will be calculated atteding to the container width and the numElementsPerPage
    if (allowModifySliceWidth) {
      viewerContainer.style.width = '100%';
      domUtils.updateSlicesWidth({
        centerMode,
        contentContainer,
        extraPadding,
        numElementsPerPage: numElementsPerPageRef.current,
        viewerContainer,
      });
    }

    // Handles the cloning and removal of carousel items to enable the infinite/circular carousel effect.
    domUtils.manageCircularClones({
      circular,
      contentContainer,
      elementsLength: elements.length,
      numElementsPerPage: numElementsPerPageRef.current,
    });

    // Set the page in the right position without animation
    changePage({ animated: false, newPage: currentPageRef.current });
  }, [
    allowModifySliceWidth,
    centerMode,
    circular,
    elements,
    extraPadding,
    changePage,
  ]);

  const initializeNumElementsPerPage = useCallback(() => {
    const rootContainer = rootContainerRef.current;
    const viewerContainer = viewerContainerRef.current;
    const contentContainer = contentContainerRef.current;
    if (!rootContainer || !viewerContainer || !contentContainer) {
      return;
    }

    // Reset root container if fit-content has been applied because autoFitContainer
    rootContainer.style.width = '100%';

    // Initialize numElementsperPage
    const newNumElementsPerPage =
      numElementsPerPageProp ||
      calcUtils.calcNumElementsPerPage({
        contentContainer,
        elementsLength: elements.length,
        extraPadding,
        rootContainer,
        viewerContainer,
      }) ||
      1;

    // If autoFitContainer is true, set the root container width to fit-content
    // This is useful when the carousel is not full width and we want to fit the content
    if (autoFitContainer) {
      rootContainer.style.width = 'fit-content';
    }

    if (newNumElementsPerPage !== numElementsPerPageRef.current) {
      numElementsPerPageRef.current = newNumElementsPerPage;
      onNumElementsPerPageChange?.(newNumElementsPerPage);
    }

    const newNumPages = calcUtils.calcNumPages({
      elementsLength: elements.length,
      numElementsPerPage: newNumElementsPerPage,
      numElementsToSlide,
    });
    if (numPagesRef.current !== newNumPages) {
      numPagesRef.current = newNumPages;
      onNumPagesChange?.(newNumPages);
      // Initialize currentPage when numPages change
      // It should be between 0 and numPages -1
      currentPageRef.current = Math.min(
        Math.max(0, defaultPage),
        newNumPages - 1,
      );
    }
    // If newNumPages <= 1, then align the carousel content attending to onePageAlign
    if (newNumPages <= 1) {
      domUtils.alignOnePageCarousel({
        allowModifySliceWidth,
        contentContainer,
        onePageAlign,
        rootContainer,
      });
    }
  }, [
    allowModifySliceWidth,
    elements,
    extraPadding,
    numElementsPerPageProp,
    numElementsToSlide,
    onePageAlign,
    autoFitContainer,
    onNumElementsPerPageChange,
    onNumPagesChange,
    onPageChange,
  ]);

  const handleResize = useCallback(() => {
    initializeNumElementsPerPage();
    // After initialice numElementsPerPage and numPagesRef -> Initialice carousel
    initializeCarousel();
  }, [initializeNumElementsPerPage, initializeCarousel]);

  useEffect(() => {
    const contentContainer = contentContainerRef.current;
    if (!contentContainer) {
      return;
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(contentContainer);

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [handleResize]);

  // Initialize listener for transition end
  useEffect(() => {
    const contentContainer = contentContainerRef.current;
    contentContainer?.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      contentContainer?.removeEventListener(
        'transitionend',
        handleTransitionEnd,
      );
    };
  }, [handleTransitionEnd]);

  // Manage swipe events
  useCarouselSwipe({
    allowShiftRef,
    centerExtremesWhenExtraPadding,
    changePage,
    circular,
    contentContainerRef,
    currentPageRef,
    disabled,
    elements,
    extraPadding,
    numElementsPerPageRef,
    numPagesRef,
    viewerContainerRef,
  });

  // Manage key navigation
  useCarouselKeyNavigation({
    allowShiftRef,
    changePage,
    circular,
    currentPageRef,
    disabled,
    numPagesRef,
    rootContainerRef,
  });

  return {
    allowShiftRef,
    changePage,
    currentPageRef,
    numElementsPerPageRef,
    numPagesRef,
  };
};
