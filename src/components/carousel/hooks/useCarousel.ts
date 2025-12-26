 
 
import { useCallback, useEffect, useRef } from 'react';

import { ResizeObserver } from '@/lib/utils/resizeObserver/resizeObserver';

import type { IUseCarousel } from './types/useCarousel';
import { useCarouselKeyNavigation } from './useCarouselKeyNavigation';
import { useCarouselSwipe } from './useCarouselSwipe';
import calcUtils from './utils/calc.utils';
import CONSTANTS from './utils/constants';
import domUtils from './utils/dom.utils';

export const useCarousel: IUseCarousel = ({
  rootContainerRef,
  viewerContainerRef,
  contentContainerRef,
  circular = true,
  centerMode = false,
  extraPadding = 0,
  elements,
  numElementsPerPage: numElementsPerPageProp,
  numElementsToSlide,
  defaultPage = 0,
  onePageAlign = 'center',
  allowModifySliceWidth = false,
  centerExtremesWhenExtraPadding = false,
  autoFitContainer = false,
  disabled = false,
  onNumPagesChange,
  onNumElementsPerPageChange,
  onPageChange,
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
        numPages: numPagesRef.current,
        numElementsPerPage: numElementsPerPageRef.current,
        elementsLength: elements.length,
        extraPadding,
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
          elementsLength: elements.length,
          numElementsPerPage: numElementsPerPageRef.current,
          numElementsToSlide,
          currentPage: currentPageRef.current,
          isCircular: circular,
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
    ({ newPage, animated = true }: { newPage: number; animated?: boolean }) => {
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
          elementsLength: elements.length,
          numElementsPerPage: numElementsPerPageRef.current,
          numElementsToSlide,
          currentPage: currentPageRef.current,
          isCircular: circular,
        });

      // When isnt allow to modify the slice width, carousel contiainer width must be calculated
      if (!allowModifySliceWidth) {
        domUtils.updateViewerWidth({
          viewerContainer,
          contentContainer,
          firstIndexInView,
          lastIndexInView,
          extraPadding,
        });
      }

      // Calc new left translation
      const prevLeftStyle = contentContainer.style.left;
      const newLeftStyle = calcUtils.calcContentContainerLeftPosition({
        contentContainer,
        numPages: numPagesRef.current,
        currentPage: currentPageRef.current,
        firstIndexInView,
        extraPadding,
        centerExtremesWhenExtraPadding,
        circular,
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
        viewerContainer,
        contentContainer,
        centerMode,
        numElementsPerPage: numElementsPerPageRef.current,
        extraPadding,
      });
    }

    // Handles the cloning and removal of carousel items to enable the infinite/circular carousel effect.
    domUtils.manageCircularClones({
      contentContainer,
      elementsLength: elements.length,
      numElementsPerPage: numElementsPerPageRef.current,
      circular,
    });

    // Set the page in the right position without animation
    changePage({ newPage: currentPageRef.current, animated: false });
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
        rootContainer,
        viewerContainer,
        contentContainer,
        elementsLength: elements.length,
        extraPadding,
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
        rootContainer,
        contentContainer,
        onePageAlign,
        allowModifySliceWidth,
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
    viewerContainerRef,
    contentContainerRef,
    allowShiftRef,
    circular,
    extraPadding,
    elements,
    numElementsPerPageRef,
    numPagesRef,
    currentPageRef,
    centerExtremesWhenExtraPadding,
    disabled,
    changePage,
  });

  // Manage key navigation
  useCarouselKeyNavigation({
    rootContainerRef,
    allowShiftRef,
    circular,
    currentPageRef,
    numPagesRef,
    disabled,
    changePage,
  });

  return {
    changePage,
    allowShiftRef,
    currentPageRef,
    numElementsPerPageRef,
    numPagesRef,
  };
};
